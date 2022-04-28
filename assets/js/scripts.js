var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
var limit = 9;
var message = document.getElementById("limit");

increment.addEventListener("click", incrementf)
decrement.addEventListener("click", decrementf)

function incrementf(){
    if (currentNumberWrapper.innerHTML > limit) {
        document.getElementById("limit").style.color = '#FF0000'
    } else{
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }
    if (currentNumberWrapper.innerHTML < 0){
        document.getElementById("currentNumber").style.color = '#F50303'
    }else {
        document.getElementById("currentNumber").style.color = '#0B0A0A'
    }
}

function decrementf(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    document.getElementById("limit").style.color = '#b1e1ff'
    if (currentNumberWrapper.innerHTML < 0){
        document.getElementById("currentNumber").style.color = '#F50303'
    }else {
        document.getElementById("currentNumber").style.color = '#0B0A0A'
    }
} 
