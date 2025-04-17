function shuffle_array(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  
  function shuffle_imgs(stims) {
    for (let i=0; i<stims.length; i++) {
      stims[i].imgs = shuffle_array(stims[i].imgs)
    }
    return stims;
  }
  
  function math_eval(button_order, response, correct) {
    if (correct) {
      if (button_order == "OLD_NEW" && response == 'd') {
        return true;
      } else if (button_order == "OLD_NEW" && response == 'k') {
        return false;
      } else if (button_order == "NEW_OLD" && response == 'd') {
        return false;
      } else if (button_order == "NEW_OLD" && response == 'k') {
        return true;
      }
    // cases where the equation was INcorrect
    } else {
      if (button_order == "OLD_NEW" && response == 'd') {
        return false;
      } else if (button_order == "OLD_NEW" && response == 'k') {
        return true;
      } else if (button_order == "NEW_OLD" && response == 'd') {
        return true;
      } else if (button_order == "NEW_OLD" && response == 'k') {
        return false;
      }
    }
  }
  