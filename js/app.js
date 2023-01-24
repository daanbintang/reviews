// LOCAL REVIEWS DATA
const reviews = [
  {
    id: 1,
    name: "Jhon Doe",
    job: "Web Developer",
    img: "asset/person-1.jpg",
    desc: "A Web Developer profile is an introductory section on your resume that highlights your relevant qualifications and skills. Including a professional profile can have some advantages. First, your resume profile concisely features your skills and professional experience in a way that gets employers' attention",
  },
  {
    id: 2,
    name: "Stiven Joed",
    job: "Product Designer",
    img: "asset/person-2.jpg",
    desc: "A Product Designer profile is an introductory section on your resume that highlights your relevant qualifications and skills. Including a professional profile can have some advantages. First, your resume profile concisely features your skills and professional experience in a way that gets employers' attention",
  },
  {
    id: 3,
    name: "Albert Gerrad",
    job: "Software Egineer",
    img: "asset/person-3.jpg",
    desc: "A Software Engineer profile is an introductory section on your resume that highlights your relevant qualifications and skills. Including a professional profile can have some advantages. First, your resume profile concisely features your skills and professional experience in a way that gets employers' attention",
  },
  {
    id: 4,
    name: "Stive Berd",
    job: "Web Developer",
    img: "asset/person-4.jpg",
    desc: "A Web Developer profile is an introductory section on your resume that highlights your relevant qualifications and skills. Including a professional profile can have some advantages. First, your resume profile concisely features your skills and professional experience in a way that gets employers' attention",
  },
];
// SELECT ITEMS
const profileImg = document.getElementById("profile");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const randomBtn = document.getElementById("random-btn");

//SET STARTING ITEM
let currItems = 0;
//LOAD INITIAL ITEM
window.addEventListener("DOMContentLoaded", () => {
  showPerson();
});

// SHOW PERSON BASED ON ITEM
function showPerson() {
  const item = reviews[currItems];
  profileImg.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.desc;
}
// PREV BUTTON ON CLICK
nextBtn.addEventListener("click", () => {
  currItems++;
  if (currItems > reviews.length - 1) {
    currItems = 0;
  }
  showPerson();
});
prevBtn.addEventListener("click", () => {
  currItems--;
  if (currItems < 0) {
    currItems = reviews.length - 1;
  }
  showPerson();
});
randomBtn.addEventListener("click", () => {
  currItems = Math.floor(Math.random() * reviews.length);
  showPerson();
});
