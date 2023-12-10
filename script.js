$(document).ready(function() {
  // POPOVER //
  // Enable popover for A propos button
  $('#contact').popover({
    html: true,
    trigger: 'manual',
    offset: '-60px'
  });

  // Toggle popover and update underlined class on contact button click
  $('#contact').on('click', function(e) {
    e.stopPropagation();
    $(this).toggleClass('underlined');
    $('#contact').popover('toggle');
  });

  // Remove underlined class when popover is hidden
  $('#contact').on('hidden.bs.popover', function () {
    $(this).removeClass('underlined');
  });

  // Hide popover on body click only if the click is outside the contact button or the popover
  $('body').on('click', function(e) {
    if (!$(e.target).closest('#contact, .popover').length) {
      $('#contact').removeClass('underlined');
      $('#contact').popover('hide');
    }
  });

  // Prevent clicks inside the popover from closing it
  $('.popover').on('click', function(e) {
    e.stopPropagation();
  });

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
