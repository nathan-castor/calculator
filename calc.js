var buttons = document.querySelectorAll('.button')
var display = document.getElementById('display')
var equals = document.getElementById('equals')
var clearButton = document.getElementById('clear')
var backSpace = document.getElementById('backspace')
initClick()
equals.addEventListener('click', evaluate)
clearButton.addEventListener('click', clearFn)
backSpace.addEventListener('click', back)
function initClick () {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',express)
  }
}
function express() {
 display.innerText += (this.innerText + ' ')
}
function evaluate() {
  console.log("Equals was clicked");
  display.innerText = eval(display.innerText)
}
function clearFn() {
  display.innerText = ''
}
function back() {
  display.innerText = display.innerText.slice(0,display.innerText.length - 1)
}


// var calculator = {
//   buttons: document.querySelectorAll('.button'),
//
//   equals: document.getElementById('equals'),
//
//   initClick: function () {
//     for (var i = 0; i < buttons.length; i++) {
//       calculator.buttons[i].addEventListener('click',calculator.express)
//     }
//   },
//
//   express: function () {
//     calculator.display.innerText += (this.innerText + ' ')
//   },
//
//   evaluate: function () {
//     eval(calculator.display.innerText)
//   }
// }
