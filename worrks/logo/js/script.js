     //   скрипт для переноса элементов 
//  подробности смотреть в папке на комп динамический адаптив



class DynamicAdapt {
  constructor(type) {
    this.type = type;
  }

  init() {
    // массив объектов
    this.оbjects = [];
    this.daClassname = '_dynamic_adapt_';
    // массив DOM-элементов
    this.nodes = [...document.querySelectorAll('[data-da]')];

    // наполнение оbjects объктами
    this.nodes.forEach((node) => {
      const data = node.dataset.da.trim();
      const dataArray = data.split(',');
      const оbject = {};
      оbject.element = node;
      оbject.parent = node.parentNode;
      оbject.destination = document.querySelector(`${dataArray[0].trim()}`);
      оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : '767';
      оbject.place = dataArray[2] ? dataArray[2].trim() : 'last';
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.оbjects.push(оbject);
    });

    this.arraySort(this.оbjects);

    // массив уникальных медиа-запросов
    this.mediaQueries = this.оbjects
      .map(({
        breakpoint
      }) => `(${this.type}-width: ${breakpoint}px),${breakpoint}`)
      .filter((item, index, self) => self.indexOf(item) === index);

    // навешивание слушателя на медиа-запрос
    // и вызов обработчика при первом запуске
    this.mediaQueries.forEach((media) => {
      const mediaSplit = media.split(',');
      const matchMedia = window.matchMedia(mediaSplit[0]);
      const mediaBreakpoint = mediaSplit[1];

      // массив объектов с подходящим брейкпоинтом
      const оbjectsFilter = this.оbjects.filter(
        ({
          breakpoint
        }) => breakpoint === mediaBreakpoint
      );
      matchMedia.addEventListener('change', () => {
        this.mediaHandler(matchMedia, оbjectsFilter);
      });
      this.mediaHandler(matchMedia, оbjectsFilter);
    });
  }

  // Основная функция
  mediaHandler(matchMedia, оbjects) {
    if (matchMedia.matches) {
      оbjects.forEach((оbject) => {
        оbject.index = this.indexInParent(оbject.parent, оbject.element);
        this.moveTo(оbject.place, оbject.element, оbject.destination);
      });
    } else {
      оbjects.forEach(
        ({ parent, element, index }) => {
          if (element.classList.contains(this.daClassname)) {
            this.moveBack(parent, element, index);
          }
        }
      );
    }
  }

  // Функция перемещения
  moveTo(place, element, destination) {
    element.classList.add(this.daClassname);
    if (place === 'last' || place >= destination.children.length) {
      destination.append(element);
      return;
    }
    if (place === 'first') {
      destination.prepend(element);
      return;
    }
    destination.children[place].before(element);
  }

  // Функция возврата
  moveBack(parent, element, index) {
    element.classList.remove(this.daClassname);
    if (parent.children[index] !== undefined) {
      parent.children[index].before(element);
    } else {
      parent.append(element);
    }
  }

  // Функция получения индекса внутри родителя
  indexInParent(parent, element) {
    return [...parent.children].indexOf(element);
  }

  // Функция сортировки массива по breakpoint и place 
  // по возрастанию для this.type = min
  // по убыванию для this.type = max
  arraySort(arr) {
    if (this.type === 'min') {
      arr.sort((a, b) => {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }
          if (a.place === 'first' || b.place === 'last') {
            return -1;
          }
          if (a.place === 'last' || b.place === 'first') {
            return 1;
          }
          return a.place - b.place;
        }
        return a.breakpoint - b.breakpoint;
      });
    } else {
      arr.sort((a, b) => {
        if (a.breakpoint === b.breakpoint) {
          if (a.place === b.place) {
            return 0;
          }
          if (a.place === 'first' || b.place === 'last') {
            return 1;
          }
          if (a.place === 'last' || b.place === 'first') {
            return -1;
          }
          return b.place - a.place;
        }
        return b.breakpoint - a.breakpoint;
      });
      return;
    }
  }
}

const da = new DynamicAdapt("max");
da.init();

       
         
         
         
         
         // кнопка гамбургер верхнего меню адаптив
  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu__list'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.menu__icon');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('menu__icon_active');
        menu.classList.toggle('menu__list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('menu__icon_active');
            menu.classList.toggle('menu__list_active');
        })
    })
  })


              // кнопка гамбургер левого меню
window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu-page__list'),
  menuItem = document.querySelectorAll('.menu-page_item'),
  hamburger = document.querySelector('.menu-page__burger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('menu-page__burger_active');
      menu.classList.toggle('menu-page__list_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('menu-page__burger_active');
          menu.classList.toggle('menu-page__list_active');
      })
  })
})


            //  скрипт выплывающых окон левого меню при наведении окон
  let menuParents = document.querySelectorAll('.menu-page__parent');
  for (let index = 0; index < menuParents.length; index++) {
    const menuParent = menuParents[index];
    menuParent.addEventListener('mouseenter', function (e) {
      menuParent.classList.add('_active') ;
    });
    menuParent.addEventListener('mouseleave', function (e) {
      menuParent.classList.remove('_active') ;
    })
  }

  
          //  выпадающее меню поискового сектра
  let searchSelect = document.querySelector('.search-page__title');
  let categoriesSearch = document.querySelector('.categories-search');
  searchSelect.addEventListener('click', function (e){
    searchSelect.classList.toggle('_active');
  })
 
  $( document ).ready(function(){
	   $( ".search-page__title" ).click(function(){ // задаем функцию при нажатиии на элемент с классом slide-toggle
	     $( ".categories-search" ).slideToggle(); // плавно скрываем, или отображаем все элементы <div>
	   });
	});

  
  
  
            // скрипт считает количество выбрнных элементов
            // и записывает в кнопке поисковика 

  let checkboxCategories = document.querySelectorAll('.categories-search__checkbox');
    for (let index = 0; index < checkboxCategories.length; index++) {
    const checkboxCategory = checkboxCategories[index];
    checkboxCategory.addEventListener('change', function (e){
      checkboxCategory.classList.toggle('_active');
      
      let checkboxActiveCategories = document.querySelectorAll('.categories-search__checkbox._active') ;
      if  (checkboxActiveCategories.length > 0 ) {
        searchSelect.classList.add('_categories');
        let searchQuantity = searchSelect.querySelector('.search-page__quantity');
        searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + ' ' + checkboxActiveCategories.length ;  
     } else {
       searchSelect.classList.remove('_categories');
      }
    });
  };



if (document.querySelector('.mainslider')) {
  const mainslider = new Swiper('.mainslider-body', {
    direction:'horizontal',
     // loop: true,
     observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween:0,
   
   
     // If we need pagination
     pagination: {
       el: '.mainslider__dotts ',
       clickable: true,
     },
   
     // // Navigation arrows
     navigation: {
       nextEl: false,
       prevEl: false,
     },
   
     // // And if we need scrollbar
     // scrollbar: {
     //   el: '.swiper-scrollbar',
     // },
     breakpoints:{
       320: {
         slidesPerView: 1,
         spaceBetween: 10,
       
       },
       576: {
         slidesPerView: 1,
         spaceBetween: 10,
      
       },
       768:{
        slidesPerView: 1,
        spaceBetween: 20,
       
       },
       992: {
        slidesPerView: 1,
        spaceBetween: 20,
       
       },
       1268: {
        slidesPerView: 1,
        spaceBetween: 30,
       
     },
    },
   });
             //  в слайдере Sweper добавляет в dotts заднею картинку
  let mainsliderImages = document.querySelectorAll('.mainslider__image');
  let mainsliderDotts = document.querySelectorAll('.mainslider__dotts .swiper-pagination-bullet');
  
   for (let index = 0; index < mainsliderImages.length; index++) {
    const mainsliderImage = mainsliderImages[index].querySelector('img').getAttribute('src');
    mainsliderDotts[index].style.backgroundImage = 'url(' + mainsliderImage + ')';
 }
};


if (document.querySelector('.products-slider')) {
  const productSlider = new Swiper('.swiper-slide__items', {
    direction:'horizontal',
    //  loop: true,
     observer: true,
      observeParents: true,
      slidesPerGroup:3,
      slidesPerColumn:2,
      slidesPerColumnFill:'container',
      slidesPerView: 3,
      spaceBetween:10,
      autoHeight: true,
   
     // If we need pagination
     pagination: {
      el: '.products-slider__info',
      type: 'fraction',
    },
   
     // // Navigation arrows
     navigation: {
       nextEl: '.products-slider__arrow_next',
       prevEl: '.products-slider__arrow_prev',
     },
         breakpoints:{
       320: {
         slidesPerView:1,
         
         autoHeight: true,
         centerSlides:true,
        
        
       },
       576: {
         slidesPerView: 2,
         spaceBetween: 10,
         centerSlides:true,
         autoHeight: true,
         slidesOffsetBefore:10,
       },
       768:{
        spaceBetween: 20,
        slidesPerView: 2,
         autoHeight: true,
        centerSlides:true,
        slidesOffsetBefore:45,
       },
       992: {
        slidesPerView: 2,
        spaceBetween: 20,
        autoHeight: true,
        centerSlides:true,
        slidesOffsetBefore:60,
        
       },
       1200: {
        slidesPerView: 3,
        spaceBetween: 20,
        autoHeight: true,
        slidesOffsetBefore:0,
     },
    },
  
   
     // // And if we need scrollbar
     // scrollbar: {
     //   el: '.swiper-scrollbar',
     // },
   });
//              //  в слайдере Sweper добавляет в dotts pзаднею картинку
//   let mainsliderImages = document.querySelectorAll('.mainslider__image');
//   let mainsliderDotts = document.querySelectorAll('.mainslider__dotts .swiper-pagination-bullet');
  
//    for (let index = 0; index < mainsliderImages.length; index++) {
//     const mainsliderImage = mainsliderImages[index].querySelector('img').getAttribute('src');
//     mainsliderDotts[index].style.backgroundImage = 'url(' + mainsliderImage + ')';
//  }
}
 
if (document.querySelector('.brend-slider')) {
  const brendSlider = new Swiper('.brend-slider__items', {
    direction:'horizontal',
     loop: true,
     observer: true,
      observeParents: true,
      slidesPerView: 5,
      slidesOffsetBefore:0,
      slidesPerGroup:3,
      // autoHeight: true,
   
     // If we need pagination
    //  pagination: {
    //   el: '.products-slider__info',
    //   type: 'fraction',
    // },
   
     // // Navigation arrows
     navigation: {
       nextEl: '.brend-slider__arrow_next',
       prevEl: '.brend-slider__arrow_prev',
     },
        //  breakpoints:{
    //    320: {
    //      slidesPerView:1,
         
    //      autoHeight: true,
    //      centerSlides:true,
        
        
    //    },
    //    576: {
    //      slidesPerView: 2,
    //      spaceBetween: 10,
    //      centerSlides:true,
    //      autoHeight: true,
    //      slidesOffsetBefore:10,
    //    },
    //    768:{
    //     spaceBetween: 20,
    //     slidesPerView: 2,
    //      autoHeight: true,
    //     centerSlides:true,
    //     slidesOffsetBefore:45,
    //    },
    //    992: {
    //     slidesPerView: 2,
    //     spaceBetween: 20,
    //     autoHeight: true,
    //     centerSlides:true,
    //     slidesOffsetBefore:60,
        
    //    },
    //    1200: {
    //     slidesPerView: 3,
    //     spaceBetween: 20,
    //     autoHeight: true,
    //     slidesOffsetBefore:0,
    //  },
    // },
  
   
     // // And if we need scrollbar
     // scrollbar: {
     //   el: '.swiper-scrollbar',
     // },
   });
  }
  


 