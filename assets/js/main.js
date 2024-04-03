/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navToggleIcon = document.querySelector('#nav-toggle i'),
      navClose = document.getElementById('nav-close'),
     menuWidth = navMenu.scrollWidth - 20;


/*===== MENU SHOW =====*/

/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        if(!navToggleIcon.classList.contains('fa-xmark')){
            navMenu.classList.add('show-menu');
            navToggleIcon.classList.add('close__icon', 'fa-xmark');
            navToggle.classList.add('close__icon');
            navToggle.style.transform = `translateX(-${menuWidth + "px"})`;

        }
        /*===== MENU HIDDEN =====*/
        /* Validate if constant exists */
        else{
            navMenu.classList.remove('show-menu');
            navToggleIcon.classList.remove('close__icon', 'fa-xmark');
            navToggle.style.transform = `translateX(0)`;
        }
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    //When we click in each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
    navToggleIcon.classList.remove('close__icon', 'fa-xmark');
    navToggle.style.transform = `translateX(0)`;
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header');
      skillsList = document.querySelectorAll('.skills__list');
      skillIconArrow = document.querySelectorAll('.skills__arrow');

function toggleSkills(){

    //Add class (open) in header that I clicked it
    this.classList.toggle("open");
    if(this.classList.contains("open")){
        
        for(i=0; i < skillsHeader.length; i++){
            //Make all skills list height 0   
            skillsHeader[i].nextElementSibling.style.height = 0;    

             //Remove class (open) from all headers 
            skillsHeader[i].classList.remove("open");    
        }

        this.nextElementSibling.style.height = this.nextElementSibling.scrollHeight + 'px';
        this.classList.add("open");
    }
    else{
        this.nextElementSibling.style.height = 0;
    }

    //Skill Icon

    skillIconArrow.forEach((icon) =>{
        
        icon.classList.remove("active");

        if(icon.parentElement.classList.contains("open")){
            icon.classList.add("active");
        }

    });

}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills); 
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-contentt]');

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target);

        tabContent.forEach(tabContents =>{
            tabContents.classList.remove('qualification__active');
        });
         target.classList.add('qualification__active');

         tabs.forEach(tab =>{
            tab.classList.remove('qualification__active');
         });
         tab.classList.add('qualification__active');
         if(tab.dataset.target === '#education'){
            tab.parentElement.classList.add('tab-left');
            tab.parentElement.classList.remove('tab-right');
        }else{
            tab.parentElement.classList.add('tab-right');
            tab.parentElement.classList.remove('tab-left');
         }
    });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.srevices__button'),
      modalCloses = document.querySelectorAll('.srevices__modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('modal-active');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i);
    });
});

modalCloses.forEach((modelClose) => {
    modelClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) => {
            modalView.classList.remove('modal-active');
        });
    });
});
/*==================== PORTFOLIO SWIPER  ====================*/
const tabs_p = document.querySelectorAll('[data-target]'),
      tabContent_p = document.querySelectorAll('[data-content]');
tabs_p.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target);

        tabContent_p.forEach(tabContents =>{
            tabContents.classList.remove('portfolio__active');
        });
         target.classList.add('portfolio__active');

         tabs.forEach(tab =>{
            tab.classList.remove('portfolio__active');
         });
         tab.classList.add('portfolio__active');
         if(tab.dataset.target === '#frontend'){
            tab.parentElement.classList.add('tab-left');
            tab.parentElement.classList.remove('tab-right');
        }else{  
            tab.parentElement.classList.add('tab-right');
            tab.parentElement.classList.remove('tab-left');
         }
    });
});
/*====================  CONTACT ====================*/
const contactInput = document.querySelectorAll(".contact__input");

contactInput.forEach((input) =>{
    input.onfocus = function(){
        this.nextElementSibling.classList.add("input__focus-label");
        this.classList.add("input__focus");
    }
    
    input.onblur = function(){
        if(this.value == ""){
            this.nextElementSibling.classList.remove("input__focus-label");
            this.classList.remove("input__focus");
        }
    }
});

/*==================== TESTIMONIAL ====================*/
const swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.remove('active-link');
        }
    }); 
}
window.addEventListener('scroll', scrollActive);
/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header');
    if(this.scrollY >= 100 ) nav.classList.add('scroll-header'); 
    else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 500 ) scrollUp.classList.add('show-scroll'); 
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('change-theme');
const darkTheme = 'dark-theme';
const iconTheme = 'fas-moon';

// perviously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

//
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun';

// We validate if the user previously chose a topic
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () =>{
    // Add or remove the dark / icon theme
    document.body.classList.toggle('dark-theme');
    themeButton.classList.toggle(iconTheme);
    themeButton.classList.toggle('dark-theme-icon');

    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});