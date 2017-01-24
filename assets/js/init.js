(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.tooltipped').tooltip({delay: 50});
    $('.carousel.carousel-slider').carousel({full_width: true});
    $('.slider').slider({
    	full_width: true,
    	interval: 8000
    });
    $('.parallax').parallax();
     $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      starting_top: '4%', // Starting top style attribute
      ending_top: '10%', // Ending top style attribute

    });
    $('.chips').material_chip();
    $('ul.tabs').tabs();
     var options = [
       {selector: '#rule1', offset: 0, callback: function(el) {
      Materialize.fadeInImage($(el));
    } },
    {selector: '#rule2', offset: 0, callback: function(el) {
      Materialize.fadeInImage($(el));
    } },
    {selector: '#rule3', offset: 0, callback: function(el) {
      Materialize.fadeInImage($(el));
    } }
      ];
    
    Materialize.scrollFire(options);
    $('select').material_select();
    $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 2 // Creates a dropdown of 15 years to control year
    });
    $('#modal1').on('keyup keypress', function(e) {
      var keyCode = e.keyCode || e.which;
      if (keyCode === 13) { 
        e.preventDefault();
        return false;
      }
    });
    $('#nav').Stickyfill();
    $(".button-collapse").sideNav()
  }); // end of document ready
})(jQuery); // end of jQuery name space