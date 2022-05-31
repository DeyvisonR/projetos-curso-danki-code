$(function(){

    // colocando efeito hover no menu para desktop

    $(".menu-desktop ul li").hover(function(){
        $(".menu-desktop ul li").removeClass("selected");
        $(this).addClass("selected");
    })

    // colocando o menu mobile

    $(".menu-icon").click(function(){
        $(".menu-mobile").slideToggle()
    })

    $(window).resize(function(){
        $(".menu-mobile").css("display", "none")
    })

    // colocando a animação do scrolltop nos menus de navegação

    $("nav ul li a").click(function(){
        var href = $(this).attr('href')
        var offSetTop = $(href).offset().top
        $("html, body").animate({"scrollTop": offSetTop})
        return false
    })

})
