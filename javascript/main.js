
// Variables

const navMenu = document.getElementById('nav-menu');

const navToggle = document.getElementById('nav-toggle');

const navClose = document.getElementById('nav-close');

// Mostrar menu de navegación

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

// Esconder el menu 

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

// Esconder el menu, cuando se le de click a un enlace

const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(e => e.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
}))

// Cambiar el fondo del encabezado 

function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);

// Swiper en Galeria

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spacoBetween: 10,
  coverflowEffect: {
    rotate: 30,
  },
});

// Video 

const videoFile = document.getElementById('video-file');

const videoButton = document.getElementById('video-button');

const videoIcon = document.getElementById('video-icon');

function playPause () {
  
  if(videoFile.paused) {
    // Play Video
    videoFile.play();

    // Cambiamos el icono 

    videoIcon.classList.add('ri-pause-line');
    videoIcon.classList.remove('ri-play-line');
  } else {
    // Pause video
    
    videoFile.pause();

    // Cambiamos el icono 
    videoIcon.classList.add('ri-play-line');
    videoIcon.classList.remove('ri-pause-line');
    
  }
}

videoButton.addEventListener('click', playPause);

function finalVideo () {
  // Cuando el video termine, se cambia el icono
  videoIcon.classList.remove('ri-pause-line');
  videoIcon.classList.add('ri-play-line');
}

  // Cuando el video se termina 

videoFile.addEventListener('ended', finalVideo);

// Slide Testimonios

const sliders = [...document.querySelectorAll('.testimony__body')];

    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');

    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    })

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    })

    const changePosition = (add) => {
       
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id; 
        value = Number(currentTestimony); 
        value+= add;

        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');

        if (value === sliders.length + 1 || value === 0) {
            value = value === 0 ? sliders.length : 1;
            
        }
        
        sliders[value-1].classList.add('testimony__body--show');
    }


// Mostrar el Scroll Up

function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  
  if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);

// Scroll Sections Active Link

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
