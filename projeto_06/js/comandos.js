$(function(){

    var cont = 0;

    $('.img-menu').click(function(){
        cont++;
        if(cont % 2 == 1){
            $('.menu-mobile').fadeIn()
        }else{
            $('.menu-mobile').fadeOut()
        }
    })

    $('nav ul li').click(function(){
        var href = $(this).attr('var');
        var offsetTop = $(href).offset().top;
        $('html, body').animate({'scrollTop': offsetTop});
    });
});
