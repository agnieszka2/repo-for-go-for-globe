// ======================
//   MAIN FUNCTIONS
// ======================




// INDEX 
// ======================

// section (line number)

// 1. GENERAL (21)
// 2. SCENE 1 SETUP (144)
// 3. POPUPS (184)
// 4. SCENE 2 SETUP (304)
// 5. SCENE 3B SETUP (498)




// GENERAL 
// ======================

// ____________________ PLAY ANIMATION ON CLICK ______________________

var svg       = $('.paused-complete__svg'),
    container = $('.svg-container');

container.on('click', function(e) {
    e.preventdefault;

    var animate = 'toggle-animation-state ',
        currentClass = $(this).attr('class');

    if( $(this).attr('class').match(/toggle-animation-state/g) ) {

        var currentClass = $(this).attr('class'),
            pausedClass  = currentClass.replace(animate,'');

        $(this).attr('class', pausedClass);
         
        $("#universe__play-button").fadeIn(); 
        $('#universe__pointer').css("animation"," 4s ease-in-out 0s infinite forwards universe-pointer"); 

    } else {
        $(this).attr('class', animate + currentClass);
        
        $("#universe__play-button").fadeOut();  
        $('#universe__pointer').css("opacity"," 0");  
    }
})
      $(document).ready(function(){
        $("#universe__play-button").click(function(){
            document.getElementById("intro").play();
        });
       });

    $(document).ready(function(){
        $(".universe__zoom-button").click(function(){
            $("#universe__play-button").remove();
            $(".universe__zoom-button").fadeOut();
        });
    });

// ______________________ SCENE SWITCH TRANSITION ______________________

$(document).ready(function(){
    $("#button-to-hide").click(function(){ 

        $('.universe').css('transform', 'scale(2.5)');
        $('.universe').css('transform-origin', 'center');   
        $('.universe').css('transform-box', 'fill-box'); 
        $('.universe').css('transition', '1s'); 
        document.getElementById("intro").pause(); 

        $(".universe").fadeOut(2500, function(){ 
            $("#hide-element").remove();          // id in index.php
            $("#show-element").fadeIn();          // new svg (id in index.php) to appear
            document.getElementById("loop").play();
        });

    });
});

$(".universe__zoom-button").click(function(){ 
        $(".universe__pointer-two").fadeOut(); 
    });




// ______________________ FOOTER - VIEW INSTRUCTIONS ______________________


$(document).ready(function() {
    $('.instructions').css("display","none");
    $('.start').css("display","none");
});

$('#view-anima').click(function(){
  $('html,body').animate({
        scrollTop: $("#hide-element").offset().top},
        'slow');
  return false;
})


$('#view-instructions').click(function(){
  $('.instructions').toggle("show-nav");
  $('html,body').animate({
        scrollTop: $(".nav-buttons").offset().top},
        'slow');
  return false;
})


$('#view-start').click(function(){
  $('.start').toggle("show-nav");
  $('html,body').animate({
        scrollTop: $(".nav-buttons").offset().top},
        'slow');
  return false;
})




// SCENE 1 SETUP
// ======================
// ______________________ SCENE 1 FUNCTIONS ______________________

// __________ START ANIMATIONS

function startAnimation() {
    document.getElementById('universe__play-button').style.display = "none";
}



// __________ SHOW ALL TEXT

function suFunction() {
    var popuptext = document.getElementById("universe__info-all");
    popuptext.classList.toggle("trigger-text");
    $("#universe__play-button").remove();
}



// __________ REPLAY THE ANIMATION

$('#button-replay').click(function() {
    location.reload(true);
});



// __________ SKIP THE ANIMATION

$('#universe__skip').click(function(){
  $('#hide-element').addClass("skip-animation");
  $("#universe__play-button").remove();
  $("#universe__skip").remove();
});



// POPUPS
// ======================
// ______________________ FACT BOXES AND LIVE IMAGE FEED BOXES ______________________

// __________ SCENE 1

function factuFunction() {
    var popupfact = document.getElementById("fact-one");
    popupfact.classList.toggle("show-fact");
}

$('.close').click(function() {
  $('#fact-one').removeClass('show-fact'); 
});
$('.universe__sky').click(function() {
  $('#fact-one').removeClass('show-fact'); 
});
$('.universe__earth').click(function() {
  $('#fact-one').removeClass('show-fact'); 
});


// __________ SCENE 2

function facttFunction() {
    var popupfact = document.getElementById("fact-two");
    popupfact.classList.toggle("show-fact");
}

$('.close').click(function() {
  $('#fact-two').removeClass('show-fact'); 
});
$('#town__sky').click(function() {
  $('#fact-two').removeClass('show-fact'); 
});
$('#town__farm').click(function() {
  $('#fact-two').removeClass('show-fact'); 
});
$('#town__grass').click(function() {
  $('#fact-two').removeClass('show-fact'); 
});


// __________ FARM FACT

function factfFunction() {
    var popupfact = document.getElementById("fact-farm");
    popupfact.classList.toggle("show-fact");
}

$('.close').click(function() {
  $('#fact-farm').removeClass('show-fact'); 
});
$('#town__grass').click(function() {
  $('#fact-farm').removeClass('show-fact'); 
});


// __________ WOODS FACT

function factwFunction() {
    var popupfact = document.getElementById("fact-woods");
    popupfact.classList.toggle("show-fact");
}

$('.close').click(function() {
  $('#fact-woods').removeClass('show-fact'); 
});
$('#town__grass').click(function() {
  $('#fact-woods').removeClass('show-fact'); 
});
$('#town__return-woods').click(function() {
  $('#fact-town').removeClass('show-fact'); 
});


// __________ TOWN FACT

function factcFunction() {
    var popupfact = document.getElementById("fact-town");
    popupfact.classList.toggle("show-fact");
}

$('.close').click(function() {
  $('#fact-town').removeClass('show-fact'); 
});
$('#town__sky').click(function() {
  $('#fact-town').removeClass('show-fact'); 
});
$('#town__river').click(function() {
  $('#fact-town').removeClass('show-fact'); 
});


// __________ FLOODED: LIVE IMAGES POPUP

function liveimgFunction() {
    var popupfact = document.getElementById("live-images");
    popupfact.classList.toggle("show-fact");
    $('#live-images-two').removeClass('show-fact'); 
}

$('.close').click(function() {
  $('#live-images').removeClass('show-fact'); 
});


function liveimgtwoFunction() {
    var popupfact = document.getElementById("live-images-two");
    popupfact.classList.toggle("show-fact");
    $('#live-images').removeClass('show-fact'); 
}

$('.close-two').click(function() {
  $('#live-images-two').removeClass('show-fact'); 
});




// SCENE 2 SETUP
// ======================
// ______________________ ZOOMING ON SECTIONS FUNCTIONS ______________________

// __________ BUTTONS APPEARANCE

function farmStart() {
  $('#town__zoom-farm').css("animation"," 60s ease-in-out 12.5s alternate forwards button-farm");
  removeEventListener('click', farmStart);
  $('#town__progress-bar-progress-one').css("animation"," 3s ease-in-out 0s alternate forwards progress-one");
  $('#town__path-to-farm-one').css("animation"," 1s ease-in-out 13s alternate forwards farm-path");
  $('#town__path-to-farm-two').css("animation"," 1s ease-in-out 13.5s alternate forwards farm-path");
  $('#town__path-to-farm-three').css("animation"," 1s ease-in-out 14s alternate forwards farm-path");
  $('#town__path-to-farm-four').css("animation"," 1s ease-in-out 14.5s alternate forwards farm-path");
  $('#town__path-to-farm-five').css("animation"," 1s ease-in-out 15s alternate forwards farm-path");
  $('#town__path-to-farm-six').css("animation"," 1s ease-in-out 15.5s alternate forwards farm-path");
  $('#town__pointer-farm').css("animation"," 4s ease-in-out 10s alternate forwards pointer-three");
  $('#town__pointer-arrow-farm').css("animation"," 4s ease-in-out 8s alternate forwards arrow-farm");
}



function woodsStart() {
  $('#town__zoom-woods').css("animation"," 60s ease-in-out 2.5s alternate forwards button-woods");
  removeEventListener('click', woodsStart);
  $('#town__progress-bar-progress-two').css("animation"," 2s ease-in-out 0s alternate forwards progress-two");
  $('#town__path-to-woods-one').css("animation"," 1s ease-in-out 3s alternate forwards woods-path");
  $('#town__path-to-woods-two').css("animation"," 1s ease-in-out 3.5s alternate forwards woods-path");
  $('#town__path-to-woods-three').css("animation"," 1s ease-in-out 4s alternate forwards woods-path");
  $('#town__path-to-woods-four').css("animation"," 1s ease-in-out 4.5s alternate forwards woods-path");
  $('#town__pointer-woods').css("animation"," 4s ease-in-out 0s alternate forwards pointer-three");
  $('#town__pointer-arrow-woods').css("animation"," 4s ease-in-out 0s alternate forwards arrow-woods");
}



function qStart() {
  $('#town__questionnaire').css("animation"," 60s ease-in-out 2.5s alternate forwards button-q");
  removeEventListener('click', qStart);
  $('#town__progress-bar-progress-three').css("animation"," 2s ease-in-out 0s alternate forwards progress-three");
  $('#town__path-to-questionnaire-one').css("animation"," 1s ease-in-out 3s alternate forwards questionnaire-path");
  $('#town__path-to-questionnaire-two').css("animation"," 1s ease-in-out 3.5s alternate forwards questionnaire-path");
  $('#town__path-to-questionnaire-three').css("animation"," 1s ease-in-out 4s alternate forwards questionnaire-path");
  $('#town__path-to-questionnaire-four').css("animation"," 1s ease-in-out 4.5s alternate forwards questionnaire-path");
  $('#town__pointer-two').css("animation"," 4s ease-in-out 5s alternate forwards pointer-three");
  $('#town__pointer-two-arrow').css("animation"," 4s ease-in-out 5s alternate forwards arrow-three");
}



// __________ PROGRESS BAR

function endProgressBar() {
  $('#town__progress-bar-progress-four').css("animation"," 2s ease-in-out 0s alternate forwards progress-four");
}



// __________ FARM ZOOM 

function farmZoom() {
    document.getElementById('town').style.transform = "scale(2.5)";
    document.getElementById('town').style.transformOrigin = "75% bottom";
    document.getElementById('town__return-farm').style.display = "block";
    document.getElementById('town__zoom-farm-cow').style.display = "block";
    document.getElementById('town__zoom-farm').style.display = "none";
    document.getElementById('town__zoom-woods').style.display = "none";
    document.getElementById('cow-zoom-element').style.display = "block";
    document.getElementById('town__know-farm').style.display = "block";
    document.getElementById('town__farm-all').style.display = "block";
    document.getElementById("cows").play();
}



// ___________ COW ZOOM

function cowzoomFunction() {
   
var cow = document.getElementById("cow-zoomed");
    if ($("#cow-zoom-element").click) {
        cow.style.transform = "scale(3.5)"; 
        cow.style.transition = "1s"; 
        cow.style.transformOrigin = "100% 100%"; 
        cow.style.transformBox= "fill-box"; 
        document.getElementById('cow-zoom-element').style.display = "none";
        document.getElementById('town__zoomout-farm-cow').style.display = "block";
        $('#town__text-farm-two').css("animation"," 60s ease-in-out 0s alternate forwards farm-texttwo");
    } 
    
    else {
        cow.style.transform = "scale(1)";
    }
}

function cowzoomtwoFunction() {
   
var cow = document.getElementById("cow-zoomed");
    if ($("#cow-zoom-element-two").click) {
        cow.style.transform = "scale(3.5)"; 
        cow.style.transition = "1s"; 
        cow.style.transformOrigin = "100% 100%"; 
        cow.style.transformBox= "fill-box"; 
        document.getElementById('cow-zoom-element-two').style.display = "none";
        document.getElementById('town__zoomout-farm-cow').style.display = "block";
        $('#town__text-farm-two').css("animation"," 60s ease-in-out 0s alternate forwards farm-texttwo");
    } 

    else {
        cow.style.transform = "scale(1)";
    }
}

function closecowFunction() {
  document.getElementById("cow-zoomed").style.transform = "scale(1)";
  document.getElementById('town__zoom-farm-cow-two').style.display = "block";
  document.getElementById('town__zoomout-farm-cow').style.display = "none";
}



// __________ TOWN ZOOM

function buildingZoom() {
    document.getElementById('town').style.transform = "scale(2.0)";
    document.getElementById('town').style.transformOrigin = "5% 70%";  
    document.getElementById('town__know-town').style.display = "block";
    document.getElementById('town__return-city').style.display = "block";
    document.getElementById('town__zoom-town').style.display = "none";
    document.getElementById('town__city-all').style.display = "block";
    document.getElementById("cars").play();
}



// __________ FOREST ZOOM


var birdsTwo = $('#animate-birds-two'),
    birdsOne = $('#animate-birds-one'),
    btn = $('#town__zoom-woods');


function forestZoom() {
    document.getElementById('town').style.transform = "scale(3)";
    document.getElementById('town').style.transformOrigin = "86% 61%";
    document.getElementById('town__zoom-woods').style.display = "none";
    document.getElementById('town__return-woods').style.display = "block";
    document.getElementById('town__know-woods').style.display = "block";
    document.getElementById('town__woods-all').style.display = "block";
    birdsTwo[0].beginElement();
    birdsOne[0].beginElement();
    document.getElementById('town__birds-two').style.display = "block";
    document.getElementById('town__birds-one').style.display = "block";
    document.getElementById("birds").play();
    document.getElementById("woods").play();
}



// __________ RETURN SETUP

function out() {
    document.getElementById('town').style.transform = "scale(1)";
    document.getElementById('town__zoom-farm').style.display = "block";
    document.getElementById('town__zoom-woods').style.display = "block";
    document.getElementById('town__zoom-farm-cow').style.display = "none";
    document.getElementById('town__zoom-farm-cow-two').style.display = "none";
    document.getElementById('town__zoomout-farm-cow').style.display = "none";
    document.getElementById('town__zoom-town').style.display = "block";

    document.getElementById('town__return-farm').style.display = "none";
    document.getElementById('town__return-woods').style.display = "none";
    document.getElementById('town__return-city').style.display = "none";

    document.getElementById('cow-zoomed').style.transform = "scale(1)";

    document.getElementById('town__know-farm').style.display = "none";
    document.getElementById('town__know-woods').style.display = "none";
    document.getElementById('town__know-town').style.display = "none";

    document.getElementById('town__farm-all').style.display = "none";
    document.getElementById('town__woods-all').style.display = "none";
    document.getElementById('town__city-all').style.display = "none";

    document.getElementById('town__birds-two').style.display = "none";
    document.getElementById('town__birds-one').style.display = "none";
    
    $('#town__progress-bar').css("animation"," 4s ease-in-out 0s alternate forwards progress-bar");
    $('#town__hover-trigger').css("animation"," 2s ease-in-out 0s alternate forwards hover-bar");
    $('#town__pointer-one').css("animation"," 4s ease-in-out 0s alternate forwards pointer-two");
    $('#town__pointer-one-arrow').css("animation"," 4s ease-in-out 0s alternate forwards arrow-two");

    $("#town__farm-text-all").fadeOut(500);
    $("#town__city-text-all").fadeOut(500);
    $("#town__woods-text-all").fadeOut(500);

    document.getElementById("cars").pause();
    document.getElementById("cows").pause();
    document.getElementById("woods").pause();

    $('#fact-woods').removeClass('show-fact'); 
    $('#fact-farm').removeClass('show-fact'); 
    $('#fact-town').removeClass('show-fact'); 
}




// SCENE 3B SETUP
// ======================

// ______________________ POSITIVE SCENE ______________________

// __________ SLIDE TO LEFT 

$(document).ready(function() {
    $("#slide").animate({left: "0"}, {
    duration: 1500       
    });
});

$(document).ready(function() {
    $("#fadein").fadeIn();
});


// ______________________ MUSIC ON MOUSE HOVER ______________________

// __________ COWS 

function cowsPlay() {
  document.getElementById("cows").play();
}

function stopCows() {
  document.getElementById("cows").pause();
}



// __________ FOREST 

function woodsPlay() {
  document.getElementById("woods").play();
}

function stopWoods() {
  document.getElementById("woods").pause();
}



// __________ TOWN 

function townPlay() {
  document.getElementById("town").play();
}

function stopTown() {
  document.getElementById("town").pause();
}



// __________ RIVER 

function riverPlay() {
  document.getElementById("river").play();
}

function stopRiver() {
  document.getElementById("river").pause();
}



// ______________________ ENDING SCREEN ______________________

function endFunction() {
  document.getElementById('town-eco__the-end').style.display = "block";
  document.getElementById('town-eco__button').style.display = "none";
  $('#town-eco__replay').css("animation"," 2s ease-in-out 15s alternate forwards eco-replay");
  $('#town-eco__pointer').css("animation"," 6s ease-in-out 20s alternate forwards pointer-eco");
  $('#town-eco__end-text-one').css("animation"," 2s ease-in-out 0s alternate forwards end-one");
  $('#town-eco__end-text-two').css("animation"," 13s ease-in-out 0s alternate forwards end-two");
  $('#town-eco__end-text-three').css("animation"," 13s ease-in-out 13s alternate forwards end-three");
  $('#town-eco__logo').css("animation"," 13s ease-in-out 15s alternate forwards end-logo");
}

