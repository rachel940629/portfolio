$(document).ready(function(){
     
        $(".tab_menu li").click(function(){
            
            $(".tab_menu li").children("a").removeClass("on");
            $(this).children("a").addClass("on");
            
            var tab1=$(this).index();
            $(".tab_container ul").fadeOut(1000);
            $(".tab_container ul").eq(tab1).fadeIn(1000);
            
        });
        
        
});