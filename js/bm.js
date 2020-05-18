// Burger menu stuff, don't touch
const mob = document.querySelector('#mob');
const mobMenu = document.querySelector('#mob-menu');
const mobClose = document.querySelector('#close');

mob.addEventListener('click', () => {
    mobMenu.style.display = 'inline';
    mobMenu.classList.remove('to-left');
    mobMenu.classList.add("to-right");
});
mobClose.addEventListener('click', () => {
    mobMenu.classList.remove('to-right');
    mobMenu.classList.add('to-left');
    setTimeout(()=>{mobMenu.style.display = 'none';},200)
});