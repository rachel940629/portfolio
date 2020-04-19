$(document).ready(function(){
    
    $(".top_img").stop().animate({"opacity":"1"});
    
 
     //    서브메뉴
$(".menu_wrap > li").click(function(){
    $(".gnb").stop().animate({"margin-left":"0"},1000);
    $(".hamburger").stop().animate({"opacity":"0"});
}); 
    
$(".menu_wrap").mouseleave(function(){
    $(".gnb").stop().animate({"margin-left":"-300px"},1000);
    $(".hamburger").stop().animate({"opacity":1});
}); 
     

$("#container > div").mousewheel(function(event,delta){    
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
               
    
// 스크롤했을 때    
    $(window).scroll(function(){ 
        
        var sc_top=$(window).scrollTop();
        var box1 =$(".top").offset().top; 
        var box2 =$(".cont1").offset().top; 
        var box3 =$(".cont2").offset().top; 
        var box4 =$(".cont3").offset().top; 
        var box5 =$(".cont4").offset().top; 
       
       
         if(sc_top >= box1 && sc_top < box2){
                    
              $(".cont1_wrap, .cont1_img, .top_btn, .hamburger").stop().animate({"opacity":"0"});
              $(".top_img").stop().animate({"opacity":"1"});
                        
         }
         else if(sc_top >= box2 && sc_top < box3){
              $(".cont1_wrap, .cont1_img, .top_btn, .hamburger").stop().animate({"opacity":"1"});
              $(".c2_wrap, .cont2_film, .cont2_bg, .top_img").stop().animate({"opacity":"0"});
         }
          else if(sc_top >= box3 && sc_top < box4){
              $(".cont1_wrap, .cont1_img, .carousel").stop().animate({"opacity":"0"});
              $(".c2_wrap, .cont2_film, .cont2_bg").stop().animate({"opacity":"1"});
                        
         }
          else if(sc_top >= box4 && sc_top < box5){
              $(".c2_wrap, .cont2_film, .cont2_bg, .c4_wrap").stop().animate({"opacity":"0"});
              $(".carousel").stop().animate({"opacity":"1"});      
         }
        
         else if(sc_top >= box5){
              $(".carousel").stop().animate({"opacity":"0"}); 
              $(".c4_wrap, .cont4_bg").stop().animate({"opacity":"1"}); 
         }
       $(".top_btn").click(function(event){
       event.preventDefault(); 
       $("html,body").stop().animate({"scrollTop":box1},2000);
       });   
   });
//  container3 캐러셀
    
    var listNumber=0;
    
    $(".prev").click(function(event){
        event.preventDefault();
         $(".move").stop().animate({"margin-left":"0"},2000);
    });
    
    $(".next").click(function(event){
        event.preventDefault();
        
        
         $(".move").stop().animate({"margin-left":"-100%"},2000);
         
    });    
});