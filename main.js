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
function fadeIn(){

}


