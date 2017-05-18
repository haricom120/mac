function submitanswers(){
    var total=5;
    var scores=0;
    
    ///user inout
    var q1=document.forms['qiuzform']['q1'].value;
    var q2=document.forms['qiuzform']['q2'].value;
    var q3=document.forms['qiuzform']['q3'].value;
    var q4=document.forms['qiuzform']['q4'].value;
    var q5=document.forms['qiuzform']['q5'].value;
    
   
    //valdiation 

    for(i = 1 ; i <= total; i++){
       if(eval('q'+i) == null ||eval('q'+i) == ''){
           alert('you missed question '+i);
           return false;
       }
    }
    
    var answers=['a','c','d','b','a'];
    
    
     for(i = 1 ; i <= total; i++){
         if(eval('q'+i)==answers[i-1]){
        scores++;
    }
 }
  ///results
    
    var result=document.getElementById('result');
    result.innerHTML='<h3>You scored <span>'+scores+'</span> out of <span>'+total+'</span></h3>';
    alert(scores+' out of '+total);
    return false;
    
}