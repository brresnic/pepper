$( document ).ready(function() {
  $( window ).resize(function() {
    console.log($('#merry-img').height());
    $('#main').height($('#merry-img').height());
  });


});