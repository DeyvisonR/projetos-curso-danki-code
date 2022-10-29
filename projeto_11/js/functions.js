$(function(){

    $(".icone-menu-abrir").click(function(){
        $(".aside-principal").show();
    });

    $(".icone-menu-fechar").click(function(){
        $(".aside-principal").hide();
    });

    $(".option-header2").click(function(){

        if($(".aside-main").css("display") == "none"){
            if($(window).width() >= 800){
                $(".conteudo-pagina").css("width", "calc(100% - 350px)");
            }
            $(".aside-main").show();
        }else{
            $(".conteudo-pagina").css("width", "100%");
            $(".aside-main").hide();
        }
    })

    $(window).resize(function(){
        if($(window).width() >= 1280){
            $(".aside-principal").show();
        }

        if($(window).width() >= 800){
            $(".conteudo-pagina").css("width", "calc(100% - 350px)");
            $(".aside-main").show();
        }
    })

    $(".option-aside").click(function(){
        $(".option-aside").removeClass("active");
        $(this).addClass("active");
        if($(window).width() <= 1280){
            $(".aside-principal").hide();
        }
    });

    function voltarAoInicio(){
        $(".conteudo-pagina").animate({"scrollTop": 0}, 0);
    }

    $(".option-aside").click(function(){
        voltarAoInicio()
        let page = $(this).attr('option');
        $.ajax({
            'url':'./pages/'+page+'.html',
            success: function(data){
                $(".conteudo-pagina").html(data);
            },
            error: function(){
                
            }
        });
    });

    $(".option-aside").eq(0).click()

    $(".logo h1").click(function(){
        voltarAoInicio()
        $(".option-aside").eq(0).click();
    })


    

});
