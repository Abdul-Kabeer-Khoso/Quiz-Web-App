let selectCategory = localStorage.getItem("SelectedCategory");
let selectedQuestionNumbers = localStorage.getItem("SelectedNoOfQuestions");
let numberOfQuestion = parseInt(selectedQuestionNumbers);


let questionsArray;
let answersArray;
let answersIndex;


if(selectCategory=='Programming'){
    questionsArray = JSON.parse(localStorage.getItem("ProgrammingQuestions"));
    answersArray = JSON.parse(localStorage.getItem("ProgrammingAnswers"));
    answersIndex = JSON.parse(localStorage.getItem("programmingCorrectAnswesrIndex"));
    console.log('programming');
}
else if(selectCategory=='Cricket'){
    questionsArray = JSON.parse(localStorage.getItem('cricketQuestions'));
    answersArray = JSON.parse(localStorage.getItem('cricketAnswers'));
    answersIndex = JSON.parse(localStorage.getItem('cricketAnswersIndex'));
    console.log('cricket');
}
else if(selectCategory=='G.k'){
    questionsArray = JSON.parse(localStorage.getItem('gkQuestions'));
    answersArray = JSON.parse(localStorage.getItem('gkAnswers'));
    answersIndex = JSON.parse(localStorage.getItem('gkAnswersIndex'));
    console.log('gk');
}
else if(selectCategory=='Football'){
    questionsArray = JSON.parse(localStorage.getItem('footballQuestions'));
    answersArray = JSON.parse(localStorage.getItem('footballAnswers'));
    answersIndex = JSON.parse(localStorage.getItem('footballAnswersIndex'));
    console.log('football');
}


let question = document.querySelector('.questions').childNodes[1];
let answers = document.querySelectorAll('.ans');
let nextBtn = document.querySelector('button');
let currQuestionNumber = document.querySelector('#currQuestionNumber');
var totalQuestionNumber = document.querySelector('#totalQuestionNumber');
let quizTime = document.getElementById('time');
totalQuestionNumber.innerText = numberOfQuestion;
let selectedAnswer;

let timer;

let questionIndex = 0;
let correctAnswers = 0;

//Setting questions and answers
let setQuestionAnswers = ()=>{
    question.innerText = questionsArray[questionIndex];
    answers[0].innerText= answersArray[questionIndex][0];
    answers[1].innerText= answersArray[questionIndex][1];
    answers[2].innerText= answersArray[questionIndex][2];
    answers[3].innerText= answersArray[questionIndex][3];
    currQuestionNumber.innerText = questionIndex+1;
    questionIndex++;
}

setQuestionAnswers();


//setting next button invisible in starting
nextBtn.style.visibility = 'hidden';

//setting next button invisible;
let hideBtn = ()=>{
    nextBtn.style.visibility = 'hidden';
}

//setting next button visible
let unhideBtn = ()=>{
    nextBtn.style.visibility = 'visible';
}

//disabling style of answer
let disableAnswerStyle = ()=>{
    Array.from(answers).forEach((element)=>{
        element.style.backgroundColor = 'white';
        element.style.border = '1.5px solid rgb(27, 26, 26)';
    })
}

//time up method

let timeUp = ()=>{
    unhideBtn();
    let correctAns = answersIndex[questionIndex-1];
    let correctA = answersArray[questionIndex-1][correctAns];

    for(let i=0; i<=3; i++){
    if(answers[i].innerText==correctA){
        console.log('if condition executed');
        answers[i].style.backgroundColor = 'rgba(91, 245, 132,0.5)';
        let correctIcon = document.createElement('i');
        correctIcon.setAttribute('class','fa-regular fa-circle-check fa-lg');
        correctIcon.style.opacity = '0.5';
        answers[i].append(correctIcon);
       

    }
}
 // Disable all options after selection
 Array.from(answers).forEach(option => {
    option.style.pointerEvents = 'none';
});
}



//timer
function startTimer(duration, quizTimeElement, onTimeUp) {
    let timeLeft = duration;
    quizTimeElement.innerText = timeLeft;

    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            quizTimeElement.innerText = timeLeft;
        } else {
            clearInterval(timer);
            onTimeUp();
        }
    }, 1000);

    return timer; // Return the timer reference if you need to clear it manually later
}

//stop timer
stopTimer = () => {
    if(timer){
        console.log('stopped');
        clearInterval(timer);
    }
   
};

startTimer(30, quizTime, timeUp);

//check Answer 
let checkAnswer = ()=>{
    let correctAns = answersIndex[questionIndex-1];

    if(selectedAnswer.innerText === answersArray[questionIndex-1][correctAns]){
        selectedAnswer.style.backgroundColor = 'rgba(91, 245, 132,0.5)';
        let correctIcon = document.createElement('i');
        correctIcon.setAttribute('class','fa-regular fa-circle-check fa-lg');
        correctIcon.style.opacity = '0.5';
        selectedAnswer.append(correctIcon);
        correctAnswers++;
    }
    else{
        selectedAnswer.style.backgroundColor = 'rgba(241, 49, 49, 0.5)';
        let wrongIcon = document.createElement('i');
        wrongIcon.setAttribute('class','fa-regular fa-circle-xmark fa-lg');
        wrongIcon.style.opacity = '0.5';
        selectedAnswer.append(wrongIcon);
    }
}



//Applying event listeners on answers

    Array.from(answers).forEach((val, idx) => {
        answers[idx].addEventListener('click', () => {
            disableAnswerStyle();
            answers[idx].style.border = '2px solid orange';
            unhideBtn();
            selectedAnswer = answers[idx];
            checkAnswer();
            stopTimer();
            // Disable all options after selection
            Array.from(answers).forEach(option => {
                option.style.pointerEvents = 'none';
            });
        });
    });


//setting event listener on next button
nextBtn.addEventListener('click', ()=>{
    let currQN = parseInt(currQuestionNumber.innerText);
    if(currQN<numberOfQuestion){
        setQuestionAnswers();
    }else{
        showResult();
    }
    stopTimer();
    startTimer(30, quizTime, timeUp);
    disableAnswerStyle();
    Array.from(answers).forEach(option =>{
        option.style.pointerEvents = 'auto';
    });
    hideBtn();
});


//showing result
let showResult = ()=>{
    localStorage.setItem("CorrectAnswers",parseInt(correctAnswers));
    localStorage.setItem("TotalQuestions",parseInt(totalQuestionNumber.innerText));
    window.location.href='result.html';
}
