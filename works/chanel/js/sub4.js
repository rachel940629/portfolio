$(document).ready(function(){
  
    $(".list1, .list2").stop().animate({"opacity":"1"});
    
        
$("#sub4_container > div").mousewheel(function(event,delta){    
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
        
        var box1 =$(".s4_top").offset().top; 
        var box2 =$(".s4_bottom").offset().top; 
        
         if(sc_top >= box1 && sc_top < box2){
              $(".list3, .list4, #footer").stop().animate({"opacity":"0"});  
             $(".list1, .list2").stop().animate({"opacity":"1"});
        }
         else if(sc_top >= box2){
          $(".list3, .list4, #footer").stop().animate({"opacity":"1"});
             $(".list1, .list2").stop().animate({"opacity":"0"});  
         }
        
        
    });
}); 