<?php

if ( function_exists('register_sidebar') )
    register_sidebar(array(
        'name' => 'New Sidebar',
        'before_widget' => '<div class="newsidebar">',
        'after_widget' => '</div>',
        'before_title' => '<div class="title">',
        'after_title' => '</div>',
    ));
          add_action( 'wp_enqueue_scripts' , 'agfloristic_styles' );
          function agfloristic_styles() {
            wp_enqueue_style( 'agfloristic-styles', get_stylesheet_uri(  ) );
        }; 
        wp_enqueue_style('slic-style', get_template_directory_uri() . '/assets/css/slick.css');
        wp_enqueue_style('slictime-style', get_template_directory_uri() . '/assets/css/slick-theme.css');
        wp_enqueue_style('fancybox-style', get_template_directory_uri() . '/assets/css/fancybox.min.css');


        add_action( 'wp_enqueue_scripts' , 'agfloristic_scripts' );
        function agfloristic_scripts() {
            wp_enqueue_script( 'agfloristic-scripts', get_template_directory_uri(  ) . '/assets/js/script.js', 
             array(), null, true );

        };
        wp_deregister_script('jquery');
        wp_register_script('jquery', '//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js', false, null);
        wp_enqueue_script('jquery');
        wp_enqueue_script('slic-script', get_template_directory_uri() . '/assets/js/slick.min.js');
        wp_enqueue_script('rotating-script', get_template_directory_uri() . '/assets/js/jquery.rotating-slider.js');
        wp_enqueue_script('fancybox-script', get_template_directory_uri() . '/assets/js/jquery.fancybox.min.js');
        

        add_theme_support( 'custom-logo' );
        add_theme_support( 'post-thumbnails');
        add_action( 'after_setup_theme', function(){
          register_nav_menus( [
            'header_menu' => 'Меню в шапке',
            'footer_menu' => 'Меню в подвале'
          ] );
        } );

        trailingslashit( dirname( $mailer ) );

        ?>