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



//=================== ACCORDIAN ONGOING RESEARCH ===================

// Get all accordion headers
const accordionHeaders = document.querySelectorAll(".ongoing-work-header");

// Add click event listener to each header
accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    // Toggle the active class on the header
    header.classList.toggle("active");

    // Toggle the active class on the toggle icon
    const toggleIcon = header.querySelector("i");
    toggleIcon.classList.toggle("fa-angle-down");
    toggleIcon.classList.toggle("fa-angle-up");

    // Get the sibling content element
    const accordionContent = header.nextElementSibling;

    // Toggle the active class on the content element
    accordionContent.classList.toggle("active");
  });
});

//=================== Accordian For Funding and Collaborators ===================
// only for small screens (300px-600px)


// Get all accordion headers
const fundingCollaboratorsAccordionHeaders = document.querySelectorAll(
  ".funding_collaborators-accordian-header"
);

// Add click event listener to each header
fundingCollaboratorsAccordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    // Toggle the active class on the header
    header.classList.toggle("active");

    // Toggle the active class on the toggle icon
    const toggleIcon = header.querySelector("i");
    toggleIcon.classList.toggle("fa-angle-down");
    toggleIcon.classList.toggle("fa-angle-up");

    // Get the sibling content element
    const accordionContent = header.nextElementSibling;

    // Toggle the active class on the content element
    accordionContent.classList.toggle("active");
  });
});
