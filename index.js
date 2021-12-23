let num1 = 8
let num2 = 2
let sumEl = document.getElementById("sum-el")
document.getElementById("num1").textContent = num1
document.getElementById("num2").textContent = num2


function add() {
  let answer = num1 + num2
  sumEl.textContent = "Sum: " + answer
}

function subtract() {
  let answer = num1 - num2
  sumEl.textContent = "Sum: " + answer
}

function divide() {
  let answer = num1 / num2
  sumEl.textContent = "Sum: " + answer
}

function multiply() {
  let answer = num1 * num2
  sumEl.textContent = "Sum: " + answer
}

add()
subtract()
multiply()
divide()