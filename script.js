let operandOne = undefined
let operandTwo = undefined
let firstNumber = ""
let secondNumber = ""
let sign = ""
let conter = 2
let anyButtonActive = 0
let isFloatButtonActive = false
result = 0

const output = document.querySelector("#output")
const equals = document.querySelector("#equal")
equals.addEventListener("click", operate)

let operator = document.querySelector("#add")
operator.addEventListener("click", e => {
    isFloatButtonActive = false
    decimal.classList.remove("decimal-active")
    if (anyButtonActive === 1) {
        operate()
        operandOne = result
        operator.classList.add("button-active") 
    }
    sign = "+"
    anyButtonActive = 1
    if (output.textContent === "ERROR") {
        return output.textContent = "ERROR"
    }
    if (operandOne != undefined) {
        output.textContent += "+"
    }
    console.log("Operator:" + " " + sign)
})

let subtraction = document.querySelector("#subtraction")
subtraction.addEventListener("click", e => {
    isFloatButtonActive = false
    decimal.classList.remove("decimal-active")
    if (anyButtonActive === 1) {
        operate()
        operandOne = result
        subtraction.classList.add("button-active")   
    } 
    sign = "-"
    anyButtonActive = 1
    if (output.textContent === "ERROR") {
        //error 
        result = 0
        operandOne = undefined
        return output.textContent = "ERROR"
    }
    if (operandOne != undefined) {
        output.textContent += "-"
    }
    console.log("Operator:" + " " + sign)
})

let multiplication = document.querySelector("#multiplication")
multiplication.addEventListener("click", e => {
    isFloatButtonActive = false
    decimal.classList.remove("decimal-active")
    if (anyButtonActive === 1) {
        operate()
        operandOne = result
        multiplication.classList.add("button-active")   
    } 
    sign = "*"
    anyButtonActive = 1
    if (output.textContent === "ERROR") {
        result = 0
        operandOne = undefined
        return output.textContent = "ERROR"
    }
    if (operandOne != undefined) {
        output.textContent += "*"
    }
    console.log("Operator:" + " " + sign)
})

let division = document.querySelector("#division")
division.addEventListener("click", e => {
    isFloatButtonActive = false
    decimal.classList.remove("decimal-active")
    if (anyButtonActive === 1) {
        operate()
        operandOne = result
        division.classList.add("button-active")   
    } 
    sign = "/"
    anyButtonActive = 1
    if (output.textContent === "ERROR") {
        result = 0
        operandOne = undefined
        return output.textContent = "ERROR"
    }
    if (operandOne != undefined) {
        output.textContent += "/"
    }
    console.log("Operator:" + " " + sign)
})

let stringResult = ""
//operate
function operate(operandOne, operandTwo) {
    if (firstNumber.includes(".")) {
        isFloatButtonActive = true
        decimal.classList.add("decimal-active")
    } else {
        isFloatButtonActive = false
        decimal.classList.remove("decimal-active")
    }
    if (sign === "+" && result === 0) { 
       result = add(operandOne, operandTwo) 
       result = Number(result.toFixed(10))
       console.log(`Result: ${result}`)
       output.textContent = result
       
    } else if (sign === "+" && result != 0) {
       result = add(operandOne, operandTwo)
       result = Number(result.toFixed(10)) 
       console.log(`Result${conter}: ${result} `)
       output.textContent = result 
       conter++   
    }
    if (sign === "-" && result === 0) {
        result = subtract(operandOne, operandTwo)
        result = Number(result.toFixed(10))
        console.log(`Result: ${result}`)
        output.textContent = result
 
     } else if (sign === "-" && result != 0) {
        result = subtract(operandOne, operandTwo)
        result = Number(result.toFixed(10))
        console.log(`Result${conter}: ${result} `)
        output.textContent = result 
        conter++ 
    }
    if (sign === "*" && result === 0) {
        result = multiply(operandOne, operandTwo)
        result = Number(result.toFixed(10))
        console.log(`Result: ${result}`)
        output.textContent = result
 
     } else if (sign === "*" && result != 0) {
        result = multiply(operandOne, operandTwo)
        result = Number(result.toFixed(10))
        console.log(`Result${conter}: ${result} `)
        output.textContent = result 
        conter++ 
    }
    if (sign === "/" && result === 0) {
        result = divide(operandOne, operandTwo)
        result = Number(result.toFixed(10))
        console.log(`Result: ${result}`)
        output.textContent = result
 
     } else if (sign === "/" && result != 0) {
        result = divide(operandOne, operandTwo)
        result = Number(result.toFixed(10))
        console.log(`Result${conter}: ${result} `)
        output.textContent = result 
        conter++ 
    }
    console.log(`the result it's ${result}`)
    stringResult = stringResult.toString(result)
    console.log(`the stringresult it's ${result}`)
    if (stringResult.includes(".")) {
        isFloatButtonActive = true
        decimal.classList.add("decimal-active")
    } 
    operandOne = undefined
    operandTwo = undefined
    secondNumber = ""
    anyButtonActive = 0
    operator.classList.remove("button-active")  
    subtraction.classList.remove("button-active")
    multiplication.classList.remove("button-active")
    division.classList.remove("button-active") 
    return result
}

//add
function add() {
    temp = operandOne + operandTwo
    if (operandOne !== undefined && sign == "+" && operandTwo === undefined && result === 0) {
        sign = ""
        anyButtonActive = 0;
        return output.textContent = "ERROR";
    }
    if (operandOne === undefined && operandTwo === undefined) {
        anyButtonActive = 0;
        sign = ""
        return output.textContent = "ERROR"; 
    } else if (operandOne !== undefined) {
        anyButtonActive = 1;
        if (result === 0) {
            sign = "";
            firstNumber = ""
            secondNumber = ""
            temp = result
            return operandOne + operandTwo;
        } else if (result !== 0) {
            if (firstNumber !== "" && secondNumber !== "") {
                firstNumber = ""
                sign = "";
                secondNumber = ""
                return operandOne + operandTwo
            }
            else if (firstNumber === "") {
                operandOne = result
                firstNumber = ""
                secondNumber = ""
                sign = "";
                return operandOne + operandTwo
            } 
        }
    }
}
//+/-
const plusMinus = document.querySelector("#plus-minus")
plusMinus.addEventListener("click", changeSign)
function changeSign() {
    if (operandOne !== undefined && sign === "-" && operandTwo === undefined && result === 0) {
        sign = ""
        anyButtonActive = 0;
        return output.textContent = "ERROR";
    }
    if (operandOne === undefined && operandTwo === undefined) {
        anyButtonActive = 0;
        sign = ""
        return output.textContent = "ERROR"; 
    }
    if (result !== 0) {
        result = -result;
        output.textContent = result;
    } else if (sign === "-" && operandTwo !== undefined) {
        operandTwo = -operandTwo;
        output.textContent = `${operandOne === undefined ? 0 : operandOne}${sign}${isNaN(operandTwo) ? '' : operandTwo}`;
    } else if (operandOne !== undefined) {
        operandOne = -operandOne;
        output.textContent = `${operandOne}${sign}${isNaN(operandTwo) ? '' : operandTwo}`;
    }  
}
//subtract
function subtract() {
    if (operandOne !== undefined && sign === "-" && operandTwo === undefined && result === 0) {
        sign = ""
        anyButtonActive = 0;
        return output.textContent = "ERROR";
    }
    if (operandOne === undefined && operandTwo === undefined) {
        anyButtonActive = 0;
        sign = ""
        return output.textContent = "ERROR"; 
    } else if (operandOne !== undefined) {
        anyButtonActive = 1;
        if (result === 0) {
            sign = "";
            firstNumber = ""
            secondNumber = ""
            return operandOne - operandTwo;
        } else if (result !== 0) {
            if (firstNumber !== "" && secondNumber !== "") {
                firstNumber = ""
                sign = "";
                secondNumber = ""
                return operandOne + operandTwo
            }
            else if (firstNumber === "") {
                operandOne = result
                firstNumber = ""
                secondNumber = ""
                sign = "";
                return operandOne + operandTwo
            } 
        }
    }
}
//multiply
function multiply() {
    if (operandOne !== undefined && sign == "*" && operandTwo === undefined && result === 0) {
        sign = ""
        anyButtonActive = 0;
        return output.textContent = "ERROR";
    }
    if (operandOne === undefined && operandTwo === undefined) {
        anyButtonActive = 0;
        sign = ""
        return output.textContent = "ERROR"; 
    } else if (operandOne !== undefined) {
        anyButtonActive = 1;
        if (result === 0) {
            sign = "";
            firstNumber = ""
            secondNumber = ""
            return operandOne * operandTwo;
        } else if (result !== 0) {
            if (firstNumber !== "" && secondNumber !== "") {
                firstNumber = ""
                sign = "";
                secondNumber = ""
                return operandOne + operandTwo
            }
            else if (firstNumber === "") {
                operandOne = result
                firstNumber = ""
                secondNumber = ""
                sign = "";
                return operandOne + operandTwo
            } 
        }
    }
}

//divide
function divide() {
    if (operandTwo === 0) {
        return output.textContent = "ERROR"
    }
    if (operandOne !== undefined && sign == "/" && operandTwo === undefined && result === 0) {
        sign = ""
        anyButtonActive = 0;
        return output.textContent = "ERROR";
    }
    if (operandOne === undefined && operandTwo === undefined) {
        anyButtonActive = 0;
        sign = ""
        return output.textContent = "ERROR"; 
    } else if (operandOne !== undefined) {
        anyButtonActive = 1;
        if (result === 0) {
            sign = "";
            firstNumber = ""
            secondNumber = ""
            return operandOne / operandTwo;
        } else if (result !== 0) {
            if (firstNumber !== "" && secondNumber !== "") {
                firstNumber = ""
                sign = "";
                secondNumber = ""
                return operandOne + operandTwo
            }
            else if (firstNumber === "") {
                operandOne = result
                firstNumber = ""
                secondNumber = ""
                sign = "";
                return operandOne + operandTwo
            } 
        }
    }
}

//undo
const backspace = document.querySelector("#undo")
backspace.addEventListener("click", e => {
    if (isFloatButtonActive) {
        if (operandOne !== undefined && operandTwo !== undefined && sign !== "" && result !== 0) {
            result = operandOne
            sign = ""
        }   
        if (operandOne !== undefined && operandTwo !== undefined && sign === "" && result !== 0) {
            result = 0
            firstNumber = ""
            secondNumber = ""
            operandOne = undefined
            operandTwo = undefined
            anyButtonActive = 0
            isFloatButtonActive = false
        }
        if (sign !== "" && secondNumber === "") {
            sign = ""; 
            anyButtonActive = 0
            output.textContent = operandOne === undefined ? 0 : firstNumber; 
        } else {
            if (sign !== "") {
                secondNumber = secondNumber.substring(0, secondNumber.length - 1);
                operandTwo = secondNumber === "" ? undefined : parseFloat(secondNumber);
            }
            if (sign === "") {
                firstNumber = firstNumber.substring(0, firstNumber.length - 1);
                operandOne = firstNumber === "" ? undefined : parseFloat(firstNumber);
            }
            output.textContent = `${operandOne === undefined ? 0 : firstNumber}${sign}${isNaN(operandTwo) ? '' : secondNumber}`; 
        } 
    } else {
        if (operandOne !== undefined && operandTwo !== undefined && sign !== "" && result !== 0) {
            result = operandOne
            sign = ""
        }   
        if (operandOne !== undefined && operandTwo !== undefined && sign === "" && result !== 0) {
            result = 0
            firstNumber = ""
            secondNumber = ""
            operandOne = undefined
            operandTwo = undefined
            anyButtonActive = 0
        }
        
        if (sign !== "" && secondNumber === "") {
            sign = ""; 
            anyButtonActive = 0
            output.textContent = operandOne === undefined ? 0 : firstNumber; 
        } else {
            if (sign !== "") {
                secondNumber = secondNumber.substring(0, secondNumber.length - 1);
                operandTwo = secondNumber === "" ? undefined : parseInt(secondNumber);
            }
            if (sign === "") {
                firstNumber = firstNumber.substring(0, firstNumber.length - 1);
                operandOne = firstNumber === "" ? undefined : parseInt(firstNumber);
            }
            output.textContent = `${operandOne === undefined ? 0 : firstNumber}${sign}${isNaN(operandTwo) ? '' : operandTwo}`;
        }
    
    }
    if (!secondNumber.includes('.')) {
        isFloatButtonActive = false;
        decimal.classList.remove("decimal-active")
    }   
    if (!firstNumber.includes('.')) {
        isFloatButtonActive = false
        decimal.classList.remove("decimal-active")
    }  else {
        if (firstNumber.includes('.') && sign === "") {
            isFloatButtonActive = true
            decimal.classList.add("decimal-active")
        }
    } 
});

//decimal
const decimal = document.querySelector("#dot-decimal")
decimal.addEventListener("click", activeDecimal)

function activeDecimal(e) {
    if (!isFloatButtonActive) {
        decimal.classList.add("decimal-active");
        output.textContent += ".";  
        if (sign === "") {
            firstNumber += ".";
        }  
        if (sign !== "") {
            secondNumber += ".";
        }
        isFloatButtonActive = true;    
    }
}

//numbers
const one = document.querySelector("#number-one")
one.addEventListener("click", e => {
    if (isFloatButtonActive === true) {
        if (sign === "") {  
            firstNumber += 1      
            operandOne = parseFloat(firstNumber)
            output.textContent = operandOne
        }
        if (sign != "") {
            secondNumber += "1"
            operandTwo = parseFloat(secondNumber)
            output.textContent += 1
        } 
    }
    else if (isFloatButtonActive === false ) {
        if (sign === "") {
            firstNumber += "1" 
            operandOne = parseInt(firstNumber)
            output.textContent = operandOne
        }
        if (sign != "") {
            secondNumber += "1"
            operandTwo = parseInt(secondNumber)
            output.textContent += 1
        }
    }
})

const two = document.querySelector("#number-two")
two.addEventListener("click", e => {
    if (isFloatButtonActive === true) {
        if (sign === "") {  
            firstNumber += 2      
            operandOne = parseFloat(firstNumber)
            output.textContent = operandOne
        }
        if (sign != "") {
            secondNumber += "2"
            operandTwo = parseFloat(secondNumber)
            output.textContent += 2
        } 
    }
    else if (isFloatButtonActive === false ) {
        if (sign === "") {
            firstNumber += "2"
            operandOne = parseInt(firstNumber)
            output.textContent = operandOne
        }
        if (sign != "") {
            secondNumber += "2"
            operandTwo = parseInt(secondNumber)
            output.textContent += 2
        }
    }
})

const three = document.querySelector("#number-three")
three.addEventListener("click", e => {
    if (isFloatButtonActive === true) {
        if (sign === "") {  
            firstNumber += 3      
            operandOne = parseFloat(firstNumber)
            output.textContent = operandOne
        }
        if (sign != "") {
            secondNumber += "3"
            operandTwo = parseFloat(secondNumber)
            output.textContent += 3
        } 
    }
    else if (isFloatButtonActive === false ) {
        if (sign === "") {
            firstNumber += "3"
            operandOne = parseInt(firstNumber)
            output.textContent = operandOne
        }
        if (sign != "") {
            secondNumber += "3"
            operandTwo = parseInt(secondNumber)
            output.textContent += 3
        }
    }
})

const four = document.querySelector("#number-four")
four.addEventListener("click", e => {
    if (isFloatButtonActive === true) {
        if (sign === "") {  
            firstNumber += 4      
            operandOne = parseFloat(firstNumber)
            output.textContent = operandOne
        }
        if (sign != "") {
            secondNumber += "4"
            operandTwo = parseFloat(secondNumber)
            output.textContent += 4
        } 
    }
    else if (isFloatButtonActive === false ) {
        if (sign === "") {
            firstNumber += "4"
            operandOne = parseInt(firstNumber)
            output.textContent = operandOne
        }
        if (sign != "") {
            secondNumber += "4"
            operandTwo = parseInt(secondNumber)
            output.textContent += 4
        }
    }
})

const five = document.querySelector("#number-five")
five.addEventListener("click", e => {
    if (isFloatButtonActive === true) {
        if (sign === "") {  
            firstNumber += 5      
            operandOne = parseFloat(firstNumber)
            output.textContent = operandOne
        }
        if (sign != "") {
            secondNumber += "5"
            operandTwo = parseFloat(secondNumber)
            output.textContent += 5
        } 
    }
    else if (isFloatButtonActive === false ) {
        if (sign === "") {
            firstNumber += "5"
            operandOne = parseInt(firstNumber)
            output.textContent = operandOne
        }
        if (sign != "") {
            secondNumber += "5"
            operandTwo = parseInt(secondNumber)
            output.textContent += 5
        }
    }
})

const six = document.querySelector("#number-six")
six.addEventListener("click", e => {
    if (isFloatButtonActive === true) {
        if (sign === "") {  
            firstNumber += 6      
            operandOne = parseFloat(firstNumber)
            output.textContent = operandOne
        }
        if (sign != "") {
            secondNumber += "6"
            operandTwo = parseFloat(secondNumber)
            output.textContent += 6
        } 
    }
    else if (isFloatButtonActive === false ) {
        if (sign === "") {
            firstNumber += "6"
            operandOne = parseInt(firstNumber)
            output.textContent = operandOne
        }
        if (sign != "") {
            secondNumber += "6"
            operandTwo = parseInt(secondNumber)
            output.textContent += 6
        }
    }
})

const seven = document.querySelector("#number-seven")
seven.addEventListener("click", e => {
    if (isFloatButtonActive === true) {
        if (sign === "") {  
            firstNumber += 7      
            operandOne = parseFloat(firstNumber)
            output.textContent = operandOne
        }
        if (sign != "") {
            secondNumber += "7"
            operandTwo = parseFloat(secondNumber)
            output.textContent += 7
        } 
    }
    else if (isFloatButtonActive === false ) {
        if (sign === "") {
            firstNumber += "7"
            operandOne = parseInt(firstNumber)
            output.textContent = operandOne
        }
        if (sign != "") {
            secondNumber += "7"
            operandTwo = parseInt(secondNumber)
            output.textContent += 7
        }
    }
})

const eight = document.querySelector("#number-eight")
eight.addEventListener("click", e => {
    if (isFloatButtonActive === true) {
        if (sign === "") {  
            firstNumber += 8      
            operandOne = parseFloat(firstNumber)
            output.textContent = operandOne
        }
        if (sign != "") {
            secondNumber += "8"
            operandTwo = parseFloat(secondNumber)
            output.textContent += 8
        } 
    }
    else if (isFloatButtonActive === false ) {
        if (sign === "") {
            firstNumber += "8"
            operandOne = parseInt(firstNumber)
            output.textContent = operandOne
        }
        if (sign != "") {
            secondNumber += "8"
            operandTwo = parseInt(secondNumber)
            output.textContent += 8
        }
    }
})

const nine = document.querySelector("#number-nine")
nine.addEventListener("click", e => {
    if (isFloatButtonActive === true) {
        if (sign === "") {  
            firstNumber += 9      
            operandOne = parseFloat(firstNumber)
            output.textContent = operandOne
        }
        if (sign != "") {
            secondNumber += "9"
            operandTwo = parseFloat(secondNumber)
            output.textContent += 9
        } 
    }
    else if (isFloatButtonActive === false ) {
        if (sign === "") {
            firstNumber += "9"
            operandOne = parseInt(firstNumber)
            output.textContent = operandOne
        }
        if (sign != "") {
            secondNumber += "9"
            operandTwo = parseInt(secondNumber)
            output.textContent += 9
        }
    }
})

const zero = document.querySelector("#number-zero")
zero.addEventListener("click", e => {
    if ((sign === "" && firstNumber === "0") || (sign !== "" && secondNumber === "0")) {
        return;
    }
    if (sign === "") {
        if (firstNumber === "") {
            firstNumber = "0";
        } else {
            firstNumber += "0";
        }
        operandOne = parseFloat(firstNumber);
        output.textContent = firstNumber; 
    } else {
        if (secondNumber === "") {
            secondNumber = "0";
        } else {
            secondNumber += "0";
        }
        operandTwo = parseFloat(secondNumber);
        output.textContent += "0";
    }
});

const resetButton = document.querySelector("#reset")
resetButton.addEventListener("click", reset)

function reset() {
    operandOne = undefined
    operandTwo = undefined
    firstNumber = ""
    secondNumber = ""
    sign = ""
    conter = 2
    anyButtonActive = 0
    isFloatButtonActive = false
    result = 0
    output.textContent = 0
    operator.classList.remove("button-active")  
    subtraction.classList.remove("button-active")
    multiplication.classList.remove("button-active")
    division.classList.remove("button-active")  
    decimal.classList.remove("decimal-active")        
}
