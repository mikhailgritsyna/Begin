const lightStyles = document.querySelectorAll('link[rel=stylesheet][media*=prefers-color-scheme][media*=light]');
const darkStyles = document.querySelectorAll('link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]');
const darkSchemeMedia = matchMedia('(prefers-color-scheme: dark)');
const switcherRadios = document.querySelectorAll('.switcher_radio');

function setupSwitcher() {
   const savedScheme = getSavedScheme();

   if (savedScheme !== null) {
      const currentRadio = document.querySelector(`.switcher_radio[value=${savedScheme}]`);
      currentRadio.checked = true;
   }

   [...switcherRadios].forEach((radio) => {
      radio.addEventListener('change', (event) => {
         setScheme(event.target.value);
      });
   });
}

function setupScheme() {
   const savedScheme = getSavedScheme();
   const systemScheme = getSystemScheme();

   if (savedScheme === null) return;

   if (savedScheme !== systemScheme) {
      setScheme(savedScheme);
   }
}

function setScheme(scheme) {
   switchMedia(scheme);

   if (scheme === 'auto') {
      clearScheme();
   } else {
      saveScheme(scheme);
   }
}

function switchMedia(scheme) {
   let lightMedia;
   let darkMedia;

   if (scheme === 'auto') {
      lightMedia = '(prefers-color-scheme: light)';
      darkMedia = '(prefers-color-scheme: dark)';
   } else {
      lightMedia = (scheme === 'light') ? 'all' : 'not all';
      darkMedia = (scheme === 'dark') ? 'all' : 'not all';
   }

   [...lightStyles].forEach((link) => {
      link.media = lightMedia;
   });

   [...darkStyles].forEach((link) => {
      link.media = darkMedia;
   });
}

function getSystemScheme() {
   const darkScheme = darkSchemeMedia.matches;

   return darkScheme ? 'dark' : 'light';
}

function getSavedScheme() {
   return localStorage.getItem('color-scheme');
}

function saveScheme(scheme) {
   localStorage.setItem('color-scheme', scheme);
}

function clearScheme() {
   localStorage.removeItem('color-scheme');
}

setupSwitcher();
setupScheme();


var menuUL = document.getElementsByTagName("ul");
var heightOful = menuUL[0].scrollHeight;
var btnToggle = document.getElementsByClassName("header_menu");
btnToggle[0].addEventListener("click", function () {
   if (menuUL[0].style.maxHeight) {
      menuUL[0].style.maxHeight = null;
   }
   else {
      menuUL[0].style.maxHeight = menuUL[0].scrollHeight + "px";
   }
});

const swiper = new Swiper('.swiper_introduce', {
   // Optional parameters
   // slidesPerView: 1,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
   },

   // Navigation arrows
   navigation: {
      prevEl: '.swiper_introduce-slide_prev',
      nextEl: '.swiper_introduce-slide_next',
   },

   // And if we need scrollbar
   scrollbar: {
      el: '.swiper-scrollbar',
   },
});

const swiperJacket = new Swiper('.jacket_swiper', {
   // Optional parameters
   slidesPerView: 1,

   // If we need pagination
   // pagination: {
   //    el: '.swiper-pagination',
   // },

   // Navigation arrows
   navigation: {
      nextEl: '.jacket_button-next',
      prevEl: '.jacket_button-prev',
   },

   // And if we need scrollbar
   // scrollbar: {
   //    el: '.swiper-scrollbar',
   // },
});

// Target elements 
const $accordions = document.querySelectorAll('[data-component="accordion"]');

Array.prototype.forEach.call($accordions, $accordion => {
   const $accordionItems = $accordion.querySelectorAll('[aria-expanded]');

   Array.prototype.forEach.call($accordionItems, $accordionItem => {
      $accordionItem.addEventListener('click', () => {
         const $accordionItemExpandable = $accordionItem.querySelector('.js-block-accordion-item__content');
         const $accordionItemInner = $accordionItem.querySelector('.js-block-accordion-inner-content');
         const accordionItemHeight = $accordionItemInner.offsetHeight + 'px';

         if ($accordionItem.getAttribute('aria-expanded') === 'true') {
            $accordionItem.setAttribute('aria-expanded', 'false');
            $accordionItemExpandable.style.maxHeight = 0;
         } else {
            if ($accordion.getAttribute('data-accordion') === 'multiple') {
               const $expandedItems = $accordion.querySelectorAll('[aria-expanded="true"]');
               Array.prototype.forEach.call($expandedItems, $expandedItem => {
                  const $accordionItemExpandable = $expandedItem.querySelector('.js-block-accordion-item__content');
                  $accordionItemExpandable.style.maxHeight = 0;
                  $expandedItem.setAttribute('aria-expanded', 'false');
               });
            }

            $accordionItem.setAttribute('aria-expanded', 'true');
            $accordionItemExpandable.style.maxHeight = accordionItemHeight;
         }
      });
   });
});




const swiperBrand = new Swiper('.brand_swiper', {
   // Optional parameters
   slidesPerView: 2,
   loop: true,
   centeredSlides: true,
   spaceBetween: 20,

   roundLengths: true,
   breakpoints: {
      375: {
         slidesPerView: 3,

      },
      600: {
         slidesPerView: 4,
         spaceBetween: 20,



      },
      768: {
         slidesPerView: 5,
         spaceBetween: 20,



      },

   },
   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
   },

   // Navigation arrows
   navigation: {
      prevEl: '.brand_swiper-button-prev',
      nextEl: '.brand_swiper-button-next',
   },

   // And if we need scrollbar
   scrollbar: {
      el: '.swiper-scrollbar',
   },
});