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
        var menu = $('#menu');
        if ($(window).scrollTop() > 200) {
            menu.addClass('fixed-top');
            menu.addClass('fixed-top--color');
            menu.removeClass('removeFixed');
            
        } else {
            menu.removeClass('fixed-top');
            menu.removeClass('fixed-top--color');
            menu.addClass('removeFixed');
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


/*$(document).ready(function(){
    $(".card").hover(function(){
        $(".card-rombo").css("background-color", "#f55422");
        $(".card-rombo i").css("color", "white");
        }, function(){
        $(".card-rombo").css("background", "rgba(200, 200, 200, 0.07)");
        $(".card-rombo i").css("color", "#f55422");
    });
});*/

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

/*$(document).ready( function() {   
    $('.grid').isotope({
      itemSelector: '.grid-item',
    });    
    // filter items on button click
    $('.filter-button-group').on( 'click', 'li', function() {
      var filterValue = $(this).attr('data-filter');
      $('.grid').isotope({ 
          filter: filterValue 
        });
      $('.filter-button-group li').removeClass('filter-active');
      $(this).addClass('filter-active');
    });
        })*/

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