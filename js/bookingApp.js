const reviews = [
  {
    id : 1,
    img : "/Assignment.Images/PicOne.jpg",
    name : "Ezimah Solomon",
    job : "Electrical Engineer",
    description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque possimus nesciunt porro magni aspernatur? Esse ratione repellendus eligendi? Optio voluptates velit ipsam? Nemo, omnis voluptatibus.!",
  },
  {
    id : 2,
    img : "/Assignment.Images/PicTwo.jpg",
    name : "Ezimah Promise",
    job : "Forestry",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptates perferendis est natus nemo fugiat, minima sapiente saepe consequatur nisi!",
  },
  {
    id : 3,
    img : "/Assignment.Images/PicThree.jpg",
    name : "Nelly Christian",
    job : "Nurse",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptates perferendis est natus nemo fugiat, minima sapiente saepe consequatur nisi Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptates perferendis est"
  },
  {
    id : 4,
    img : "/Assignment.Images/PicFour.jpg",
    name : "Emmanuel Arua",
    job : "Computer Scinece",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptates perferendis est natus nemo fugiat, minima sapiente saepe consequatur nisi Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vol"
  }
];


const img = document.getElementById("doctorImg");
const author = document.getElementById("name");
const job = document.getElementById("job");
const description = document.getElementById("description");

const randombtn = document.querySelector("#random");
const prevbtn = document.querySelector("#prev");
const nextbtn = document.querySelector("#next");

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
  change()
});

function change() {
  let item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  description.textContent = item.description;
};
nextbtn.addEventListener('click', function () {
  currentItem ++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  change();
})
prevbtn.addEventListener('click', function () {
  currentItem --;
  if (currentItem < 0) {
    currentItem = reviews.length - 1
  }
  change();
});
randombtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log('clicked');
  change();
})