<?php 
      
      /*
Template Name: мой шаблон для авторских букетов
Template Post Type: post, designer_bouquets


*/

?>
<?php
get_header();
?>

<section class="carta-tovara catalog js-catalog ">
        <div class="container">
            <div class="promo__subtitle"></div>
            <div class="row">
                <div class="col-lg-6 offset-lg-1 carta-tovara__hover-image">

                    <a data-fancybox="gallery" href="<?php the_field('avb');?> ">
                        <img class="product__img" src="<?php the_field('avb_1m'); ?>">
                        <div><img src="<?php echo bloginfo('template_url'); ?>/assets/icons/zoom.png"></div>
                    </a>
                </div>
                <div class="col-lg-5 carta-tovara__info-block info-block">
                    <h1 class="info-block__name-bucet"><?php the_title(); ?></h1>
                    <h2 class="info-block__articul-bucet"><?php the_field('arttikul_tovara'); ?></h2>
                    <p class="info-block__info-bucet"><?php the_field('informacziya_o_bukete'); ?></p>
                    <div class="info-block__sostav-bucet sostav-bucet">
                        <h3 class="sostav-bucet__title">состав букета</h3>
                        <div class="row">
                            <ul class="col-lg-7 offset-lg-1 sostav-bucet__items">
                                <li class="sostav-bucet__item"><a href=""  class="sostav-bucet__item-link"><?php the_field('harakteristiki_buketa_1'); ?></a></li>
                                <li class="sostav-bucet__item"><?php the_field('harakteristiki_buketa_2'); ?></li>
                                <li class="sostav-bucet__item"><?php the_field('harakteristiki_buketa_3'); ?></li>
                                <li class="sostav-bucet__item"><?php the_field('harakteristiki_buketa_4'); ?></li>
                                <li class="sostav-bucet__item"><?php the_field('harakteristiki_buketa_5'); ?></li>
                                <li class="sostav-bucet__item"><?php the_field('harakteristiki_buketa_6'); ?></li>
                            </ul>
                        </div>
                    </div>
                    <div class="row js-product "  data-product-name="<?php the_title( );?>" data-product-price="<?php the_field('bouquet_price'); ?>" data-product-src="<?php echo get_the_post_thumbnail_url(  ) ?>;">
                        <div
                            class="col-lg-4 offset-lg-1 col-md-4 offset-md-1 col-sm-4 offset-sm-1 carta-tovara__prace-wrapper">
                            <div class="info-block__price"><?php the_field('staraya_czena_buketa'); ?></div>
                            <div class="info-block__old-price"><?php the_field('novaya_czena_buketa'); ?><span class="product__currency">₽</span></div>
                        </div>
                        <div
                            class="col-lg-6 offset-lg-1 col-md-6 offset-md-1 col-sm-4 offset-sm-1 carta-tovara__link-wrapper">
                            <button class="atuin-btn zakazat-seychas__content  product__btn js-btn-add-to-cart"  >в корзину</button>
                             <a href="#"  class="zakazat-zwonok__subheader atuin-btn atuin-btn__singlepsge" >БЫСТРЫЙ ЗАКАЗ</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carta-tovara__miniimg-wrapper">
                <a href="<?php the_field('avb_2');?>" data-fancybox="gallery"
                    class="carta-tovara__miniimg-link">
                    <img src="<?php the_field('avb_2m'); ?>" alt=""
                        class="carta-tovara__miniimg" />
                </a>
                <a href="<?php the_field('avb_3');?>" data-fancybox="gallery" class="carta-tovara__miniimg-link">
                    <img src="<?php the_field('avb_3m'); ?>" alt=""
                    class="carta-tovara__miniimg" />
                </a>
            </div>
        </div>
    </section>

	<main id="primary" class="site-main">

		<?php
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content', get_post_type() );


		endwhile; // End of the loop.
		?>

	</main><!-- #main -->

<?php

get_footer();
