$(function() {

    turtles();
    $(document).scroll(turtles);
  });
  
  function turtles() {
    while ( $(window).scrollTop() + $(window).height() >= $(document).height()
    ) {
      $(document.body).append($("<div>").addClass('turtle'));
    }
  }