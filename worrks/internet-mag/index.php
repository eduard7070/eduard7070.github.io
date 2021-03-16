<?php 
 
get_header();

?>
    <div class="promo-page">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-12  col-sm-12  col-xs-12">
                    <div class="promo-page__slider slider-promo">
                        <div class="slider-promo__title"><a class="slider-promo__title-link" href="">"Хиты Продаж"</a>:
                            мы предлагаем вам самое лучшее</div>
                           
                           <div class="promo-page__slider slider-promo">
                            <div class=" slider-promo__items">
                            <?Php
                                                        // параметры по умолчанию
                                $posts = get_posts( array(
                                'numberposts' => -1,
                                'category_name'    => 'slic_slider' ,
                                'orderby'     => 'date',
                                'order'       => 'ASC',
                                'post_type'   => 'post',
                                'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
                                ) );

                                foreach( $posts as $post ){
                                setup_postdata($post);
                               
                                ?>
                                    <div class="item_slider" >
                                        <a href="#"><img class="slider-promo__item2" src="<?php the_field('foto_novinka') ;?>"></a>
                                            <div class="new"><?php the_field( 'novinka'); ?> </div>
                                         <h2 class="slider-promo__item1-content">
                                           <?php the_field( 'subtitle_slider1'); ?>
                                         </h2>
                                    </div>

                                <?php



                                }

                                wp_reset_postdata(); // сброс
                             ?>
                           </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 promo-page__news  news-page">
                    <div class="news-page__time">
                        <span id="doc_time"> Дата и время</span>
                    </div>
                    <div class="news-page__content">
                        <h2 class="news-page__title">Страничка Дня</h2>
                        <h2 class="news-page__subtitle">новости, акции, розыгриши букетов, викторины и многое
                            другое...
                        </h2>
                        <p class="news-page__info-text">Уважаемые покупатели зайдите в страничку дня и подробнее
                            ознакомтесь с нашимы акциями
                            и предложениями.Там вас ждет много интересного и приятного.Мы любим и заботемся о Вас!!!
                        </p>
                        <a href="#" class="news-page__link">перейти на строничку дня</a>
                    </div>
                    <div class="rotating-slider-container">
                        <div class="rotating-slider">
                            <ul class="slides">
                                <li style="background-image: url(<?php echo bloginfo('template_url'); ?>/assets/img/catalog/avb/avb(1)/avb1_1m.jpg);">
                                    <div class="slide-inner">
                                        <div>БУКЕТЫ ЦВЕТОВ</div>
                                        <p>от 1000Р</p>
                                    </div>
                                </li>
                                <li style="background-image: url(<?php echo bloginfo('template_url'); ?>/assets/img/catalog/avb/avb0043shop/avb20_1m.jpg);">
                                    <div class="slide-inner">
                                        <div>20 РОЗ</div>
                                        <p>ПО ЦЕНЕ 10</p>
                                    </div>
                                </li>
                                <li style="background-image: url(<?php echo bloginfo('template_url'); ?>/assets/img/catalog/avk/avk0009shop/avk9_1m.jpg);">
                                    <div class="slide-inner">
                                        <div>ОТКРЫТКА</div>
                                        <p>ПОДАРОК С КАЖДЫМ БУКЕТОМ </p>
                                    </div>
                                </li>
                                <li style="background-image: url(<?php echo bloginfo('template_url'); ?>/assets/img/catalog/avb/avb0055shop/avb14_1m.jpg);">
                                    <div class="slide-inner">
                                        <div>ДОСТАВКА</div>
                                        <p>БЕСПЛАТНО</p>
                                    </div>
                                </li>
                                <li style="background-image: url(<?php echo bloginfo('template_url'); ?>/assets/img/catalog/avb/avb0020shop/avb6_1m.jpg);">
                                    <div class="slide-inner">
                                        <div>ЭСКЛЮЗИВНЫЕ</div>
                                        <p>БУКЕТЫ</p>
                                    </div>
                                </li>
                                <li style="background-image: url(<?php echo bloginfo('template_url'); ?>/assets/img/catalog/avb/avb0015shop/avb22_1m.jpg);">
                                    <div class="slide-inner">
                                        <div>СУПЕРСКИЕ</div>
                                        <p>СКИДКИ НА БУКЕТЫ</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div class="content__page">
        <div class="container">
                    <div class="promo__subtitle"></div>
            <div class="row page-content catalog js-catalog ">
                    <h1 class="designer-bouqets__title page-content__title"><a href="">Авторские Букеты</a></h1>
                               <?Php
                                                        // параметры по умолчанию
                                $posts = get_posts( array(
                                'numberposts' => -1,
                                'category_name'    => 'designer_bouquets_new' ,
                                'orderby'     => 'date',
                                'order'       => 'ASC',
                                'post_type'   => 'post',
                                'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
                                ) );

                                foreach( $posts as $post ){
                                setup_postdata($post);
                               
                                                ?>
                <div class="col-lg-3  col-md-4 col-sm-6 content catalog__item"  data-category="bucets">
                    <div class="page-content__cart cart-content product catalog__product js-product" data-product-name="<?php the_title( );?>" data-product-price="<?php the_field('bouquet_price'); ?>" data-product-src="<?php echo get_the_post_thumbnail_url(  ) ?>;">
                                   <?php
                                    $field = get_field("wstawka");
                                    
                                    if($field == 'on'){
                                        ?>
                            <div class="wstawka"><?php the_field('wstawka_text'); ?></div>
                                        <?php
                                    }
                                     ?>
                                    <div class="cart-content__img-cart"><a href="<?php echo get_permalink() ;?>"> <?php the_post_thumbnail( ); ?></a></div>
                                       
                            <div class="cart-content__title product__title"><?php the_title( );?></div>
                           
                            <div class="product__bottom cart-content__info">
                            <div class="product__price">
                                <span class=" product__price-value js-product-price-value"><?php the_field('bouquet_price'); ?></span>
                                <span class="product__currency">₽</span>
                            </div>
                            <button class="atuin-btn zakazat-seychas__content  product__btn js-btn-add-to-cart"  >в корзину</button>
                            </div>
                    </div>
                </div> 
                                        <?php
                                        }

                                            wp_reset_postdata(); // сброс
                                        ?>
        
            </div>
            <div class="row page-content ">
                      <h1 class="designer-bouqets__title page-content__title"><a href=""> Авторские Kомпозиции</a></h1>
                               <?Php
                                                        // параметры по умолчанию
                                $posts = get_posts( array(
                                'numberposts' => -1,
                                'category_name'    => 'authors_compositions_nu' ,
                                'orderby'     => 'date',
                                'order'       => 'ASC',
                                'post_type'   => 'post',
                                'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
                                ) );

                                foreach( $posts as $post ){
                                setup_postdata($post);
                               
                                ?>
                                <div class="col-lg-3  col-md-4 col-sm-6 content catalog__item"  data-category="bucets">
                                    <div class="page-content__cart cart-content product catalog__product js-product" data-product-name="<?php the_title( );?>" data-product-price="<?php the_field('bouquet_price'); ?>" data-product-src="<?php echo get_the_post_thumbnail_url(  ) ?>;">
                                                   <?php
                                                    $field = get_field("wstawka");
                                                    
                                                    if($field == 'on'){
                                                        ?>
                                            <div class="wstawka"><?php the_field('wstawka_text'); ?></div>
                                                        <?php
                                                    }
                                                     ?>
                                                    <div class="cart-content__img-cart"><a href="<?php echo get_permalink() ;?>"> <?php the_post_thumbnail( ); ?></a></div>
                                                       
                                            <div class="cart-content__title product__title"><?php the_title( );?></div>
                                           
                                            <div class="product__bottom cart-content__info">
                                            <div class="product__price">
                                                <span class=" product__price-value js-product-price-value"><?php the_field('bouquet_price'); ?></span>
                                                <span class="product__currency">₽</span>
                                            </div>
                                            <button class="atuin-btn zakazat-seychas__content  product__btn js-btn-add-to-cart"  >в корзину</button>
                                            </div>
                                    </div>
                                </div> 
                                                        <?php
                                                        }
                
                                                            wp_reset_postdata(); // сброс
                             ?>
        
                </div>
    
       
              </div>


        </div>
    </div>
<?php
    
    get_footer( ) ;

 ?>
  