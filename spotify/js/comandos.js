$(function(){

    // colocando o menu mobile

    $('.menu-icon').click(function(){
        $('.aside').fadeIn();
    });

    $('.fechar-menu').click(function(){
        $('.aside').fadeOut();
    });

    $(window).resize(function(){
        if($(window).width() >= 600){
            $('.aside').css('display', 'block');
        }else{
            $('.aside').css('display', 'none');
        }
    });

    // colocando o sistema de musica e o controladores deles

    var audioPlayer = document.getElementById('audioPlayer');
    var playButton = document.getElementById('playButton');
    var pauseButton = document.getElementById('pauseButton');
    var backButton = document.getElementById('backward');
    var forButton = document.getElementById('forward');
    var backButton_fast = document.getElementById('backward-fast');
    var forButton_fast = document.getElementById('forward-fast');
    var playArtistComponent = document.getElementsByClassName('music-artist');
    var music = false;
    var valorNovo = 0;

    document.querySelectorAll('.music').forEach(function(item){

        item.addEventListener('click', function(){

            var image = item.getAttribute('data-image');
            var artist = item.getAttribute('data-artist');
            var song = item.getAttribute('data-song');
            var file = item.getAttribute('data-file');

            playArtistComponent[0].innerHTML = `
            <img src="`+image+`"></img>
            <div class="text-artist">
                <h2 style="color:black;">`+artist+`</h2>
                <p style="color:black;">`+song+`</p>
            </div>
            `

            audioPlayer.innerHTML = `<source src="`+file+`" type="audio/mpeg" />`;
            
            if(music == true){
                audioPlayer.load();
            }
            
            audioPlayer.play();

            playButton.style.display = "none";
            pauseButton.style.display = "inline-block";
            music = true;

            playButton.addEventListener('click', function(){
    
                audioPlayer.play()
                playButton.style.display = 'none'
                pauseButton.style.display = 'inline-block'
        
            });
        
            pauseButton.addEventListener('click', function(){
        
                audioPlayer.pause()
                playButton.style.display = 'inline-block'
                pauseButton.style.display = 'none'
        
            });
        
            backButton.addEventListener('click', function(){
                audioPlayer.currentTime = audioPlayer.currentTime - 5;
            });
        
            forButton.addEventListener('click', function(){
                audioPlayer.currentTime = audioPlayer.currentTime + 5;
            });
        
            backButton_fast.addEventListener('click', function(){
                audioPlayer.currentTime = audioPlayer.currentTime - 10;
            });
        
            forButton_fast.addEventListener('click', function(){
                audioPlayer.currentTime = audioPlayer.currentTime + 10;
            });

        });

    });
    

    // colocando a barra de progresso da musica

    var isDrag = false;
    var valorAtual = 0;

    $('.pointer-barra').mousedown(function(){
        isDrag = true;
        disableTextSelection()
    })

    $(window).mouseup(function(){
        if(isDrag == true){
            audioPlayer.currentTime = valorNovo;
        }
        isDrag = false;
        enableTextSelection()
        
    })

    $('.player-progress').mousemove(function(e){
        if(isDrag == true){
            var elbase = $(this);
            var mouseX = e.pageX - elbase.offset().left;
            if(mouseX < 0){
                mouseX = 0;
            }
            if(mouseX > elbase.width()){
                mouseX = elbase.width();
            }


            valorMaximo = audioPlayer.duration;

            valorAtual = (mouseX / elbase.width()) * 100;
            valorNovo = (valorAtual / 100) * valorMaximo
            $('.player-fill').width(valorAtual + '%');

        }
    })

    setInterval(function(){
        function audioConfigs(){
            var valorMaximo = audioPlayer.duration;
            var currentValueAudio = audioPlayer.currentTime;
            var currentValueAudioPercent = (currentValueAudio / valorMaximo) * 100

            if(music == true && isDrag == false){
                $('.player-fill').width(currentValueAudioPercent + '%');
            }
        }
        audioConfigs()
    }, 1000);

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



});
