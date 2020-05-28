jQuery(document).ready(function ($) {

            /* FIxed Header */
            let header = $("#header");
            let intro = $("#intro__inner");
            let introH = intro.innerHeight() ;
            let scrollPos = $(window).scrollTop();
            let showHeaderMenu = $("#basicExampleNav")
            checkScroll(scrollPos,introH);

            $(window).on("scroll resize", function(){
                introH = intro.innerHeight();
                scrollPos = $(this).scrollTop();

                checkScroll (scrollPos,introH);

            });

            function checkScroll(scrollPos,introH) {
                if(scrollPos > introH) {
                    header.addClass("fixed");

                } else {
                    header.removeClass("fixed");

                }
            }


            /* Smooth scroll */


            $("[data-scroll]").on("click", function(event){
                event.preventDefault();

                let elementId = $(this).data("scroll");

                let elementOffset = $(elementId).offset().top;

                showHeaderMenu.removeClass('show');

                console.log(elementOffset);


                $("html, body").animate ({
                    scrollTop: elementOffset -40
                }, 1100);

            })


});
