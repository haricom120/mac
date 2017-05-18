$(function(){
    var searchfield=$('#query');
    var icon=$('#search-btn'); 
    $(searchfield).on('focus',function(){
        $(this).animate({
            width:'100%'
         },400);
        $(icon).animate({
            right:'10px'
        },400);
    });
    
     $(searchfield).on('blur',function(){
        if(searchfield.val()==''){
            $(searchfield).animate({
                width:'45%'
            },400,function(){});
            
            $(icon).animate({
                right:'360px'
            },400,function(){});
            
        }
    });
    $('#searchform').submit(function(e){
        e.preventDefault();
    });
    
});

function search(){
    $('#result').html('');
    $('#buttons').html('');
q=$('#query').val();
    
    $.get("https://www.googleapis.com/youtube/v3/search",{
        path: "snippet,id",
        q:q,
        type:'video',key:'AIzaSyB4lGRuGgHjmfqzs9PR2nSaas5_dDRqez0'
        },
        function(data){
        var nextpage=data.nextpage;
        var prepage=data.prepage;
        
        console.log(data);
        
        $.each(data.items,function(i,item){
               var output=getoutput(item);
            
            $('#result').append(output);
               });
        }
    )

}

function getoutput(item){
    var videoid=item.id.vedioid;
    var title=item.snippet.title;
    var discription=item.snippet.discription;
    var thumb=item.snippet.thumbnails.high.url;
    var channeltitle=item.snippet.channeltitle;
    var videodate=item.snippet.pubishedat;




}

