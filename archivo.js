$(document).ready(function(){
    var subir = $('.arriba');
    subir.click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:0}, 500);
    });
    subir.hide();

    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
            subir.fadeIn();
        }else{
            subir.fadeOut();
        }

    });
        
    
});  
