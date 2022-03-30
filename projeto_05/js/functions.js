$(function(){
    
    // colocando o menu mobile no site em todas as paginas

    $('.img-menu').click(function(){
        $('.menu-mobile').slideToggle();
    });

    // colocando a animação do scrolltop no menu em todas as paginas

    var directory = 'home.html'

    $('[goto="#contato"]').click(function(){
        location.href = directory + '?contato'
        return false;
    });

    checkUrl();


        function checkUrl(){
            var url = location.href.split('/');
            var curPage = url[url.length-1].split('?');
       
            if(curPage[1] != undefined && curPage[1] == 'contato'){
              $('html,body').animate({'scrollTop':$('#contato').offset().top});
            }

        }

    $(window).resize(function(){
        if($('body, html').width() + 17 > 760){
            $('.menu-mobile').css('display', 'none');
        }
    })

    // colocando o slide na sessão depoimentos na pagina home

    var widthSlide = $('.depoimento').length;
    var widthGeralD = 100 * widthSlide;
    var widthSingleD = 100 / widthSlide;
    curindex = 0;
    var offSetX;

    $('.slide-depoimento-single').css('width',widthGeralD+'%');
    $('.depoimento').css('width',widthSingleD+'%');

    mudarslider();
    autoplay();

    function autoplay(){
        if(widthSlide > 0){
            setInterval(function(){
                curindex++;
                if(curindex == widthSlide){
                    curindex = 0;
                }
                offSetX = $('.depoimento').eq(curindex).offset().left - $('.slide-depoimento-single').offset().left;
                $('.slide-depoimentos').animate({'scrollLeft': offSetX});
            }, 4000);
        }
    }

    function mudarslider(){
        $('.arrow-left').click(function(){
            curindex--;
            offSetX = $('.depoimento').eq(curindex).offset().left - $('.slide-depoimento-single').offset().left;
            $('.slide-depoimentos').animate({'scrollLeft': offSetX});
        });

        $('.arrow-right').click(function(){
            if(curindex < widthSlide - 1){
                curindex++;
                offSetX = $('.depoimento').eq(curindex).offset().left - $('.slide-depoimento-single').offset().left;
                $('.slide-depoimentos').animate({'scrollLeft': offSetX});
            }else{
                curindex = 0;
                offSetX = $('.depoimento').eq(curindex).offset().left - $('.slide-depoimento-single').offset().left;
                $('.slide-depoimentos').animate({'scrollLeft': offSetX});
            }
        });
    }

    // criando o primeiro sistema de pesquisa

    var currentValue = 0;
    var isDrag = false;
    var precoMaximo = 70000;
    var precoAtual = 0;

    $('.pointer-barra').mousedown(function(){
        isDrag = true;
        disableTextSelection()
    });

    $(document).mouseup(function(){
        isDrag = false;
        enableTextSelection()
    });

    $('.barra-busca').mousemove(function(e){
        if(isDrag == true){
            var elBase = $(this);
            var mouseX = e.pageX - elBase.offset().left;
            if(mouseX < 0){
                mouseX = 0;
            }
            if(mouseX > elBase.width()){
                mouseX = elBase.width();
            }

            currentValue = (mouseX / elBase.width()) * 100;
            $('.barra-fill').css('width', currentValue+'%');
            precoAtual = (currentValue / 100) * precoMaximo;
            precoAtual = formatarPreco(precoAtual);
            $('.preco-pesquisa').html('R$'+precoAtual);
        }
    });

    // funções para formatar os números para reais

    function formatarPreco(precoAtual){
        precoAtual = precoAtual.toFixed(2);
        precoAtual_arr = precoAtual.split('.');

        var novo_preco = formatarTotal(precoAtual_arr);

        return novo_preco;
    }

    function formatarTotal(precoAtual_arr){
        if(precoAtual_arr[0] < 1000){
            return precoAtual_arr[0] + ',' + precoAtual_arr[1]
        }else if(precoAtual_arr[0] < 10000){
            return precoAtual_arr[0][0] + '.' + precoAtual_arr[0].substr(1,precoAtual_arr.length+1) + ',' + precoAtual_arr[1]
        }else{
            return precoAtual_arr[0][0] + precoAtual_arr[0][1] + '.' + precoAtual_arr[0].substr(2, precoAtual_arr.length+1) + ',' + precoAtual_arr[1]
        }
    }

    

    // funções para corrigir a marcação de texto enquanto o usúario mexe no .pointer-barra

    function disableTextSelection(){
        $("body").css("-webkit-user-select","none");
        $("body").css("-moz-user-select","none");
        $("body").css("-ms-user-select","none");
        $("body").css("-o-user-select","none");
        $("body").css("user-select","none");
    }

    function enableTextSelection(){
        $("body").css("-webkit-user-select","auto");
        $("body").css("-moz-user-select","auto");
        $("body").css("-ms-user-select","auto");
        $("body").css("-o-user-select","auto");
        $("body").css("user-select","auto");
    }
    

})
