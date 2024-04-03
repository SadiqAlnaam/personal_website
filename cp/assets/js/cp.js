/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('asid'),
      navToggle = document.getElementById('header-toggle'),
      navToggleIcon = document.querySelector('#header-toggle i'),
    //   navClose = document.getElementById('nav-close'),
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


/*==================== CP ====================*/ 

//cp menu
let cpMenu = document.querySelector('.cp__menu'),
cpHeadButton = document.getElementById('cp__head-button');

if(cpHeadButton){
    cpHeadButton.addEventListener('click', ()=>{
        cpMenu.classList.toggle('active');
    });  
}



//CP popup (modals)

let cpPopup_l = document.querySelector('.cp__popup-1'),
cpPopup_2 = document.querySelector('.cp__popup-2'),
cpMenubutton_1 = document.getElementById('cp__menu-link-1'),
cpMenubutton_2 = document.getElementById('cp__menu-link-2');

if(cpMenubutton_1){
    cpMenubutton_1.onclick = function(){
        cpPopup_l.classList.add('active');
    }
}

if(cpMenubutton_2){
    cpMenubutton_2.onclick = function(){
        cpPopup_2.classList.add('active');
    }
}

//hide popup(modal) 
let cpCloseButton = document.querySelectorAll('.cp__popup-close'),
all_cp_popups = document.querySelectorAll('.cp__popup');

cpCloseButton.forEach((c) =>{
    c.addEventListener('click', ()=>{
        all_cp_popups.forEach((m) =>{
            m.classList.remove('active');
        });
    });
});



 

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



let test = document.getElementById("test");
let test_2 = document.getElementById("test-2");


test_2.src = test.value;

