const button = document.getElementById('button');
const body = document.querySelector('body');
const colors = ['#2980B9', '#34495E', '#27AE60', '#9B59B6', '#F39C12', '#E74C3C', '#45B39D', '#F1C40F'];

// body.style.backgroundColor = #33A1FF;
button.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
const colorIndex = parseInt(Math.random()*colors.length)
  body.style.backgroundColor = colors[colorIndex];
  // changeBackgroundColor();
}
