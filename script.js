const Button = document.getElementsByClassName("toggle")[0];
const Links = document.getElementsByClassName("links")[0];
const Close=document.querySelector('.close');

Button.addEventListener("click", () => {
  Links.classList.toggle("active");
  Close.style.display='block';
});

Close.addEventListener("click",()=>{
  Links.classList.remove('active');
  Close.style.display='none';
})