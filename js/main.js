(function($) {
  
    var App = {
 
    /**
    * Init Function
    */
    init: function() {
        App.HomeOpacity();
        App.ScrollToContact();
        App.ScrollBack();
        App.Preloader();
        App.Animations();
        App.Carousel();
        App.Lightbox();
    },

 
    HomeOpacity: function() {
        var h = window.innerHeight;
        $(window).on('scroll', function() {
            var st = $(this).scrollTop();
            $('#home').css('opacity', (1-st/h) );
        });
    },


    /**
    * Scroll To Contact
    */
    ScrollToContact: function() {
    $('#button_more').click(function () { $.scrollTo('#about',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
    $('#about_arrow_back').click(function () { $.scrollTo('0px',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
    $('#about_arrow_next').click(function () { $.scrollTo('#features_1',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
    $('#features_1_arrow_back').click(function () { $.scrollTo('#about',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
    $('#features_1_arrow_next').click(function () { $.scrollTo('#features_2',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
    $('#features_2_arrow_back').click(function () { $.scrollTo('#features_1',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
    $('#features_2_arrow_next').click(function () { $.scrollTo('#features_3',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
    $('#features_3_arrow_back').click(function () { $.scrollTo('#features_2',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
    $('#features_3_arrow_next').click(function () { $.scrollTo('#gallery',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
    $('#gallery_arrow_back').click(function () { $.scrollTo('#features_3',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
    $('#gallery_arrow_next').click(function () { $.scrollTo('#dev_blog',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
    $('#dev_blog_arrow_back').click(function () { $.scrollTo('0px',1000,{easing:'easeInOutExpo',offset:0,'axis':'y'});});
    },
 
 
 
    /**
    * Scroll Back
    */
    ScrollBack: function() {
        $('#arrow_back').click(function () {
            $.scrollTo('#home',1500,{easing:'easeInOutExpo',offset:0,'axis':'y'});
        });
    },
 
 
    /**
    * Preloader
    */
    Preloader: function() {
        $(window).load(function() {
            $('#status').delay(100).fadeOut('slow');
            $('#preloader').delay(500).fadeOut('slow');
            $('body').delay(500).css({'overflow':'visible'});
            setTimeout(function(){$('#logo').addClass('animated fadeInDown')},500);
            setTimeout(function(){$('#logo_header').addClass('animated fadeInDown')},600);
            setTimeout(function(){$('#slogan').addClass('animated fadeInDown')},700);
            setTimeout(function(){$('#home_image').addClass('animated fadeInUp')},900);
        })
    },


    /**
    * Animations
    */
    Animations: function() {
        $('#about').waypoint(function() {
            setTimeout(function(){$('#about_intro').addClass('animated fadeInDown')},0);
            setTimeout(function(){$('#service_1').addClass('animated fadeInDown')},300);
            setTimeout(function(){$('#service_2').addClass('animated fadeInDown')},500);
            setTimeout(function(){$('#service_3').addClass('animated fadeInDown')},700);
        }, { offset: '50%' });

        $('#bio').waypoint(function() {
            setTimeout(function(){$('#bio-intro').addClass('animated fadeInDown')},0);
            setTimeout(function(){$('#bio-info-1').addClass('animated fadeInDown')},700);
            setTimeout(function(){$('#bio-info-2').addClass('animated fadeInDown')},1000);
        }, { offset: '50%' });
 
        $('#features_1').waypoint(function() {
            setTimeout(function(){$('#features_1_intro').addClass('animated fadeInDown')},0);
            setTimeout(function(){$('#features_1_content').addClass('animated fadeInDown')},300);
            setTimeout(function(){$('#features1a_image').addClass('animated fadeInRight')},600);
            setTimeout(function(){$('#features1b_image').addClass('animated fadeInRight')},900);
            setTimeout(function(){$('#features1c_image').addClass('animated fadeInRight')},1200);
            setTimeout(function(){$('#features1d_image').addClass('animated fadeInRight')},1500);
        }, { offset: '50%' });
 
        $('#features_2').waypoint(function() {
            setTimeout(function(){$('#features_2_intro').addClass('animated fadeInDown')},0);
            setTimeout(function(){$('#features_2_content').addClass('animated fadeInDown')},300);
            setTimeout(function(){$('#features2a_image').addClass('animated fadeInLeft')},600);
            setTimeout(function(){$('#features2b_image').addClass('animated fadeInLeft')},900)
            setTimeout(function(){$('#features2c_image').addClass('animated fadeInLeft')},1200)
            setTimeout(function(){$('#features2d_image').addClass('animated fadeInLeft')},1500)
        }, { offset: '50%' });

        $('#features_4').waypoint(function() {
            setTimeout(function(){$('#features_4_intro').addClass('animated fadeInDown')},0);
            setTimeout(function(){$('#features_4_content').addClass('animated fadeInDown')},300);
            setTimeout(function(){$('#features4a_image').addClass('animated fadeInRight')},600);
            setTimeout(function(){$('#features4b_image').addClass('animated fadeInRight')},900)
            setTimeout(function(){$('#features4c_image').addClass('animated fadeInRight')},1200)
            setTimeout(function(){$('#features4d_image').addClass('animated fadeInRight')},1500)
        }, { offset: '50%' });

        $('#features_5').waypoint(function() {
            setTimeout(function(){$('#features_5_intro').addClass('animated fadeInDown')},0);
            setTimeout(function(){$('#features_5_content').addClass('animated fadeInDown')},300);
            setTimeout(function(){$('#features5a_image').addClass('animated fadeInLeft')},600);
            setTimeout(function(){$('#features5b_image').addClass('animated fadeInLeft')},900)
            setTimeout(function(){$('#features5c_image').addClass('animated fadeInLeft')},1200)
            setTimeout(function(){$('#features5d_image').addClass('animated fadeInLeft')},1500)
        }, { offset: '50%' });
 
        $('#features_3').waypoint(function() {
            setTimeout(function(){$('#features_3_intro').addClass('animated fadeInDown')},0);
            setTimeout(function(){$('#features_3_content_left, #features_3_content_right').addClass('animated fadeInUp')},700);
            
            setTimeout(function(){$('#features_3_content_center').addClass('animated fadeInDown')},600)
            setTimeout(function(){$('#features_3_b_content_center').addClass('animated fadeInDown')},600)
            setTimeout(function(){$('#features_3_c_content_center').addClass('animated fadeInDown')},600)
            setTimeout(function(){$('#features_3_d_content_center').addClass('animated fadeInDown')},600)
            setTimeout(function(){$('#features_3_e_content_center').addClass('animated fadeInDown')},600)
            setTimeout(function(){$('#features_3_f_content_center').addClass('animated fadeInDown')},600)
            setTimeout(function(){$('#features_3_g_content_center').addClass('animated fadeInDown')},600)
            setTimeout(function(){$('#features_3_h_content_center').addClass('animated fadeInDown')},600)
            setTimeout(function(){$('#features_3_i_content_center').addClass('animated fadeInDown')},600)
            setTimeout(function(){$('#features_3_j_content_center').addClass('animated fadeInDown')},600)
            setTimeout(function(){$('#features_3_k_content_center').addClass('animated fadeInDown')},600)
            setTimeout(function(){$('#features_3_l_content_center').addClass('animated fadeInDown')},600)
            setTimeout(function(){$('#features_3_m_content_center').addClass('animated fadeInDown')},600)
            setTimeout(function(){$('#features_3_n_content_center').addClass('animated fadeInDown')},600)
        }, { offset: '50%' });
 
        $('#gallery').waypoint(function() {
            setTimeout(function(){$('#gallery_intro').addClass('animated fadeInDown')},0);
            setTimeout(function(){$('#gallery_carousel').addClass('animated fadeInUp')},700)
        }, { offset: '50%' });
 
        $('#dev_blog').waypoint(function() {
            setTimeout(function(){$('#dev_blog_intro').addClass('animated fadeInDown')},0);
            setTimeout(function(){$('#dev_blog_content').addClass('animated fadeInDown')},700)
        }, { offset: '50%' });
 
        $('#blog_header').waypoint(function() {
            setTimeout(function(){$('#title').addClass('animated fadeInDown')},0);
        }, { offset: '50%' });

    },


    /**
    * Carousel
    */
    Carousel: function() {
        $('#owl-gallery').owlCarousel({
            items : 5,
            itemsDesktop : [1199,5],
            itemsDesktopSmall : [980,5],
            itemsTablet: [768,5],
            itemsTabletSmall: [550,2],
            itemsMobile : [480,2],
        });
    },

    /**
    * Nivo Lightbox
    */
    Lightbox: function() {
        $('#owl-gallery a').nivoLightbox({
            effect: 'fall',                             // The effect to use when showing the lightbox
        });
    },
 

 }

$(function() {
  App.init();
  });


})(jQuery);