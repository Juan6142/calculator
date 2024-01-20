let operandOne = undefined
let operandTwo = undefined
let firstNumber = ""
let secondNumber = ""
let test = 0
let sign = ""
let array = []
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
    if (operandOne != undefined) {
        output.textContent += "/"
    }
    console.log("Operator:" + " " + sign)
})


//operate
function operate(operandOne, operandTwo) {
    isFloatButtonActive = false
    decimal.classList.remove("decimal-active")
    if (sign === "+" && result === 0) {
       result = add(operandOne, operandTwo) 
       console.log(`Result: ${result}`)
       output.textContent = result
       
    } else if (sign === "+" && result != 0) {
       result = add(operandOne, operandTwo) 
       console.log(`Result${conter}: ${result} `)
       output.textContent = result 
       conter++   
    }
    if (sign === "-" && result === 0) {
        result = subtract(operandOne, operandTwo)
        console.log(`Result: ${result}`)
        output.textContent = result
 
     } else if (sign === "-" && result != 0) {
        result = subtract(operandOne, operandTwo)
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
    operandTwo = undefined
    secondNumber = ""
    anyButtonActive = 0
    subtraction.classList.remove("button-active")
    operator.classList.remove("button-active")
    return result
}

//add
function add() {
    if (result === 0) {
        sign = ""
        return operandOne + operandTwo
    } else if (result != 0) {
        operandOne = result
        return operandOne + operandTwo
    }
}

//sustract
function subtract() {
    if (result === 0) {
        sign = ""
        return operandOne - operandTwo
    } else if (result != 0) {
        operandOne = result
        return operandOne - operandTwo
    }
}

function multiply() {
    if (result === 0) {
        sign = ""
        return operandOne * operandTwo
    } else if (result != 0) {
        operandOne = result
        return operandOne * operandTwo
    }
}

function divide() {
    if (operandTwo === 0) {
        return "OPPS SYNTAX ERROR"
    }
    if (result === 0) {
        sign = ""
        array.push(secondNumber)
        return operandOne / operandTwo
    } else if (result != 0) {
        operandOne = result
        return operandOne / operandTwo
    }
}

//decimal
const decimal = document.querySelector("#dot-decimal")
decimal.addEventListener("click", activeDecimal)

// activate decimal button
function activeDecimal(e) {
    // Permitir al usuario activar el botón en el primer operando
    if (!isFloatButtonActive) {
        decimal.classList.add("decimal-active");
        output.textContent += ".";
        
        if (sign === "") {
            firstNumber += ".";
        }
        
        if (sign !== "") {
            secondNumber += ".";
            
        }

        // Después de usarlo en el primer operando, desactivar automáticamente
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
        // No hacer nada si la cadena actual es cero
        return;
    }
    if (sign === "") {
        if (firstNumber === "") {
            firstNumber = "0";
        } else {
            firstNumber += "0";
        }
        operandOne = parseFloat(firstNumber);
        output.textContent = firstNumber;  // Actualizar el contenido completo
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



