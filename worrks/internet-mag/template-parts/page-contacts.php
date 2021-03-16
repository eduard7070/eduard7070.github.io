<?php 
      /*
      Template Name: Контакты
      */ 
?>


<?php 

get_header();

?>

<section class="contacts-pages">
        <div class="container">
        <div class="promo__subtitle"></div>
            <div class="row contacts-page page-contacts">
                <h1 class="page-contacts__title">КОНТАКТЫ</h1>
                <div class="col-lg-6 page-contacts__about-us">
                 <h2 class="page-contacts__about-us-title">немножко о нас</h2>
                 <h3 class="page-contacts__about-us-text">A&G FLORISTIC салон магазин цветов который находится в Москве по адресу ул. Никольская дом 10.
                    Мы работаем  для вас уже несколько лет и научились удовлетворять самые высокие требования наших
                    клиентов . Наши <a href="#">авторские букеты</a> будут замечательным подарком по любому случаю, а    <a href="#">цветочные композиции</a>
                    станут настоящим украшением любого мероприятия . Мы вкладываем в каждый букет нашу любовь что бы вы 
                    почувствовали себя намного счастливее , красивее и добрее . Дорогие покупатели ждем ваших заказов и
                    готовы к плодотворной работе.</h3>
                    <h2 class="page-contacts__coll-title">наш контактный телефон</h2>
                    <a href="tel:89154100837" class="page-contacts__coll-number ">89154100837</a>
                    <a href="tel:89453214523" class="page-contacts__coll-number">89453214523</a>
                    <h2 class="page-contacts__mail-title" >наша электронная почта</h2>
                    <a href="" class="page-contacts__mail-name">a&gfloristic@yandex.ru</a>
                    <h2 class="page-contacts__address-title" >наш адрес</h2>
                    <h2 class="page-contacts__adress-name"> г. Москва ул. Никольская дом 5</h2>
                    
                </div>
                <div class="col-lg-6">
                    <div class="page-contacts__yandex-cart">
                        <h2 class="page-contacts__yandex-cart-title">мы на карте</h2>
                        <h2 class="page-contacts__yandex-cart-text">Наш магазин находиться самом центре Москвы  по адресу ул. Никольская дом 10,  пяти минутах доступности
                            досягаемости станции метро БАРИКАДНАЯ и ТАГАНСКАЯ.</h2>
                            <div class="row class ">
                                <h2 data-da=".promo__subtitle, 991 , first " class="page-contacts__fotoshop-title">фото магазина A&G Floristic</h2>
                                <div data-da=".promo__subtitle, 991 , first " class="page-contacts__fotoshop-block col-lg-6">
                                    <img src="<?php echo bloginfo('template_url'); ?>/assets/img/foto_shope1.jpg" alt="" class="page-contacts__fotoshop">
                                     <img src="<?php echo bloginfo('template_url'); ?>/assets/img/foto_shope2.jpg" alt="" class="page-contacts__fotoshop">
                                </div>
                            </div>
                    </div>
                </div>
                <div class="row row__iframe">
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad1767a4db23f1c9c4b894f47330eb05713c367af1fb55504c6ddbe0ec35cdc3c&amp;source=constructor" 
                    width="100%" height="400" frameborder="0"></iframe>
                </div>
            </div>
        </div>
    </section>



















<?php
    
    get_footer( ) ;

   ?>