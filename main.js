const typed = new Typed('.typed',{
    strings: [
        'Grover LLanos', 
        'Frontend developer', 
        'Web designer'
],

stringsElement: null,  
typeSpeed: 20,  
startDelay: 300,  
backSpeed: 30,  
smartBackspace: true, 
shuffle: false,   
backDelay: 2000, 
fadeOutDelay: 500,  
loop: true,
loopCount: Infinity,
showCursor: true,
cursorChar: '|', 
attr: null,  
contentType: 'html',
});
    
/*window.onscroll = function (){    
    const scroll = document.documentElement.scrollTop || document.body.scrollTop;  
      
    const menu = document.getElementById('menu');   
    const r = menu.classList.contains('removeFixed')
   
    if(scroll > 0 || r){           
        menu.classList.add('fixed-top');
        menu.classList.add('fixed-top--color'); 
        menu.classList.remove('removeFixed');
        
    }else{         
        menu.classList.remove('fixed-top');        
        menu.classList.remove('fixed-top--color');  
        menu.classList.add('removeFixed');      
    }
}*/
    
$(window).on('scroll', function() {
    var menu = $('.menu-nav');
    var barToggle = $('.bar-toggle');
    
    if ($(window).scrollTop() > 0) {
        menu.addClass('fixed-top');
        menu.addClass('fixed-top--color');
        barToggle.addClass('color');
                 
    } else {
        menu.removeClass('fixed-top');
        menu.removeClass('fixed-top--color');
        barToggle.addClass('color');
        
    }	
});	

$(document).ready(function (){ 
    $(".service__carousel").owlCarousel({
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        nav: false,
        smartSpeed: 1000,
        dots: true,
        autoplayHoverPause: true,                
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3
            }
        }
    })
});

$(window).on('scroll', function () {
    $(".skills__progress--bar").each(function () {
        let $this = $(this);
        let per = $this.data('num');
        let bottom_object = $this.offset().top + $this.outerHeight();
        let bottom_window = $(window).scrollTop() + $(window).height();        
      
        if (bottom_window > bottom_object) {            
            $this.animate({ animatedValue: per }, {
                duration: 2000,
                step: function() {
                    $this.attr("data-num", Math.floor(this.animatedValue) + '%');
                    $this.css("width", Math.floor(this.animatedValue) + '%');
                                        
                },
                complete: function() {
                    $this.attr("data-num", Math.floor(this.animatedValue) + '%');
                }                    
            });      
                
        }
    });
    
});
        // Porfolio isotope and filter
$(window).on('load', function() {
    var projectIsotope = $('.grid').isotope({
        itemSelector: '.grid-item'
    });
    $('.filter-button-group li').on('click', function() {
        $(".filter-button-group li").removeClass('filter-active');
        $(this).addClass('filter-active');
        projectIsotope.isotope({
            filter: $(this).data('filter')
        });
    });
});

$(document).ready(function (){ 
    $(".testimonials__carousel").owlCarousel({
        margin: 100,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        nav: false,
        smartSpeed: 1000,
        dots: true,
        autoplayHoverPause: true,                
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1
            }
        }
    })
});

$(document).ready(function(){
    var contador = 1;
    $(".button-toggle").click(function(){   
        
        if(contador == 1){
            $(".button-toggle").addClass("open")
            contador = 0;
        }else {            
            $(".button-toggle").removeClass("open");
            contador = 1;
        }
        $(".menu-nav__link").toggle("active");
    });
   
});