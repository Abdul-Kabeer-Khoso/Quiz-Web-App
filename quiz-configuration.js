let allCategories = document.querySelectorAll('.Category');
let questionsNumber = document.querySelectorAll('.questionNumberOption');
let startBtn = document.querySelector('.startBtn');

let selectedCategory;
let selectedQuestionNumbers;

//Disabling all categoriess styles
let disableCategoryStyle = ()=>{
    Array.from(allCategories).forEach((val, idx)=>{
        allCategories[idx].style.backgroundColor='white';
        allCategories[idx].style.border = '1.5px solid rgb(51, 51, 51)';
        allCategories[idx].style.color = 'black';
    });
}


//Selecting Categories
Array.from(allCategories).forEach((val,idx)=>{
    allCategories[idx].addEventListener('click', (evt)=>{
        let curr = evt.target;
        disableCategoryStyle();
        curr.style.backgroundColor = 'orange';
        curr.style.color = 'white';
        curr.style.border = 'none';
        selectedCategory = curr;
    });
});


//Disabling all question Number styles
let disableQuestionNumberStyle = ()=>{
    Array.from(questionsNumber).forEach((val, idx)=>{
        questionsNumber[idx].style.backgroundColor='white';
        questionsNumber[idx].style.border = '1px solid grey';
        questionsNumber[idx].style.width = '12%';
        questionsNumber[idx].style.height = '40%';
        questionsNumber[idx].style.color = 'black';
        questionsNumber[idx].style.fontSize = '16px';
    });
}


//Selecting Questions
Array.from(questionsNumber).forEach((val, idx)=>{
    questionsNumber[idx].addEventListener('click', (evt)=>{
        let curr = evt.target;
        disableQuestionNumberStyle();
        curr.style.backgroundColor = 'teal';
        curr.style.width = '16%';
        curr.style.height = '52%';
        curr.style.color = 'white';
        curr.style.border = 'none';
        curr.style.fontSize = '18px';
        selectedQuestionNumbers = curr;
    })
});


//go to new quiz page
let goToQuiz = ()=>{
    window.location.href='quiz.html';
}


//Event listener on start button
startBtn.addEventListener('click',()=>{
    localStorage.setItem("SelectedCategory",selectedCategory.innerText);
    localStorage.setItem("SelectedNoOfQuestions",parseInt(selectedQuestionNumbers.innerText));
    goToQuiz();

});