$(document).ready(function() {
  $('.float').jqFloat({
    width: 300,
    height: 300,
    speed: 4000
  });
});

$(document).ready(function(){
  $(".bigwax img, .squeezer img").each( function() {
    var posneg = Math.floor( (Math.random() * 2)  );
    if (posneg == 0) {posneg=-1} else {posneg=1};
    var angle = Math.floor( (Math.random() * 100) * posneg );
    $(this).css( 'transform', 'rotate(' + angle + 'deg)' );
    $(this).css( '-moz-transform', 'rotate(' + angle + 'deg)' );
    $(this).css( '-webkit-transform', 'rotate(' + angle + 'deg)' );
    $(this).css( '-o-transform', 'rotate(' + angle + 'deg)' );
  });
});
