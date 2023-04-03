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


//=================== ACCORDIAN ONGOING RESEARCH ===================
const ongoingWorkContent = document.getElementsByClassName(
    "ongoing-work-content"
  ),
  ongoingWorkHeader = document.querySelectorAll(".ongoing-work-header");


function togggleOngoingWork() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < ongoingWorkContent.length; i++) {
    ongoingWorkContent[i].className = "ongoing-work-content ongoing-work-close";
  }

  if (itemClass === "ongoing-work-content ongoing-work-close") {
    this.parentNode.className = "ongoing-work-content ongoing-work-open";
  }
}

ongoingWorkHeader.forEach((el) => {
  el.addEventListener("click", togggleOngoingWork);
});

