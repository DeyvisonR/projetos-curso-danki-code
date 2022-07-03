$(function(){

    var cont = 0;

    $('.img-menu').click(function(){
        if($(".menu-mobile").css("display") == "none"){
            $('.menu-mobile').fadeIn()
        }else{
            $('.menu-mobile').fadeOut()
        }
    })

    $('nav ul li').click(function(){
        var href = $(this).attr('var');
        var offsetTop = $(href).offset().top;
        $('html, body').animate({'scrollTop': offsetTop});
        return false
    });

    $(window).resize(function(){
        $(".menu-mobile").hide()
    })
});
