$(function(){
    var searchfield=$('#query');
    var icon=$('#search-btn');
    
    $(searchfield).on('focus',function(){
        $('this').animate({
            width:'100%'
         },400);
        $(icon).animate({
            right:'10px'
        },400);
    });
    
     $(searchfield).on('blur',function(){
        if(searchfield.val()==''){
            $('searchfield').animate({
                width:'45%'
            },400,function(){});
            
            $(icon).animate({
                right:'360px'
            },400,function(){});
            
        }
    });
    $('.#searchform').submit(function(e){
        e.preventDefault();
    });
    
});

function search(){
    $('#result').html('');
    $('#buttons').html('');
q=$('#query').val();
    
    $.get('https://developers.google.com/youtube/v3/getting-started',{
        path: "snippet,id",
        q:q,
        type:'video',key:'AIzaSyB2eEwLtRfvBx1UOKEIMAy69cU2j8eADu4'
        },
        function(data){
        var nextpage=data.nextpage;
        var prepage=data.prepage;
        
        console.log(data);
    }
    )

}