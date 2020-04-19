$(document).ready(function(){
  
    $(".s1_top_center").stop().animate({"opacity":"1"});
    
        
$("#sub1_container > div").mousewheel(function(event,delta){    
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
        
        var box1 =$(".sub1_top").offset().top; 
        var box2 =$(".sub1_bottom").offset().top; 
        
         if(sc_top >= box1 && sc_top < box2){
             
              $(".s1_bottom_center, .s1b_bg, #footer").stop().animate({"opacity":"0"});
              $(".s1_top_center").stop().animate({"opacity":"1"});
                        
         }
         else if(sc_top >= box2){
              $(".s1_top_center").stop().animate({"opacity":"0"});   
              $(".s1_bottom_center, .s1b_bg, #footer").stop().animate({"opacity":"1"});        
         }
    });
}); 