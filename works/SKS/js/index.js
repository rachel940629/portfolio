$(document).ready(function(){
    
    $(".navigator li, .menu li").click(function(event){
       event.preventDefault(); 
   
        var btnNumber=$(this).index();
        var start=$("#carousel > div").eq(btnNumber).offset().top;
    
        $("html,body").animate({"scrollTop":start-50},2000);
         });
    
     $(window).scroll(function(){
            var sc_top=$(window).scrollTop();

            var bg1=$(".cont1").offset().top;
            var bg2=$(".cont3").offset().top;
            var bg3=$(".cont4").offset().top;
            var bg4=$(".cont5").offset().top;
            var bg5=$(".cont6").offset().top;

            if(sc_top >= bg1+50 && sc_top < bg2-50){
                $(".navigator").css({"display":"none"});
            }
            else if(sc_top >= bg2+50 && sc_top < bg3+50){
                $(".navigator").css({"display":"block"});
                 
            }
            else if(sc_top >= bg3+50 && sc_top < bg4+50){
                
                $(".navigator").css({"display":"block"});
            }
            else if(sc_top >= bg4+50 && sc_top < bg5+50){
                
                $(".navigator").css({"display":"block"});
            }
            else if(sc_top >= bg4){
                $(".navigator").css({"display":"block"});
            }
              
     });
    
    $(".navigator li").click(function(event){
        event.preventDefault(); 
        $(".navigator li").children("a").removeClass("on");
        $(this).children("a").addClass("on");
    });
});