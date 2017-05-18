$(document).ready(function(){
var totalwidth=0;
var positions=new Array();
    
    
    $('#slides.slide').each(function(i){
       $positions[i]=totalwidth;
        totalwidth +=$(this).width();
        
        if(!$(this).width()){  
        alert('please add')    
          return false;  
    }
    });
    
    $('#slides').width(totalwidth);
    
    $('#menu ul li a').click(function(e,keepScroll){
        $('li.product').removeClass('active').addClass('inactive');
        
        
        $(this).parent().addClass('active');
        
        var pos=$(this).parent().prevAll('.product').length;
        
        $('#slides').stop().animate({marginleft:-positions[pos]+'px'},450);
        
        ///
        e.preventDefault();
        
        if(!autoScroll) clearInterval(itvl);
    });
    
    $('#menu ul li.product:first').addClass('active').siblings().addClass('inactive');
	
	// Auto Scroll
	var current=1;
	function autoScroll(){
		if(current == -1) return false;
		
		$('#menu ul li a').eq(current%$('#menu ul li a').length).trigger('click',[true]);
		current++;
	}
	
	// Duration for auto scroll
	var duration = 2;
	var itvl = setInterval(function(){autoScroll()},duration*1000);
    
    
});

