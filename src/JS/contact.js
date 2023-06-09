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




// =============== Submit & Reset Form Data ===============
// submit form data
let submitFormData = document.getElementById("submitForm");

submitFormData.addEventListener("click", () => {
  if (
    confirm(
      "Submit Form?"
    )
  ) {
    txt = "Form Data Submitted.";
  } else {
    txt = "Cancelled!";
  }
});


// clear form data
let clearFormData = document.getElementById("clearForm");

clearFormData.addEventListener("click", () => {
  if (
    confirm(
      "Clear Form? This will remove all your answers and cannot be undone."
    )
  ) {
    txt = "Form Data Cleared.";
  } else {
    txt = "Cancelled!";
  }
});