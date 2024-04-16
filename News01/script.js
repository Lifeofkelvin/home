let menuBtn = document.querySelector('.menu');
let dropDown = document.querySelector('.dropdown');
let closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', e => {
    document.body.classList.add('lock');
    dropDown.style.display = 'block';
    dropDown.classList.add('show');
});
closeBtn.addEventListener('click', e => {
    document.body.classList.remove('lock');
    dropDown.style.display = 'none';
    dropDown.classList.remove('show');
});