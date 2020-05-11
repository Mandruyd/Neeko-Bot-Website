// Burger menu stuff, don't touch
const mob = document.querySelector('#mob');
const mobMenu = document.querySelector('#mob-menu');
const mobClose = document.querySelector('#close');

mob.addEventListener('click', () => mobMenu.style.display = 'inline');
mobClose.addEventListener('click', () => mobMenu.style.display = 'none');