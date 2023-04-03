// ================ STICKY NAVBAR ============

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


//=============== jQuery NEWS & EVENTS Scroll effect =================//

$(function () {
  var tickerLength = $(".news_events_container ul li").length;
  var tickerHeight = $(".news_events_container ul li").outerHeight();
  var tickerFade = $(".news_events_container ul li").fadeTo(0.4);
  $(".news_events_container ul li:last-child").prependTo(
    ".news_events_container ul li:first-child"
  );
  
  var hovering = false;
  function moveTop() {
    if(hovering === false){
      $(".news_events_container ul").animate(
        {
          top: -tickerHeight,
        },
        function () {
          $(".news_events_container ul li:first-child").appendTo(
            ".news_events_container ul"
          );
          $(".news_events_container ul").css("top", "");
        }
      );
    }
    $(".news_events_container ul").hover(
        function () {
          // console.log('Mouse hover');
          hovering = true;
        },
        function(){
          // console.log('Mouse out');
          hovering = false;
        });
    // console.log(hovering);
  }
  setInterval(function () {
    moveTop();
  }, 2500);
});
//====== NOTE: END mouseover & mouseout Event ======//


// //=================== Show & Hide NAV Menu for Tablets & PHONE ===================

// //====== Show NAV Menu =======

const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  closeBtn.style.display = "contents";
  menuBtn.style.display = "none";
  menu.style.display = "flex";
});

//======== Hide NAV Menu =======

closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "contents";
});
