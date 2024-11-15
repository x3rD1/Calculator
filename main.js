const buttons = document.querySelectorAll('button');
const display = document.querySelector('.screen');

let sign;
let num;

buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        if (button.textContent === "="){
            display.textContent = operate(sign,+num,+display.textContent);
       }else if (Number.isFinite(+button.textContent)){
            populate(button)
       }else{
            operator(button);
       }
    })
})

function operator(button){
    num = display.textContent;
    sign = button.textContent;
    display.textContent = 0;
}

function populate(button){
    if (display.textContent != '0'){
        display.textContent += button.textContent    
    }else {
        display.textContent = "";
        display.textContent = button.textContent;
    }
    
}

function operate(operator,a,b){
    if(operator === '+'){return add(a,b)}
    else if(operator === '-'){return subtract(a,b)}
    else if(operator === '*'){return multiply(a,b)}
    else{return divide(a,b)}
}

function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}