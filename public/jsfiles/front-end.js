/* global cl_builder_global */

(function($) {
	"use strict";
	var CL_FRONT = window.CL_FRONT || {};
	window.CL_FRONT = CL_FRONT;


CL_FRONT.fullHeightRow = function($el) {
    "use strict";
    
    var $elements = $('.cl_row-fullheight');
    if ($elements.length) {

        $elements.each(function(i){
            var $element = $(this);
            
            if(i == 0){
                var $window, windowHeight, offsetTop, fullHeight;
                
                $window = $(window);
                windowHeight = $window.height();
                
                
                offsetTop = $element.offset().top;
                windowHeight > offsetTop && (fullHeight = 100 - offsetTop / (windowHeight / 100), $element.css("min-height", fullHeight + "vh"));
                
                
            }else{
                $element.css('min-height', '100vh');
            }
            
        });
        
    }
    
    if($el != null && $el.length)
        $el.css('min-height', 'auto');
};


CL_FRONT.fullHeightSlider = function($el) {
    "use strict";
    
    var $elements = $('.cl_slider-fullheight');
    if ($elements.length) {

        $elements.each(function(i){
            var $element = $(this);
            
            if(i == 0){
                var $window, windowHeight, offsetTop, fullHeight;
                
                $window = $(window);
                windowHeight = $window.height();
                
                
                offsetTop = $element.offset().top;
                windowHeight > offsetTop && (fullHeight = 100 - offsetTop / (windowHeight / 100), $element.css("height", fullHeight + "vh"));
                
                
            }else{
                $element.css('height', '100vh');
            }
            
        });
        
    }
    
    if($el != null && $el.length)
        $el.css('height', 'auto');
};


/*CL_FRONT.enableParallax = function($el){
    var $elements = $el || $('.cl-parallax');
  
    if($elements.length){
        $elements.each(function(i){
            
            var $element = $(this);
            CL_FRONT.loadDependencies([cl_builder_global.FRONT_LIB_JS + 'jquery.parallax.min.js'], function(){
                
                var speed = $element.data('parallaxSpeed') || 0.3;
                $element.parallax("49%", speed);
                
            });
            
        });
    }
    
};*/



CL_FRONT.videoSection = function(){
    $.each($('.video-section'), function(index, val){
        var stream = $(val).data('stream');
        if(stream == 'youtube'){
            
            $.getCachedScript('https://www.youtube.com/player_api', function(){
                var iframe_src = $(val).find('iframe').attr('src');
                $(val).find('iframe')[0].src = iframe_src;
                
                var youtube = $(val).find('iframe')[0];
                
                var player;
                setTimeout(function() {
                    player = new YT.Player(youtube);
                }, 500);
                
                setTimeout(function() {
                    if(typeof player.playVideo == 'function'){
                        player.playVideo();
                        player.mute();
                    }
                }, 2000);
                 
                
                
                CL_FRONT.fixAspectRatio(val);
                
                $(window).resize(function(){
                    CL_FRONT.fixAspectRatio(val);
                }).resize();
                
                $(val).css('opacity', 1);
            });

        }
        
        if(stream == 'vimeo'){

                var iframe_src = $(val).find('iframe').attr('src');
                $(val).find('iframe')[0].src = iframe_src;
                CL_FRONT.fixAspectRatio(val);
                
                $(window).resize(function(){
                    CL_FRONT.fixAspectRatio(val);
                }).resize();
                
                $(val).css('opacity', 1);
                
            
        }
    });
};


CL_FRONT.fixAspectRatio = function(el){
    
    var parent = $(el), baseAspectRatio = 41.6, $videoHolder = parent.find('.cl-video-centered');
    var parentHeight = parent.height();
    var parentWidth = parent.width();
    var parentAspectRatio = (parentHeight / parentWidth) * 100;

    var width = (parentAspectRatio / baseAspectRatio) * 100,
            widthOverflow = (width - 100);

    if(parentAspectRatio > baseAspectRatio)
        $videoHolder.css({
            'padding-top': parentAspectRatio + '%',
            'width': width + '%',
            'left': -(widthOverflow / 2) + '%'
        }); 

};

CL_FRONT.animations = function( el, force ) { 
        if (!window.waypoint_animation) {
            window.waypoint_animation = function(el, force) {
                
                var notEl = (el == null) ? true : false;

                if( el == null )
                    el = $('.animate_on_visible:not(.start_animation)');
                else
                    el = el.find('.animate_on_visible:not(.start_animation)');

               
                $.each(el, function(index, val) {
                    var run = true;
                    if ($(val).closest('.cl-slide').length > 0) run = false;
                   
                    if ($(val).closest('.cl-carousel').length > 0) run = false;

                    if ($(val).closest('#navigation').length > 0) run = false;

                    if( force )
                        run = true;
                    if (run) {
                        
                        if( $(val).closest('.cl-slide').length == 0 ){

                            CL_FRONT.components.loadDependencies([cl_builder_global.FRONT_LIB_JS + "waypoints.min.js"], function(){

                                new Waypoint({
                                    element: val,
                                    handler: function() {
                                        var element = $(this.element),
                                            index = element.index(),
                                            delayAttr = element.attr('data-delay');
                                     
                                        if (delayAttr == undefined) delayAttr = 0;
                                        setTimeout(function() {
                                            element.addClass('start_animation');
                                            
                                            if( element.hasClass('cl_counter') )
                                                CL_FRONT.codelessCounter(element);

                                            if( element.hasClass('cl_progress_bar') )
                                                CL_FRONT.progressBar( element );

                                        }, delayAttr);
                                        this.destroy();
                                    },
                                    offset: '90%'
                                });
                            });

                        }else{

                            var delayAttr = $(val).attr('data-delay');
                            if (delayAttr == undefined) delayAttr = 0;
                            
                            setTimeout(function() {
                                $(val).addClass('start_animation');
                                            
                                if( $(val).hasClass('cl_counter') )
                                    CL_FRONT.codelessCounter($(val));

                                if( $(val).hasClass('cl_progress_bar') )
                                    CL_FRONT.progressBar( $(val) );

                            }, delayAttr);

                        }
                        
                    }
                });
            }
        }
        setTimeout(function() {
            window.waypoint_animation(el, force);
        }, 1);
    };



CL_FRONT.init = function(){
    CL_FRONT.animations();
    //CL_FRONT.enableParallax();
    CL_FRONT.fullHeightRow();
    CL_FRONT.fullHeightSlider();
    CL_FRONT.videoSection();
};


$(document).ready(function () {

    CL_FRONT.init();

});

})(jQuery);