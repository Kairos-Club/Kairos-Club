
zIndex = 100;
$('.pep').pep({
  useCSSTranslation: false,
  constrainTo: '.main',
  initiate: function(){
    zIndex ++;
    this.$el.css({ zIndex: zIndex });
  }
});

$( '.hello, .avatar' ).each(function( index ) {
  $(this).css({
    left : Math.random() * ($('.main').width() - $(this).width()),
    top : Math.random() * ($('.main').height() - $(this).height())
  }).addClass('up');
});

$(window).resize(function(){
  $( '.hello, .avatar' ).each(function( index ) {
    $(this).css({
      left : Math.random() * ($('.main').width() - $(this).width()),
      top : Math.random() * ($('.main').height() - $(this).height())
    }).addClass('up');
  });
});
