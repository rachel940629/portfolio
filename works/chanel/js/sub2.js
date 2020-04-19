$(document).ready(function(){
  
    $(".carousel").stop().animate({"opacity":"1"});
    
        
$("#sub2_container > div").mousewheel(function(event,delta){    
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
        
        var box1 =$(".carousel").offset().top; 
        var box2 =$(".s2_bottom").offset().top; 
        
         if(sc_top >= box1 && sc_top < box2){
              $(".s2_bt_bg, .sub2_film, #footer").stop().animate({"opacity":"0"});
             $(".s2_center").stop().animate({"opacity":"1"});   
        }
         else if(sc_top >= box2){
             $(".s2_bt_bg, .sub2_film, #footer").stop().animate({"opacity":"1"});   $(".s2_center").stop().animate({"opacity":"0"});
         }
        
        
    });
// 캐러셀
   var listNumber=0;
     
    $(".btn_list li:first-child").click(function(event){
        event.preventDefault();
        
       $(".btn_list li").removeClass("on");
       $(this).addClass("on");
        

        
         $(".move").stop().animate({"margin-left":"-1290px"},1000,function(){
         
         $(".move li").first().appendTo(".move");
         $(".move").stop().css({"margin-left":"-645px"});
         
      });

    });
     $(".btn_list li:nth-child(2)").click(function(event){
        event.preventDefault();
        
       $(".btn_list li").removeClass("on");
       $(this).addClass("on");
        
        
         $(".move").stop().animate({"margin-left":"0"},1000,function(){
       
         $(".move li").last().prependTo(".move");
         $(".move").stop().css({"margin-left":"-645px"});
         
      });

    });
    
    
    $(".move li").mouseenter(function(){
       $(this).children(".bg").stop().fadeIn(1000); 
    });
    
}); 