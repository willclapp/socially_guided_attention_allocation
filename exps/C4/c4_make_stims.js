let n_study = 32
let n_test = n_study*2

// Select:
//    SpecTalk1 SpecStim1
//    GenTalk1 GenStim1
//    SpecTalk2 GenStim2
//    GenTalk2 SpecStim2

let spec_index = shuffle_array([0,1,2,3])
generic_talkers = shuffle_array(generic_talkers)
let SpecTalk1 = aligned_topics[spec_index[0]][1]
let SpecStim1 = aligned_topics[spec_index[0]][0]
let SpecTrials1 = aligned_trial_list[spec_index[0]]
let SpecTalk2 = aligned_topics[spec_index[1]][1]
let SpecStim2 = aligned_topics[spec_index[2]][0]
let SpecTrials2 = aligned_trial_list[spec_index[2]]
let GenTalk1 = generic_talkers[0]
let GenTalk2 = generic_talkers[1]

talker_list = [SpecTalk1, SpecTalk2, GenTalk1, GenTalk2]

// Create talker order for study and test
// Talker_order_test applies only to sentences that
// were NOT in the study block
let talker_order_study = []
let talker_order_test = []
for (let i=0; i<(n_study/talker_list.length); i++) {
    let temp_talkers = shuffle_array(talker_list)
    talker_order_study = talker_order_study.concat(temp_talkers)
    temp_talkers = shuffle_array(talker_list)
    talker_order_test = talker_order_test.concat(temp_talkers)
}

// create sentence order for study and test
let sentences = []
for (const [key, value] of Object.entries(trials)) {
    sentences.push(key)
}
let aligned_sentences_1 = []
for (const [key, value] of Object.entries(SpecTrials1)) {
    aligned_sentences_1.push(key)
}
let aligned_sentences_2 = []
for (const [key, value] of Object.entries(SpecTrials2)) {
    aligned_sentences_2.push(key)
}

sentences = shuffle_array(sentences)
let sentence_order_study = sentences.slice(0,n_study-(aligned_sentences_1.length*2))
aligned_sentences_1 = shuffle_array(aligned_sentences_1)
aligned_sentences_2 = shuffle_array(aligned_sentences_2)

// Add in aligned sentences in positions corresponding to the SpecTalk1 and GenTalk2
for (let i = 0; i < talker_order_study.length; i++) {
    if (talker_order_study[i] == SpecTalk1) {
        sentence_order_study.splice(i, 0, aligned_sentences_1.pop())
    } else if (talker_order_study[i] == GenTalk2) {
        sentence_order_study.splice(i, 0, aligned_sentences_2.pop())
    }
}

let sentence_order_test = sentences.slice(n_study, n_test)
sentence_order_test = shuffle_array(sentence_order_test.concat(sentence_order_study))

// create a repVoice order for each talker
let repVoice_order = []
let reps = ["SAME", "DIFF"]
for (let i=0; i<talker_list.length; i++) {
    let talker_reps = []
    for (let j=0; j<(n_study/talker_list.length/reps.length); j++) {
        talker_reps = talker_reps.concat(shuffle_array(reps))
    }
    repVoice_order.push(talker_reps)
}

// create order of talkers for DIFF trials
let diff_order = [ ]
for (let i=0; i<n_study/talker_list.length; i++) {
    diff_order = diff_order.concat(shuffle_array(talker_list))
}

// Generate study block
let study_trials =  []
for (let i=0; i<n_study; i++) {
    let curr_trial = {}
    let trial_info = null
    let talker = talker_order_study[i]
    let code = sentence_order_study[i]
    if (code.includes("BEL")) {
        trial_info = trials[code]
    } else if (talker==SpecTalk1) {
        trial_info = SpecTrials1[code]
    } else if (talker==GenTalk2) {
        trial_info = SpecTrials2[code]
    }
    curr_trial.number = attention_condition == "DA" ? Math.floor(Math.random()*100) : "NA"
    curr_trial.talker = talker
    curr_trial.code = code
    curr_trial.sentence = trial_info.sentence
    curr_trial.order = i + 1
    curr_trial.audio_path = `../audio/${talker}/${code}_${talker}.wav`
    curr_trial.set = code.substring(0,3)
    study_trials.push(curr_trial)
    preload_audio.push(curr_trial.audio_path)
}

// Generate test block
let test_trials = []
for (let i=0; i<n_test; i++) {
    let curr_trial = {}
    let code = sentence_order_test[i]
    let trial_info = null
    if (code.includes("BEL")) {
        trial_info = trials[code]
    } else if (code.includes(SpecStim1)) {
        trial_info = SpecTrials1[code]
    } else if (code.includes(SpecStim2)) {
        trial_info = SpecTrials2[code]
    }
    let first_talker = "NONE"
    let talker = ""
    let repeated = "false"
    let repVoice = ""
    // if it was in the study block
    if (sentence_order_study.includes(code)) {
        let sent_index = sentence_order_study.indexOf(code)
        first_talker = talker_order_study[sent_index]
        repeated = "true"
        repVoice = repVoice_order[talker_list.indexOf(first_talker)].pop()
        if (repVoice === "SAME") {
            talker = first_talker
        } else {
            let i = 0
            while (talker == "") {
                if (diff_order[i] != first_talker) {
                    talker = diff_order[i]
                    diff_order.splice(i, 1)
                } else {
                    i++
                }
            }
        }
    } else {
        talker = talker_order_test.pop()
        repVoice = "NONE"
    }
    curr_trial.talker = talker
    curr_trial.first_talker = first_talker
    curr_trial.repVoice = repVoice
    curr_trial.code = code
    curr_trial.sentence = trial_info.sentence
    curr_trial.order = i + 1
    curr_trial.repeated = repeated
    curr_trial.audio_path = `../audio/${talker}/${code}_${talker}.wav`
    curr_trial.set = code.substring(0,3)
    test_trials.push(curr_trial)
    preload_audio.push(curr_trial.audio_path)
}