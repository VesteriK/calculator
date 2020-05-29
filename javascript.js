//selectors
let screen = document.querySelector('.input');
let panel = document.querySelector('.buttons');
let equal = document.getElementById('result');
equal.classList.remove('buttons');

//eventListeners
panel.addEventListener('click', numberToScreen);
equal.addEventListener('click', resolve);

//functions
function numberToScreen(num){
   const button = num.target.innerHTML;
  if(button==='C'){
   let onScreen = (screen.innerHTML)
   screen.innerHTML = '0';
  }else
  if(screen.innerHTML=== '0'){
    screen.innerHTML = button;
  }else { 
    screen.innerHTML += button;
  }
 }

function resolve(){
  let onScreen = (screen.innerHTML)
  screen.innerHTML=Math.round(eval(onScreen) * 1000) / 1000
}