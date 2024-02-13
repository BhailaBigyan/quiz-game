const quizQuestions = [
    {
        question: "Who invented C language?", // questions
        options: ["Dennis M. Ritchie","Bjarne Stroustrup","Guido van Rossum","James Gosling"], // options 
        answer: "Dennis M. Ritchie" // correct ans
    },
    {
        question: "Who released their first antivirus product called VirusScan in 1987?", // questions
        options: ["Dennis M. Ritchie","Bjarne Stroustrup","John McAfee","James Gosling"], // options 
        answer: "John McAfee" // correct ans
    },
    {
        question: "Which common acronym stands for Hypertext Preprocessor", // questions
        options: ["Php","HPP","HTML","Http"], // options 
        answer: "Php" // correct ans
    },
    {
        question: "In computer science, what word describes a self-contained sequence of actions to be performed?", // questions
        options: ["Flow Chart","DSA","Algorithm","Control Structure"], // options 
        answer: "Algorithm" // correct ans
    },
    {
        question: "Who is known as the father of computer?", // questions
        options: ["Bill Gates","Dennis Ritchie","Steve Jobes","Charles Babbage"], // options 
        answer: "Charles Babbage" // correct ans
    },
    {
        question: "Which of the following language is written in binary form?", // questions
        options: ["C","NLP","Pascal","Machine Language"], // options 
        answer: "Machine Language" // correct ans
    },
    // more questions here
];

let score = 0;
let quest = 0; 

function question_load() {
    
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options-container");
    const currentQuizData = quizQuestions[quest];
  
    questionElement.innerText = currentQuizData.question;
    optionsContainer.innerHTML = "";
  
    currentQuizData.options.forEach((option, index) => {   
      const listItem = document.createElement("li");
      listItem.className = "option";
  
      const optionElement = document.createElement("label");
      optionElement.innerHTML = `
        <input type="radio" name="answer" value="${index}">
        ${option}
      `;
  
      listItem.appendChild(optionElement);
      optionsContainer.appendChild(listItem);
  
    
      listItem.addEventListener("click", function() {
        const radio = listItem.querySelector('input[type="radio"]');
        if (radio) {
          radio.checked = true;
        }
        
      });
      
      
    });
   
  }
  let a = false;
  function prev(){
      if (!a) { 
          quest--;
          question_load();
          a = true; 
      }
  }


  question_load();



function check() {
    const _check = document.querySelector('input[name="answer"]:checked');
    if (_check) {
        if (quizQuestions[quest].options[parseInt(_check.value, 10)] === quizQuestions[quest].answer) { 
            score++;
            document.getElementById("result").innerText = "Right!";
        } else {
            document.getElementById("result").innerText = "Wrong!";
        }
        quest++;
        if (quest < quizQuestions.length) {
            question_load();
        } else {
            results();
        }
    } else {
        document.getElementById("result").innerText = "Please select an option!";
    }
}


function results() {
    const quizContainer = document.getElementById("quiz-container");
    if(score >= quizQuestions.length) {
        quizContainer.innerHTML = `<h1>Congratulations</h1><h2>Your Score: ${score}/${quizQuestions.length}</h2>`;
    } else {
        quizContainer.innerHTML = `<h1>Oops</h1><h2>Your Score: ${score}/${quizQuestions.length}</h2>`;
    }
    
    document.getElementById("ag").style.display = "block";
    document.getElementById("re").style.display = "none";
}
function skip() {
     
  
    if (quest < quizQuestions.length) {
        quest++; 
        question_load(); 
    }
    else if(quest = quizQuestions.length){
        results();
    }
    
} 
function restart(){
    quest = 0;
    score = 0; 
    document.getElementById("result").innerText = ""; // Reset result display
    
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = ""; // Clear previous options
    
    question_load();
}
function play_again(){
    window.location.reload();

}




// try for high scorrer name
