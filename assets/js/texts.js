// ======================
// TEXT FUNCTIONS
// ====================== 




// INDEX 
// ======================

// section (line number)

// 1. CITY TEXTS (16)
//    - CITY SHOW ALL TEXT BUTTON
//    - CITY RETURN BUTTON
// 2. FARM TEXTS (37)
//    - FARM SHOW ALL TEXT BUTTON
//    - FARM RETURN BUTTON
// 3. WOODS TEXTS (62)
//    - WOODS SHOW ALL TEXT BUTTON
//    - WOODS RETURN BUTTON
// 4. SEE ALL TEXTS (85)
//    - SCENE 2
//    - CITY
//    - FARM
//    - WOODS
//    - SCENE 3a
//    - SCENE 3b




// FUNCTIONS 
// ======================

// ______________________ CITY TEXTS 

$("#town__zoom-town").click(function() {
          $('#town__text-city-one').css("animation"," 60s ease-in-out 0s alternate forwards city-textone");

          $('#town__text-city-two').css("animation"," 60s ease-in-out 0s alternate forwards city-texttwo");

          $('#town__text-city-three').css("animation"," 60s ease-in-out 0s alternate forwards city-textthree");

// ___________ CITY SHOW ALL TEXT BUTTON

          $('#town__city-all').css("animation"," 60s ease-in-out 0s alternate forwards city-all");

// ___________ CITY RETURN BUTTON

          $('#town__return-city').css("animation"," 60s ease-in-out 0s alternate forwards city-return");
   });




// ______________________ FARM TEXTS 

$("#town__zoom-farm").click(function() {
          $('#town__text-farm-one').css("animation"," 60s ease-in-out 0s alternate forwards farm-textone");
          
          $('#cow-zoom-element').css("animation"," 60s ease-in-out 0s alternate forwards cow-zoom");
  
          $('#town__text-farm-three').css("animation"," 60s ease-in-out 0s alternate forwards farm-textthree");
  
          $('#town__text-farm-four').css("animation"," 60s ease-in-out 0s alternate forwards farm-textfour");
 
          $('#town__text-farm-five').css("animation"," 60s ease-in-out 0s alternate forwards farm-textfive");
          
// ___________ FARM SHOW ALL TEXT BUTTON

          $('#town__farm-all').css("animation"," 60s ease-in-out 0s alternate forwards farm-all");

// ___________ FARM RETURN BUTTON

          $('#town__return-farm').css("animation"," 60s ease-in-out 0s alternate forwards farm-return");
   });




// ______________________ WOODS TEXTS 

$("#town__zoom-woods").click(function() {
          $('#town__text-woods-one').css("animation"," 60s ease-in-out 0s alternate forwards woods-textone");

          $('#town__text-woods-two').css("animation"," 60s ease-in-out 0s alternate forwards woods-texttwo");

          $('#town__text-woods-three').css("animation"," 60s ease-in-out 0s alternate forwards woods-textthree");

          $('#town__text-woods-four').css("animation"," 60s ease-in-out 0s alternate forwards woods-textfour");

          $('#town__text-woods-five').css("animation"," 60s ease-in-out 0s alternate forwards woods-textfive");

// ___________ WOODS SHOW ALL TEXT BUTTON

          $('#town__woods-all').css("animation"," 60s ease-in-out 0s alternate forwards woods-all");

// ___________ WOODS RETURN BUTTON

          $('#town__return-woods').css("animation"," 60s ease-in-out 0s alternate forwards woods-return");
   });




// ______________________ SEE ALL TEXTS 

// ___________ SCENE 2

$( "#town__scene-text-all" ).css('display', 'none');

$( "#scene-all" ).click(function() {
  $( "#town__scene-text-all" ).toggle();
});

$('#town__scene-text-all-close').click(function() {
  $("#town__scene-text-all").fadeOut(500);
});

$('#town__grass').click(function() {
 $("#town__scene-text-all").fadeOut(500);
});

$('#town__sky').click(function() {
 $("#town__scene-text-all").fadeOut(500);
});




// ___________ CITY

$( "#town__city-text-all" ).css('display', 'none');

$( "#city-all" ).click(function() {
  $( "#town__city-text-all" ).toggle();
});

$('#town__city-text-all-close').click(function() {
  $("#town__city-text-all").fadeOut(500);
});

$('#town__river').click(function() {
 $("#town__city-text-all").fadeOut(500);
});




// ___________ FARM

$( "#town__farm-text-all" ).css('display', 'none');

$( "#farm-all" ).click(function() {
  $( "#town__farm-text-all" ).toggle();
});

$('#town__farm-text-all-close').click(function() {
  $("#town__farm-text-all").fadeOut(500);
});

$('#town__grass').click(function() {
 $("#town__farm-text-all").fadeOut(500);
});




// ___________ WOODS

$( "#town__woods-text-all" ).css('display', 'none');

$( "#woods-all" ).click(function() {
  $( "#town__woods-text-all" ).toggle();
});

$('#town__woods-text-all-close').click(function() {
  $("#town__woods-text-all").fadeOut(500);
});

$('#town__grass').click(function() {
 $("#town__woods-text-all").fadeOut(500);
});




// ___________ SCENE 3a

$( "#town-flooded__all-text" ).css('display', 'none');

$( "#flood-all" ).click(function() {
  $( "#town-flooded__all-text" ).toggle();
});

$('#town-flooded__all-text-close').click(function() {
  $("#town-flooded__all-text").fadeOut(500);
});




// ___________ SCENE 3b

$("#town-eco__all-text").css('display', 'none');

$("#eco-all").click(function() {
  $("#town-eco__all-text").toggle();
});

$('#town-eco__all-text-close').click(function() {
  $("#town-eco__all-text").fadeOut(500);
});



