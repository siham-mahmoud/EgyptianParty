//left menu 

$(".openNav").click(function(){
    $("#leftMenu").animate({ width:'250px'},50)
   $("#hero-content").animate({marginLeft :'250px'},50)
   $("#nav").animate({marginLeft :'250px'},50)
})

$(".closebtn").click(function(){
    $("#leftMenu").animate({ width:'0px'},50)
   $("#hero-content").animate({marginLeft :'0px'},50)
   $("#nav").animate({marginLeft :'0px'},50)
})

// slidedown 
$('#slidedown .toggle').click(function(){
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});

//countdown 
window.onload = function() {
   
  startCountdown("10 may 2027 10:00:00");
  }

  function  startCountdown(countTo) {
  
        let newDate = new Date(countTo);
    newDate = (newDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (newDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {   startCountdown(countTo); }, 1000);
  }

//message length
  var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
                 $("#char").text("your available character finished");
                
            }
        else{
        
        $("#char").text(AmountLeft);
        }
});



//scroll
$("#leftMenu a").click(function(){
    
  var sectionId= $(this).attr("href");
  
  var positionOfSection = $(sectionId).offset().top;
  
  $("html , body").animate({scrollTop:positionOfSection},500);
  
})