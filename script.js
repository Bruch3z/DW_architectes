$(document).ready(function () {
// POPOVER //
// Enable popover for A propos button
$('#contact').popover({
  html: true,
  trigger: isTouchDevice() ? 'hover' : 'manual', // Use hover for touch devices, manual for others
  offset: '-60px'
});

// Toggle popover and update underlined class on contact button click
$('#contact').on(isTouchDevice() ? 'touchstart' : 'click', function (e) {
  e.stopPropagation();
  $(this).toggleClass('underlined');
  if (!isTouchDevice()) {
    // For non-touch devices, manually toggle the popover
    $('#contact').popover('toggle');
  }
});

// Remove underlined class when popover is hidden
$('#contact').on('hidden.bs.popover', function () {
  $(this).removeClass('underlined');
});

// Hide popover on body click only if the click is outside the contact button or the popover
$('body').on(isTouchDevice() ? 'touchstart' : 'click', function (e) {
  if (!$(e.target).closest('#contact, .popover').length) {
    $('#contact').removeClass('underlined');
    if (!isTouchDevice()) {
      // For non-touch devices, manually hide the popover
      $('#contact').popover('hide');
    }
  }
});

// Helper function to check if the device supports touch events
function isTouchDevice() {
  return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

  // CAROUSEL //

  $('.carousel-item').on('click', function() {
    $('#myCarousel').carousel('next');
  });

  $('#myCarousel').carousel({
    interval: 7500,
    ride: 'carousel'
  });

  window.addEventListener('contextmenu', function (e) {
    e.preventDefault(); // prevent right click
  });

  // Start carousel on random slide
  var numberOfSlides = $('.carousel-item').length;
  var randomIndex = Math.floor(Math.random() * numberOfSlides);

  $('.carousel-item').removeClass('active');
  $('.carousel-item').eq(randomIndex).addClass('active');
  $('.carousel-item.active img').attr('loading', 'lazy');

  // Disable image dragging for all carousel images
  $('.carousel-item img').on('dragstart', function(event) {
    event.preventDefault();
  });

  // LOGO effects //

  // Hover effect on individual letters
  $('.text-container h1 span').on('mouseover', function () {
    $(this).css('color', 'white');
  });

  $('.text-container h1 span').on('mouseout', function () {
    $(this).css('color', '');
  });
});

// Check if the device is not a mobile device
if (!window.matchMedia('(max-width: 768px)').matches) {
  // Hover effect on individual letters
  $('.text-container h1 span').on('mouseover', function () {
    $(this).css('color', 'rgb(0, 0, 0, 0.8)');
  });

  $('.text-container h1 span').on('mouseout', function () {
    $(this).css('color', '');
  });
}
