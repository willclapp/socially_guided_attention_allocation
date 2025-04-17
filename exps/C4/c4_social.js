const questionnaire = {
  type: jsPsychSurvey,
  pages: [
    [
      {
        type: 'html',
        prompt: "Please answer the following questions. If you'd rather not answer any question, just type \"NA\" or select \"Prefer not to say\". None of your answers will affect your compensation."
      },
      {
        type: 'multi-choice',
        prompt: 'Did you read the instructions and do you think you did the task correctly?', 
        name: 'correct', 
        options: ['Yes', 'No', 'I was confused', 'Prefer not to say'],
        required: true
      },
      {
        type: 'drop-down',
        prompt: 'Do you think the payment was fair?',
        name: 'payment',
        options: ['The payment was too low', 'The payment was fair', 'The payment was too high', 'Prefer not to say'],
        required: true
      },
      {
        type: 'drop-down',
        prompt: 'Did you enjoy the experiment?',
        name: 'enjoy',
        options: ['Worse than average', 'Average', 'Better than average', 'Prefer not to say'],
        required: true
      },
      {
        type: 'drop-down',
        prompt: 'Are you primarily right-handed or left-handed?',
        name: 'hand',
        options: ['Right', 'Left', 'Prefer not to say'],
        required: true
      },
      {
        type: 'drop-down',
        prompt: 'Gender:',
        name: 'gender',
        options: ['Female', 'Male', 'Non-binary/Non-conforming', 'Other', 'Prefer not to say'],
        required: true
      },
      {
        type: 'text',
        prompt: 'Age:',
        name: 'age',
        textbox_columns: 10,
        required: true
      },
      {
        type: 'drop-down',
        prompt: 'Do you have any hearing loss or hearing difficulties?',
        name: 'hearing',
        options: ['Yes', 'No', 'Prefer not to say'],
        required: true
      },
      {
        type: 'drop-down',
        prompt: 'If you have a smartphone, what would you estimate your average daily screentime to be?',
        name: 'smartphone',
        options: ['I don\'t use a smartphone.', '0-1 hours', '1-2 hours', '2-3 hours', '3-4 hours', '4-5 hours', '5-6 hours', '6-7 hours', '7-8 hours', '8+ hours', 'Prefer not to answer'],
        required: true
      },
      {
        type: 'drop-down',
        prompt: 'If you have a Kindle or similar e-reader, how many hours each day would you estimate you use it?',
        name: 'ereader',
        options: ['I don\'t use an e-reader.', '0-1 hours', '1-2 hours', '2-3 hours', '3-4 hours', '4-5 hours', '5-6 hours', '6-7 hours', '7-8 hours', '8+ hours', 'Prefer not to answer'],
        required: true
      },
      {
        type: 'drop-down',
        prompt: 'If you play video games, how many hours would you estimate you spend doing so each day?',
        name: 'video_game',
        options: ['I don\'t play video games.', '0-1 hours', '1-2 hours', '2-3 hours', '3-4 hours', '4-5 hours', '5-6 hours', '6-7 hours', '7-8 hours', '8+ hours', 'Prefer not to answer'],
        required: true
      },
      {
        type: 'drop-down',
        prompt: 'If you use social media, how many hours would you estimate you spend using it each day?',
        name: 'social_media',
        options: ['I don\'t use social media.', '0-1 hours', '1-2 hours', '2-3 hours', '3-4 hours', '4-5 hours', '5-6 hours', '6-7 hours', '7-8 hours', '8+ hours', 'Prefer not to answer'],
        required: true
      },
      {
        type: 'drop-down',
        prompt: 'If you use TikTok, how many hours would you estimate you spend using it each day?',
        name: 'tiktok',
        options: ['I don\'t use TikTok.', '0-1 hours', '1-2 hours', '2-3 hours', '3-4 hours', '4-5 hours', '5-6 hours', '6-7 hours', '7-8 hours', '8+ hours', 'Prefer not to answer'],
        required: true
      },
      {
        type: 'drop-down',
        prompt: 'If you use social media, how would you describe your primary relationship to the platforms?',
        name: 'usage',
        options: ['I don\'t use social media.', 'I am mostly a content creator.', 'I use them actively. (I often like and comment on posts.)', 'I use them passively. (I mostly just watch videos or look at posts.)', 'Prefer not to answer.'],
        required: true
      },
      {
        type: 'drop-down',
        prompt: 'Level of education:',
        name: 'education',
        options: ['Some high school', 'Graduated high school', 'Some college', 'Graduated college', 'Hold a higher degree', 'Prefer not to say'],
        required: true
      },
      {
        type: 'drop-down',
        prompt: 'In which region of the United States do you live?',
        name: 'region',
        options: ['Northeast', 'Midatlantic', 'South', 'Midwest', 'Rockies', "Southwest", "West Coast", "Alaska/Hawaii", "Prefer not to say"],
        required: true
      },
      {
        type: 'drop-down',
        prompt: 'Which category best describes your race?',
        name: 'race',
        options: ["Black or African American", "White", "East Asian or Pacific Islander", "South Asian", "West Asian", "Indigenous American", "More than one of these", "Other", "Prefer not to say"],
        required: true
      },
      {
        type: 'text',
        prompt: "How would you describe your ethnicity? (E.g., Latinx, Ashkenazi Jewish, etc.) Type NA if you don't know or prefer not to answer.",
        name: 'ethnicity',
        textbox_columns: 20,
        required: true
      },
      {
        type: 'text',
        prompt: "Were there any languages other than English spoken at home when you were growing up?",
        name: 'language',
        textbox_columns: 20,
        required: true
      },
      {
        type: 'text',
        prompt: "Do you have any other comments about this experiment?",
        name: 'comments',
        textbox_columns: 30,
        textbox_rows: 4,
        required: true
      }
    ]
  ]
}