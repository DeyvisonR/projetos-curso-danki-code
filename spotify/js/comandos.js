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
    })

    // colocando o sistema de musica e o controladores deles

    var audioPlayer = document.getElementById('audioPlayer');
    var playButton = document.getElementById('playButton');
    var pauseButton = document.getElementById('pauseButton');
    var playArtistComponent = document.getElementsByClassName('music-artist');

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

            audioPlayer.load();
            audioPlayer.play();

            playButton.style.display = "none";
            pauseButton.style.display = "inline-block";

        });

    });

    playButton.addEventListener('click', function(){

        audioPlayer.play()
        playButton.style.display = 'none'
        pauseButton.style.display = 'inline-block'

    })

    pauseButton.addEventListener('click', function(){

        audioPlayer.pause()
        playButton.style.display = 'inline-block'
        pauseButton.style.display = 'none'

    })

})