const riddleContainer = document.getElementById("riddleBox");
const answerContainer = document.getElementById("answer");

// six riddles
const riddles = ['What comes down but never goes up?', 'I am not alive, but I grow; I don\'t have lungs, but I need air; I don\'t have a mouth, but water kills me. What am I?', 'What has a heart that doesn\'t beat, and leaves but never walks?', 'I am always in front of you but can never be seen. What am I?', 'What gets bigger when more is taken away from it?']

//six answers
const answers = ['Rain', 'Fire', 'Artichoke', 'The Future', 'A Hole']

const populateRiddle = (arr) => {
  const randomNum = Math.floor(Math.random() * 5);

  return arr[randomNum];
  
}


const clearRiddle = (element) => {
  element.innerHTML = '';
}

const addRiddle = (element, input) => {
  element.innerHTML = input;
}

const clearAnswer = (element) => {
  element.value = '';
}

const findAnswer = (str) => {
  let answer;
  
  switch (str) {
    case 'What comes down but never goes up?';
      answer = "Rain";
      break;

    case 'I am not alive, but I grow; I don\'t have lungs, but I need air; I don\'t have a mouth, but water kills me. What am I?';
      answer = "Fire";
      break;

    case 'What has a heart that doesn\'t beat, and leaves but never walks?';
      answer = "Artichoke";
      break;

    case 'I am always in front of you but can never be seen. What am I?';
      answer = "The Future";
      break;

    case 'What gets bigger when more is taken away from it?';
      answer = "A Hole";
      break;

    default:
      answer = "I dunno!"
      break;
  }

  return answer;
}

const addAnswer = (element, input) => {
  element.value = input;
}

const generateAndDisplayRiddle = () => {
  const riddle = populateRiddle(riddles);
  clearRiddle(riddleBox);
  addRiddle(riddleBox, riddle);
}

const generateAndDisplayAnswer = () => {
  const riddle = riddleBox.value;
  const answer = findAnswer(riddle);
  clearAnswer(answer);
  addAnswer(answerBox, answer); 
}


const riddleButton = document.getElementById("riddleButton");
riddleButton.addEventListener('click', generateAndDisplayRiddle());

const answerButton = document.getElementById("answerButton");
answerButton.addEventListener('click', generateAndDisplayAnswer());


