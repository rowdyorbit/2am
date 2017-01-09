(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.tooltipped').tooltip({delay: 50});
    $('.slider').slider({
    	full_width: true,
    	interval: 8000
    });
     $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      starting_top: '4%', // Starting top style attribute
      ending_top: '10%', // Ending top style attribute

    });
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
    $('#nav').Stickyfill();
    $(".button-collapse").sideNav()
  }); // end of document ready
})(jQuery); // end of jQuery name space