<footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 footer-link__wrapper">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6 footer-link__col1">
                            <a class="footer-link__item" href="">ссылка 1</a>
                            <a class="footer-link__item" href="">ссылка 2</a>
                            <a class="footer-link__item" href="">ссылка 3</a>
                            <a class="footer-link__item" href="">ссылка 4</a>
                            <a class="footer-link__item" href="">ссылка 5</a>
                            <a class="footer-link__item" href="">ссылка 6</a>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 footer-link__col2">
                            <a class="footer-link__item" href="">ссылка 7</a>
                            <a class="footer-link__item" href="">ссылка 8</a>
                            <a class="footer-link__item" href="">ссылка 9</a>
                            <a class="footer-link__item" href="">ссылка 10</a>
                            <a class="footer-link__item" href="">ссылка 11</a>
                            <a class="footer-link__item" href="">ссылка 12</a>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="row footer-col__wrapper">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="footer__tel-main">наш телефон</div>
                                    <div class="footer__tel-number">
                                        <a href="tel:89154100837" class="footer__tel-link">8-915-410-08-37</a>
                                    </div>
                                </div>
                                <button class="col-lg-6 col-md-6 col-sm-6  button zakazat-zwonok__footer">ЗАКАЗАТЬ ЗВОНОК</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 subscribe wthree-sub">
                
                    <h4>Вы можете подписаться</h4>
                    <form action="#" method="post">
                        <input type="email" name="email" placeholder="Enter your Email..." required="">
                        <input type="submit" value="ПОДПИСАТЬСЯ">
                        <div class="clearfix"> </div>
                    </form>
                    <div class="  header__social social-footer">
                        <a href="" class="social__instagran"><img src="<?php echo bloginfo('template_url'); ?>/assets/icons/instagram.png" alt="inst"></a>
                        <a href="" class="social__watshap"><img src="<?php echo bloginfo('template_url'); ?>/assets/icons/watshap.png" alt="wats"></a>
                        <a href="" class="social__feysbuc"><img src="<?php echo bloginfo('template_url'); ?>/assets/icons/feysbuc.png" alt="feys"></a>
                        <a href="" class="social__twitter"><img src="<?php echo bloginfo('template_url'); ?>/assets/icons/twitter.png" alt="twit"></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="subfooter">
            <div class="container">
                <hr class="footer__hr">
                <p class="design">© 2021 A&GFloristic. All Rights Reserved | Design by <a href="#"
                        target="_blank">ed7070707@mail.ru</a> </p>
                <hr class="footer__hr">
            </div>
        </div>

    </footer>

      <?php 
   wp_footer( );
   ?>
    <script >
        function clock() {
            var d = new Date();
            var month_num = d.getMonth()
            var day = d.getDate();
            var hours = d.getHours();
            var minutes = d.getMinutes();
            var seconds = d.getSeconds();

            month = new Array("января", "февраля", "марта", "апреля", "мая", "июня",
                "июля", "августа", "сентября", "октября", "ноября", "декабря");

            if (day <= 9) day = "0" + day;
            if (hours <= 9) hours = "0" + hours;
            if (minutes <= 9) minutes = "0" + minutes;
            if (seconds <= 9) seconds = "0" + seconds;

            date_time = "Сегодня - " + day + " " + month[month_num] + " " + d.getFullYear() +
                " г.&nbsp;&nbsp;&nbsp;Текущее время - " + hours + ":" + minutes + ":" + seconds;
            if (document.layers) {
                document.layers.doc_time.document.write(date_time);
                document.layers.doc_time.document.close();
            } else document.getElementById("doc_time").innerHTML = date_time;
            setTimeout("clock()", 1000);
        }
    </script>
    <script >
        clock();
    </script>
 
   
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous">
    </script>
   
</body>

</html>