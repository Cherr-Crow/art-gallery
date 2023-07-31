let menuBtn = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let menuOff = document.querySelector('.menuOff');
let menuLink = document.querySelectorAll('.menu__link');

menuBtn.addEventListener('click', function() {

  menuBtn.classList.toggle('burger--active')
  menu.classList.toggle('active')
})

menuOff.addEventListener('click', function() {
  menu.classList.remove('active')
})

menuLink.forEach((elem)=>{
  elem.addEventListener('click',()=> {
    menu.classList.remove('active')
  })
});

// disabled scroll
const btnOff = document.querySelector('.scroll-off');
const btnOn = document.querySelector('.scroll-on');
const body = document.body;
const windowInnerHeight = window.innerHeight;
const converted = { height: "500px" };

function disabledScroll() {
let pagePosition = window.scrollY;
body.classList.add('disabled-scroll');
body.dataset.position = pagePosition;
body.style.top = -pagePosition + 'px';
};

function enableScroll() {
  body.classList.remove('disabled-scroll')
};

if(windowInnerHeight === converted) {
  enableScroll()
}


btnOff.addEventListener('click', (e) => {
  disabledScroll();
  e.currentTarget.style.pointerEvents = 'none';
  btnOn.style.pointerEvents = 'auto';
});

btnOn.addEventListener('click', (e) => {
  enableScroll();
  e.currentTarget.style.pointerEvents = 'none';
  btnOff.style.pointerEvents = 'auto';
})

// поиск

let searchBtn = document.querySelector('.header__media-search');
let search = document.querySelector('.search-form');
let searchOff = document.querySelector('.search-form__close');


searchBtn.addEventListener('click', function() {
  searchBtn.classList.toggle('active--form')
  search.classList.toggle('active--form')
})

searchOff.addEventListener('click', function() {
  search.classList.remove('active--form')
})

menuBtn.addEventListener('click', function() {
  search.classList.remove('active--form')
})

// селект

const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  disabledState: 'is-disabled',
});

document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
    autoHide: false,
    scrollbarMaxSize: 25,
  });
})

// меню
const btns = document.querySelectorAll(".header__buttons");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
  item.addEventListener("click", function () {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  })
})

// modal
const modalBtns = document.querySelectorAll('.swiper__slide-button');
const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelectorAll('.modal');
const modalBtn = document.querySelectorAll('.modal__btn');

modalBtns.forEach((el) => {
  el.addEventListener('click', (e) => {
   let modalPath = e.currentTarget.getAttribute('data-path');

   modal.forEach((el) => {
    el.classList.remove('modal-overlay--visisble');
   })

   document.querySelector(`[data-target="${modalPath}"]`).classList.toggle('modal--visible')
   modalOverlay.classList.toggle('modal-overlay--visisble');
  })
});

  modalOverlay.addEventListener('click', (e) => {

  if (e.target == modalOverlay) {
    modal.forEach((el) => {
      el.classList.remove('modal--visible');
     })

     modalOverlay.classList.remove('modal-overlay--visisble');
  }
  });


  modalBtn.forEach((el) => {
    el.addEventListener('click', () => {
      modal.forEach((el) => {
        el.classList.remove('modal--visible');
       })

       modalOverlay.classList.remove('modal-overlay--visisble');
    })
  })




// swiper

const swiper = new Swiper(".swiper", {
  loop: false,
  speed: 300,
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    750: {
      slidesPerView: 2,
      spaceBetween: 34
    },
    1600: {
      slidesPerView: 3,
      spaceBetween: 34
    },
    1924: {
      slidesPerView: 3,
      spaceBetween: 34
    }
  },

  freeMode: true,
  pagination: {
    el: ".gallery__swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },

});


const swiperTwo = new Swiper(".events__swiper", {
  loop: false,
  speed: 300,
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 34
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 34
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 34,
    },
    1924: {
      slidesPerView: 3,
      spaceBetween: 34
    }
  },

  pagination: {
    el: '.events__pagination',
    type: 'bullets',
    clickable: true
  },
  freeMode: true,

  navigation: {
    nextEl: ".custom-nextTwo",
    prevEl: ".custom-prevTwo",
  },
});


const swiperThree = new Swiper(".swiperThree", {
  loop: false,
  speed: 300,
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    800: {
      slidesPerView: 2,
      spaceBetween: 34
    },
    1600: {
      slidesPerView: 3,
      spaceBetween: 34
    },
  },

  freeMode: true,
  navigation: {
    nextEl: ".custom-nextThree",
    prevEl: ".custom-prevThree",
  },
});



new Accordion('.accordion-container', {
  showMultiple: false,
  openOnInit: [0],
  collapse: true
}
);



   //табы

   const tabsBtn = document.querySelectorAll(".ac-text__button-author");
   const tabsItems = document.querySelectorAll(".catalog__block");

   tabsBtn.forEach(onTabClick);

   function onTabClick(item) {
     item.addEventListener("click", function () {
       let currentBtn = item;
       let tabId = currentBtn.getAttribute("data-path");
       let currentTab = document.querySelector(tabId);

       if (!currentBtn.classList.contains('active')) {
         tabsBtn.forEach(function (item) {
           item.classList.remove('active');
         });

         tabsItems.forEach(function (item) {
           item.classList.remove('active');
         });

         currentBtn.classList.add('active');
         currentTab.classList.add('active');
       }
     });

   }


   tippy('#myButton', {
    content: "Пример современных тенденций — современная методология разработки",
    placement: 'top',
    theme: 'theme',
  });

  tippy('#myButtonTwo', {
    content: "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции",
    placement: 'top',
    theme: 'theme',
  });

  tippy('#myButtonThree', {
    content: "В стремлении повысить качество",
    placement: 'top',
    theme: 'theme',
  });




  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.75846806898367, 37.60108849999989],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 16,

    });

    myMap.controls.remove('geolocationControl'); // удаляем геолокацию
    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип
    myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
    myMap.controls.remove('rulerControl'); // удаляем контрол правил
    myMap.behaviors.disable(['scrollZoom']);
    myMap.panes.get('ground').getElement().style.filter = 'grayscale(100%)'



  var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
    iconLayout: 'dafault#image',
    iconImageHref: 'https://github.com/Cherr-Crow/latters/blob/main/Ellipse%2014.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [20, 30]
  });

  myMap.geoObjects.add(myPlacemark);
}


  // валидация


    var selector = document.getElementById("phone");
    const telSelector = form.querySelector('input[type="tel"]');

    var im = new Inputmask("+7 (999) 999-99-99");
    im.mask(selector);

    const validation = new JustValidate('#form', {
      errorFieldCssClass: 'is-invalid',
    });

    validation
      .addField('#name', [
        {
          rule: 'minLength',
          value: 2,
          errorMessage: 'Недостаточно символов',
        },
        {
          rule: 'required',
          errorMessage: 'Вы не ввели имя',
        },
      ])

      validation
      .addField('#phone', [
        {
          rule: 'required',
          errorMessage: 'Вы не ввели номер',
        },
        {
          rule: 'function',
          validator: function() {
            const phone = telSelector.inputmask.unmaskedvalue();
            return phone.length === 10;
          },
          errorMessage: 'Введите корректный телефон',
        },
      ]).onSuccess((event) => {
        console.log('Validation passes and form submitted', event);

        let formData = new FormData(event.target);

        console.log(...formData);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
            }
          }
        }

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        event.target.reset();
      });

      // scroll

      let anchors = document.querySelectorAll('header a[href*="#"]');

      for (anchor of anchors) {
        if (anchor) {
          anchor.addEventListener('click', function(e) {
            e.preventDefault();
          let anchorID = this.getAttribute('href');
          document.querySelector(anchorID).scrollIntoView({
            behavior: 'smooth', block: 'start'
          })
          })
        }
      }

      let gallaryLinks = document.querySelectorAll('.catalog__itemBottomNew a[href*="#"]');

      for (gallaryLink of gallaryLinks) {
        if (gallaryLink) {
          gallaryLink.addEventListener('click', function(e) {
            e.preventDefault();
          let gallaryLinkID = this.getAttribute('href');
          document.querySelector(gallaryLinkID).scrollIntoView({
            behavior: 'smooth', block: 'start'
          })
          })
        }
      }

      let gallaryLinksNew = document.querySelectorAll('.catalog__block a[href*="#"]');

      for (gallaryLinkNew of gallaryLinksNew) {
        if (gallaryLinkNew) {
          gallaryLinkNew.addEventListener('click', function(e) {
            e.preventDefault();
          let gallaryLinkNewID = this.getAttribute('href');
          document.querySelector(gallaryLinkNewID).scrollIntoView({
            behavior: 'smooth', block: 'start'
          })
          })
        }
      }

  
