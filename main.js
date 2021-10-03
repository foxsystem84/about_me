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
    menu.classList.toggle("sticky", window.scrollY > 100)
    if(this.window.scrollY >100){
        barToggle.classList.add("color")
    }     
    if(this.window.scrollY <100 ){
        barToggle.classList.remove("color")
        
    }
    
})    

var contador=1;
btnToggle.addEventListener("click", function(){        
    if (contador == 1){
        btnToggle.classList.add("open") 
        menu.classList.add("sticky")
        menu.classList.add("active")   
        barToggle.classList.add("color")        
        contador = 0          
    }else{
        btnToggle.classList.remove("open")
        menu.classList.add("sticky")      
        menu.classList.remove("active")    
        barToggle.classList.add("color")         
        contador = 1           
    }  
})
/*
const form = document.querySelector("#form")
const nameID=document.getElementById("name")
const mail = document.getElementById("mail")
const mailError = document.querySelector("#mail + span.error")
form.addEventListener("submit", handleSubmit)
mail.addEventListener('input', validateMail)

  function validateMail(event){
    if(mail.validity.valid){
        mailError.innerHTML=''
        mailError.className='error'
    }else{
        showError()
    }
  }

  function handleSubmit(event){
    event.preventDefault();
    if(nameID.)
    if(!mail.validity.valid) {        
        showError();        
        
      }    
  }

  function showError() {
    if(mail.validity.valueMissing) {      
      mailError.textContent = 'Debe introducir una dirección de correo electrónico.';
    } else if(mail.validity.typeMismatch) {     
      mailError.textContent = 'El valor introducido debe ser una dirección de correo electrónico.';
    } else if(mail.validity.tooShort) {      
      mailError.textContent = 'El correo electrónico debe tener al menos ${ mail.minLength } caracteres; ha introducido ${ email.value.length }.';
    }    
    mailError.className = 'error activo';
  }
*/

