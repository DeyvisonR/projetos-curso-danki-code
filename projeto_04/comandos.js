$(function(){

    // colocando o menu mobile no site

    $('.img-menu').click(function(){
        $('.menu-mobile').slideToggle()
    })

    // colocando a animação do scrolltop quando clicar no menu

    $('nav a').click(function(){
        var href = $(this).attr('href')
        var offSetTop = $(href).offset().top;
        $('html, body').animate({'scrollTop': offSetTop})
    })

    $(window).resize(function(){
        $('.menu-mobile').css('display','none')
    })

    // colocando o slide nas imagens iniciais

    $('.imagens-site > .center').slick({
        centerMode: false,
        slidesToShow: 6,
        arrow: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    centerMode: true
                }
            },

            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 2,
                    centerMode: true
                }
            }

        ]
    })

    // colocando o slide no site da sessão de tratamentos

    var quantidadeElementos = $('.coluna').length;

    $(window).resize(function(){
        if($('html, body').width() <= 820 && $('html, body').width() > 500){
            quantidadeElementos = 2;
            curindex = 0;
        }

        if($('html, body').width() <= 500){
            quantidadeElementos = 3;
            curindex = 0;
        }
    })

    var curindex = 0;

    $('.bullets-nav div').eq(curindex).css('background-color','#0d485e')
    
    autoSlider()
    mudarSlider()

    function autoSlider(){
        setInterval(function(){
            curindex++;
            if(curindex == quantidadeElementos){
                curindex = 0;
            }
            playSlider(curindex)
        },4000)
    }

    function playSlider(curindex){
        var offSetX = $('.coluna').eq(curindex).offset().left - $('.slide-tratamentos-singles').offset().left;
        $('.slide-tratamentos').animate({'scrollLeft': offSetX})

        $('.bullets-nav div').css('background-color','gray')
        $('.bullets-nav div').eq(curindex).css('background-color','#0d485e')
    }

    function mudarSlider(){
        $('.bullets-nav div').click(function(){
            if($(this).index() != curindex){
                curindex = $(this).index()
                offSetX = $('.coluna').eq(curindex).offset().left - $('.slide-tratamentos-singles').offset().left;
                $('.slide-tratamentos').animate({'scrollLeft': offSetX})

                $('.bullets-nav div').css('background-color','gray')
                $('.bullets-nav div').eq(curindex).css('background-color','#0d485e')
            }
        })
    }

        


    // colocando o slide da sessão depoimentos

    var widthSlide = $('.depoimento').length;
    var widthDepoimentoSlide = 100 * widthSlide
    var widthDepoimentoSlideSingle = 100 / widthSlide
    var curindex2 = 0;

    iniciarSlideDepoimentos()

    function iniciarSlideDepoimentos(){
        $('.slide-depoimento-single').css('width',widthDepoimentoSlide+'%')
        $('.depoimento').css('width',widthDepoimentoSlideSingle+'%')

        for(i = 0; i < widthSlide; i++){
            if(i == 0){
                $('.bullets-nav2').append('<div style="background-color:#0d485e;"></div>')
            }else{
                $('.bullets-nav2').append("<div></div>")
            }
        }

        autoSlider2()
        mudarSlider2()

        function autoSlider2(){
            setInterval(function(){
                curindex2++;
                if(curindex2 == widthSlide){
                    curindex2 = 0;
                }
                var offsetLeft = $('.depoimento').eq(curindex2).offset().left - $('.slide-depoimento-single').offset().left;
                $('.slide-depoimentos').animate({'scrollLeft': offsetLeft})
                $('.bullets-nav2 div').css('background-color', 'gray')
                $('.bullets-nav2 div').eq(curindex2).css('background-color','#0d485e')

            }, 4000)
        }

        function mudarSlider2(){
            $('.bullets-nav2 div').click(function(){
                curindex2 = $(this).index()
                offsetLeft = $('.depoimento').eq(curindex2).offset().left - $('.slide-depoimento-single').offset().left;
                $('.slide-depoimentos').animate({'scrollLeft': offsetLeft})
                $('.bullets-nav2 div').css('background-color', 'gray')
                $('.bullets-nav2 div').eq(curindex2).css('background-color','#0d485e')
            })
        }


    }

})
