'use strict';

const navList = document.querySelector('.nav__list');
const destination = document.querySelector('.destination');
const destinationPlanets = document.querySelectorAll('.destination__planet');
console.log(destinationPlanets);
const destinationNav = document.querySelector('.destination__nav');
const destinationLinks = document.querySelectorAll('.destination__link');

const destinationHeader = document.querySelector('#destination-header');
console.log(destinationHeader);

// DESTINATION SECTION
destinationHeader.addEventListener('click', function (e) {
  const clicked = e.target.classList.contains('destination__link');

  if (clicked) {
    destinationPlanets.forEach(planet => {
      planet.classList.add('hide');
      if (e.target.dataset.planet === planet.dataset.planet) {
        planet.classList.remove('hide');
      }
    });
  }
});
