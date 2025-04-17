let timeline = [];

const jsPsych = initJsPsych({
  show_progress_bar: true,
  auto_update_progress_bar: false,
  on_finish: function(data) {
    proliferate.submit({"trials": data.values()});
  }
})

const preload = {
  type: jsPsychPreload,
  audio: preload_audio,
  images: preload_imgs
}

const enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: true,
  message: `
  <div class="instructions">This experiment requires use of your full screen.<br> To enter full screen mode and continue with the experiment, click below.</div>
  `
}

const irb = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `<div class="instructions"><font size="3">DESCRIPTION: We invite you to participate in a research study on language comprehension. In this experiment, you will complete a linguistic task where you will hear spoken sentences and make decisions about them.<br><br>RISKS AND BENEFITS: The risks associated with this study are minimal. Study data will be stored securely, in compliance with Stanford University standards, minimizing the risk of confidentiality breach. This judgment is based on a large body of experience with the same or similar procedures with people of similar ages, sex, origins, etc. We cannot and do not guarantee or promise that you will receive any benefits from this study. You will help us to understand how people recognize and perceive auditory stimuli.<br><br>TIME INVOLVEMENT: Your participation in this experiment is expected to take between 10 and 20 minutes and will not take longer than 45 minutes.<br><br>PAYMENTS: You will be paid for your participation at the posted rate, consisted with online payment standards.<br><br>SUBJECT'S RIGHTS: If you have read this form and have decided to participate in this project, please understand your participation is voluntary and you have the right to withdraw your consent or discontinue participation at any time without penalty or loss of benefits to which you are otherwise entitled. You have the right to refuse to answer particular questions. Your individual privacy will be maintained in all published and written data resulting from the study.<br><br>CONTACT INFORMATION: Questions, Concerns, or Complaints: If you have any questions, concerns or complaints about this research study, its procedures, risks and benefits, please contact William Clapp at wsclapp@stanford.edu.<br><br>Independent Contact: If you are not satisfied with how this study is being conducted, or if you have any concerns, complaints, or general questions about the research or your rights as a participant, please contact the Stanford Institutional Review Board (IRB) to speak to someone independent of the research team at (650)-723-2480 or toll free at 1-866-680-2906. You can also write to the Stanford IRB, Stanford University, Stanford, CA 94305-5401 or email irbnonmed@stanford.edu.<br><br>WAIVER OF DOCUMENTATION: If you agree to participate in this research, please continue to begin the study.</font></div>`,
  choices: ['Continue']
};

const audio_check = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `<div class="instructions">This experiment uses audio. Please make sure that your headphones are plugged in and that your volume is turned up. The audio below is similar to what you'll hear in the experiment, so you can play it as many times as you need while you adjust your volume to a comfortable level.<br><br><audio controls src="../audio/test.wav"></audio></div>`,
  choices: ['Continue']
}

timeline.push(preload, enter_fullscreen,irb,audio_check)

let d_response = even_key == "D" ? "Even" : "Odd"
let k_response = even_key == "K" ? "Even" : "Odd"
let prev_num = Math.floor(Math.random()*99) + 1
let number = 0
let choices = button_order == "OLD_NEW" ? ['Both Even', 'One Even, One Odd', "Both Odd"] : ['Both Odd', 'One Odd, One Even', "Both Even"]

const first_num = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div class="da-container">Listen carefully to the sentence.<br><br>Remember this number: <b><i style="font-size: larger;">${prev_num}</b></i>Press the spacebar to begin.<div class="da-option-container"><div class="da-even-odd-container"><p class="da-even-odd"><i>Both ${d_response}</i><br>Press D</p><p class="da-even-odd"><i>Both ${k_response}</i><br>Press K</p></div><div class="da-spacebar-container"><i>One ${d_response}; One ${k_response}</i><br>Press Spacebar</div></div></div>`
  },
  data: {
    number: function() {return prev_num}
  },
  choices: [" "]
}

if (attention_condition=="FA") {
  for (let i=0; i<study_instructions_FA.length; i++) {
    timeline.push(study_instructions_FA[i])
  }
} else {
  for (let i=0; i<study_instructions_DA.length; i++) {
    timeline.push(study_instructions_DA[i])
  }
  timeline.push(first_num)
}

const study_procedure = {
  timeline: [
      {
      type: jsPsychAudioKeyboardResponse,
          stimulus: jsPsych.timelineVariable('audio_path'),
          choices: function() {
            return attention_condition==="FA" ? [' '] : [' ', 'd', 'k']},
          response_allowed_while_playing: false,
          prompt: function() {
            if (attention_condition==="FA") {
              return `<div><p class="space"> Listen carefully to the sentence.<br><br>Press the space bar to continue.</p></div>`
            } else {
              return `<div class="da-container">Listen carefully to the sentence.<br><br>Remember this number: <b><i style="font-size: larger;">${jsPsych.timelineVariable('number')}</b></i><br><div class="da-option-container"><div class="da-even-odd-container"><p class="da-even-odd"><i>Both ${d_response}</i><br>Press D</p><p class="da-even-odd"><i>Both ${k_response}</i><br>Press K</p></div><div class="da-spacebar-container"><i>One ${d_response}; One ${k_response}</i><br>Press Spacebar</div></div></div>`
            }
          },
      data: {
          code: jsPsych.timelineVariable('code'),
          talker: jsPsych.timelineVariable('talker'),
          sentence: jsPsych.timelineVariable('sentence'),
          order: jsPsych.timelineVariable('order'),
          number: function() {
            return attention_condition==="FA" ? "NA" : jsPsych.timelineVariable('number')
          },
          prev_num: function() {
            return attention_condition==="FA" ? "NA" : prev_num
          },
          condition:  function() { return attention_condition },
          phase: 'study',
          button_order: function() { return button_order }
      },
      on_finish: function(){
          jsPsych.setProgressBar((jsPsych.timelineVariable('order')/n_study)*0.33);
          prev_num = jsPsych.timelineVariable('number')
      }
      },
      {
      type: jsPsychAudioKeyboardResponse,
      stimulus: '../audio/silence.wav',
      response_allowed_while_playing: false,
      prompt: `<div> </div>`,
      choices: [''],
      trial_duration: 1000
      }
  ],
  timeline_variables: study_trials
  }
  timeline.push(study_procedure)

// // // // // // // // // // // // 
// FILLER BLOCK
// // // // // // // // // // // 

timeline.push(filler_instructions_1, filler_instructions_2, filler_instructions_3, filler_instructions_4, filler_instructions_5, math_procedure)

// // // // // // // // // // // // // 
// TEST BLOCK
// // // // // // // // // // // // 

for (let i=0; i<test_instructions.length; i++) {
  timeline.push(test_instructions[i])
}

let d_ans = button_order == "OLD_NEW" ? "OLD" : "NEW"
let k_ans = button_order == "OLD_NEW" ? "NEW" : "OLD"
let inst = button_order == "OLD_NEW" ? "If you heard this sentence before, choose OLD. If this is your first time hearing it, choose NEW." : "If this is your first time hearing the sentence, choose NEW. If you heard it before, choose OLD. "

const test_preview = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `<div class="math-container-iti-test">
              <p>${inst}</p>
              <div class="option-container-test">
              <p class="option-iti">Press D<br><b>${d_ans}</b></p>
              <p class="option-iti">Press K<br><b>${k_ans}</b></p>
              </div></div>`,
  response_allowed_while_playing: false,
  choices: [''],
  trial_duration: 3000
}

timeline.push(test_preview)

const test_procedure = {
  timeline: [
    {
      type: jsPsychAudioKeyboardResponse,
      trial_ends_after_audio: true,
      stimulus: jsPsych.timelineVariable('audio_path'),
      response_allowed_while_playing: false,
      prompt: `<div class="math-container">
                <p>${inst}</p>
                <div class="option-container-test">
                  <p class="option">Press D<br><b>${d_ans}</b></p>
                  <p class="option">Press K<br><b>${k_ans}</b></p>
                </div></div>`,
      choices: [''],
      data: {
        code: jsPsych.timelineVariable('code'),
        talker: jsPsych.timelineVariable('talker'),
        first_talker: jsPsych.timelineVariable('first_talker'),
        degradation: "none",
        sentence: jsPsych.timelineVariable('sentence'),
        order: jsPsych.timelineVariable('order'),
        repeated: jsPsych.timelineVariable('repeated'),
        repVoice: jsPsych.timelineVariable('repVoice'),
        condition: attention_condition,
        button_order: button_order,
        phase: "test"
      }
    },
    {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `<div class="math-container">
                  <p>${inst}</p>
                  <div class="option-container-test">
                    <p class="option">Press D<br><b>${d_ans}</b></p>
                    <p class="option">Press K<br><b>${k_ans}</b></p>
                  </div>
                </div>`,
      response_allowed_while_playing: true,
      choices: ['d', 'k'],
      data: {
        code: jsPsych.timelineVariable('code'),
        talker: jsPsych.timelineVariable('talker'),
        first_talker: jsPsych.timelineVariable('first_talker'),
        degradation: "none",
        sentence: jsPsych.timelineVariable('sentence'),
        order: jsPsych.timelineVariable('order'),
        repeated: jsPsych.timelineVariable('repeated'),
        repVoice: jsPsych.timelineVariable('repVoice'),
        condition: attention_condition,
        button_order: button_order,
        phase: "test"
      },
      trial_duration: 4000,
      on_finish: function(){
        jsPsych.setProgressBar(0.5 + (jsPsych.timelineVariable('order')/n_test)*0.5);
      }
    },
    {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `<div class="math-container-iti-test">
                  <p>${inst}</p>
                  <div class="option-container-test">
                  <p class="option-iti">Press D<br><b>${d_ans}</b></p>
                  <p class="option-iti">Press K<br><b>${k_ans}</b></p>
                  </div></div>`,
      response_allowed_while_playing: false,
      choices: [''],
      trial_duration: 1000
    }
  ],
  timeline_variables: test_trials
}
timeline.push(test_procedure)


// // // // // // // // // // // // 
// End of experiment
// // // // // // // // // // // 

const quest_instructions = {
  type: jsPsychHtmlButtonResponse,
  choices: ['Continue'],
  stimulus: `<p class="instructions"> That's the end of the experiment! Thank you for your responses. To help us analyze our results, it would be helpful to know know a little more about you. Please answer the following questions.</p>`
}

const thanks = {
  type: jsPsychHtmlButtonResponse,
  choices: ['Continue'],
  stimulus: "Thank you for your time! Please click 'Continue' and then wait a moment until you're directed back to Prolific.<br><br>"
}

timeline.push(quest_instructions, questionnaire, thanks);

jsPsych.data.addProperties({
  attention_condition: attention_condition, 
});

jsPsych.run(timeline);


