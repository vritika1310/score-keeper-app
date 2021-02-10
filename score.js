const p1score = document.querySelector("#p1score");
const p2score = document.querySelector("#p2score");
const p1button = document.querySelector("#p1button");
const p2button = document.querySelector("#p2button");
const reset = document.querySelector("#reset");
const playto = document.querySelector("#playto");


let p1count = 0;
let p2count = 0;
let winningScore = 3;
let isGameOver = false;

p1button.addEventListener('click', () => {
    if(!isGameOver){
        p1count += 1;
        if(p1count === winningScore){
            isGameOver = true;
            p1score.classList.add("has-text-success");
            p2score.classList.add("has-text-danger");
        } 
        p1score.textContent = p1count;
    }
})

p2button.addEventListener('click', () => {
    if(!isGameOver){
        p2count += 1;
        if(p2count === winningScore){
            isGameOver = true;
            p2score.classList.add("has-text-success");
            p1score.classList.add("has-text-danger");
        } 
        p2score.textContent = p2count;
    }
})


playto.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    resetall();
})


reset.addEventListener('click', resetall)

function resetall(){
    isGameOver = false;
    p1score.textContent = 0;
    p2score.textContent = 0;
    p1count = 0;
    p2count = 0;
    p1score.classList.remove("has-text-success", "has-text-danger");
    p2score.classList.remove("has-text-success", "has-text-danger");
}