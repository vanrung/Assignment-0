const qustionDataBase = [
  {
    question: "What is the currency of Japan?",
    option1: "Euro",
    option2: "Yuan",
    option3: "Yen  ",
    option4: "Dollar",
    ans: "answer3",
  },
  {
    question: "Which of these is a renewable source of energy?",
    option1: "Coal",
    option2: "Oil",
    option3: "Solar power",
    option4: "Natural gas",
    ans: "answer3",
  },
  {
    question: "What is the scientific name for the process of rusting?",
    option1: "Erosion",
    option2: "Photosynthesis",
    option3: "Decomposition",
    option4: "Oxidation",
    ans: "answer4",
  },
  {
    question: "What is the highest point in Myanmar?",
    option1: "Mount Kinabalu",
    option2: "Mount Hkakabo Razi",
    option3: "Doi Inthanon",
    option4: "Fansipan",
    ans: "answer2",
  },
  {
    question: "How many sides does a hexagon have?",
    option1: "4",
    option2: "5",
    option3: "6",
    option4: "8",
    ans: "answer3",
  },
  {
    question: "What is the name of the world's largest island?",
    option1: "Greenland",
    option2: "Australia",
    option3: "Madagascar",
    option4: "Borneo",
    ans: "answer1",
  },
  {
    question: "What is the capital of New Zealand?",
    option1: "Sydney",
    option2: "Melbourne",
    option3: "Wellington",
    option4: "Auckland",
    ans: "answer3",
  },
  {
    question: "What is the name of the world's longest river?",
    option1: "Mississippi River",
    option2: "Yangtze River",
    option3: "Amazon River",
    option4: "Nile River",
    ans: "answer4",
  },
  {
    question: "What is the most commonly spoken language in the world?",
    option1: "English",
    option2: "Mandarin Chinese",
    option3: "Spanish",
    option4: "Hindi",
    ans: "answer2",
  },
  {
    question: "What is the tallest building in the world?",
    option1: "Burj Khalifa",
    option2: "Shanghai Tower",
    option3: "Abraj Al-Bait Clock Tower",
    option4: "One World Trade Center ",
    ans: "answer1",
  },
];


const questionContainer = document.querySelector("h2");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submitButton = document.querySelector("button");
const usersAnswer = document.querySelectorAll(".answer");
const scoreArea = document.querySelector("#ShowScore");



let questionCount = 0;
let score = 0;
const mainFunc = () => {
  const list = qustionDataBase[questionCount];
  questionContainer.innerText = list.question;
  option1.innerText = list.option1;
  option2.innerText = list.option2;
  option3.innerText = list.option3;
  option4.innerText = list.option4;
};

mainFunc();


const goCheckAnswer = () => {
  let answers;
  usersAnswer.forEach((data) => {
    if (data.checked) {
      answers = data.id;
    }
  });
  return answers;
};

const deselectAll = () => {
  usersAnswer.forEach((data) => {
    data.checked = false;
  });
};

submitButton.addEventListener("click", () => {
  const checkAnswer = goCheckAnswer();
  console.log(checkAnswer);

  if (checkAnswer === qustionDataBase[questionCount].ans) {
    score++;
  }
  questionCount++;
  deselectAll();
  if (questionCount < qustionDataBase.length) {
    mainFunc();
  } else {
    scoreArea.style.display = "block";
    scoreArea.innerHTML = `
      <h3>Your score is ${score} / ${qustionDataBase.length}</h3>
      <button class='btn' onclick='location.reload()'>Play Again</button>
      `;
  }
});
