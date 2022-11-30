let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let hOne = document.getElementById('h1');
let background = document.getElementById('background');



minus.addEventListener('click', function(){
  hOne.innerHTML--;
  if (hOne.innerHTML < 0 ){
    hOne.style.color = 'red';
  }
  if (hOne.innerHTML == 0){
    hOne.style.color = 'black';
  }
 })

plus.addEventListener('click', function(){
 hOne.innerHTML++;
 if (hOne.innerHTML > 0){
  hOne.style.color = 'green';
 }
 if (hOne.innerHTML == 0){
  hOne.style.color = 'black';
}
})