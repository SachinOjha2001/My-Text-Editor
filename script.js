alert("Welcome");
confirm("Are You  Ready To Do It, Click  On Ok");
let inp=document.querySelector("#Text");
let p=document.querySelector("p");
inp.addEventListener("input",function(){
   
    p.innerText=inp.value;
});

