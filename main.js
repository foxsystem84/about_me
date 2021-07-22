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
    
window.onscroll = function (){    
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
}

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
    $(".skills__progress .skills__progress--bar").each(function () {
        var bottom_object = $(this).offset().top + $(this).outerHeight();
        var bottom_window = $(window).scrollTop() + $(window).height();
        var progressWidth = $(this).attr('aria-valuenow') + '%';
        console.log("bottom_object:" +bottom_object);
        console.log("botton windows:" +bottom_window);
        console.log("progresswidh:" +progressWidth);
        if (bottom_window > bottom_object) {
            $(this).css({
                width: progressWidth
            });
        }
    });
});


// ProgressBar init ----------------------
$('.skills__progress--bar').each(function() {
    var $this = $(this);
    var per = $this.data('num');
    
    $({ animatedValue: 0 }).animate({ animatedValue: per }, {
        duration: 5000,
        step: function() {
            $this.attr("data-num", Math.floor(this.animatedValue) + '%');
            $this.css("width", Math.floor(this.animatedValue) + '%');
            $(".span").html(Math.floor(this.animatedValue) + '%');
        },
        complete: function() {
            $this.attr("data-num", Math.floor(this.animatedValue) + '%');
            $(".span").html(Math.floor(this.animatedValue) + '%');
        }
    });
});