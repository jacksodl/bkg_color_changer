const colorBtn = document.querySelector('.colorBtn');
const resetBtn = document.querySelector('#resetBtn')
const bckgColor = document.querySelector('body');
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 
'indigo', 'violet'];


// Change the color with a click and make it random
colorBtn.addEventListener('click', changeColor);
function changeColor() {
  let random = Math.floor(Math.random() * colors.length)
  bckgColor.style.backgroundColor = colors[random];
}

// Reset the color back to orignial 
resetBtn.addEventListener('click', resetColor)
function resetColor() {
  bckgColor.style.backgroundColor = ""
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
document.getElementById('today').innerHTML = "Today is " + day;





