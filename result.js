let tryButton = document.querySelector('button');
let totalCorrectAnswers = document.querySelector('#correctAnswers');
let totalQuestions = document.querySelector('#totalQuestions');
let suggestionText = document.querySelector('#suggestions');
let resultImage = document.querySelector('#resultImage');


//correct answers and total question variable from other file
let correctAnswers = localStorage.getItem("CorrectAnswers");
let totalQuestionNumbers = localStorage.getItem("TotalQuestions");

if(correctAnswers===null){
    totalCorrectAnswers.innerText=0;
}
else{
    totalCorrectAnswers.innerText = correctAnswers;
    totalQuestions.innerText = totalQuestionNumbers;
}
 
let correctAns = parseInt(correctAnswers);
let totalQuestion = parseInt(totalQuestionNumbers);

if(correctAns >= (totalQuestion/2)){
    resultImage.setAttribute('src','win.gif');
    suggestionText.innerText = 'You are a genius...';
}
else{
    resultImage.setAttribute('src','lose.gif');
    suggestionText.innerText = 'Try Next Time...';
}


tryButton.addEventListener('click', ()=>{
    window.location.href='index.html';
});
