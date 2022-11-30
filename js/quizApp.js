let MCQS = [{
  question: 'what does html stand for ?',
  choice1: 'Hyper Text Markup Lessons',
  choice2: 'Hyper Tells Mark Language',
  choice3:'Hyper Text Mark Up Language',
  choice4:'Hyper Marking Language',
  answer:2,
},
{
  question: 'what does CSS stand for ?',
  choice1: 'Cascading Style Sheet',
  choice2: 'Cascade style Sheet',
  choice3:'Cascade styles sheet',
  choice4:'Cascaing styels shit',
  answer:0,
},
{
  question: 'What tag do we use to link ?',
  choice1: '<link>,<style scr"">and<a>',
  choice2: '<a>',
  choice3:'<style>',
  choice4:'<link>',
  answer:0,
},
{
  question: 'What tag adds horizontal line ?',
  choice1: '<footer>',
  choice2: '<underline>',
  choice3:'<ul>',
  choice4:'<hr>',
  answer:3,
},
{
  question: 'What is the image tag ?',
  choice1: '<img>',
  choice2: '<Image>',
  choice3:'<images>',
  choice4:'<IMAGE>',
  answer:0,
},
{
  question: 'What tag do we use to list ?',
  choice1: '<list>',
  choice2: '<lists>',
  choice3:'<List>',
  choice4:'<li>',
  answer:3,
},
{
  question: 'what do you use to add inner space ?',
  choice1: 'padding',
  choice2: 'margin',
  choice3:'innerspace',
  choice4:'spacing',
  answer:0,
},
{
  question: 'What adds outer space ?',
  choice1: 'padding',
  choice2: 'margin',
  choice3:'innerspace',
  choice4:'spacing',
  answer:1,
},
{
  question: 'What adds color to a text ?',
  choice1: 'color',
  choice2: 'text-color',
  choice3:'coloring',
  choice4:'colors',
  answer:0,
},
{
  question: 'What adds color to background ?',
  choice1: 'backgrounds',
  choice2: 'colors for background',
  choice3:'background-color',
  choice4:'color all',
  answer:2,
}
];
let start = document.querySelector('#start');


let guide = document.querySelector('#rules');
let exit = document.querySelector('#exit');
let continueBtn = document.querySelector('#continue');


let quiz = document.querySelector('#quiz');
let time = document.querySelector('#time');


let questionNo = document.querySelector('#questionNo');
let questionText = document.querySelector('#questionText');


let option1 = document.querySelector('#option1');
let option2 = document.querySelector('#option2');
let option3 = document.querySelector('#option3');
let option4 = document.querySelector('#option4');


let total_correct = document.querySelector('#total_correct');
let next_question = document.querySelector('#next_question');


let result = document.querySelector('#result');
let points = document.querySelector('#points');
let quit = document.querySelector('#quit');
let startAgain = document.querySelector('#startAgain');


let choice_que = document.querySelectorAll('.choice_que');


let index = 0;
let timer = 0;
let interval = 0;

let correct = 0;



let UserAns = undefined;


start.addEventListener('click', ()=>{
  start.style.display = 'none';
  guide.style.display = 'block';
});


exit.addEventListener('click', ()=>{
  start.style.display = 'block';
  guide.style.display = 'none';
});


let countDown = () =>{
  if(timer === 20){
    clearInterval(interval);
    next_question.click();
  }
  else{
    timer ++;
    time.innerText = timer;
  }
};

let loadData = ()=>{
  questionNo.innerText = index + 1 + '. ';
  questionText.innerText = MCQS[index].question;
  option1.innerText = MCQS[index].choice1;
  option2.innerText = MCQS[index].choice2;
  option3.innerText = MCQS[index].choice3;
  option4.innerText = MCQS[index].choice4;


  timer = 0;
}

loadData();


continueBtn.addEventListener('click', ()=>{
  quiz.style.display = 'block';
  guide.style.display = 'none';

  interval = setInterval(countDown, 1000);
  loadData();
  

  choice_que.forEach(removeActive =>{
    removeActive.classList.remove('active');
  })
  total_correct.innerHTML = `${correct = 0} out of ${MCQS.length} Questions`;
});
choice_que.forEach((choices,choiceNo)=>{
  choices.addEventListener('click', ()=>{
    choices.classList.add('active');

    if(choiceNo === MCQS[index].answer){
      correct++;
    }
    else{
      correct += 0;

      clearInterval(interval);
    }

    for(i = 0; i <= 3; i++)
    {
      choice_que[i].classList.add('disabled')
    }
  })
});



next_question.addEventListener('click', ()=>{
  if(index !== MCQS.length - 1){
    index++;
    choice_que.forEach(removeActive =>{
      removeActive.classList.remove('active');
    })

    loadData();

    total_correct.style.display = 'block';
    total_correct.innerHTML = `${correct} out of ${MCQS.length} Questions`;
    clearInterval(interval);
    interval = setInterval(countDown, 1000);
  }
  else{
   index = 0;

   clearInterval(interval);
   quiz.style.display = 'none';
   points.innerHTML = `You Got ${correct} out of ${MCQS.length}`;
   result.style.display = 'block';
  }
  for(i = 0; i <= 3; i++)
  {
    choice_que[i].classList.remove('disabled');
  }
})
quit.addEventListener('click', ()=>{
  start.style.display = 'block';
  result.style.display = 'none';
});
startAgain.addEventListener('click', ()=>{
  guide.style.display = 'block';
  result.style.display = 'none';
})