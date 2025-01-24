const containerElem = document.querySelector(".container");

const leftElem = document.querySelector(".left");
const rightElem = document.querySelector(".right");

leftElem.addEventListener("mouseenter", ()=>{
  containerElem.classList.add("active-left")
});

leftElem.addEventListener("mouseleave", ()=>{
  containerElem.classList.remove("active-left")
});

rightElem.addEventListener("mouseenter", ()=>{
  containerElem.classList.add("active-right")
});
rightElem.addEventListener("mouseleave", ()=>{
  containerElem.classList.remove("active-right")
});


