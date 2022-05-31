// Import stylesheets
import './style.css';
var navLink = document.querySelector('.links');
var navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', function () {
  navLink.classList.toggle('show-links');
});
