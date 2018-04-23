<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Go for Globe</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script type="text/javascript" src="assets/js/main.js"></script>
    <script type="text/javascript" src="assets/js/questionnaire.js"></script>
    <script type="text/javascript" src="assets/js/texts.js"></script>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
</head>
<body>
     <!-- __________ HOMEPAGE WEBSITE CONTENT  __________ -->

     <div class="header-wrapper">
        <img class="logo" src="assets/img/goforglobe-long.png"> 
        <div class="about-head">
            <h1>
                Time is running out. Learn how to <span style="color: #00aeef;">Go for Globe</span>  through interactive animations.
            </h1>
        </div>
        <div class="about">
            <p>
                Go for Globe was founded in 2017 with the aim to educate and spread awareness about Earth's changing climate. Our application will help you explore the processes of how the globe warms up due to greenhouse gas emissions. With informative statistics and facts on events happening around the world, an interactive questionnaire <span style="color: #00aeef;">will prompt you to re-think</span> your everyday choices. <br />
                <br />
                 Before you begin, make sure to read the instructions.
            </p>
        </div>

         <!-- __________ NAVIGATION __________ -->

        <div class="nav-buttons">
            <div id="view-start">
                <a href="#start-drop"><span id="span-hover" style="color: #00aeef;">Go to</span> About</a>
            </div>

            <div id="view-instructions">
                <a href="#drop"><span id="span-hover" style="color: #00aeef;">Go to</span> Instructions</a>
            </div>

            <div id="view-anima">
              <a href="#"><span id="span-hover" style="color: #00aeef;">Go to</span> Animation</a>
            </div>
        </div>
    </div>

     <!-- __________ DESCRITIONS __________ -->
     
     <div id="start-drop" class="start">
            <div class="instructions-list">
                <h2>About</h2>
                <p>Gor for Globe was developed for a dissertation project during the final year of Bsc Digital Media in 2017 by Agnieszka Matuszak. With passion for graphics, animations, and websites, Agnieszka decided to use her skills in SVG, HTML5, CSS3, PHP and Javascript to develop an interactive animated application, for educating about a topic close to her heart: climate change. The project was based on data and technology available in 2017-18. The sound effects used throughout the application are from soundsnap.com, which are free for educational use at UWE. All of the graphical content was designed in Adobe Illustrator, and animated with SASS, CSS3, and Javascript by Agnieszka.</p>
            </div>
    </div>

    <div id="drop" class="instructions">
            <div class="instructions-list">
                 <h2>Before you start:</h2>
                    <p>Make sure you have a good internet connection, at least 9Mbps download speed.<br />
                    Be sure to use the latest version of Chrome or Firefox browsers, at least versions 65 for Chrome or 59 for Firefox.<br />
                    Once the page is fully loaded, go ahead and explore!</p>
                <h2>Instructions:</h2>
                <ul>
                    <li>
                         <img class="thumbnail" src="assets/img/1.png"><p class="icon-description">- start the animation</p>
                    </li>
                    <li>
                        <img class="thumbnail" src="assets/img/2.png"><p class="icon-description">- view all text</p>
                    </li>
                     <li>
                         <img class="thumbnail" src="assets/img/3.png"><p class="icon-description">- replay the sequence</p>
                    </li>
                    <li>
                        <img class="thumbnail" src="assets/img/4.png"><p class="icon-description">- read a fun-fact</p>
                    </li>
                     <li>
                         <img class="thumbnail" src="assets/img/5.png"><p class="icon-description">- zoom in</p>
                    </li>
                    <li>
                        <img class="thumbnail" src="assets/img/6.png"><p class="icon-description">- enlarge section</p>
                    </li>
                     <li>
                         <img class="thumbnail" src="assets/img/7.png"><p class="icon-description">- return to full view</p>
                    </li>
                    <li>
                        <img class="thumbnail" src="assets/img/8.png"><p class="icon-description">- take a questionnaire</p>
                    </li>
                </ul>
                <p>Scene 1 - learn about how Sun warms up Earth
                    <br />
                    Scene 2 - explore how people affect the warming up climate
                </p>
                <p>There is also a progress bar (bottom of Scene 1 & top of Scene 2) to help you track how far through the animation you are.
                    <br />
                    You can close pop ups with either a cross button or the same way you opened them.
                    <br />
                    Look out for a path and pointers that will guide you to discover new details.
                    <br />
                </p>
            </div>
        </div>
     <!-- __________ END OF HOMEPAGE __________ -->

    <div id="start-animation" class="svg-container">

         <!-- __________ Text for devices only __________ -->

         <div class="instructions-list">
            <p class="mobile-info">
                Please note: The fact boxes, questionnaire, and image feed will be <br />
                displayed underneath the application window on devices.
            </p>
        </div>
        <!-- __________ End of ext for devices only __________ -->

        <!-- __________ SCENE 1 __________ -->
        <div id="hide-element">
            <?php include 'assets/svg/universe.svg'; ?>

                    <div class="trigger-fact">
                        <div class="fact-window" id="fact-one">
                            <p class="close" title="Close">X</p>
                            <h2>Did you know?</h2>
                            <p>The amount of sunlight that heats up Earth during <b>1 hour</b> is enough to satisfy the world's energy needs of <b>1 year</b>.</p>
                        </div>
                    </div>

        </div>
        <!-- __________ END OF SCENE 1 __________ -->

        <!-- __________ SCENE 2 __________ -->
        <div id="show-element" style="display:none;">

            <?php include 'assets/svg/town.svg'; ?>

                     <!-- __________ FUN FACTS __________ -->
                    <div class="trigger-fact">
                        <div class="fact-window" id="fact-two">
                            <p class="close" title="Close">X</p>
                            <h2>Did you know?</h2>
                            <p>In the last 30 years 50% of coral reefs have disappeared, reversing hundreds of years of evolution.</p>
                        </div>
                    </div>

                    <div class="trigger-fact">
                        <div class="fact-window" id="fact-town">
                            <p class="close" title="Close">X</p>
                            <h2>Did you know?</h2>
                            <p>Humans add about 30 billion tonnes of CO<sub>2</sub> to the atmosphere every year (this is about 4.4 tonnes of CO<sub>2</sub> per person). By 2030, it could be as high as 47 giga-tonnes a year.</p>
                        </div>
                    </div>

                     <div class="trigger-fact">
                        <div class="fact-window" id="fact-farm">
                            <p class="close" title="Close">X</p>
                            <h2>Did you know?</h2>
                            <p>One burger is equivalent to 200 hours of lightbulb use, or 42 miles of driving.</p>
                        </div>
                    </div>

                     <div class="trigger-fact">
                        <div class="fact-window" id="fact-woods">
                            <p class="close" title="Close">X</p>
                            <h2>Did you know?</h2>
                            <p>The Arctic is the fastest warming up place on Earth, summer sea ice may disappear completely before 2030. India and Thailand are already experiencing serious floods, destroying lands. It is yet to get even worse.</p>
                        </div>
                    </div>
                     <!-- __________ END OF FUN FACTS __________ -->

                     <!-- __________ QUESTIONNAIRE __________ -->
                    <div class="trigger-qs">
                        <div class="question-window" id="questions">
                            <div id="question-1">
                                <p><b>Do you eat meat?</b></p>
                                <form>
                                    <label id="sky-negative" class="check-box">
                                        <p>Yes</p>
                                        <input class="qs-bullet-point" type="radio" value="A" name="quiz">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label id="sky-positive" class="check-box">
                                        <p>No</p>
                                        <input class="qs-bullet-point" type="radio" value="B" name="quiz">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label id="sky-normal" class="check-box">
                                        <p>Rarely</p>
                                        <input class="qs-bullet-point" type="radio" value="C" name="quiz">
                                        <span class="checkmark"></span>
                                    </label>
                                    <input class="next-button" type="next" value="Next" onclick="twoFunction()">
                                </form>
                            </div>
                            <div id="question-2">
                                <p><b>How do you get to work/school/town?</b></p>
                                <form>
                                    <label class="check-box m-normal">
                                        <p>Walk</p>
                                        <input class="qs-bullet-point" type="radio" value="A" name="quiz">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="check-box m-negative">
                                        <p>Car</p>
                                        <input class="qs-bullet-point" type="radio" value="B" name="quiz">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="check-box m-normal">
                                        <p>Bike</p>
                                        <input class="qs-bullet-point" type="radio" value="C" name="quiz">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="check-box m-negative">
                                        <p>Bus</p>
                                        <input class="qs-bullet-point" type="radio" value="D" name="quiz">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="check-box m-negative">
                                        <p>Train</p>
                                        <input class="qs-bullet-point" type="radio" value="E" name="quiz">
                                        <span class="checkmark"></span>
                                    </label>
                                    <input class="next-button" type="next" value="Next" onclick="threeFunction()">
                                </form>
                            </div>
                            <div id="question-3">
                                <p><b>Do you drive? If so, what distance per week?</b></p>
                                <form>
                                    <label id="or" class="check-box tree-positive">
                                        <p>No</p>
                                        <input class="qs-bullet-point" type="radio" value="A" name="quiz">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label id="or-two" class="check-box tree-normal">
                                        <p>Yes, up to 50km a week</p>
                                        <input class="qs-bullet-point" type="radio" value="B" name="quiz">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label id="or" class="check-box tree-negative">
                                        <p>Yes, more than 50km a week</p>
                                        <input class="qs-bullet-point" type="radio" value="C" name="quiz">
                                        <span class="checkmark"></span>
                                    </label>
                                    <input class="next-button" type="next" value="Next" onclick="fourFunction()">
                                </form>
                            </div>
                            <div id="question-4">
                                <p><b>Do you recycle?</b></p>
                                <form>
                                    <label id="or" class="check-box flood-positive">
                                        <p>Yes</p>
                                        <input class="qs-bullet-point" type="radio" value="A" name="quiz">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label id="or-two" class="check-box flood-negative">
                                        <p>No</p>
                                        <input class="qs-bullet-point" type="radio" value="B" name="quiz">
                                        <span class="checkmark"></span>
                                    </label>
                                    <input class="next-button" type="next" value="Next" onclick="fiveFunction()">
                                </form>
                            </div>
                            <div id="question-5">
                                <p><b>How much do you use your laptop/PC/TV per day?</b></p>
                                <form> 
                                    <label id="or" class="check-box">
                                        <p>Up to 3h</p>
                                        <input id="msg-pos" class="qs-bullet-point bird-alive" type="radio" value="A" name="quiz">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label id="or-two" class="check-box">
                                        <p>Between 3h-6h</p>
                                        <input id="msg-neg" class="qs-bullet-point bird-alive" type="radio" value="B" name="quiz">
                                        <span class="checkmark"></span>
                                    </label>
                                    <label id="or" class="check-box">
                                        <p>More than 6h</p>
                                        <input id="msg-neg" class="qs-bullet-point bird-dies" type="radio" value="C" name="quiz">
                                        <span class="checkmark"></span>
                                    </label>
                                    <input id="submit" type="submit" value="Submit" onclick="endProgressBar()">
                                </form>
                            </div>
                            <div id="result-positive">
                                <h2>Well Done!</h2>
                                <p>Congratulations on contributing towards a happy, healthy Earth!<br />
                                Carry on and see how you could help even more.</p>
                                <a href="healthy-right.php"><input class="button-style" value="Keep Going"></a>
                            </div>
                            <div id="result-negative">
                                <h2>Not so good!</h2>
                                <p>See what damages your actions contribute to.</p>
                                <a href="floded.php"><input class="button-style button-style-short" value="Act Now"></a>
                            </div>
                        </div>
                    </div>
                    <!-- __________ END OF QUESTIONNAIRE __________ -->
        </div>
        <!-- __________ END OF SCENE 2 __________ -->
    </div>
    <!-- __________ END OF CONTAINER __________ -->
    
   <!-- __________ AUDIO FILES LOAD - Soundsnap (2018) Available from: https://www.soundsnap.com/ __________ -->

            <audio id="intro" src="assets/sounds/intro.mp3"></audio>

            <audio id="birds" src="assets/sounds/birds.mp3"></audio>
            <audio id="woods" src="assets/sounds/woods.mp3"></audio>  
            <audio id="cars" src="assets/sounds/cars.mp3"></audio> 
            <audio id="cows" src="assets/sounds/cows.mp3"></audio> 

            <audio id="loop" src="assets/sounds/background-loop.mp3" loop="loop"></audio>

   <!-- __________ ENF OF AUDIO FILES LOAD  __________ -->
   
   <!-- __________ FOOTER __________ -->
    <footer>
        <p class="copyright">All rights reserved. © 2018 <span style="color:#00aeef;">Go for Globe</span></p>
        <script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js'></script>
        <script src="assets/js/main.js" charset="utf-8"></script>
        <script src="assets/js/texts.js" charset="utf-8"></script>
        <script src="assets/js/questionnaire.js" charset="utf-8"></script>
    </footer>
    <!-- __________ END OF FOOTER __________ -->
</body>
</html>
