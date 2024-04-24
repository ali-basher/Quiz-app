const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.querySelector('#quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.querySelector('#question')
const a_text = document.querySelector('#a_text')
const b_text = document.querySelector('#b_text')
const c_text = document.querySelector('#c_text')
const d_text = document.querySelector('#d_text')
const submitBtn = document.querySelector('#submit')
let trueAnswer = 0;

// Load the Data

questionEl.textContent = quizData[0].question;
a_text.textContent = quizData[0].a;
b_text.textContent = quizData[0].b;
c_text.textContent = quizData[0].c;
d_text.textContent = quizData[0].d;

submitBtn.textContent = "Next";

submitBtn.addEventListener('click', playGame);

let cuonter = 0;



function playGame() {

    cheackerScore(cuonter);

    cuonter++;

    if (cuonter < quizData.length) {
        loadData(cuonter);
    } else {
        showReslut();
    }
}


function loadData(cuonter) {
    questionEl.textContent = quizData[cuonter].question;
    a_text.textContent = quizData[cuonter].a;
    b_text.textContent = quizData[cuonter].b;
    c_text.textContent = quizData[cuonter].c;
    d_text.textContent = quizData[cuonter].d;

    if (cuonter === 3) {
        submitBtn.textContent = "Submit";
    }

    for (let i = 0; i < answerEls.length; i++) {
        answerEls[i].checked = false;
    }
}


function cheackerScore(cuonter) {
    if (cuonter < quizData.length) {
        for (let i = 0; i < answerEls.length; i++) {
            if (answerEls[i].checked === true) {
                let answerUser = answerEls[i].getAttribute('id');
                if (answerUser === quizData[cuonter].correct) {
                    trueAnswer++;
                }
            }
        }
    }
}

function showReslut() {
    quiz.innerHTML = `
        <h2>You answered correctly at ${trueAnswer}/${quizData.length} questions.</h2>
        <button onclick="location.reload()">Reload</button>
        `;
}