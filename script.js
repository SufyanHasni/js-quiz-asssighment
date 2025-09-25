const questions = [
  {
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
    answer: "HyperText Markup Language"
  },
  {
    question: "Which protocol is used to transfer web pages?",
    options: ["FTP", "SMTP", "HTTP", "SSH"],
    answer: "HTTP"
  },
  {
    question: "What does CSS stand for?",
    options: ["Creative Style System", "Cascading Style Sheets", "Colorful Style Sheets", "Computer Styling Syntax"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "What is the brain of the computer?",
    options: ["RAM", "Hard Disk", "CPU", "GPU"],
    answer: "CPU"
  },
  {
    question: "Which language is primarily used for web development?",
    options: ["C++", "Python", "JavaScript", "Java"],
    answer: "JavaScript"
  },
  {
    question: "What is the full form of IP in networking?",
    options: ["Internet Process", "Internal Protocol", "Internet Protocol", "Interface Program"],
    answer: "Internet Protocol"
  },
  {
    question: "Which device connects multiple networks together?",
    options: ["Switch", "Router", "Hub", "Bridge"],
    answer: "Router"
  },
  {
    question: "What does SQL stand for?",
    options: ["Strong Question Language", "Structured Query Language", "Sequential Query Language", "System Query Language"],
    answer: "Structured Query Language"
  },
  {
    question: "Which company developed Windows OS?",
    options: ["Apple", "Microsoft", "IBM", "Google"],
    answer: "Microsoft"
  },
  {
    question: "What is open-source software?",
    options: ["Software available for free trial", "Software with hidden source code", "Software with publicly available source code", "Software that only runs on Linux"],
    answer: "Software with publicly available source code"
  }
];
var currentQuestion = 0;
var score = 0;
var start = document.getElementById("start")
var question = document.getElementById("question");
var options = document.getElementById("options");
var nextBtn = document.getElementById("next");
nextBtn.style.display="none"
var totalQuestions = questions.length
var results = document.getElementById("results")
results.style.display = "none"
var restart = document.getElementById("restart")
restart.style.display= "none"
var quiz = document.getElementById("quiz")

function showQuestion(){
    start.style.display="none"
    question.textContent=questions[currentQuestion].question
    options.innerHTML=''

    for(let i = 0;i < questions[currentQuestion].options.length; i++){
        let optionBtn = document.createElement('button')
        optionBtn.textContent = questions[currentQuestion].options[i]
        nextBtn.style.display = "none"

        optionBtn.onclick =  function(){
            checkAnswer(i)
        }
         options.appendChild(optionBtn)}
}
 function checkAnswer(selectedIndex){
    
    let selectedOption = questions[currentQuestion].options[selectedIndex];

    if(selectedOption===questions[currentQuestion].answer){
        score++
    }
    nextBtn.style.display="block"
 }

 nextBtn.onclick = function(){
    currentQuestion++
    if(currentQuestion<totalQuestions){
        showQuestion()
        nextBtn.style.display="none"
    }else{
        showResult()
    }
 }

 function showResult(){
    quiz.style.display="none"
    results.style.display = "block"
    restart.style.display = "block"
    results.textContent=`You Scored ${score} Out of 
    ${questions.length}`
 }

 restart.onclick = function(){
    currentQuestion = 0
    score= 0
    results.style.display= "none"
    restart.style.display="none"
    nextBtn.style.display="none"
    quiz.style.display = "block"
    showQuestion()
 }