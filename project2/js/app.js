const hamberger=document.querySelector('.header .navbar .navlist .hamberger');
const mobile_menu = document.querySelector('.header .navbar .navlist ul');
const header = document.querySelector('.header.container');

hamberger.addEventListener('click', () => {
    hamberger.classList.toggle('active');
    mobile_menu.classList.toggle('active');

});
