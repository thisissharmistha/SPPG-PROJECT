// const activePage = window.location.pathname;
// const navLinks = document.querySelectorAll('nav ul li a');


// navLinks.forEach(link => {
//   if(link.href.includes(`${activePage}`)) {
//     link.classList.add('active');
//   }
// });


$(function(){
  var current = location.pathname;
  $('#navbar li a').each(function(){
      var $this = $(this);
      // if the current path is like this link, make it active
      if($this.attr('href').indexOf(current) !== -1){
          $this.addClass('active');
      }
  })
})