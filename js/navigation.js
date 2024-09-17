$(document).ready(function() {
    // When the collapse menu starts to show (animation begins)
    $('.navbar-collapse').on('show.bs.collapse', function() {
      $('.navbar').addClass('nav-change');
    });
  
    // When the collapse menu starts to hide (animation begins)
    $('.navbar-collapse').on('hide.bs.collapse', function() {
      $('.navbar').removeClass('nav-change');
    });
  });
  

  const burger = document.getElementById('burger');

burger.addEventListener('click', function() {
  this.classList.toggle('cross');
});