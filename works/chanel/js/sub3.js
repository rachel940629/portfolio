$(document).ready(function(){
  
    $(".s3_center").stop().animate({"opacity":"1"});
    
        
$("#sub3_container > div").mousewheel(function(event,delta){    
		event.preventDefault();
		//마우스 휠을 올렸을때	
          if (delta > 0) {  
                var prev = $(this).prev().offset().top;
               $("html,body").stop().animate({"scrollTop":prev},1000);
          }
    
        //마우스 휠을 내렸을때	
        else if (delta < 0) {  
                var next = $(this).next().offset().top;
                $("html,body").stop().animate({"scrollTop":next},1000);
        }
}); 
    
// 스크롤 시 fade In, Out  
     $(window).scroll(function(){ 
        var sc_top=$(window).scrollTop();
        
        var box1 =$(".s3_top").offset().top; 
        var box2 =$(".s3_bottom").offset().top; 
        
         if(sc_top >= box1 && sc_top < box2){
              $(".s3_center2, #footer").stop().animate({"opacity":"0"}); 
             $(".s3_center").stop().animate({"opacity":"1"}); 
        }
         else if(sc_top >= box2){
          $(".s3_center2, #footer").stop().animate({"opacity":"1"}); 
             $(".s3_center").stop().animate({"opacity":"0"}); 
         }
        
        
    });
}); 