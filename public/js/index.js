$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});
window.sr=ScrollReveal();

sr.reveal('.first', { delay: 500 });

sr.reveal('.reveal', { duration: 2000, origin: 'bottom', distance: '100px' });

sr.reveal('.social-media', { delay: 2000 });

sr.reveal('.story', { duration: 1500, origin: 'bottom', distance: '50px', viewFactor: 0.1 });