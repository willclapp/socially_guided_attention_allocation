let n_study = 32
let n_test = n_study*2

// 
// GENERATE STUDY BLOCK
// 
let study_trials = []
let test_trials = []

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

sentences = shuffle_array(sentences)
let sentence_order_study = sentences.slice(0,n_study)
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
for (let i=0; i<n_study; i++) {
    let curr_trial = {}
    let trial_info = trials[sentence_order_study[i]]
    let talker = talker_order_study[i]
    let code = trial_info.code
    curr_trial.number = attention_condition == "DA" ? Math.floor(Math.random()*100) : "NA"
    curr_trial.talker = talker
    curr_trial.code = code
    curr_trial.sentence = trial_info.sentence
    curr_trial.recording = trial_info[talker]
    curr_trial.order = i + 1
    curr_trial.audio_path = `../audio/${talker}/${code}_${talker}.wav`
    study_trials.push(curr_trial)
    preload_audio.push(curr_trial.audio_path)
}

// Generate test block
for (let i=0; i<n_test; i++) {
    let curr_trial = {}
    let code = sentence_order_test[i]
    let trial_info = trials[code]
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
    curr_trial.recording = trial_info[talker]
    curr_trial.order = i + 1
    curr_trial.repeated = repeated
    curr_trial.audio_path = `../audio/${talker}/${code}_${talker}.wav`
    test_trials.push(curr_trial)
    preload_audio.push(curr_trial.audio_path)
}

