$(document).ready(function(){
    var speed=500;///fade speed
    var autoswitch=true;///auto slider
    var autoswitch_speed=1000;////auto switch speed
    

$('.slide').first().addClass('active');
            
$('.slide').hide();    
$('.active').show();    
    $('#next').on('click',nextslide);
    
    $('#prev').on('click',prevsslide);
    
    if (autoswitch==true){
        setInterval(nextslide,autoswitch_speed);
    }
function nextslide(){
        $('.active').removeClass('active').addClass('oldactive');
        if($('.oldactive').is(':last-child')){
            $('.slide').first().addClass('active');
        }else{
            $('.oldactive').next().addClass('active');
        }
        $('.oldactive').removeClass('oldactive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    };

/////prev slde
function prevsslide(){
        $('.active').removeClass('active').addClass('oldactive');
        if($('.oldactive').is(':first-child')){
            $('.slide').last().addClass('active');
        }else{
            $('.oldactive').prev().addClass('active');
        }
        $('.oldactive').removeClass('oldactive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    };    
});

////next slide
