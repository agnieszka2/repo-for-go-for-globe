// ======================
//   QUESTIONNAIRE FUNCTIONS
// ======================




// INDEX 
// ======================

// section (line number)

// 1. QUESTTIONAIRE SETUP (18)
// 2. SELECTING ANSWERS - ANIMATION REACTION (85)



// ______________________ QUESTTIONAIRE SETUP ______________________

function qsFunction() {
    var popup = document.getElementById("questions");
    popup.classList.toggle("show");
    document.getElementById('question-1').style.display = "block";
    document.getElementById('question-2').style.display = "none";
    document.getElementById('question-3').style.display = "none";
    document.getElementById('question-4').style.display = "none";
    document.getElementById('question-5').style.display = "none";
    document.getElementById('result-positive').style.display = "none";
    document.getElementById('result-negative').style.display = "none";
}

function twoFunction() {
    document.getElementById('question-1').style.display = "none";
    document.getElementById('question-2').style.display = "block";
}

function threeFunction() {
    document.getElementById('question-1').style.display = "none";
    document.getElementById('question-2').style.display = "none";
    document.getElementById('question-3').style.display = "block";
}

function fourFunction() {
    document.getElementById('question-1').style.display = "none";
    document.getElementById('question-2').style.display = "none";
    document.getElementById('question-3').style.display = "none";
    document.getElementById('question-4').style.display = "block";
}

function fiveFunction() {
    document.getElementById('question-1').style.display = "none";
    document.getElementById('question-2').style.display = "none";
    document.getElementById('question-3').style.display = "none";
    document.getElementById('question-4').style.display = "none";
    document.getElementById('question-5').style.display = "block";
}

$(function(){
  $("#submit").click(function(){   
        if( $('#msg-pos').is(":checked") ) {
                document.getElementById('question-1').style.display = "none";
                document.getElementById('question-2').style.display = "none";
                document.getElementById('question-3').style.display = "none";
                document.getElementById('question-4').style.display = "none";
                document.getElementById('question-5').style.display = "none";
                document.getElementById('result-negative').style.display = "none";
                document.getElementById('result-positive').style.display = "block";
        } else {
                document.getElementById('question-1').style.display = "none";
                document.getElementById('question-2').style.display = "none";
                document.getElementById('question-3').style.display = "none";
                document.getElementById('question-4').style.display = "none";
                document.getElementById('question-5').style.display = "none";
                document.getElementById('result-positive').style.display = "none";
                document.getElementById('result-negative').style.display = "block";
        }

      return false;
  });
});




// ______________________ SELECTING ANSWERS - ANIMATION REACTION ______________________

// __________ SKY CHANGE

$('#sky-negative').on("click", function() {
    $('#sky-react').css({ fill: "#93b9ba", transition: "fill 2s" }); 
    $('#town__sun').css({ fill: "#ffdb27", transition: "fill 2s" });
});

$('#sky-positive').on("click", function() {
    $('#sky-react').css({ fill: "#33dde5", transition: "fill 2s" });
    $('#town__sun').css({ fill: "#ffeb33", transition: "fill 2s" });
});

$('#sky-normal').on("click", function() {
    $('#sky-react').css({ fill: "#33c4d3", transition: "fill 2s" });
    $('#town__sun').css({ fill: "#ffeb33", transition: "fill 2s" });
});



// __________ MOUNTAINS AND FIELDS CHANGE

$('.m-normal').on("click", function() {
    $('#m-one').css({ fill: "#2b892d", transition: "fill 2s"}); 
    $('#m-two').css({ fill: "#2b892d", transition: "fill 2s"}); 
    $('#m-three').css({ fill: "#2b892d", transition: "fill 2s"}); 
    $('#m-four').css({ fill: "#15600a", transition: "fill 2s"}); 
    $('#town__grass').css({ fill: "#2b892d", transition: "fill 2s"}); 
});

$('.m-negative').on("click", function() {
    $('#m-one').css({ fill: "#87802b", transition: "fill 2s"}); 
    $('#m-two').css({ fill: "#87872b", transition: "fill 2s"}); 
    $('#m-three').css({ fill: "#87872b", transition: "fill 2s"}); 
    $('#m-four').css({ fill: "#5e500b", transition: "fill 2s"}); 
    $('#town__grass').css({ fill: "#87802b", transition: "fill 2s"}); 
});



// __________ TREES CHANGE

$('.tree-normal').on("click", function() {
    $('#town__trees-dead').fadeOut(2000);
    $('#town__trees-dead-two').fadeOut(2000);
    $('#town__forest-one-b').fadeIn(2000);
    $('#town__forest-two').fadeIn(2000);
    $('#town__farm-tree').fadeIn(2000);
    $('#town__farm-tree-one').fadeIn(2000);
    $('#town__city-trees').fadeOut(2000);
    $('#town__bird-forest').fadeIn(2000);
    $('#town__bird').fadeIn(3500);
    $('#town__bird-back').fadeIn(3500);
});

$('.tree-positive').on("click", function() {
    $('#town__trees-dead').fadeOut(2000);
    $('#town__trees-dead-two').fadeOut(2000);
    $('#town__forest-one-b').fadeIn(2000);
    $('#town__forest-two').fadeIn(2000);
    $('#town__farm-tree').fadeIn(2000);
    $('#town__farm-tree-one').fadeIn(2000);
    $('#town__city-trees').fadeIn(2000);
    $('#town__bird-forest').fadeIn(2000);
    $('#town__bird').fadeIn(3500);
    $('#town__bird-back').fadeIn(3500);
});

$('.tree-negative').on("click", function() {
    $('#town__trees-dead').fadeIn(2000);
    $('#town__trees-dead-two').fadeIn(2000);
  //  $('#town__farm-flower').css({ fill: "#5b3b0b", transition: "fill 2s"}); 
    $('#town__forest-one-b').fadeOut(2000);
    $('#town__forest-two').fadeOut(2000);
    $('#town__farm-tree').fadeOut(2000);
    $('#town__farm-tree-one').fadeOut(2000);
    $('#town__city-trees').fadeOut(2000);
    $('#town__bird-forest').fadeOut(2000);
    $('#town__bird').fadeOut(1500);
    $('#town__bird-back').fadeOut(1500);
});



// __________ FLOOD

$('.flood-positive').on("click", function() {
    $('#town__flood-main').fadeOut(2000);
    $('#town__flood-back').fadeOut(2000);
    $('#town__flood-front').fadeOut(2000);
    $('#town__flood-four').fadeOut(2000);
    $('#town__flood-three').fadeOut(2000);
    $('#town__flood-two').fadeOut(2000);
    $('#town__flood-one').fadeOut(2000);
    $('#town__reflections').fadeOut(2000);

    $('#town__trees-dead').fadeOut(2000);
    $('#town__trees-dead-two').fadeOut(2000);
    $('#town__forest-one-b').fadeIn(2000);
    $('#town__forest-two').fadeIn(2000);
    $('#town__farm-tree').fadeIn(2000);
    $('#town__farm-tree-one').fadeIn(2000);
    $('#town__bird-forest').fadeIn(2000);
    $('#town__bird').fadeIn(3500);
    $('#town__bird-back').fadeIn(3500);
    $('#town__city-trees').fadeIn(2000);

    $('#town__traffic-co2-two').fadeIn(2000);
    $('#town__traffic-co2-one').fadeIn(2000);
    $('#town__factory-co2').fadeIn(2000);
    $('#town__cows-co2').fadeIn(2000);

    $('#town__bird').fadeIn(1500);
    $('#town__bird-back').fadeIn(1500);
});

$('.flood-negative').on("click", function() {
    $('#town__flood-main').fadeIn(2000);
    $('#town__flood-back').fadeIn(2000);
    $('#town__flood-front').fadeIn(2000);
    $('#town__flood-four').fadeIn(2000);
    $('#town__flood-three').fadeIn(2000);
    $('#town__flood-two').fadeIn(2000);
    $('#town__flood-one').fadeIn(2000);
    $('#town__reflections').fadeIn(2000);

    $('#town__trees-dead').fadeIn(2000);
    $('#town__trees-dead-two').fadeIn(2000);
    $('#town__forest-one-b').fadeOut(2000);
    $('#town__forest-two').fadeOut(2000);
    $('#town__farm-tree').fadeOut(2000);
    $('#town__farm-tree-one').fadeOut(2000);
    $('#town__city-trees').fadeOut(2000);
    $('#town__bird-forest').fadeOut(2000);
    $('#town__bird').fadeOut(1500);

    $('#town__traffic-co2-two').fadeOut(2000);
    $('#town__traffic-co2-one').fadeOut(2000);
    $('#town__factory-co2').fadeOut(2000);
    $('#town__cows-co2').fadeOut(2000);

    $('#town__bird').fadeOut(1500);
    $('#town__bird-back').fadeOut(1500);
});



// __________ BIRD

var singleBird = $('#animate-bird');
var singleBirdtwo = $('#animate-bird-back');

$('.bird-dies').on("click", function() {
    singleBird[0].endElement();
    singleBirdtwo[0].endElement();
    $('#town__bird-fall').css("animation"," 2s ease-in 0s alternate forwards bird-one");
    $('#town__bird-wing-one').css("animation"," 17s ease-in 0s infinite paused bird-wingone");
    $('#town__bird').css("transform","rotate(180deg)");
    $('#town__bird').css("transform-origin","center");
    $('#town__bird').css("transform-box","fill-box");

    $('#town__bird-back-fall').css("animation"," 2s ease-in 0s alternate forwards bird-two");
    $('#town__bird-back-wing-one').css("animation"," 17s ease-in 0s infinite paused bird-wingone");
    $('#town__bird-back').css("transform","rotate(180deg)");
    $('#town__bird-back').css("transform-origin","center");
    $('#town__bird-back').css("transform-box","fill-box");
});

$('.bird-alive').on("click", function() {
    singleBird[0].beginElement();
    singleBirdtwo[0].beginElement();
    $('#town__bird-fall').css("animation"," 2s ease-in 0s alternate paused bird-one");
    $('#town__bird-wing-one').css("animation"," 17s ease-in 0s infinite forwards bird-wingone");
    $('#town__bird').css("transform","rotate(0deg)");

    $('#town__bird-back-fall').css("animation"," 2s ease-in 0s alternate paused bird-two");
    $('#town__bird-back-wing-one').css("animation"," 17s ease-in 0s infinite forwards bird-wingone");
    $('#town__bird-back').css("transform","rotate(0deg)");
});


