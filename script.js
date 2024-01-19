let operandOne = undefined
let operandTwo = undefined
let firstNumber = ""
let secondNumber = ""
let test = 0
let sign = ""
let array = []
let conter = 2
result = 0

const output = document.querySelector("#output")
const equals = document.querySelector("#equal")
equals.addEventListener("click", operate)

let operator = document.querySelector("#add")
operator.addEventListener("click", e => {
    sign = "+"
    array.push(firstNumber)
    array.push(sign)
    
    if (operandOne != undefined) {
        output.textContent += "+"
    }
    console.log("Operator:" + " " + sign)

})

let subtraction = document.querySelector("#subtraction")
subtraction.addEventListener("click", e => {
    sign = "-"
    array.push(firstNumber)
    array.push(sign)
    
    if (operandOne != undefined) {
        output.textContent += "-"
    }
    console.log("Operator:" + " " + sign)

})


//operate
function operate(operandOne, operandTwo) {
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
    operandTwo = undefined
    secondNumber = ""
    return result
}

//add
function add() {
    if (result === 0) {
        sign = ""
        array.push(secondNumber)
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
        array.push(secondNumber)
        return operandOne - operandTwo
    } else if (result != 0) {
        operandOne = result
        return operandOne - operandTwo
    }
}

//numbers
const one = document.querySelector("#number-one")
one.addEventListener("click", e => {
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
})

const two = document.querySelector("#number-two")
two.addEventListener("click", e => {
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
})

const three = document.querySelector("#number-three")
three.addEventListener("click", e => {
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
})

const four = document.querySelector("#number-four")
four.addEventListener("click", e => {
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
})

const five = document.querySelector("#number-five")
five.addEventListener("click", e => {
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
})

const six = document.querySelector("#number-six")
six.addEventListener("click", e => {
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
})

const seven = document.querySelector("#number-seven")
seven.addEventListener("click", e => {
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
})

const eight = document.querySelector("#number-eight")
eight.addEventListener("click", e => {
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
})

const nine = document.querySelector("#number-nine")
nine.addEventListener("click", e => {
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
})

const zero = document.querySelector("#number-zero")
zero.addEventListener("click", e => {
    if (sign === "") {
        firstNumber += "0"
        operandOne = parseInt(firstNumber)
        output.textContent = operandOne
    }
    if (sign != "") {
        secondNumber += "0"
        operandTwo = parseInt(secondNumber)
        output.textContent += 0
    }
})

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}



