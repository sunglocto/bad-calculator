/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('Hello 🌍');
let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

let a = 0

let hasErrored = 0

let π = Math.PI;

let container = document.getElementById('container');
buttons.map ( button => {
  button.addEventListener('click', (e) => {
    switch(e.target.innerText) {
      case 'C':
        display.innerText = '';
        break;
      case '←':
        errorHandler()
        display.innerText = display.innerText.slice(0, -1);
        if (display.innerText === "Infinit") {
          display.innerText = "";
         }
        break;
      case '=':
        
        try{
          display.innerText = +(eval(display.innerText)).toFixed(2);
          a = eval(display.innerText)
          if (display.innerText === "undefined" || display.innerText === "NaN" ) {
            display.innerText = "0"
          }
        } catch {
          display.innerText = "An error occured."
          hasErrored = 1
        }
        
        break;
      default:
        errorHandler()
        display.innerText += e.target.innerText;
        
    }
  });
});

function errorHandler() {
  if (hasErrored === 1) {
    display.innerText = ""
    hasErrored = 0
  }
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(registration => {
    console.log("SW Registered!");
    console.log(registration);
  }).catch(error => {
    console.log("SW Registration Failed!");
    console.log(error);
  })
  
}
