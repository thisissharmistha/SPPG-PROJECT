window.onscroll=function(){myFunction()};var navbar=document.getElementById("navbar"),sticky=navbar.offsetTop;function myFunction(){window.pageYOffset>=sticky?navbar.classList.add("sticky"):navbar.classList.remove("sticky")}let slideIndex=1;function plusSlides(e){showSlides(slideIndex+=e)}function currentSlide(e){showSlides(slideIndex=e)}function showSlides(e){let n,t=document.getElementsByClassName("mySlides");for(e>t.length&&(slideIndex=1),e<1&&(slideIndex=t.length),n=0;n<t.length;n++)t[n].style.display="none";t[slideIndex-1].style.display="block"}showSlides(slideIndex),$((function(){$(".news_events_container ul li").length;var e=$(".news_events_container ul li").outerHeight();$(".news_events_container ul li").fadeTo(.4);$(".news_events_container ul li:last-child").prependTo(".news_events_container ul li:first-child");var n=!1;setInterval((function(){!1===n&&$(".news_events_container ul").animate({top:-e},(function(){$(".news_events_container ul li:first-child").appendTo(".news_events_container ul"),$(".news_events_container ul").css("top","")})),$(".news_events_container ul").hover((function(){n=!0}),(function(){n=!1}))}),2500)}));const menu=document.querySelector(".nav_menu"),menuBtn=document.querySelector("#open-menu-btn"),closeBtn=document.querySelector("#close-menu-btn");menuBtn.addEventListener("click",(()=>{closeBtn.style.display="contents",menuBtn.style.display="none",menu.style.display="flex"})),closeBtn.addEventListener("click",(()=>{menu.style.display="none",closeBtn.style.display="none",menuBtn.style.display="contents"}));