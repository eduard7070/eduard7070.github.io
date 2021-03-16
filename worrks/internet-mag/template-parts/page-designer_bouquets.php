<?php 
      
      /*
Template Name: авторские букеты

*/

?>


<?php 

get_header();

?>

<section class="designer-bouquets">
           <h1 class="promo__subtitle"></h1>
        <div class="container">
            <div class="row page-content catalog js-catalog ">
                               <?Php
                                                        // параметры по умолчанию
                                $posts = get_posts( array(
                                'numberposts' => -1,
                                'category_name'    => 'designer_bouquets' ,
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
    </section>

















<?php
    
    get_footer( ) ;

   ?>