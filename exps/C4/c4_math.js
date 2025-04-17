let start_time = 0
let n_eqs = 10
let duration = 30 * 1000

let eqs = []
for (let i = 0; i < n_eqs; i++) {
    let m_1 = Math.ceil(Math.random()*10)
    let m_2 = Math.ceil(Math.random()*10)
    let a = Math.ceil(Math.random()*10)
    let sign = Math.floor(Math.random()*2) ? "+" : "&#x2012"
    let answer = sign == "+" ? (m_1*m_2) + a : (m_1*m_2) - a
    let correct = Math.floor(Math.random()*2)
    let real_answer = answer;
    if (!correct) {
        let dir = Math.floor(Math.random()*2) ? 1 : -1
        answer += dir
    }
    let eq = `(${m_1} x ${m_2}) ${sign} ${a} = ${answer}`
    let correct_eq = `(${m_1} x ${m_2}) ${sign} ${a} = ${real_answer}`
    let eq_item = {
        eq: eq,
        correct_eq: correct_eq,
        correct: correct
    }
    eqs.push(eq_item)
}

let filler_instructions_1 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function () {
    if (button_order == "OLD_NEW") {
      return `
        <div><p class="instructions">That's the end of the first part of the experiment! Thank you for your responses.<br><br><span style="color: white;">In the second part of the experiment, you'll see math equations and decide whether or not they're correct. If an equation is correct, press the 'D' key on your keyboard. If it's incorrect, press the 'K' key. <br><br>For example, you may see the equation:<br><br>(8 x 2) + 3 = 19<br><br>This equation is correct, so you'd press 'D'. <br><br>You might also see the equation: <br><br>(8 x 2) + 3 = 20<br><br>This equation is incorrect, so you'd press 'K'.</span><br><br>Press the space bar to continue.</p><div>
      `
    } else {
      return `
        <div><p class="instructions">That's the end of the first part of the experiment! Thank you for your responses.<br><br><span style="color: white;">In the second part of the experiment, you'll see math equations and decide whether or not they're correct. If an equation is incorrect, press the 'D' key on your keyboard. If it's correct, press the 'K' key. <br><br>For example, you may see the equation:<br><br>(8 x 2) + 3 = 20<br><br>This equation is incorrect, so you'd press 'D'. <br><br>You might also see the equation: <br><br>(8 x 2) + 3 = 19<br><br>This equation is correct, so you'd press 'K'.</span><br><br>Press the space bar to continue.</p><div>
      `
    }
  },
  choices: [' ']
}

let filler_instructions_2 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function () {
    if (button_order == "OLD_NEW") {
      return `
        <div><p class="instructions">That's the end of the first part of the experiment! Thank you for your responses.<br><br>In the second part of the experiment, you'll see math equations and decide whether or not they're correct. If an equation is correct, press the 'D' key on your keyboard. If it's incorrect, press the 'K' key.<span style="color: white;"> <br><br>For example, you may see the equation:<br><br>(8 x 2) + 3 = 19<br><br>This equation is correct, so you'd press 'D'. <br><br>You might also see the equation: <br><br>(8 x 2) + 3 = 20<br><br>This equation is incorrect, so you'd press 'K'.</span><br><br>Press the space bar to continue.</p><div>
      `
    } else {
      return `
        <div><p class="instructions">That's the end of the first part of the experiment! Thank you for your responses.<br><br>In the second part of the experiment, you'll see math equations and decide whether or not they're correct. If an equation is incorrect, press the 'D' key on your keyboard. If it's correct, press the 'K' key. <span style="color: white;"><br><br>For example, you may see the equation:<br><br>(8 x 2) + 3 = 20<br><br>This equation is incorrect, so you'd press 'D'. <br><br>You might also see the equation: <br><br>(8 x 2) + 3 = 19<br><br>This equation is correct, so you'd press 'K'.</span><br><br>Press the space bar to continue.</p><div>
      `
    }
  },
  choices: [' ']
}

let filler_instructions_3 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function () {
    if (button_order == "OLD_NEW") {
      return `
        <div><p class="instructions">That's the end of the first part of the experiment! Thank you for your responses.<br><br>In the second part of the experiment, you'll see math equations and decide whether or not they're correct. If an equation is correct, press the 'D' key on your keyboard. If it's incorrect, press the 'K' key. <br><br>For example, you may see the equation:<br><br>(8 x 2) + 3 = 19<br><br>This equation is correct, so you'd press 'D'. <span style="color: white;"><br><br>You might also see the equation: <br><br>(8 x 2) + 3 = 20<br><br>This equation is incorrect, so you'd press 'K'.</span><br><br>Press the space bar to continue.</p><div>
      `
    } else {
      return `
        <div><p class="instructions">That's the end of the first part of the experiment! Thank you for your responses.<br><br>In the second part of the experiment, you'll see math equations and decide whether or not they're correct. If an equation is incorrect, press the 'D' key on your keyboard. If it's correct, press the 'K' key. <br><br>For example, you may see the equation:<br><br>(8 x 2) + 3 = 20<br><br>This equation is incorrect, so you'd press 'D'. <span style="color: white;"><br><br>You might also see the equation: <br><br>(8 x 2) + 3 = 19<br><br>This equation is correct, so you'd press 'K'.</span><br><br>Press the space bar to continue.</p><div>
      `
    }
  },
  choices: [' ']
}

let filler_instructions_4 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function () {
    if (button_order == "OLD_NEW") {
      return `
        <div><p class="instructions">That's the end of the first part of the experiment! Thank you for your responses.<br><br>In the second part of the experiment, you'll see math equations and decide whether or not they're correct. If an equation is correct, press the 'D' key on your keyboard. If it's incorrect, press the 'K' key. <br><br>For example, you may see the equation:<br><br>(8 x 2) + 3 = 19<br><br>This equation is correct, so you'd press 'D'.<br><br>You might also see the equation: <br><br>(8 x 2) + 3 = 20<br><br>This equation is incorrect, so you'd press 'K'.<br><br>Press the space bar to continue.</p><div>
      `
    } else {
      return `
        <div><p class="instructions">That's the end of the first part of the experiment! Thank you for your responses.<br><br>In the second part of the experiment, you'll see math equations and decide whether or not they're correct. If an equation is incorrect, press the 'D' key on your keyboard. If it's correct, press the 'K' key. <br><br>For example, you may see the equation:<br><br>(8 x 2) + 3 = 20<br><br>This equation is incorrect, so you'd press 'D'.<br><br>You might also see the equation: <br><br>(8 x 2) + 3 = 19<br><br>This equation is correct, so you'd press 'K'.<br><br>Press the space bar to continue.</p><div>
      `
    }
  },
  choices: [' ']
}

let filler_instructions_5 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function () {
    if (button_order == "OLD_NEW") {
      return `
        <div><p class="instructions">That's the end of the first part of the experiment! Thank you for your responses.<br><br>In the second part of the experiment, you'll see math equations and decide whether or not they're correct. If an equation is correct, press the 'D' key on your keyboard. If it's incorrect, press the 'K' key. <br><br>For example, you may see the equation:<br><br>(8 x 2) + 3 = 19<br><br>This equation is correct, so you'd press 'D'. <br><br>You might also see the equation: <br><br>(8 x 2) + 3 = 20<br><br>This equation is incorrect, so you'd press 'K'. <br><br>When you're ready to begin, press the space bar.</p><div>
      `
    } else {
      return `
        <div><p class="instructions">That's the end of the first part of the experiment! Thank you for your responses.<br><br>In the second part of the experiment, you'll see math equations and decide whether or not they're correct. If an equation is incorrect, press the 'D' key on your keyboard. If it's correct, press the 'K' key. <br><br>For example, you may see the equation:<br><br>(8 x 2) + 3 = 20<br><br>This equation is incorrect, so you'd press 'D'. <br><br>You might also see the equation: <br><br>(8 x 2) + 3 = 19<br><br>This equation is correct, so you'd press 'K'. <br><br>When you're ready to begin, press the space bar.</p><div>
      `
    }
  },
  choices: [' '],
  post_trial_gap: 1000,
  on_finish: function() {
    let now = new Date()
    start_time = now.getTime()
    console.log(start_time)
  }
};

let d_ans_math = button_order == "OLD_NEW" ? "Yes" : "No"
let k_ans_math = button_order == "OLD_NEW" ? "No" : "Yes"
let encouraging_messages = ["Great job!", "That's right!", "Good work!", "Nice work!", "Great!", "Correct!"]
let prev_correct = true
let curr_time = 0
let over_time = false


const math_procedure = {
  timeline: [
    {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: function() {
        if (over_time) {
          return ''
        } else {
          return `<div class="math-container"><p>Is this correct?</p><p class="math">${jsPsych.timelineVariable('eq')}</p><div class="option-container"><p class="option">Press D<br>${d_ans_math}</p><p class="option">Press K<br>${k_ans_math}</p></div></div>`
        }
      },
      choices: ['d','k'],
      response_ends_trial: true,
      trial_duration: function() {
        return over_time ? 0 : duration
      },
      on_finish: function(data) {
        prev_correct = math_eval(button_order, data.response, jsPsych.timelineVariable('correct'))
        let now = new Date()
        let progbar = 0.33 + ((now.getTime()-start_time)/duration) * 0.17
        data.correct_response = prev_correct
        jsPsych.setProgressBar(progbar > 0.67 ? 0.67 : progbar);
      },
      data: {
        completed: function() {return over_time ? false : true},
        phase: "filler",
        button_order: button_order,
        eq_correct: function() {return jsPsych.timelineVariable('correct')}
      }
    },
    {
      type: jsPsychHtmlKeyboardResponse,
      trial_duration: function() {
        if (over_time) {
          return 0
        } else {
          return prev_correct ? 2000 : 3000
        }
      },
      response_ends_trial: true,
      choices: [' '],
      stimulus: function(data) {
        if (over_time) {
          return ''
        } else if (prev_correct) {
          return `<div class="correct-container"><p>${encouraging_messages[Math.floor(Math.random()*encouraging_messages.length)]}</p></div>`
        } else {
          return `<div class="incorrect-container"><p>That's incorrect. Actually,<br><br>${jsPsych.timelineVariable('correct_eq')}</p></div>`
        }
      },
      on_finish: function() {
        if (!over_time) {
          let now = new Date()
          curr_time = now.getTime()
          if ((curr_time - start_time) > duration) {
            over_time = true;
          }
        }
      }
    }
  ],
  timeline_variables: eqs
}
