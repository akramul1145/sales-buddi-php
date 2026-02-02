
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

       // First carousel - Left to Right (LTR)
       if ($('.sales-review-ltr').length) {
           $('.sales-review-ltr').slick({
                infinite: true,
                slidesToShow: 3,
                arrows: false,
                dots: false,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                speed: 800,
                rtl: false,
                pauseOnHover: true,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
            console.log('LTR carousel initialized');
       }

       // Second carousel - Right to Left (RTL)
       if ($('.sales-review-rtl').length) {
           $('.sales-review-rtl').slick({
                infinite: true,
                slidesToShow: 3,
                arrows: false,
                dots: false,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                speed: 800,
                rtl: true,
                pauseOnHover: true,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
            console.log('RTL carousel initialized');
       }




       gsap.registerPlugin(ScrollTrigger);




                const cardsWrappers = gsap.utils.toArray(".sc_card-wrapper");
                const cards = gsap.utils.toArray(".sc_card");

                cardsWrappers.forEach((wrapper, i) => {
                const card = cards[i];

                let scale = 1;
                if (i !== cards.length - 1) {
                    scale = 0.9 + 0.025 * i;
                }

                gsap.to(card, {
                    scale: scale,
                    transformOrigin: "top center",
                    ease: "none",
                    scrollTrigger: {
                    trigger: wrapper,
                    start: "top " + (60 + 100 * i),
                    end: "bottom 550",
                    endTrigger: ".sc_wrapper",
                    scrub: true,
                    anticipatePin: 0.5,
                    pin: wrapper,
                    pinSpacing: false,
                    invalidateOnRefresh: true,
                    id: i + 1
                    }
                });
                });



                var maxHeight = jQuery(".sc_cards .pin-spacer:last-child").height() - 30; 
                jQuery(".what-sales-footer").css("margin-top", maxHeight + "px");

                console.log(maxHeight);

           




});




