$(document).ready(function() {
    $('.grid').masonry({
      // options
      itemSelector: '.grid-item',
      gutter: 20,
      percentPosition: true,
      isResizable: true,
      columnWidth: '.size'
    });
    $('.gallery-item').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });
  });
  