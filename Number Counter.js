// counter program

const decreaseBtn=document.getElementById("decreaseBtn");
const resetBtn=document.getElementById("resetBtn");
const increaseBtn=document.getElementById("increaseBtn");

const counterLabel=document.getElementById("counterLabel");

let count = 0;
decreaseBtn.onclick=function(){
    count--;
    document.getElementById("counterLabel").textContent=count;
    
}
resetBtn.onclick=function(){
    count=0;
    document.getElementById("counterLabel").textContent=count;

}
increaseBtn.onclick=function(){
    count++;
    document.getElementById("counterLabel").textContent=count;

}

