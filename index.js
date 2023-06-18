const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
const correctAns = num1*num2;
const formE = document.getElementById("form");
const inputE = document.getElementById('input');
let score = JSON.parse(localStorage.getItem("score"));
let scoreE = document.getElementById("score");
// console.log(num1+","+num2);

const question1 = document.getElementById("question");
question1.innerHTML = 'What is ' +num1+ ' multiply by ' +num2+'?';
 
if(!score){73
    score = 0;
}
scoreE.innerHTML = 'score:' +score;

formE.addEventListener("submit", ()=>{
    const userAns = +inputE.value
   if(userAns == correctAns){
    score++;
    updateLocalStorage();
   }
   else{
    score--;
    updateLocalStorage();
   }

})
function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}