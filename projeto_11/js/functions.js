$(function(){

    $(".option-aside").hover(function(){
        $(".option-aside").removeClass("active");
        $(this).addClass("active");
    },function(){
        $(".option-aside").removeClass("active");
    });

});