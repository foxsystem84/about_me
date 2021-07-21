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