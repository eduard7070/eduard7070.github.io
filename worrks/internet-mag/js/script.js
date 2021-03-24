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

       

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu-header__list'),
  menuItem = document.querySelectorAll('.menu-header__item'),
  hamburger = document.querySelector('.menu-header__icon');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('menu-header__icon_active');
      menu.classList.toggle('menu-header__list_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('menu-header__icon_active');
          menu.classList.toggle('menu-header__list_active');
      })
  })
})
          
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



$(document).ready(function(){
  $('.slider-promo__items').slick({
    infinite: true,
       arrows:true,
       autoplay:true,
      slidesToShow: 1,
      slidesToScroll: 1
  });
});

$('#modal_open').click(function(){
  setTimeout(function(){
  function resizeHandler(e) {
      console.log(e.type + ' triggered.');
  }
  
  window.addEventListener('resize', resizeHandler);
  
  var resizeEvent = new Event('resize');
  window.dispatchEvent(resizeEvent);
  },300)
  })

  $(function() {
    $('.rotating-slider').rotatingSlider({
        slideHeight : 400,
        slideWidth : Math.min(480, document.querySelector('.rotating-slider-container' ).offsetWidth)
    });
});