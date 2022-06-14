$(function(){

    // colocando o menu mobile

    $(".icon-menu").click(function(){
        $(".menu-mobile").slideToggle();
    });

    $(window).resize(function(){
        $(".menu-mobile").css("display", "none");
    });

    // colocando a animação do scrolltop no menu
    var href;

    $("nav ul li a").click(function(){
        href = $(this).attr("href");
        return false;
    });

    $("nav ul li").click(function(){
        href = $(this).find("a").attr("href");
    });
});