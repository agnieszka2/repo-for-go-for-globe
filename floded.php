<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Go for Globe</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script type="text/javascript" src="assets/js/main.js"></script>
    <script type="text/javascript" src="assets/js/questionnaire.js"></script>
    <script type="text/javascript" src="assets/js/texts.js"></script>
    <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
</head>
<body>
  <!-- __________ FLOODED SCENE __________ -->

    <div class="svg-container">
        <div id="fadein">
            <?php include 'assets/svg/floded.svg'; ?>
        </div>
    </div>
    <!-- __________ END OF SCENE __________ -->


    <!-- __________ LIVE IMAGE FEED __________ -->

    <div class="trigger-fact">
        <div class="live-img-window" id="live-images"><p class="close" title="Close">X</p><h2>Recent photos of rivers.</h2><a target="_blank" class="see-more" href="https://www.flickr.com/photos/tags/polluted_water"><p>→ See more on Flickr</p></a></div>
    </div>

    <div class="trigger-fact">
        <div class="live-img-two-window" id="live-images-two"><p class="close-two" title="Close">X</p><h2>Recent photos of forests.</h2><a target="_blank" class="see-more" href="https://www.flickr.com/photos/tags/deforestation"><p>→ See more on Flickr</p></a></div>
    </div>
    <!-- __________ END OF LIVE IMAGE FEED __________ -->


  <!-- __________ LIVE IMAGE API SETUP - FLICKR API (2018) Available from: https://www.flickr.com/services/api/ __________ -->

  <script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js'></script>
  <script src="assets/js/main.js" charset="utf-8"></script>

    <script>
      (function() {
        var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        $.getJSON( flickrAPI, {
          tags: "polluted water",
          tagmode: "any",
          format: "json"
        })
          .done(function( data ) {
            $.each( data.items, function( i, item ) {
              $( "<img>" ).attr( "src", item.media.m ).appendTo( "#live-images" );
              if ( i === 1 ) {
                return false;
              }
            });
          });
      })();

       (function() {
        var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        $.getJSON( flickrAPI, {
          tags: "deforestation",
          tagmode: "any",
          format: "json"
        })
          .done(function( data ) {
            $.each( data.items, function( i, item ) {
              $( "<img>" ).attr( "src", item.media.m ).appendTo( "#live-images-two" );
              if ( i === 1 ) {
                return false;
              }
            });
          });
      })();
    </script>
    <!-- __________ END OF LIVE IMAGE API SETUP __________ -->


    <!-- __________ FOOTER __________ -->
    <footer>
        <p class="copyright">All rights reserved. © 2018 <span style="color:#00aeef;">Go for Globe</span></p>
        <script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js'></script>
        <script src="assets/js/main.js" charset="utf-8"></script>
        <script src="assets/js/texts.js" charset="utf-8"></script>
        <script src="assets/js/questionnaire.js" charset="utf-8"></script>
    </footer>
    <!-- __________ END OF FOOTER __________ -->


     <!-- __________ AUDIO FILES LOAD - Soundsnap (2018) Available from: https://www.soundsnap.com/ __________ -->

            <audio id="flood" src="assets/sounds/flooded.mp3" loop="loop"></audio>

            <script type="text/javascript">
                window.onload = function() {
                  document.getElementById("flood").play();
                }
            </script>

</body>
</html>
