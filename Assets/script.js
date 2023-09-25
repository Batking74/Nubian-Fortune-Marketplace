const button = document.querySelector('button').addEventListener('click', startTimer);
const mainContainer = document.querySelector('main');
const counter = document.querySelector('#countDown');
const completeContainer = document.querySelector('#complete');
const messageContainer = document.querySelector('#message');
const h1 = document.querySelector('h1');
const label = document.getElementsByTagName('label');
const pElemnt = document.querySelectorAll('p');
const noDisplay = 'none';
const displayContent = 'block';
mainContainer.children[4].style.display = noDisplay;
completeContainer.style.display = noDisplay;
let iterator = 0;

// Array of objects for each question
const questions = [
    {
        Question: 'Commonly used data types DO NOT include:',
        Option1: '1. strings',
        Option2: '2. booleans',
        Option3: '3. alerts',
        Option4: '4. numbers',
        Answer: 'alerts'
    },
    {
        Question: 'The condition in an if / else statement is enclosed within __.',
        Option1: '1. quotes',
        Option2: '2. curly brackets',
        Option3: '3. parentheses',
        Option4: '4. square brackets',
        Answer: 'parentheses'
    },
    {
        Question: 'Arrays in JavaScript can be used to store __.',
        Option1: '1. numbers and strings',
        Option2: '2. other arrays',
        Option3: '3. booleans',
        Option4: '4. all of the above',
        Answer: 'all of the above'
    },
    {
        Question: 'String values must be enclosed within __ when being assigned to variables.',
        Option1: '1. commas',
        Option2: '2. curly brackets',
        Option3: '3. quotes',
        Option4: '4. parentheses',
        Answer: 'quotes'
    },
    {
        Question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        Option1: '1. JavaScript',
        Option2: '2. terminal / bash',
        Option3: '3. for loops',
        Option4: '4. console.log',
        Answer: 'console.log'
    }
];

// Starting the timer, and then starts the quiz
function startTimer() {
    pElemnt[0].style.display = noDisplay;
    mainContainer.children[3].style.display = noDisplay;
    counter.textContent = 75;
    setInterval(() => { if(!(parseInt(counter.textContent) <= 0)) counter.textContent -= 1; }, 1000);
    mainContainer.classList.add('quizstart-styles');
    const btns = setButtons();
    startQuiz(btns);
}

// Prompts the quiz questions
function startQuiz(btn) {
    for(let i = iterator; i == iterator; i++) {
        if(iterator == questions.length) quizComplete();
        else {
            h1.textContent = questions[i].Question;
            btn[0].textContent = questions[i].Option1;
            btn[1].textContent = questions[i].Option2;
            btn[2].textContent = questions[i].Option3;
            btn[3].textContent = questions[i].Option4;
        }
    }
}

// Creates the different options to answer the question
function setButtons() {
    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    const btn3 = document.createElement('button');
    const btn4 = document.createElement('button');
    mainContainer.append(btn1);
    mainContainer.append(btn2);
    mainContainer.append(btn3);
    mainContainer.append(btn4);
    btn4.insertAdjacentElement('afterend', messageContainer);
    const btns = [btn1, btn2, btn3, btn4];
    setEventListeners(btns);
    return btns;
}

// Listeners for users answer
function setEventListeners(btns) {
    for(let btn of btns) btn.addEventListener('click', (e) => validate(e, btns));
}

// Validates if a user got the answer right or wrong, and deducts from time if user answered wrong.
function validate(e, btns) {
    const isCorrect = isValid(e.target.textContent, questions[iterator].Answer, btns);
    if(isCorrect) displayMsg('Correct!');
    else { 
        counter.textContent -= 15;
        displayMsg('Wrong!');
    }
}

// For each message it will display for 2 seconds then display none after 2 seconds.
function displayMsg(msg) {
    display(msg);
    setTimeout(() => displayMsg(noDisplay), 2000);
}

// Displays if a user got answer right or wrong
function display(msg) {
    const end = mainContainer.children.length - 1;
    if(msg === noDisplay) mainContainer.children[end].style.display = msg;
    else {
        mainContainer.children[end].style.display = displayContent;
        pElemnt[1].textContent = msg;
    }
}

// Checks if the users answer is correct
function isValid(usersAnswer, correctAnswer, btns) {
    if(usersAnswer.substring(3) === correctAnswer) {
        iterator++;
        startQuiz(btns);
        return true;
    } else return false;
}

// Quiz completed form
function quizComplete() {
    for(let i = 4; i < mainContainer.children.length; i++) mainContainer.children[i].remove();
    const va = counter.parentElement;
    const vda = counter.parentElement.textContent;
    va.textContent = vda
    pElemnt[0].style.display = displayContent;
    completeContainer.style.display = displayContent;
    mainContainer.children[4].style.display = noDisplay;
    mainContainer.children[3].style.display = 'inline';
    mainContainer.children[3].textContent = 'Submit';
    completeContainer.insertAdjacentElement('beforeend', mainContainer.children[3]);
    pElemnt[0].textContent = `Your final score is ${counter.textContent}`;
    label[0].textContent = 'Enter Initials:';
    h1.textContent = 'All done!';
}