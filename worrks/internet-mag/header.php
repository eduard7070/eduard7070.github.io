<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta  name ="msapplication-TileColor"  content = "#ffffff" > 
    <meta  name = "msapplication-TileImage"  content = "assets/img/favicons/ms-icon-144x144.png" > 
    <meta  name = "theme-color"  content = "#ffffff" >
    <link  rel = "apple-touch-icon"  sizes = "57x57"  href = "assets/img/favicons/apple-icon-57x57.png" > 
    <link  rel = "apple-touch-icon"  sizes = "60x60"  href = "assets/img/favicons/ apple -icon-60x60.png " > 
    <link  rel = " apple-touch-icon "  sizes = " 72x72 "  href = " assets/img/favicons/apple-icon-72x72.png " > 
    <link  rel = " apple-touch-icon "  sizes = "76x76"  href = "assets/img/favicons/apple-icon-76x76.png" > 
    <link  rel = "apple-touch-icon "  sizes = " 114x114 "  href = " assets/img/favicons/apple-icon-114x114.png "> 
    <link  rel = "apple-touch-icon"  sizes = "120x120"  href = "assets/img/favicons/apple-icon-120x120.png" > 
    <link  rel = "apple-touch-icon"  sizes = "144x144"  href = "assets/img/favicons/ apple-icon-144x144.png " > 
    <link  rel = " apple-touch-icon "  sizes = " 152x152 "  href = "assets/img/favicons /apple-icon-152x152.png " > 
    <link  rel = " apple-touch-icon "  размеры = "180x180"  href = "assets/img/favicons/apple-icon-180x180.png" > 
    <link  rel = "icon"  type = "image / png"  sizes = "192x192"  href = "assets/img/favicons/android-icon-192x192.png" > 
    <link  rel = "icon"  type = "image / png"  sizes = "32x32"  href = "assets/img/favicons/favicon-32x32.png" > 
    <link  rel = "icon"  type = "image / png"  sizes = "96x96"  href = "assets/img/favicons/favicon-96x96.png" > 
    <link  rel = "icon"  type = "image / png"  sizes = "16x16"  href = "assets/img/favicons/ favicon-16x16. png " > 
    <link  rel = " manifest " href = "/manifest.json" > 
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
        rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    
    <title><?php  bloginfo( 'name' ); echo " | " ; bloginfo('description'); ?></title>
    </head>
    <?php
    
    wp_head() ;

   ?>
<body>
  
<header class="header">
    <div class="container">
            <div class="page__menu">
                <div class="row">
                    <nav  class="col-lg-7  header__menu menu-header">
                        <?php 
                                    wp_nav_menu( [
         
                'menu'            => 'main', 
                'container'       => 'folse', 
               
                'menu_class'      => 'menu-header__list', 
                'menu_id'         => '',
                'echo'            => true,
                'fallback_cb'     => 'wp_page_menu',
           
                'items_wrap'      => '<ul class="menu-header__list">%3$s</ul>',
                'depth'           => 0,
                
            ] );
                                    
                        
                        
                        
                        
                        ?>
                        <div class="menu-header__icon icon-menu ">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        
                    </nav>
                    <div class="col-lg-4  header__social social">
                        <a href="" class="social__instagran"><img src="<?php echo bloginfo('template_url'); ?>/assets/icons/instagram.png" alt="inst"></a>
                        <a href="" class="social__watshap"><img src="<?php echo bloginfo('template_url'); ?>/assets/icons/watshap.png" alt="wats"></a>
                        <a href="" class="social__feysbuc"><img src="<?php echo bloginfo('template_url'); ?>/assets/icons/feysbuc.png" alt="feys"></a>
                        <a href="" class="social__twitter"><img src="<?php echo bloginfo('template_url'); ?>/assets/icons/twitter.png" alt="twit"></a>
                        <div class="  header__registration registration-header">
                            <a href="#" class="registration-header__enter">вход</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</header>
    <div class="subheader">
        <div class="container">
            <div class="row">
                <div class="col-lg-2 col-md-3 col-sm-4 logo-container ">
                    <div class="subheader__logo">
                       <?php the_custom_logo( ); ?>
                    </div>
                </div>
                <div data-da=".promo__subtitle, 991 , last " class="col-lg-4 col-md-12   subheader-info">
                    <h1 class="subheader__title"> <?php the_field('subheader_title', 34) ?></h1>
                    <h2 class="subheader__subtitle"><?php the_field('subheader_subtitle1', 34) ?> </h2>
                    <h2 class="subheader__subtitle"><?php the_field('subheader_subtitle2', 34) ?></h2>
                </div>
                <div class="col-lg-2 offset-lg-1 col-md-3 offset-md-3  col-sm-4 subheader__coll">
                        <div class="subheader__tel-main">
                        <?php the_field('subheader_tel-main', 34)?>
                        </div>
                        <div class="subheader__tel-number">
                            <a href="tel:89154100837" class="subheader__tel-link"><?php the_field('subheader_tel-link', 34)?> </a>
                        </div>
                        <button class=" zakazat-zwonok__subheader atuin-btn"  >ЗАКАЗАТЬ ЗВОНОК</button>
                </div>
                <div class="col-lg-2 col-md-2  col-sm-4  subheader-basket basket-subheader">
                     <a href="#" data-da=".subheader__coll, 576, last " class="basket-subheader__link" data-popup="popup-order"><span class="cart-btn__counter js-cart-total-count-items">0</span></a>
                    <button class="atuin-btn oformit-zakaz__subheader" data-popup="popup-order">ОФОРМИТЬ ЗАКАЗ</button>
                </div>
            </div>
        </div>
        
    </div>
    <div class="search">
        <div class="container">
            <div class="row ">
           
   
                <div class="col-lg-4  search-block">
                    
                 
                 <?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar("New Sidebar") ) : ?>
              <?php endif; ?>
                    
                </div>
                <nav class="col-lg-8 menu2-block">
                    <ul data-da=".menu-header__list, 991 , last " class="menu2-block__items">
                        <li class="menu2-block__item">
                            <div class="dropdown">
                                <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                               БУКЕТЫ
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                  <li><a class="dropdown-item" href="http://agfloristic/avtorskie-bukety/">Авторские Букеты</a></li>
                                  <li><a class="dropdown-item" href="http://agfloristic/avtorskie-kompoziczii/">Авторские Композиции</a></li>
                                 </ul>
                              </div>
                        </li>
                        <li class="menu2-block__item">
                            <div class="dropdown">
                                <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                            ЦВЕТЫ
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Розы</a></li>
                                    <li><a class="dropdown-item" href="#">Пионы</a></li>
                                    <li><a class="dropdown-item" href="#">Гвоздики</a></li>
                                    <li><a class="dropdown-item" href="#">Архидеи</a></li>
                                </ul>
                            </div>
                                 
                        </li>
                        <li class="menu2-block__item"><a href="#" class="menu2-block__link">СТРАНИЧКА ДНЯ</a></li>
                        <li class="menu2-block__item"><a href="#" class="menu2-block__link">8 МАРТА</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
<!-- popup-order -->
<div class="popup popup-order">
  <div class="popup__wrapper">
    <div class="popup__inner">
      <div class="popup__content col-lg-8 ofsset-lg-2">
        <button class="btn-close popup__btn-close popup-close"></button>
        <h2 class="baskt__title">Корзина</h2>
        <div class="cart js-cart-wrapper">
          <form class="form cart__form form-send">
            <div class="cart__items js-cart">
            </div>
            <div class="cart__totals">
              <div>Итого: <span class="cart__bold"><span class="js-cart-total-price"></span> ₽</span></div>
            </div>
            <div class="order">
            <h3 class="order__title">Заполните форму</h3>
              <div class="feed-form">
                <input class="form__input" type="text" name="Имя" placeholder="Имя" required="">
                <input class="form__input" type="text" name="Телефон" placeholder="Телефон" required="">
                <input class="form__input" type="text" name="Адрес" placeholder="Адрес" required="">
                <input class="js-cart-total-price-input" type="hidden" name="Общая сумма">
                <button class="button button_submit atuin-btn" type="submit">Отправить</button>
              </div>
            </div>
          </form>
          <div class="cart__empty">
            <p class="cart__info">Нет товаров</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="overlay">
     <div class="modal" id="order">
            <div class="modal__close">&times;</div>
            <div class="feed-form feed-form_mt25">
            <?php  echo do_shortcode( '[contact-form-7 id="462" title="форма быстрый звонок"]' );?>
            </div>
          <p>после отправки запроса наш сотрудник оперативно свяжеться с вами и ответит на все ваши вопросы.</p>
            <a href="#"><p>политика конфиденциальности</p></a>
        </div>
    </div>

    
    