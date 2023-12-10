
//POPOVER

$(function () {
    $('[data-toggle="popover"]').popover()
  })
  
  // Enable all popovers and tooltips
    $('[data-toggle="popover"]').popover({
        html: true,
        offset: '-68px' //offset the popover content
    });
    
$('body').on('click', function (e) {
    //did not click a popover toggle or popover
    if ($(e.target).data('toggle') !== 'popover'
        && $(e.target).parents('.popover.in').length === 0) { 
        $('[data-toggle="popover"]').popover('hide');
    }
});

$(document).on('click', function (e) {
    // Check if the click target is not a popover toggle or a popover
    if (
        $(e.target).data('toggle') !== 'popover' &&
        $(e.target).parents('.popover.in').length === 0
    ) { 
        // Hide any open popovers
        $('[data-toggle="popover"]').popover('hide');
    }
});

// CAROUSEL

$(document).ready(function() {
  // Assuming each carousel item has the class "carousel-item"
  $('.carousel-item').on('click', function() {
    $('#myCarousel').carousel('next');
  });
});


$('#myCarousel').carousel({
    interval: 4000, // Set the interval (in milliseconds) between slide transitions
    pause: 'hover', // Pause the carousel on hover
    ride: 'carousel', // Start carousel cycling
});

window.addEventListener('contextmenu', function (e) {
    e.preventDefault(); // prevent right click
});


// start carousel on random slide

$(document).ready(function() {
    var numberOfSlides = $('.carousel-item').length;
    var randomIndex = Math.floor(Math.random() * numberOfSlides);
  
    $('.carousel-item').removeClass('active');
  
    $('.carousel-item').eq(randomIndex).addClass('active');

    $('.carousel-item.active img').attr('loading', 'lazy');
  });

  $(document).ready(function() {
    // Disable image dragging for all carousel images
    $('.carousel-item img').on('dragstart', function(event) {
        event.preventDefault();
    });
});