let operator =''
let previousValue =''
let currentValue = '';




document.addEventListener('DOMContentLoaded', ()=>{
    let clear = document.querySelector('#clear-btn');
    let equal = document.querySelector('.equal');
    let decimal = document.querySelector('.decimal');

    let numbers =  document.querySelectorAll('.number');
    let operators = document.querySelectorAll('.operator');

    let previousScreen = document.querySelector('.previous');
    let currentScreen = document.querySelector('.current')




    numbers.forEach((number) => number.addEventListener('click', (e)=>{
        handleNumber(e.target.textContent);
        currentScreen.textContent = currentValue;
    }));



    operators.forEach((op)=>op.addEventListener('click', (e)=>{
        handleOperator(e.target.textContent)
        previousScreen.textContent = previousValue + " " + operator;
        currentScreen.textContent = currentValue;
    }));



    clear.addEventListener('click',()=>{
       currentValue = ''
       previousValue= ''
       operator = '';
       previousScreen.textContent = previousValue;
       currentScreen.textContent = currentValue;
    });



    equal.addEventListener('click', ()=>{
       if(currentValue != '' && previousValue !=''){
        calculate();
        previousScreen.textContent = '';
        if(previousValue.length <= 6){
            currentScreen.textContent = previousValue;
        }else{
            currentScreen.textContent = previousValue.slice(0, 6) + "...";
        }
       }
    });


    decimal.addEventListener('click', ()=>{
        addDecimal();
    })

});




function handleNumber(num){
    if(currentValue.length <= 5){
        currentValue += num;
    }
}
function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue ='';
}

const calculate =()=>{
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator ==="+"){
        previousValue += currentValue;
    }
    else if(operator === "-"){
        previousValue -= currentValue;
    }
    else if(operator === "x"){
        previousValue *= currentValue;
    }
    else {
        previousValue /= currentValue;
    }
    previousValue = round(previousValue)
    previousValue = previousValue.toString();
    currentValue = currentValue.toString();
    console.log(previousValue)
}

function round(num){
    return Math.round((num * 1000) / 1000)
}

function addDecimal(){
    if(!currentValue.includes('.')){
        currentValue += ".";
    }
}


