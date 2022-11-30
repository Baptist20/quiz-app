let form = document.getElementById('form');
let textInput = document.getElementById('textInput');
let empty = document.getElementById('empty');
let dateInput = document.getElementById('dateInput');
let textarea = document.getElementById('textarea');
let tasks = document.getElementById('tasks');
let add = document.getElementById('add');


form.addEventListener('submit', (e)=>{
  e.preventDefault();
  formValidation();
  
});


let formValidation =()=>{
  if (textInput.value === '') {
    console.log('failure');
    empty.innerHTML = 'Task cannot be empty';
  } else {
    console.log('success');
    empty.innerHTML = '';
    acceptData();
    add.setAttribute('data-bs-dismiss','modal');
  add.click();
  (()=>{
    add.setAttribute('data-bs-dismiss','');
  })()
  }
};

let data = {}

let acceptData =()=>{
  data['text'] = textInput.value;
  data['date'] = dateInput.value;
  data['description'] = textarea.value;
  creatTasks()
};

let creatTasks = ()=>{
  tasks.innerHTML += `
  <div>
  <span class="fw-bold">${data.text}</span><br>
  <span class="small text-secondary">${data.date}</span>
  <p>${data.description}</p>
  <span class="options">
    <i onClick = 'editTask(this)' data-bs-toggle="modal" data-bs-target="#form" class="fa-solid fa-pen-to-square"></i>
    <i onClick = 'deleteTask(this)' class= "fa-solid fa-trash-can"></i>
  </span>
</div>`;
resetForm()
}
let resetForm = () =>{
  textInput.value = '';
  dateInput.value = '';
  textarea.value = '';
};
let deleteTask = (e)=>{
  e.parentElement.parentElement.remove();
};

let editTask = (e) =>{
  let selectedTask = e.parentElement.parentElement;
  textInput.value = selectedTask.children[0].innerHTML;
  dateInput.value = selectedTask.children[1].innerHTML;
  textarea.value = selectedTask.children[2].innerHTML;
  e.parentElement.parentElement.remove()
}