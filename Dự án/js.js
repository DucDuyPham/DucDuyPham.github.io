

$( '.food' ).click(function( event ) {
    event.preventDefault();
    $(".drink-op").addClass("andi");
    $(".bakery-op").addClass("andi");
    $(".food-op").removeClass("andi");
    $(".drink-op").removeClass("hienlen");
    $(".bakery-op").removeClass("hienlen");
    $(".food-op").addClass("hienlen");
  });
  $( '.bakery' ).click(function( event ) {
    event.preventDefault();
    $(".drink-op").addClass("andi");
    $(".food-op").addClass("andi");
    $(".bakery-op").removeClass("andi");
    $(".drink-op").removeClass("hienlen");
    $(".food-op").removeClass("hienlen");
    $(".bakery-op").addClass("hienlen");
  });
  $( '.drink' ).click(function( event ) {
    event.preventDefault();
    $(".bakery-op").addClass("andi");
    $(".food-op").addClass("andi");
    $(".drink-op").removeClass("andi");
    $(".bakery-op").removeClass("hienlen");
    $(".food-op").removeClass("hienlen");
    $(".drink-op").addClass("hienlen");
  });
  