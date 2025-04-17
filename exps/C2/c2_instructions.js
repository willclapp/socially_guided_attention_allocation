// // // // // // // // // // // // // // // // // // // // // // // // // // //

// STUDY FA

let study_instructions_1_FA = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
      <div><p class="instructions">We're now ready to begin the experiment. There will be three parts.<br><br><span style="color: white;">In the first part, you will listen to a series of sentences. After each sentence plays, press the spacebar to continue.<br><br>Listen closely to the sentences, and try visualize them as you hear them.<br><br>You will hear about 32 sentences. </span><br><br> Click to continue.</p><div>
    `,
  choices: ['Continue']
  };
  
let study_instructions_2_FA = {
type: jsPsychHtmlButtonResponse,
stimulus: `
    <div><p class="instructions">We're now ready to begin the experiment. There will be three parts.<br><br>In the first part, you will listen to a series of sentences. After each sentence plays, press the spacebar to continue.<br><br><span style="color: white;">Listen closely to the sentences, and try visualize them as you hear them.<br><br>You will hear about 32 sentences. </span><br><br> Click to continue.</p><div>
`,
choices: ['Continue']
};

let study_instructions_3_FA = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
      <div><p class="instructions">We're now ready to begin the experiment. There will be three parts.<br><br>In the first part, you will listen to a series of sentences. After each sentence plays, press the spacebar to continue.<br><br>Listen closely to the sentences, and try visualize them as you hear them.<span style="color: white;"><br><br>You will hear about 32 sentences. </span><br><br> Click to continue.</p><div>
  `,
  choices: ['Continue']
};

let study_instructions_4_FA = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
      <div><p class="instructions">We're now ready to begin the experiment. There will be three parts.<br><br>In the first part, you will listen to a series of sentences. After each sentence plays, press the spacebar to continue. <br><br>Listen closely to the sentences, and try visualize them as you hear them. <br><br>You will hear about 32 sentences.<br><br> Click to continue.</p><div>
  `,
  choices: ['Continue']
};

let study_instructions_5_FA = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
      <div><p class="instructions">We're now ready to begin the experiment. There will be three parts.<br><br>In the first part, you will listen to a series of sentences. After each sentence plays, press the spacebar to continue.<br><br>Listen closely to the sentences, and try visualize them as you hear them.<br><br>You will hear about 32 sentences. <br><br> When you're ready to begin, click below.</p><div>
  `,
  choices: ['Click to begin'],
  post_trial_gap: 1000
};

let study_instructions_FA = [study_instructions_1_FA, study_instructions_2_FA, study_instructions_3_FA, study_instructions_4_FA, study_instructions_5_FA]


// // // // // // // // // // // // // // // // // // // // // // // // // // // // 

// STUDY DA

let even_key = button_order == "OLD_NEW" ? "D" : "K"
let odd_key = button_order == "OLD_NEW" ? "K" : "D"

let study_instructions_1_DA = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `
      <div><p class="instructions">We're now ready to begin the experiment. There will be three parts.<br><br><span style="color: white">In the first part, you will listen to a series of sentences.<br><br>Listen closely to the sentences, and try visualize them as you hear them. <br><br>In addition to listening to the sentences though, you'll have a second job.<br><br>During each sentence, you will see a number on the screen. Your job is to remember this number until the next sentence.<br><br>If the number on the previous page and the number on the current page are <i>both odd</i>, press the '${odd_key}' key on your keyboard.<br><br>If the number on the previous page and the number on the current page are <i>both even</i>, press the '${even_key}' key on your keyboard.<br><br>If one is odd and the other is even, press the spacebar.<br><br>For example if you saw 21 on one page and then 7 on the next page, you would press '${odd_key}' because both are odd.<br><br>If you saw 22 on one page and then 8 on the next, you would press '${even_key}' because both are even.<br><br>If you saw 21 on one page and 8 on the next, you would press the spacebar, because one is odd, and the other is even.<br><br>You will only be able to make a response <i>after</i> the audio has played.</span><br><br> Click to continue.</p><div>
    `,
    choices: ['Continue']
  };
  
let study_instructions_2_DA = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div><p class="instructions">We're now ready to begin the experiment. There will be three parts.<br><br>In the first part, you will listen to a series of sentences.<span style="color: white"><br><br>Listen closely to the sentences, and try visualize them as you hear them. <br><br>In addition to listening to the sentences though, you'll have a second job.<br><br>During each sentence, you will see a number on the screen. Your job is to remember this number until the next sentence.<br><br>If the number on the previous page and the number on the current page are <i>both odd</i>, press the '${odd_key}' key on your keyboard.<br><br>If the number on the previous page and the number on the current page are <i>both even</i>, press the '${even_key}' key on your keyboard.<br><br>If one is odd and the other is even, press the spacebar.<br><br>For example if you saw 21 on one page and then 7 on the next page, you would press '${odd_key}' because both are odd.<br><br>If you saw 22 on one page and then 8 on the next, you would press '${even_key}' because both are even.<br><br>If you saw 21 on one page and 8 on the next, you would press the spacebar, because one is odd, and the other is even.<br><br>You will only be able to make a response <i>after</i> the audio has played.</span><br><br> Click to continue.</p><div>
  `,
  choices: ['Continue']
};

let study_instructions_3_DA = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div><p class="instructions">We're now ready to begin the experiment. There will be three parts.<br><br>In the first part, you will listen to a series of sentences.<br><br>Listen closely to the sentences, and try visualize them as you hear them. <span style="color: white"><br><br>In addition to listening to the sentences though, you'll have a second job.<br><br>During each sentence, you will see a number on the screen. Your job is to remember this number until the next sentence.<br><br>If the number on the previous page and the number on the current page are <i>both odd</i>, press the '${odd_key}' key on your keyboard.<br><br>If the number on the previous page and the number on the current page are <i>both even</i>, press the '${even_key}' key on your keyboard.<br><br>If one is odd and the other is even, press the spacebar.<br><br>For example if you saw 21 on one page and then 7 on the next page, you would press '${odd_key}' because both are odd.<br><br>If you saw 22 on one page and then 8 on the next, you would press '${even_key}' because both are even.<br><br>If you saw 21 on one page and 8 on the next, you would press the spacebar, because one is odd, and the other is even.<br><br>You will only be able to make a response <i>after</i> the audio has played.</span><br><br> Click to continue.</p><div>
  `,
  choices: ['Continue']
};

let study_instructions_4_DA = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div><p class="instructions">We're now ready to begin the experiment. There will be three parts.<br><br>In the first part, you will listen to a series of sentences.<br><br>Listen closely to the sentences, and try visualize them as you hear them. <br><br>In addition to listening to the sentences though, you'll have a second job.<span style="color: white"><br><br>During each sentence, you will see a number on the screen. Your job is to remember this number until the next sentence.<br><br>If the number on the previous page and the number on the current page are <i>both odd</i>, press the '${odd_key}' key on your keyboard.<br><br>If the number on the previous page and the number on the current page are <i>both even</i>, press the '${even_key}' key on your keyboard.<br><br>If one is odd and the other is even, press the spacebar.<br><br>For example if you saw 21 on one page and then 7 on the next page, you would press '${odd_key}' because both are odd.<br><br>If you saw 22 on one page and then 8 on the next, you would press '${even_key}' because both are even.<br><br>If you saw 21 on one page and 8 on the next, you would press the spacebar, because one is odd, and the other is even.<br><br>You will only be able to make a response <i>after</i> the audio has played.</span><br><br> Click to continue.</p><div>
  `,
  choices: ['Continue']
};

let study_instructions_5_DA = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div><p class="instructions">We're now ready to begin the experiment. There will be three parts.<br><br>In the first part, you will listen to a series of sentences.<br><br>Listen closely to the sentences, and try visualize them as you hear them. <br><br>In addition to listening to the sentences though, you'll have a second job.<br><br>During each sentence, you will see a number on the screen. Your job is to remember this number until the next sentence.<br><br><span style="color: white">If the number on the previous page and the number on the current page are <i>both odd</i>, press the '${odd_key}' key on your keyboard.<br><br>If the number on the previous page and the number on the current page are <i>both even</i>, press the '${even_key}' key on your keyboard.<br><br>If one is odd and the other is even, press the spacebar.<br><br>For example if you saw 21 on one page and then 7 on the next page, you would press '${odd_key}' because both are odd.<br><br>If you saw 22 on one page and then 8 on the next, you would press '${even_key}' because both are even.<br><br>If you saw 21 on one page and 8 on the next, you would press the spacebar, because one is odd, and the other is even.<br><br>You will only be able to make a response <i>after</i> the audio has played.</span><br><br> Click to continue.</p><div>
  `,
  choices: ['Continue']
};

let study_instructions_6_DA = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div><p class="instructions">We're now ready to begin the experiment. There will be three parts.<br><br>In the first part, you will listen to a series of sentences.<br><br>Listen closely to the sentences, and try visualize them as you hear them. <br><br>In addition to listening to the sentences though, you'll have a second job.<br><br>During each sentence, you will see a number on the screen. Your job is to remember this number until the next sentence.<br><br>If the number on the previous page and the number on the current page are <i>both odd</i>, press the '${odd_key}' key on your keyboard.<span style="color: white"><br><br>If the number on the previous page and the number on the current page are <i>both even</i>, press the '${even_key}' key on your keyboard.<br><br>If one is odd and the other is even, press the spacebar.<br><br>For example if you saw 21 on one page and then 7 on the next page, you would press '${odd_key}' because both are odd.<br><br>If you saw 22 on one page and then 8 on the next, you would press '${even_key}' because both are even.<br><br>If you saw 21 on one page and 8 on the next, you would press the spacebar, because one is odd, and the other is even.<br><br>You will only be able to make a response <i>after</i> the audio has played.</span><br><br> Click to continue.</p><div>
  `,
  choices: ['Continue']
};

let study_instructions_7_DA = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div><p class="instructions">We're now ready to begin the experiment. There will be three parts.<br><br>In the first part, you will listen to a series of sentences.<br><br>Listen closely to the sentences, and try visualize them as you hear them. <br><br>In addition to listening to the sentences though, you'll have a second job.<br><br>During each sentence, you will see a number on the screen. Your job is to remember this number until the next sentence.<br><br>If the number on the previous page and the number on the current page are <i>both odd</i>, press the '${odd_key}' key on your keyboard.<br><br>If the number on the previous page and the number on the current page are <i>both even</i>, press the '${even_key}' key on your keyboard.<br><br><span style="color: white">If one is odd and the other is even, press the spacebar.<br><br>For example if you saw 21 on one page and then 7 on the next page, you would press '${odd_key}' because both are odd.<br><br>If you saw 22 on one page and then 8 on the next, you would press '${even_key}' because both are even.<br><br>If you saw 21 on one page and 8 on the next, you would press the spacebar, because one is odd, and the other is even.<br><br>You will only be able to make a response <i>after</i> the audio has played.</span><br><br> Click to continue.</p><div>
  `,
  choices: ['Continue']
};

let study_instructions_8_DA = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div><p class="instructions">We're now ready to begin the experiment. There will be three parts.<br><br>In the first part, you will listen to a series of sentences.<br><br>Listen closely to the sentences, and try visualize them as you hear them. <br><br>In addition to listening to the sentences though, you'll have a second job.<br><br>During each sentence, you will see a number on the screen. Your job is to remember this number until the next sentence.<br><br>If the number on the previous page and the number on the current page are <i>both odd</i>, press the '${odd_key}' key on your keyboard.<br><br>If the number on the previous page and the number on the current page are <i>both even</i>, press the '${even_key}' key on your keyboard.<br><br>If one is odd and the other is even, press the spacebar.<br><br><span style="color: white">For example if you saw 21 on one page and then 7 on the next page, you would press '${odd_key}' because both are odd.<br><br>If you saw 22 on one page and then 8 on the next, you would press '${even_key}' because both are even.<br><br>If you saw 21 on one page and 8 on the next, you would press the spacebar, because one is odd, and the other is even.<br><br>You will only be able to make a response <i>after</i> the audio has played.</span><br><br> Click to continue.</p><div>
  `,
  choices: ['Continue']
};

let study_instructions_9_DA = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div><p class="instructions">We're now ready to begin the experiment. There will be three parts.<br><br>In the first part, you will listen to a series of sentences.<br><br>Listen closely to the sentences, and try visualize them as you hear them. <br><br>In addition to listening to the sentences though, you'll have a second job.<br><br>During each sentence, you will see a number on the screen. Your job is to remember this number until the next sentence.<br><br>If the number on the previous page and the number on the current page are <i>both odd</i>, press the '${odd_key}' key on your keyboard.<br><br>If the number on the previous page and the number on the current page are <i>both even</i>, press the '${even_key}' key on your keyboard.<br><br>If one is odd and the other is even, press the spacebar.<br><br>For example if you saw 21 on one page and then 7 on the next page, you would press '${odd_key}' because both are odd.<span style="color: white"><br><br>If you saw 22 on one page and then 8 on the next, you would press '${even_key}' because both are even.<br><br>If you saw 21 on one page and 8 on the next, you would press the spacebar, because one is odd, and the other is even.<br><br>You will only be able to make a response <i>after</i> the audio has played.</span><br><br> Click to continue.</p><div>
  `,
  choices: ['Continue']
};

let study_instructions_10_DA = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div><p class="instructions">We're now ready to begin the experiment. There will be three parts.<br><br>In the first part, you will listen to a series of sentences.<br><br>Listen closely to the sentences, and try visualize them as you hear them. <br><br>In addition to listening to the sentences though, you'll have a second job.<br><br>During each sentence, you will see a number on the screen. Your job is to remember this number until the next sentence.<br><br>If the number on the previous page and the number on the current page are <i>both odd</i>, press the '${odd_key}' key on your keyboard.<br><br>If the number on the previous page and the number on the current page are <i>both even</i>, press the '${even_key}' key on your keyboard.<br><br>If one is odd and the other is even, press the spacebar.<br><br>For example if you saw 21 on one page and then 7 on the next page, you would press '${odd_key}' because both are odd.<br><br>If you saw 22 on one page and then 8 on the next, you would press '${even_key}' because both are even.<span style="color: white"><br><br>If you saw 21 on one page and 8 on the next, you would press the spacebar, because one is odd, and the other is even.<br><br>You will only be able to make a response <i>after</i> the audio has played.</span><br><br> Click to continue.</p><div>
  `,
  choices: ['Continue']
};

let study_instructions_11_DA = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div><p class="instructions">We're now ready to begin the experiment. There will be three parts.<br><br>In the first part, you will listen to a series of sentences.<br><br>Listen closely to the sentences, and try visualize them as you hear them. <br><br>In addition to listening to the sentences though, you'll have a second job.<br><br>During each sentence, you will see a number on the screen. Your job is to remember this number until the next sentence.<br><br>If the number on the previous page and the number on the current page are <i>both odd</i>, press the '${odd_key}' key on your keyboard.<br><br>If the number on the previous page and the number on the current page are <i>both even</i>, press the '${even_key}' key on your keyboard.<br><br>If one is odd and the other is even, press the spacebar.<br><br>For example if you saw 21 on one page and then 7 on the next page, you would press '${odd_key}' because both are odd.<br><br>If you saw 22 on one page and then 8 on the next, you would press '${even_key}' because both are even.<br><br>If you saw 21 on one page and 8 on the next, you would press the spacebar, because one is odd, and the other is even.<span style="color: white"><br><br>You will only be able to make a response <i>after</i> the audio has played.</span><br><br> Click to continue.</p><div>
  `,
  choices: ['Continue']
};

let study_instructions_12_DA = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div><p class="instructions">We're now ready to begin the experiment. There will be three parts.<br><br>In the first part, you will listen to a series of sentences.<br><br>Listen closely to the sentences, and try visualize them as you hear them. <br><br>In addition to listening to the sentences though, you'll have a second job.<br><br>During each sentence, you will see a number on the screen. Your job is to remember this number until the next sentence.<br><br>If the number on the previous page and the number on the current page are <i>both odd</i>, press the '${odd_key}' key on your keyboard.<br><br>If the number on the previous page and the number on the current page are <i>both even</i>, press the '${even_key}' key on your keyboard.<br><br>If one is odd and the other is even, press the spacebar.<br><br>For example if you saw 21 on one page and then 7 on the next page, you would press '${odd_key}' because both are odd.<br><br>If you saw 22 on one page and then 8 on the next, you would press '${even_key}' because both are even.<br><br>If you saw 21 on one page and 8 on the next, you would press the spacebar, because one is odd, and the other is even.<br><br>You will only be able to make a response <i>after</i> the audio has played.<br><br> Click to continue.</p><div>
  `,
  choices: ['Continue']
};

let study_instructions_13_DA = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div><p class="instructions">We're now ready to begin the experiment. There will be three parts.<br><br>In the first part, you will listen to a series of sentences.<br><br>Listen closely to the sentences, and try visualize them as you hear them. <br><br>In addition to listening to the sentences though, you'll have a second job.<br><br>During each sentence, you will see a number on the screen. Your job is to remember this number until the next sentence.<br><br>If the number on the previous page and the number on the current page are <i>both odd</i>, press the '${odd_key}' key on your keyboard.<br><br>If the number on the previous page and the number on the current page are <i>both even</i>, press the '${even_key}' key on your keyboard.<br><br>If one is odd and the other is even, press the spacebar.<br><br>For example if you saw 21 on one page and then 7 on the next page, you would press '${odd_key}' because both are odd.<br><br>If you saw 22 on one page and then 8 on the next, you would press '${even_key}' because both are even.<br><br>If you saw 21 on one page and 8 on the next, you would press the spacebar, because one is odd, and the other is even.<br><br>You will only be able to make a response <i>after</i> the audio has played.<br><br> Click below when you're ready to begin.</p><div>
  `,
  choices: ['Continue'],
  post_trial_gap: 1000
};

let study_instructions_DA = [study_instructions_1_DA, study_instructions_2_DA, study_instructions_3_DA, study_instructions_4_DA, study_instructions_5_DA, study_instructions_6_DA, study_instructions_7_DA, study_instructions_8_DA, study_instructions_9_DA, study_instructions_10_DA, study_instructions_11_DA, study_instructions_12_DA, study_instructions_13_DA]


// // // // // // // // // // // // // // // // // // // // // // // // // // //

let old_key = button_order == "OLD_NEW" ? "D" : "K"
let new_key = button_order == "OLD_NEW" ? "K" : "D"

// Test
let test_instructions_1 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">In the final part of this experiment, you'll hear sentences again.<br><br><span style="color: white">About half of the sentences are sentences you heard in the first part of this experiment, and half are new sentences that you didn't hear before. <br><br>If you hear a sentence you remember from the beginning of the experiment, press the '${old_key}' key to indicate that the sentence is OLD. <br><br>If you think that it's your first time hearing the sentence (i.e., that you did not hear it in the first part), press the '${new_key}' key to indicate that it's NEW.<br><br>You will hear about 64 sentences. <br><br>If you don't respond within 4 seconds, the trial will advance automatically. <br><br><b><i>Please respond as quickly and as accurately as possible.</i></b></span> <br><br>Press the spacebar to continue.<div>`
  },
  choices: [' ']
}

let test_instructions_2 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">In the final part of this experiment, you'll hear sentences again.<br><br>About half of the sentences are sentences you heard in the first part of this experiment, and half are new sentences that you didn't hear before. <br><br><span style="color: white">If you hear a sentence you remember from the beginning of the experiment, press the '${old_key}' key to indicate that the sentence is OLD. <br><br>If you think that it's your first time hearing the sentence (i.e., that you did not hear it in the first part), press the '${new_key}' key to indicate that it's NEW.<br><br>You will hear about 64 sentences. <br><br>If you don't respond within 4 seconds, the trial will advance automatically. <br><br><b><i>Please respond as quickly and as accurately as possible.</i></b></span> <br><br>Press the spacebar to continue.<div>`
  },
  choices: [' ']
}

let test_instructions_3 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">In the final part of this experiment, you'll hear sentences again.<br><br>About half of the sentences are sentences you heard in the first part of this experiment, and half are new sentences that you didn't hear before. <br><br>If you hear a sentence you remember from the beginning of the experiment, press the '${old_key}' key to indicate that the sentence is OLD. <br><br><span style="color: white">If you think that it's your first time hearing the sentence (i.e., that you did not hear it in the first part), press the '${new_key}' key to indicate that it's NEW.<br><br>You will hear about 64 sentences. <br><br>If you don't respond within 4 seconds, the trial will advance automatically. <br><br><b><i>Please respond as quickly and as accurately as possible.</i></b></span> <br><br>Press the spacebar to continue.<div>`
  },
  choices: [' ']
}

let test_instructions_4 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">In the final part of this experiment, you'll hear sentences again.<br><br>About half of the sentences are sentences you heard in the first part of this experiment, and half are new sentences that you didn't hear before. <br><br>If you hear a sentence you remember from the beginning of the experiment, press the '${old_key}' key to indicate that the sentence is OLD. <br><br>If you think that it's your first time hearing the sentence (i.e., that you did not hear it in the first part), press the '${new_key}' key to indicate that it's NEW.<span style="color: white"><br><br>You will hear about 64 sentences. <br><br>If you don't respond within 4 seconds, the trial will advance automatically. <br><br><b><i>Please respond as quickly and as accurately as possible.</i></b></span> <br><br>Press the spacebar to continue.<div>`
  },
  choices: [' ']
}

let test_instructions_5 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">In the final part of this experiment, you'll hear sentences again.<br><br>About half of the sentences are sentences you heard in the first part of this experiment, and half are new sentences that you didn't hear before. <br><br>If you hear a sentence you remember from the beginning of the experiment, press the '${old_key}' key to indicate that the sentence is OLD. <br><br>If you think that it's your first time hearing the sentence (i.e., that you did not hear it in the first part), press the '${new_key}' key to indicate that it's NEW.<br><br>You will hear about 64 sentences. <span style="color: white"><br><br>If you don't respond within 4 seconds, the trial will advance automatically. <br><br><b><i>Please respond as quickly and as accurately as possible.</i></b></span> <br><br>Press the spacebar to continue.<div>`
  },
  choices: [' ']
}

let test_instructions_6 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">In the final part of this experiment, you'll hear sentences again.<br><br>About half of the sentences are sentences you heard in the first part of this experiment, and half are new sentences that you didn't hear before. <br><br>If you hear a sentence you remember from the beginning of the experiment, press the '${old_key}' key to indicate that the sentence is OLD. <br><br>If you think that it's your first time hearing the sentence (i.e., that you did not hear it in the first part), press the '${new_key}' key to indicate that it's NEW.<br><br>You will hear about 64 sentences. <br><br>If you don't respond within 4 seconds, the trial will advance automatically. <span style="color: white"><br><br><b><i>Please respond as quickly and as accurately as possible.</i></b></span> <br><br>Press the spacebar to continue.<div>`
  },
  choices: [' ']
}

let test_instructions_7 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">In the final part of this experiment, you'll hear sentences again.<br><br>About half of the sentences are sentences you heard in the first part of this experiment, and half are new sentences that you didn't hear before. <br><br>If you hear a sentence you remember from the beginning of the experiment, press the '${old_key}' key to indicate that the sentence is OLD. <br><br>If you think that it's your first time hearing the sentence (i.e., that you did not hear it in the first part), press the '${new_key}' key to indicate that it's NEW.<br><br>You will hear about 64 sentences. <br><br>If you don't respond within 4 seconds, the trial will advance automatically. <br><br><b><i>Please respond as quickly and as accurately as possible.</i></b><br><br>Press the spacebar to continue.<div>`
  },
  choices: [' ']
}

let test_instructions_8 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function() {
    return `<div><p class="instructions">In the final part of this experiment, you'll hear sentences again.<br><br>About half of the sentences are sentences you heard in the first part of this experiment, and half are new sentences that you didn't hear before. <br><br>If you hear a sentence you remember from the beginning of the experiment, press the '${old_key}' key to indicate that the sentence is OLD. <br><br>If you think that it's your first time hearing the sentence (i.e., that you did not hear it in the first part), press the '${new_key}' key to indicate that it's NEW.<br><br>You will hear about 64 sentences. <br><br>If you don't respond within 4 seconds, the trial will advance automatically. <br><br><b><i>Please respond as quickly and as accurately as possible.</i></b> <br><br>When you're ready to begin the experiment, press the spacebar.<div>`
  },
  choices: [' ']
}

let test_instructions = [test_instructions_1, test_instructions_2, test_instructions_3, test_instructions_4, test_instructions_5, test_instructions_6, test_instructions_7, test_instructions_8]
