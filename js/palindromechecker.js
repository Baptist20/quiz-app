let input = document.getElementById('input');
let btn = document.getElementById('btn');
let demo = document.getElementById('demo');


btn.addEventListener('click', function () {
  let palinText = input.value;
  let reversePalinText = palinText.split('').reverse('').join('');
  if (palinText == reversePalinText){
    demo.innerHTML = palinText + ' is a Palindrome';
  }
  else{
    demo.innerHTML = palinText + ' is not a Palindrome';
  }
});