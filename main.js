function equalFunction() {
    var display = document.getElementById('display');
    display.value = eval(display.value);
}

function appendOperator(operator) {
    var display = document.getElementById('display');
    var lastChar = display.value.slice(-1);
    var operators = ['+', '-', '*', '/'];

    if(display.value == ''){    //no print if will be first char
        return
    }else if(operators.includes(lastChar)) {    //no print if prev char is operator
        return
    }else if(lastChar == '.'){ //no print if first and only char is '.'
        return
    }else{
        display.value += operator;
    }

}

function DecimalAfterOperator(displayValue, operators){
    var lastDecimalIndex = displayValue.lastIndexOf('.');
    var lastOperatorIndex = -1;
    for(var i = 0; i < displayValue.length; i++){
        if(operators.includes(displayValue[i])){
            lastOperatorIndex = i;
        }
    }

    if(lastDecimalIndex > lastOperatorIndex){
        return true;
    }

    return false;
}


function decimalOperator(){
    var display = document.getElementById('display');
    var lastChar = display.value.slice(-1);
    var operators = ['+', '-', '*', '/'];

    if(lastChar == '.'){
        return
    }else if(display.value.includes('.') && DecimalAfterOperator(display.value, operators)){
        return
    }else{
        display.value += '.'
    }

}



