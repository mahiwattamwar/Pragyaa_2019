    
   $(".close").click(function(){
   $(".mod").animate({
            height:"0%",
            width:"0%",
            opacity:"0"
    });
  
  });
   $(".m1").click(function(){
   $(".c1")        .css("z-index","1");
   $(".c2,.c3,.c4").css("z-index","0");
   $(".m1")        .css("background-color","#228DFF");
   $(".m4,.m2,.m3").css("background-color","");
  });
    $(".m2").click(function(){
        $(".c2")        .css("z-index","1");
        $(".c1,.c3,.c4").css("z-index","0");
        $(".m2")        .css("background-color","#964adf");
        $(".m1,.m4,.m3").css("background-color","");
  });
      $(".m3").click(function(){
        $(".c3")        .css("z-index","1");
        $(".c2,.c1,.c4").css("z-index","0");
        $(".m3")        .css("background-color","#fffc04");
        $(".m1,.m2,.m4").css("background-color","");
  });
         $(".m4").click(function(){
        $(".c4")        .css("z-index","1");
        $(".c2,.c1,.c3").css("z-index","0");
        $(".m4")        .css("background-color","#f98235");
        $(".m1,.m2,.m3").css("background-color","");
  });
         $('.dept').click(function(){
 
  $('.md').css("opacity","1");
  $('.md').css("z-index","111");
   $('.blu').css("opacity","1");
  $('.blu').css("z-index","11");
});
$('.blu').click(function(){
 
  $('.md').css("opacity","0");
  $('.md').css("z-index","0");
   $('.blu').css("opacity","0");
  $('.blu').css("z-index","0");
});
$('.Creative').click(function(){
  window.location.href="creative_event.html";
});
$('.online').click(function(){
  window.location.href="online.html";
});
$('.Robotics').click(function(){
  window.location.href="robotics.html";
});
$('.exhibition').click(function(){
  window.location.href="exhibition.html";
});
$('.Gaming').click(function(){
  window.location.href="gaming_zone.html";
});
$('.codester').click(function(){
  window.location.href="codester.html";
});
$('.conference').click(function(){
  window.location.href="conference.html";
});
$('.cenfest').click(function(){
  window.location.href="cenfest.html";
});
$('.chemtek').click(function(){
  window.location.href="chemtrek.html";
});
$('.elechroma').click(function(){
  window.location.href="elechroma.html";
});
$('.mechatron').click(function(){
  window.location.href="mechatron.html";
});
$('.texplorer').click(function(){
  window.location.href="texplorer.html";
});