const colorBtn = document.querySelector('.colorBtn');
const resetBtn = document.querySelector('#resetBtn')
const bckgColor = document.querySelector('body');
const colorChange = document.querySelector('.colorchange');
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 
'F'];


// Change the color with a click and make it random
colorBtn.addEventListener('click', changeColor);
function changeColor() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomNumber()];
    }
    colorChange.textContent = hexColor;
    bckgColor.style.backgroundColor = hexColor;
}

function randomNumber () {
    return Math.floor(Math.random() * hex.length);
};



// Reset the color back to orignial 
resetBtn.addEventListener('click', resetColor)
function resetColor() {
  bckgColor.style.backgroundColor = ""
  colorChange.textContent = '';
}

// Pick which day of the week it is 
let day;
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
};  
document.getElementById('today').innerHTML = "Today is still " + day;





