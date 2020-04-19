$(document).ready(function(){
   
    $(".location-link").click(function(){
       $(".pop-up").css({"display":"block"}); 
    });
    
   $(".close").click(function(event){
       event.preventDefault();
       
       $(".pop-up, .close").css({"display":"none"});
   }); 
});