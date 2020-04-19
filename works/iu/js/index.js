$(document).ready(function(){
   
    
$('.mediPlayer').mediaPlayer();
    
 // setTimeout() 함수는 일정시간 지난뒤에 작성한 구문을 1회 실행하고 종료
 $(".mediPlayer").click(function(){
     
     setTimeout(function(){
var playTime = 0;    
    
var musicAuto = setInterval(function(){
   
    playTime += 50;
    $(".lyrics_text p").css({"top":-playTime});
    
    if(playTime == 3100) {clearInterval(musicAuto);}
    
},4000);
}.bind(this),9000);

     
setTimeout(function(){
var moveCircle = 17;    
    
var circleAuto = setInterval(function(){
   
    moveCircle += 0.5;
    
    $(".circle").css({"left":moveCircle+"%"});
    
    if(moveCircle == 83) {clearInterval(circleAuto);}
    
},2000);
}.bind(this),8000);
});

$(".main_img").click(function(event){
   event.preventDefault();
    $(".index").stop().animate({"margin-left":"-25%"},1000);
     $(".sub1").stop().animate({"margin-left":"0"},1000);
    
});
    
//sub1 페이지 전환
   $(".prev").click(function(event){
   event.preventDefault();
    $(".index").stop().animate({"margin-left":"0"},1000);
   }); 
    
   $(".next").click(function(event){
   event.preventDefault();
    $(".sub1").stop().animate({"margin-left":"-25%"},1000);
   });
    
     $(".back3").click(function(event){
   event.preventDefault();
    $(".index").stop().animate({"margin-left":"0"},1000);
   }); 
    
   $(".go3").click(function(event){
   event.preventDefault();
    $(".sub1").stop().animate({"margin-left":"-25%"},1000);
   });
    
    
//sub1 up down
    $(".down").click(function(event){
        event.preventDefault();
        $(".box").stop().animate({"bottom":"-90%"},1000);
        $(".down").css({"display":"none"});
        $(".up").css({"display":"block"});
    });
    
     $(".up").click(function(event){
        event.preventDefault();
        $(".box").stop().animate({"bottom":"-3%"},1000);
        $(".down").css({"display":"block"});
        $(".up").css({"display":"none"});
    });
    
 
    
//sub2 페이지 전환
   $(".back").click(function(event){
   event.preventDefault();
    $(".sub1").stop().animate({"margin-left":"0"},1000);
   }); 
    
     $(".go").click(function(event){
   event.preventDefault();
    $(".sub2").stop().animate({"margin-left":"-25%"},1000);
   });
    
//sub2 카드 플립
    
    $(".list1").click(function(){
       
         $(".list1").css({"display":"none"});
         $(".list8").css({"display":"block"});
         
        
         $(".list2").animate({"right":"-100px"});
         $(".list3").animate({"right":"50px"});
        
       });  
    
       $(".list8").click(function(){
         $(".list1").css({"display":"block"});
         $(".list8").css({"display":"none"});
         
        
         $(".list2").animate({"right":"0"});
         $(".list3").animate({"right":"0"});
       });

        
    
    $(".list6").click(function(){
        $(".list6").css({"display":"none"});
         $(".list7").css({"display":"block"});
    
        $(".list4").animate({"left":"-150px"});
         $(".list5").animate({"left":"50px"});
      });   
       $(".list7").click(function(){
          $(".list6").css({"display":"block"});
         $(".list7").css({"display":"none"});
           
         $(".list4").animate({"left":"0"});
         $(".list5").animate({"left":"0"});
         });
    
    
    
  //sub3 페이지 전환 
    
     $(".back2").click(function(event){
   event.preventDefault();
    $(".sub2").stop().animate({"margin-left":"0"},1000);
   }); 
    
});