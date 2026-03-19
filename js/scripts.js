const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
elements.forEach(el => {
if(el.getBoundingClientRect().top < window.innerHeight - 100){
el.classList.add('show');
}
});
});
