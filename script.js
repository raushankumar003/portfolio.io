/*======================toggle navbar icon========================*/ 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x-circle');
    navbar.classList.toggle('active');
};


/*====================Active classname==========================*/ 
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    /*======================sticky navbar========================*/ 
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*======================remove toggle navbar on click========================*/ 
    menuIcon.classList.remove('bx-x-circle');
    navbar.classList.remove('active');
};

/*======================text animation========================*/ 
ScrollReveal({
   /*reset: true,*/
    distance: '80px',
    duration:2000,
    Delay:200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .heading', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content p', { origin: 'right' });



