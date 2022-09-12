console.log("Personality Quiz");
var hardScore = 0;
var softScore = 0;

var questionCount = 0;

var result = document.getElementById("result");

var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");

q1a1.addEventListener("click", hard);
q1a2.addEventListener("click", soft);

q2a1.addEventListener("click", hard);
q2a2.addEventListener("click", soft);

q3a1.addEventListener("click", hard);
q3a2.addEventListener("click", soft);

q4a1.addEventListener("click", hard);
q4a2.addEventListener("click", soft);

q5a1.addEventListener("click", hard);
q5a2.addEventListener("click", soft);

restart.addEventListener("click", restartQuiz);

            


function hard(){
  hardScore +=1;
  questionCount+=1;

  console.log("questionCount = " + questionCount + "\t" + "hardScore = " + hardScore);

  if(questionCount==5)
  {
    updateResult();
  }
}

function soft(){
  softScore+=1;
  questionCount+=1;

  console.log("questionCount = " + questionCount + "\t" + "softScore = " + softScore);
  
  if(questionCount == 5) {
   updateResult();
  }
}

function updateResult(){
  if(softScore>=3){
    result.innerHTML = "You would be better suited in a career focused in software. Some examples of topics which might interest you are Artificial Intelligence, Computer Science, Web Development, or Information Systems.";
    console.log("You would be better suited in a career focused in software. Some examples of topics which might interest you are Artificial Intelligence, Computer Science, Web Development, or Information Systems.");
  }
  else if(hardScore>=3)
  {
    result.innerHTML = "You would be better suited in a career focused in hardware. Some examples of topics which might interest you are Robotics, Electrical Engineering, or Aerospace Engineering.";
    console.log("You would be better suited in a career focused in hardware. Some examples of topics which might interest you are Robotics, Electrical Engineering, or Aerospace Engineering.");
  }
}

function restartQuiz() {
  result.innerHTML = "You would be better suited in a career focused in...";
  questionCount = 0;
  softScore = 0;
  hardScore = 0;
  console.log("questionCount = " + questionCount + "\t" + "softScore = " + softScore + "\t" + "hardScore = " + hardScore);
}



