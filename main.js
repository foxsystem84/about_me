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

const menu= document.querySelector("nav");                
    const barToggle = document.querySelector('.bar-toggle');
    const btnToggle = document.querySelector('.button-toggle');
    
        
    window.addEventListener("scroll", function(){        
        menu.classList.toggle("sticky", window.scrollY > 0)
        barToggle.classList.toggle("color", window.scrollY > 0)        
    })    

    var contador=1;
    btnToggle.addEventListener("click", function(){        
        if (contador == 1){
            btnToggle.classList.add("open")            
            contador = 0          
        }else{
            btnToggle.classList.remove("open")                   
            contador = 1           
        }        
        menu.classList.toggle("active")       
    })