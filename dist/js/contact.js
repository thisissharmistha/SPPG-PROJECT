window.onscroll=function(){myFunction()};var navbar=document.getElementById("navbar"),sticky=navbar.offsetTop;function myFunction(){window.pageYOffset>=sticky?navbar.classList.add("sticky"):navbar.classList.remove("sticky")}const menu=document.querySelector(".nav_menu"),menuBtn=document.querySelector("#open-menu-btn"),closeBtn=document.querySelector("#close-menu-btn");menuBtn.addEventListener("click",(()=>{closeBtn.style.display="contents",menuBtn.style.display="none",menu.style.display="flex"})),closeBtn.addEventListener("click",(()=>{menu.style.display="none",closeBtn.style.display="none",menuBtn.style.display="contents"}));let submitFormData=document.getElementById("submitForm");submitFormData.addEventListener("click",(()=>{confirm("Submit Form?")?txt="Form Data Submitted.":txt="Cancelled!"}));let clearFormData=document.getElementById("clearForm");clearFormData.addEventListener("click",(()=>{confirm("Clear Form? This will remove all your answers and cannot be undone.")?txt="Form Data Cleared.":txt="Cancelled!"}));