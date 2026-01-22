
jQuery(document).ready(function($){ 


        $('.accordion-header').eq(0).addClass('active');
        $('.accordion-content').eq(0).slideDown();

        $(".accordion-header").on('click', function (){
            
            var trigger = $(this);
            var hasClass = trigger.hasClass('active');

            $('.accordion-header').removeClass('active');
            $('.accordion-header').next().slideUp();
            
            if(hasClass) {
                trigger.removeClass('active');
                trigger.next().slideUp();
            }

            else {
                trigger.addClass('active');
                trigger.next().slideToggle();          
            }

        });

       $('.sales-review-boxes-wrapper').slick({
            infinite: true,
            slidesToShow: 3,
            arrows: false,
            dots: false,
            slidesToScroll: 3
            });
		


    
});   