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
        slideHeight : 250,
        slideWidth : Math.min(240, document.querySelector('.rotating-slider-container' ).offsetWidth)
    });
});

$(document).ready(function() {
  $(".fancybox").fancybox();
})









/* myLib start */
;(function() {
  window.myLib = {};

  window.myLib.body = document.querySelector('body');

  window.myLib.closestAttr = function(item, attr) {
    var node = item;

    while(node) {
      var attrValue = node.getAttribute(attr);
      if (attrValue) {
        return attrValue;
      }

      node = node.parentElement;
    }

    return null;
  };

  window.myLib.closestItemByClass = function(item, className) {
    var node = item;

    while(node) {
      if (node.classList.contains(className)) {
        return node;
      }

      node = node.parentElement;
    }

    return null;
  };

  window.myLib.toggleScroll = function() {
    myLib.body.classList.toggle('no-scroll');
  };
})();
/* myLib end */



/* popup start */
;(function() {
  var showPopup = function(target) {
    target.classList.add('is-active');
  };

  var closePopup = function(target) {
    target.classList.remove('is-active');
  };

  myLib.body.addEventListener('click', function(e) {
    var target = e.target;
    var popupClass = myLib.closestAttr(target, 'data-popup');

    if (popupClass === null) {
      return;
    }

    e.preventDefault();
    var popup = document.querySelector('.' + popupClass);

    if (popup) {
      showPopup(popup);
      myLib.toggleScroll();
    }
  });

  myLib.body.addEventListener('click', function(e) {
    var target = e.target;
    var popupItemClose = myLib.closestItemByClass(target, 'popup-close');

    if (popupItemClose ||
        target.classList.contains('popup__inner')) {
          var popup = myLib.closestItemByClass(target, 'popup');

          closePopup(popup);
          myLib.toggleScroll();
    }
  });

  myLib.body.addEventListener('keydown', function(e) {
    if (e.keyCode !== 27) {
      return;
    }

    var popup = document.querySelector('.popup.is-active');

    if (popup) {
      closePopup(popup);
      myLib.toggleScroll();
    }
  });
})();

/* popup end */

/* scrollTo start */
;(function() {
  var scroll = function(target) {
    var targetTop = target.getBoundingClientRect().top;
    var scrollTop = window.pageYOffset;
    var targetOffsetTop = targetTop + scrollTop;
    var headerOffset = document.querySelector('.header-page').clientHeight;

    window.scrollTo(0, targetOffsetTop - headerOffset);
  }

  myLib.body.addEventListener('click', function(e) {
    var target = e.target;
    var scrollToItemClass = myLib.closestAttr(target, 'data-scroll-to');

    if (scrollToItemClass === null) {
      return;
    }

    e.preventDefault();
    var scrollToItem = document.querySelector('.' + scrollToItemClass);

    if (scrollToItem) {
      scroll(scrollToItem);
    }
  });
})();
/* scrollTo end */





/* cart start */
;(function() {
  const cartDOMElement = document.querySelector('.js-cart');

  if (!cartDOMElement) {
    return;
  }
  const cart = JSON.parse(localStorage.getItem('cart')) || {};
  const cartItemsCounterDOMElement = document.querySelector('.js-cart-total-count-items');
  const cartTotalPriceDOMElement = document.querySelector('.js-cart-total-price');
  const cartTotalPriceInputDOMElement = document.querySelector('.js-cart-total-price-input');
  const cartWrapperDOMElement = document.querySelector('.js-cart-wrapper');

  const renderCartItem = ({ id, name, attribute, src, price, quantity }) => {
    const cartItemDOMElement = document.createElement('div');

    const attributeTemplate = attribute
      ? `<p class="cart-item__attribute">${attribute}</p><input type="hidden" name="${id}-Аттрибут" value="${attribute}">`
      : '';

    const cartItemTemplate = `
      <div class="cart-item cart__item">
        <div class="cart-item__main">
          <div class="cart-item__start">
            <button class="cart-item__btn cart-item__btn--remove js-btn-cart-item-remove" type="button"></button>
          </div>
          <div class="cart-item__img-wrapper">
            <img class="cart-item__img" src="${src}" alt="">
          </div>
          <div class="cart-item__content">
            <h3 class="cart-item__title">${name}</h3>
            <input type="hidden" name="${id}-Товар" value="${name}">
            <input class="js-cart-input-quantity" type="hidden" name="${id}-Количество" value="${quantity}">
            <input class="js-cart-input-price" type="hidden" name="${id}-Цена" value="${price * quantity}">
            ${attributeTemplate}
          </div>
        </div>
        <div class="cart-item__end">
          <div class="cart-item__actions">
            <button class="cart-item__btn js-btn-product-decrease-quantity" type="button">-</button>
            <span class="cart-item__quantity js-cart-item-quantity">${quantity}</span>
            <button class="cart-item__btn js-btn-product-increase-quantity" type="button">+</button>
          </div>
          <p class="cart-item__price"><span class="js-cart-item-price">${price * quantity}</span> ₽</p>
        </div>
      </div>
      `;

    cartItemDOMElement.innerHTML = cartItemTemplate;
    cartItemDOMElement.setAttribute('data-product-id', id);
    cartItemDOMElement.classList.add('js-cart-item');

    cartDOMElement.appendChild(cartItemDOMElement);
  };

  const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const updateCartTotalPrice = () => {
    const totalPrice = Object.keys(cart).reduce((acc, id) => {
      const { quantity, price } = cart[id];
      return acc + price * quantity;
    }, 0);

    if (cartTotalPriceDOMElement) {
      cartTotalPriceDOMElement.textContent = totalPrice;
    }

    if (cartTotalPriceInputDOMElement) {
      cartTotalPriceInputDOMElement.value = totalPrice;
    }
  };

  const updateCartTotalItemsCounter = () => {
    const totalQuantity = Object.keys(cart).reduce((acc, id) => {
      const { quantity } = cart[id];
      return acc + quantity;
    }, 0);

    if (cartItemsCounterDOMElement) {
      cartItemsCounterDOMElement.textContent = totalQuantity;
    }

    return totalQuantity;
  };

  const updateCart = () => {
    const totalQuantity = updateCartTotalItemsCounter();
    updateCartTotalPrice();
    saveCart();

    if (totalQuantity === 0) {
      cartWrapperDOMElement.classList.add('is-empty');
    } else {
      cartWrapperDOMElement.classList.remove('is-empty');
    }
  };

  const deleteCartItem = (id) => {
    const cartItemDOMElement = cartDOMElement.querySelector(`[data-product-id="${id}"]`);

    cartDOMElement.removeChild(cartItemDOMElement);
    delete cart[id];
    updateCart();
  };

  const addCartItem = (data) => {
    const { id } = data;

    if (cart[id]) {
      increaseQuantity(id);
      return;
    }

    cart[id] = data;
    renderCartItem(data);
    updateCart();
  };

  const updateQuantity = (id, quantity) => {
    const cartItemDOMElement = cartDOMElement.querySelector(`[data-product-id="${id}"]`);
    const cartItemQuantityDOMElement = cartItemDOMElement.querySelector('.js-cart-item-quantity');
    const cartItemPriceDOMElement = cartItemDOMElement.querySelector('.js-cart-item-price');
    const cartItemInputPriceDOMElement = cartItemDOMElement.querySelector('.js-cart-input-price');
    const cartItemInputQuantityDOMElement = cartItemDOMElement.querySelector('.js-cart-input-quantity');

    cart[id].quantity = quantity;
    cartItemQuantityDOMElement.textContent = quantity;
    cartItemPriceDOMElement.textContent = quantity * cart[id].price;
    cartItemInputPriceDOMElement.value = quantity * cart[id].price;
    cartItemInputQuantityDOMElement.value = quantity;

    updateCart();
  };

  const decreaseQuantity = (id) => {
    const newQuantity = cart[id].quantity - 1;
    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity);
    }
  };

  const increaseQuantity = (id) => {
    const newQuantity = cart[id].quantity + 1;
    updateQuantity(id, newQuantity);
  };

  const generateID = (string1, string2) => {
    const secondParam = string2 ? `-${string2}` : '';
    return `${string1}${secondParam}`.replace(/ /g, '-');
  };

  const getProductData = (productDOMElement) => {
    const name = productDOMElement.getAttribute('data-product-name');
    const attribute = productDOMElement.getAttribute('data-product-attribute');
    const price = productDOMElement.getAttribute('data-product-price');
    const src = productDOMElement.getAttribute('data-product-src');
    const quantity = 1;
    const id = generateID(name, attribute);

    return { name, attribute, price, src, quantity, id };
  };

  const renderCart = () => {
    const ids = Object.keys(cart);
    ids.forEach((id) => renderCartItem(cart[id]));
  };

  const resetCart = () => {
    const ids = Object.keys(cart);
    ids.forEach((id) => deleteCartItem(cart[id].id));
  };

  const cartInit = () => {
    renderCart();
    updateCart();

    document.addEventListener('reset-cart', resetCart);

    document.querySelector('body').addEventListener('click', (e) => {
      const target = e.target;

      if (target.classList.contains('js-btn-add-to-cart')) {
        e.preventDefault();
        const productDOMElement = target.closest('.js-product');
        const data = getProductData(productDOMElement);
        addCartItem(data);
      }

      if (target.classList.contains('js-btn-cart-item-remove')) {
        e.preventDefault();
        const cartItemDOMElement = target.closest('.js-cart-item');
        const productID = cartItemDOMElement.getAttribute('data-product-id');
        deleteCartItem(productID);
      }

      if (target.classList.contains('js-btn-product-increase-quantity')) {
        e.preventDefault();
        const cartItemDOMElement = target.closest('.js-cart-item');
        const productID = cartItemDOMElement.getAttribute('data-product-id');
        increaseQuantity(productID);
      }

      if (target.classList.contains('js-btn-product-decrease-quantity')) {
        e.preventDefault();
        const cartItemDOMElement = target.closest('.js-cart-item');
        const productID = cartItemDOMElement.getAttribute('data-product-id');
        decreaseQuantity(productID);
      }

      if (target.classList.contains('js-btn-product-attribute')) {
        e.preventDefault();
        const attribute = target.getAttribute('data-product-attribute-value');
        const price = target.getAttribute('data-product-attribute-price');
        const productDOMElement = target.closest('.js-product');
        const activeAttributeDOMElement = productDOMElement.querySelector('.js-btn-product-attribute.is-active');
        const productPriceDOMElement = productDOMElement.querySelector('.js-product-price-value');

        productPriceDOMElement.textContent = price;
        productDOMElement.setAttribute('data-product-attribute', attribute);
        productDOMElement.setAttribute('data-product-price', price);
        activeAttributeDOMElement.classList.remove('is-active');
        target.classList.add('is-active');
      }
    });
  };

  cartInit();
})();
  

  // Modal

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
});

$('.zakazat-zwonok__subheader').each(function(i) {
    $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
    })
});

// ?
// function validateForms(form){
//     $(form).validate({
//         rules: {
//             name: {
//                 required: true,
//                 minlength: 2
//             },
//             phone: "required",
//             email: {
//                 required: true,
//                 email: true
//             }
//         },
//         messages: {
//             name: {
//                 required: "Пожалуйста, введите свое имя",
//                 minlength: jQuery.validator.format("Введите {} символа!")
//               },
//             phone: "Пожалуйста, введите свой номер телефона",
//             email: {
//               required: "Пожалуйста, введите свою почту",
//               email: "Неправильно введен адрес почты"
//             }
//         }
//     });
// };


// validateForms('#order form');

// // // $('input[name=phone]').mask("+7 (999) 999-99-99");

// $('form').submit(function(e) {
//     e.preventDefault();
//     $.ajax({
//         type: "POST",
//         url: "agfloristic/wp-content/themes/agfloristic/assets/mailer/smart.php",
//         data: $(this).serialize()
//     }).done(function() {
//         $(this).find("input").val("");
//         $(' #order').fadeOut();
//         $('.overlay, #thanks').fadeIn('slow');

//         $('form').trigger('reset');
//     });
//     return false;
// });