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
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
</head>
<body>
    <!-- __________ FLOODED SCENE __________ -->

    <div class="slide-container">
        <div id="slide">
            <?php include 'assets/svg/healthy.svg'; ?>
        </div>
    </div>
    <!-- __________ END OF SCENE __________ -->

    <!-- __________ FOOTER __________ -->

    <footer>
        <p class="copyright">All rights reserved. © 2018 <span style="color:#00aeef;">Go for Globe</span></p>
        <script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js'></script>
        <script src="assets/js/main.js" charset="utf-8"></script>
        <script src="assets/js/texts.js" charset="utf-8"></script>
        <script src="assets/js/questionnaire.js" charset="utf-8"></script>
    </footer>
    <!-- __________ END OF FOOTER __________ -->

 <!-- __________ AUDIO FILES LOAD - Soundsnap (2018) Available from: https://www.soundsnap.com/  __________ -->

            <audio id="cows" src="assets/sounds/cows.mp3"></audio> 
            <audio id="woods" src="assets/sounds/woods.mp3"></audio> 
            <audio id="river" src="assets/sounds/river.mp3"></audio> 
            <audio id="town" src="assets/sounds/town.mp3"></audio> 

            <audio id="loop" src="assets/sounds/background-loop.mp3" loop="loop"></audio>

            <script type="text/javascript">
                window.onload = function() {
                  document.getElementById("loop").play();
                }
            </script>
</body>
</html>
