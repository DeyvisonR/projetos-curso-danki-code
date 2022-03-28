window.onload = function(){

    // colocando mapa no site

    var map;

    function initialize(lat, lng){
        var mapProp = {
            center: {lat: lat, lng: lng},
            scrollwheel:false,
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        map = new google.maps.Map(document.getElementById("mapa"), mapProp);
    }

    function addMarker(lat, long, icon, content, click){

        var latLng = {'lat':lat,'lng':long};

        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: icon
        });

        var infoWindow = new google.maps.InfoWindow({
            content:content,
            maxWidth:200,
            pixelOffset: new google.maps.Size(0,20)
        });

        infoWindow.open(map,marker);

        if(click == true){

            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.open(map,marker);
            });

        }
            
    }

    initialize(-1.4365492276066685, -48.46656758574312);

    var conteudo = '<p style="color:black;font-size:14px;padding:5px;text-align:center;">minha primeira marcação no google maps</p>'

    addMarker(-1.4365626338533333, -48.46655151158943,"", conteudo, true)

    // colocando menu mobile no site

    menuClick()

    function menuClick(){
        $('.img-menu').click(function(){
            $('.menu-mobile ul').slideToggle()
        })
    }

    // colocando slider no site

    var amt;
    var curIndex = 0;

    initSlider()
    autoPlay()
    mudarSlide()

    function initSlider(){
        amt = $('.teste5').length;
        sizeContainer = 100 * amt;
        sizeBoxSingle = 100 / amt;
        $('.membros-single').css('width', sizeContainer+'%');
        $('.teste5').css('width', sizeBoxSingle+'%');

        for(i = 0; i < amt; i++){
            if(i == 0){
                $('.slider-bullets').append('<div class="no0" style="background-color: rgb(83, 82, 82);"></div>')
            }else{
                $('.slider-bullets').append('<div class="no'+i+'"></div>')
            }
            
        }
    }

    function autoPlay(){
        setInterval(function(){
            curIndex++;
            if(curIndex == amt){
                curIndex = 0;
            }
            goToSlider(curIndex)
        }, 4000  )
    }

    function goToSlider(curIndex){

        offSetX = $('.teste5').eq(curIndex).offset().left - $('.membros-single').offset().left;

        $('.slider-bullets div').css('background-color', 'gray')
        $('.slider-bullets .no'+curIndex+'').css('background-color', 'rgb(83, 82, 82)')
        
        $('.membros').animate({'scrollLeft': offSetX})
    }

    function mudarSlide(){
        $('.slider-bullets div').click(function(){
            var slideIndex = $(this).index()
            curIndex = slideIndex;
            offSetX = $('.teste5').eq(curIndex).offset().left - $('.membros-single').offset().left;

            $('.slider-bullets div').css('background-color', 'gray')
            $('.slider-bullets .no'+curIndex+'').css('background-color', 'rgb(83, 82, 82)')

            $('.membros').animate({'scrollLeft': offSetX})
        })
    }

    // colocando animação de quando clica no menu redirecionar para uma parte espeçifica do site

    $('nav a').click(function(){
        var href = $(this).attr('href')
        var offSetTop = $(href).offset().top;
        $('html, body').animate({'scrollTop': offSetTop})
    })

    // reiniciando a pagina quando der o resize

    $(window).resize(function(){
        $('.menu-mobile ul').css('display', 'none')
    })
    
}
