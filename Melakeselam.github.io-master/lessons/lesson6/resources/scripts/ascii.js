/*
Melakeselam Moges Mengistu (611124)
CS472 Web Application Programming
submission date: May 29, 2020

Task: create an ASCII animator with controllers that affect the behavior of 
the animation. The behaviour aspect is to be manipulated by javascript code
on external file linked to the HTML page - creating a web application. Separation
of concern is to be strictly followed by separating html, css and javascript 
codes onto independent files linked by the html file.

associated html file: ascii.html, 
associated stylesheet: ascii.css
*/

//this function combines all functions that are to be run after
//the initalization of the DOM structure  and prepares themto be 
//assigned to the windows.onload global method.
function loadFunctions(){
    "use strict";

    //declaration of variables and constants
    let animeFrames = [];
    let animeVector = 1, animeIndex = 0;
    let looper;
    let timeInterval = 250;
    const animeWin = document.getElementById("animWindow");
    const playStart = document.getElementById("playStart");
    const playStop = document.getElementById("playStop");
    const animeSelector = document.getElementById("animation");
    const animeSpeed = document.getElementById("speed");
    const animeSize = document.getElementById("size");

    //this function is used to initialize the objects on the screen
    //and setup the animation type to be run. It displays the 
    //initial frames in the main animation window
    const selectAnime = function() {
       
        animeWin.value = ANIMATIONS[animeSelector.value];
        if(animeSelector.value === "blank"){
            playStart.disabled = true;
            playStop.disabled = true;
            animeSize.disabled = true;
            animeSpeed.disabled = true;
            animeWin.disabled = true;
        } else {
            playStart.disabled = false;
            animeSize.disabled = false;
            animeSpeed.disabled = false;
            animeWin.disabled = false;
            if(animeSelector.value !== 'custom'){
                animeFrames = animeWin.value.split("=====\n");
            }
            animeIndex = 0;
        }
    }

    //animates the frames by displaying the current frame on the
    //animation window and resetting the sequence when it reaches
    //the end
    function animate() {
        animeWin.value = animeFrames[animeIndex];//places the frame at the current index in #animWindow        
        animeIndex += animeVector;
        if(animeIndex >= animeFrames.length){
            animeIndex = 0;
        }
    }    

    selectAnime();//initialize display at the start
    
    //setting up event handlers for each controller

    animeSelector.onchange = selectAnime;

    //runs the animation while activating/deactivating
    //relevant features
    playStart.onclick = function() {
        playStart.disabled = true;
        playStop.disabled = false;
        animeSelector.disabled = true;
        animeWin.readonly = true;
        if(animeSelector.value ==="custom"){
            if(animeWin.value){
                animeFrames = animeWin.value.split("=====\n");
            }
            else{
                return;
            }
        }
        looper = setInterval(animate, timeInterval);
    }

    //stops the animation while activating/deactivating
    //relevant features
    playStop.onclick = function() {
        clearInterval(looper);
        playStart.disabled = false;
        playStop.disabled = true;
        animeSelector.disabled = false;
        animeWin.readonly = false;
        animeWin.value = "";
        animeSelector.value = "blank";
    }

    //enlarges or reduces size of animation in the animation window
    animeSize.onchange = function() {
        animeWin.style.fontSize = animeSize.value;
    }

    //regulates the speed of the animation
    animeSpeed.onclick= function(){
        if(this.checked){
            timeInterval = 50;
        }
        else{
            timeInterval = 250;
        }
        
        playStop.click();
        playStart.click();
    }

    animeWin.onmouseover = function(){
        
        if(animeSelector.value == "aliVsForman"){
            const doubleClickMe = document.createElement("input");
            doubleClickMe.type = "text";
            doubleClickMe.id = "doubleClickMe";
            doubleClickMe.value = "DOUBLE CLICK ME";
            // doubleClickMe.style.display = "inline-block";
            doubleClickMe.style.position = "fixed";
            doubleClickMe.style.top ="400px";
            doubleClickMe.style.color = "maroon";
            doubleClickMe.style.fontSize = "3vw";
            doubleClickMe.style.opacity = 0.5;
            doubleClickMe.style.width = "30vw";
            doubleClickMe.style.textAlign = "center";
            doubleClickMe.style.borderWidth ="0px";
            doubleClickMe.style.left = "5.5vw";
            const minLeft = 5; //18.5vw
            const maxLeft = 95-30.5; //76.5vw 
            let moveVector = 0.2; //vw
            document.body.appendChild(doubleClickMe);
            let looper = setInterval(function(){
                if((parseFloat(doubleClickMe.style.left) >= maxLeft)||(parseFloat(doubleClickMe.style.left) <= minLeft)){
                    moveVector = moveVector * -1;
                } 
                doubleClickMe.style.left = (parseFloat(doubleClickMe.style.left)+moveVector)+"vw";
            },20)
        }
    }

    animeWin.onmouseout = function() {
        const doubleClickMe = document.getElementById("doubleClickMe");
        if(doubleClickMe){
            doubleClickMe.remove();
        }
    }
    animeWin.ondblclick=function(){
        

        if(animeSelector.value == "aliVsForman"){
            window.open( "https://www.youtube.com/watch?v=55AasOJZzDE");
        }
    }
    

}

//loads the above functions and event handlers after 
//the dome has been initialized
window.onload = loadFunctions;

/*my custom animation*/

// m
// =====
// me
// =====
// mel
// =====
// mela
// =====
// melak
// =====
// melak...YAAAA!
// =====
// melak..YAAAA!
// =====
// melak...YAAAA!
// =====
// melak..YAAAA!
// =====
// melak...YAAAA!
// =====
// melak..YAAAA!
// =====
// melak...YAAAA!
// =====
// melak..YAAAA!
// =====
// melak...YAAAA!
// =====
// melak..YAAAA!
// =====
// melak...YAAAA!
// =====
// melak..YAAAA!
// =====
// melak...YAAAA!
// =====
// melak..YAAAA!
// =====
// melak...YAAAA!
// =====
// melak..YAAAA!
// =====
// melak...YAAAA!
// =====
// melak..YAAAA!
// =====
// melak...YAAAA!
// =====
// melak..YAAAA!
// =====
// melak...YAAAA!
// =====
// melak..YAAAA!
// =====
// melak...YAAAA!
// =====
// melak..YAAAA!


// "ALI\n" +
// "=====\n" +
// ALI
// =====
// ALI
// =====
// ALI
// =====
// ALI
// =====
// ALI VERSES
// =====
// ALI VERSES
// =====
// ALI VERSES
// =====
// ALI VERSES
// =====
// ALI VERSES
// =====
// ALI VERSES FORMAN
// =====
// ALI VERSES FORMAN
// =====
// ALI VERSES FORMAN
// =====
// ALI VERSES FORMAN
// =====
// ALI VERSES FORMAN
// =====
// R
// =====
// RO
// =====
// ROU
// =====
// ROUN
// =====
// ROUND 
// =====
// ROUND 
// =====
// ROUND 1!
// =====
// ROUND 1!
// =====
// ROUND 1!
// =====
// ROUND 1!
// =====
//  O             O
// /|`-o       ^--+\
// o\\            //o
// /_ \_        _| \
// =====
//   O           O
//  /|`-o     ^--+\
//  \\          //o
// /_ \_      _||
// =====
//    O        O
//   ||`o      +\
//    o\      o/o
//   |_|_     _\ |
// =====
//     O       O
//    ||`o     +\
//     o\     o/o
//    |_|_    _\ |
// =====
//      O  oo O
//     '+-o \\|
//     o|\    /  
//      `/_ _|\  
// =====
//      O  oo O
//     '+-o \\|
//     o|\    /\  
//      //_ _|  \  
// =====
//         O   **\ O/ * AAHHHHH!
//       </''''^  //
//       /|    * / \
//      /_'    _/   v
// =====
//         O     **\ O/ *  AAHHHHH!
//       </''''^ * //
//       /|     * /  \
//      /_'    _/     v
// =====
//        O       `  **\ O/ *  AAHHHHH!
//       /\/^       * //
//       `|       * /  \ *
//       ||_       V    v *
// =====
//         O       `  **\ * *  PU!
//       \/\/       * /*
//        ||       * /  \ *
//        ||_       *    v *
// =====
//         O       `  **\ * *  PUUU!
//        \/\/       * +* *
//         ||       * /  \+ *
//        _||_       *    * *
// =====
//          O       `  *   *  PUUUFF!
//        \/\/       *  *  *
//         ||            *'
//        _||_       *  '  * *
// =====
//       ` O '      `  *     PUUUFF!
//        \/\/       *    *
//         ||            
//        _||_         '   *
// =====
//       ` O '      `  *     PUUUFF!
//        \/\/       *    *
//         ||            
//        _||_         '   *
// =====
//       ` O '      `  *     PUUUFF!
//        \/\/       *    *
//         ||            
//        _||_         '   *
// =====
// WHA.. ` O '      `       
//        \/\/       *    *
//         ||            
//        _||_       *      *
// =====
// WHAAA  ` O '      `       
//        \/\/       *    *
//         ||            
//        _||_       *      *
// =====
// WHAAAT!`O '      `       
//        \/\/       *    *
//         ||            
//        _||_       *      *
// =====
// WHAAAT!`O '      `       
//        \/\/       *    *
//         ||            
//        _||_       *      *
// =====
// WHAAAT!`O '      `       
//        \/\/       *    *
//         ||            
//        _||_       *      *
// =====
//       ` O '      `       
//        \/\/       *    *
//         ||            
//        _||_       *      *
// =====
//        \ O/  -_ YAAA     
//         \/           *
//         ||            
//        _||_       *      
// =====
//        \ O/  -_ YAAA     
//         \/           *
//         ||            
//        _||_       *      
// =====
//        \ O/  -_ YAAA     
//         \/           *
//         ||            
//        _||_       *      
// =====
//        \ O/  -_ YAAAaaaHHH!     
//         \/           *
//         ||            
//        _||_       *  
// =====
//        \ O/  -_ YAAAaaaHHH! *    
//         \/           *
//         ||            
//        _||_
// =====
//        \ O/  -_ YAAAaaaHHH! *    
//         \/           *
//         ||            
//        _||_            
// =====
//        \ O/  -_ YAAAaaaHHH! *    
//         \/           *
//         ||            
//        _||_            
// =====
//        \ O/  -_ YAAAaaaHHH! *    
//         \/           *
//         ||            
//        _||_    
// =====
// .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' 
//  .~..`,.#.` "" ' `  ALI  .~..`,.:.` * '  
// .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M 
// =====
//  .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' 
// .~..`,.#.` "" ' `  ALI  .~..`,.:.` * '  
//  .%..`,.:.` * ' ` ` ~~~  .*..`,.'.`M.M 
// =====
// .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' 
//  .~..`,.#.` "" ' `  ALI  .~..`,.:.` * '  
// .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M 
// =====
// .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' 
//  .~..`,.#.` "" ' `  ALI  .~..`,.:.` * '  
// .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M 
// =====
//  .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' 
// .~..`,.#.` "" ' `  ALI  .~..`,.:.` * '  
//  .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M 
// =====
// .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' 
//  .~..`,.#.` "" ' `  ALI  .~..`,.:.` * '  
// .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M 
// =====
//  .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' 
// .~..`,.#.` "" ' `  BOOM -BA-YAY  .~..`,.:.` * '  
//  .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M 
// =====
// .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' 
//  .~..`,.#.` "" ' `  BOOM -BA-YAY  .~..`,.:.` * '  
// .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M 
// =====
//  .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' 
// .~..`,.#.` "" ' `  BOOM -BA-YAY  .~..`,.:.` * '  
//  .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M 
// =====
//  .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' 
// .~..`,.#.` "" ' `  BOOM -BA-YAY  .~..`,.:.` * '  
//  .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M
// =====
// .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' 
//  .~..`,.#.` "" ' `  BOOM -BA-YAY  .~..`,.:.` * '  
// .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M 
// =====
//  .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' 
// .~..`,.#.` "" ' `  BOOM -BA-YAY  .~..`,.:.` * '  
//  .%..`,.:.` * ' ` ` ~~~  .*..`,.'.`M.M 
// =====
// .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' 
//  .~..`,.#.` "" ' `  ALI  .~..`,.:.` * '  
// .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M
// =====
//  .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' 
// .~..`,.#.` "" ' `  ALI  .~..`,.:.` * '  
//  .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M 
// =====
// .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' 
//  .~..`,.#.` "" ' `  ALI  .~..`,.:.` * '  
// .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M 
// =====
// .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' 
//  .~..`,.#.` "" ' `  ALI  .~..`,.:.` * '  
// .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M 
// =====
//  .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' 
// .~..`,.#.` "" ' `  ALI  .~..`,.:.` * '  
//  .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M 
// =====
// .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' 
//  .~..`,.#.` "" ' `  ALI  .~..`,.:.` * '  
// .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` * ' 
// =====
//  .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' 
// .~..`,.#.` "" ' `  BOOM -BA-YAY  .~..`,.:.` * '  
//  .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M 
// =====
// .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' 
//  .~..`,.#.` "" ' `  BOOM -BA-YAY  .~..`,.:.` * '  
// .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M
// =====
//  .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' 
// .~..`,.#.` "" ' `  BOOM -BA-YAY  .~..`,.:.` * '  
//  .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M 
//  =====
//  .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' 
// .~..`,.#.` "" ' `  BOOM -BA-YAY  .~..`,.:.` * '  
//  .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M
// =====
// .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' 
//  .~..`,.#.` "" ' `  BOOM -BA-YAY  .~..`,.:.` * '  
// .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M 
// =====
//  .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' 
// .~..`,.#.` "" ' `  BOOM -BA-YAY  .~..`,.:.` * '  
//  .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M 


ANIMATIONS["aliVsForman"] = "ALI\n" +
"=====\n" +
"ALI\n" +
"=====\n" +
"ALI\n" +
"=====\n" +
"ALI\n" +
"=====\n" +
"ALI\n" +
"=====\n" +
"ALI VERSES\n" +
"=====\n" +
"ALI VERSES\n" +
"=====\n" +
"ALI VERSES\n" +
"=====\n" +
"ALI VERSES\n" +
"=====\n" +
"ALI VERSES\n" +
"=====\n" +
"ALI VERSES FORMAN\n" +
"=====\n" +
"ALI VERSES FORMAN\n" +
"=====\n" +
"ALI VERSES FORMAN\n" +
"=====\n" +
"ALI VERSES FORMAN\n" +
"=====\n" +
"ALI VERSES FORMAN\n" +
"=====\n" +
"R\n" +
"=====\n" +
"RO\n" +
"=====\n" +
"ROU\n" +
"=====\n" +
"ROUN\n" +
"=====\n" +
"ROUND\n" +
"=====\n" +
"ROUND\n" +
"=====\n" +
"ROUND\n" +
"=====\n" +
"ROUND 8!\n" +
"=====\n" +
"ROUND8  !\n" +
"=====\n" +
"ROUND 8!\n" +
"=====\n" +
"ROUND8  !\n" +
"=====\n" +
"ROUND 8!\n" +
"=====\n" +
"ROUND8  !\n" +
"=====\n" +
"ROUND 8!\n" +
"=====\n" +
"ROUND8  !\n" +
"=====\n" +
"ROUND 8!\n" +
"=====\n" +
"ROUND8  !\n" +
"=====\n" +
"ROUND 8!\n" +
"=====\n" +
" O             O\n" +
"/|`-o       ^--+\\\n" +
"o\\\\            //o\n" +
"/_ \\_        _| \\\n" +
"=====\n" +
"  O           O\n" +
" /|`-o     ^--+\\\n" +
" \\\\          //o\n" +
"/_ \\_      _||\n" +
"=====\n" +
"   O        O\n" +
"  ||`o      +\\\n" +
"   o\\      o/o\n" +
"  |_|_     _\\ |\n" +
"=====\n" +
"    O       O\n" +
"   ||`o     +\\\n" +
"    o\\     o/o\n" +
"   |_|_    _\\ |\n" +
"=====\n" +
"     O  oo O\n" +
"    '+-o \\\\|\n" +
"    o|\\/  \n" +
"     `/_ _|\\  \n" +
"=====\n" +
"     O  oo O\n" +
"    '+-o \\\\|\n" +
"    o|\\    /\\  \n" +
"     //_ _|  \\  \n" +
"=====\n" +
"        O   **\\ O/ * AAHHHHH!\n" +
"      </''''^  //\n" +
"      /|    * / \\\n" +
"     /_'    _/   v\n" +
"=====\n" +
"        O     **\\ O/ *  AAHHHHH!\n" +
"      </''''^ * //\n" +
"      /|     * /  \\\n" +
"     /_'    _/     v\n" +
"=====\n" +
"       O       `  **\\ O/ *  AAHHHHH!\n" +
"      /\\/^       * //\n" +
"      `|       * /  \\ *\n" +
"      ||_       V    v *\n" +
"=====\n" +
"        O       `  **\\ * *  PU!\n" +
"      \\/\\/       * /*\n" +
"       ||       * /  \\ *\n" +
"       ||_       *    v *\n" +
"=====\n" +
"        O       `  **\\ * *  PUUU!\n" +
"       \\/\\/       * +* *\n" +
"        ||       * /  \\+ *\n" +
"       _||_       *    * *\n" +
"=====\n" +
"         O       `  *   *  PUUUFF!\n" +
"       \\/\\/       *  *  *\n" +
"        ||            *'\n" +
"       _||_       *  '  * *\n" +
"=====\n" +
"      ` O '      `  *     PUUUFF!\n" +
"       \\/\\/       *    *\n" +
"        ||            \n" +
"       _||_         '   *\n" +
"=====\n" +
"      ` O '      `  *     PUUUFF!\n" +
"       \\/\\/       *    *\n" +
"        ||            \n" +
"       _||_         '   *\n" +
"=====\n" +
"      ` O '      `  *     PUUUFF!\n" +
"       \\/\\/       *    *\n" +
"        ||            \n" +
"       _||_         '   *\n" +
"=====\n" +
"WHA.. ` O '      `       \n" +
"       \\/\\/       *    *\n" +
"        ||            \n" +
"       _||_       *      *\n" +
"=====\n" +
"WHAAA  ` O '      `       \n" +
"       \\/\\/       *    *\n" +
"        ||            \n" +
"       _||_       *      *\n" +
"=====\n" +
"WHAAAT!`O '      `       \n" +
"       \\/\\/       *    *\n" +
"        ||            \n" +
"       _||_       *      *\n" +
"=====\n" +
"WHAAAT!`O '      `       \n" +
"       \\/\\/       *    *\n" +
"        ||            \n" +
"       _||_       *      *\n" +
"=====\n" +
"WHAAAT!`O '      `       \n" +
"       \\/\\/       *    *\n" +
"        ||            \n" +
"       _||_       *      *\n" +
"=====\n" +
"      ` O '      `       \n" +
"       \\/\\/       *    *\n" +
"        ||            \n" +
"       _||_       *      *\n" +
"=====\n" +
"       \\ O/  -_ YAAA     \n" +
"        \\/           *\n" +
"        ||            \n" +
"       _||_       *      \n" +
"=====\n" +
"       \\ O/  -_ YAAA     \n" +
"        \\/           *\n" +
"        ||            \n" +
"       _||_       *    \n" +  
"=====\n" +
"       \\ O/  -_ YAAA     \n" +
"        \\/           *\n" +
"        ||            \n" +
"       _||_       *      \n" +
"=====\n" +
"       \\ O/  -_ YAAAaaaHHH!   \n" +  
"        \\/           *\n" +
"        ||            \n" +
"       _||_       *  \n" +
"=====\n" +
"       \\ O/  -_ YAAAaaaHHH! *    \n" +
"        \\/           *\n" +
"        ||            \n" +
"       _||_\n" +
"=====\n" +
"       \\ O/  -_ YAAAaaaHHH! *    \n" +
"        \\/           *\n" +
"        ||            \n" +
"       _||_            \n" +
"=====\n" +
"       \\ O/  -_ YAAAaaaHHH! *    \n" +
"        \\/           *\n" +
"        ||            \n" +
"       _||_            \n" +
"=====\n" +
"       \\ O/  -_ YAAAaaaHHH! *   \n" + 
"        \\/           *\n" +
"        ||            \n" +
"       _||_    \n" +
"=====\n" +
".`,.:.` * ' .`,.:.` * ' .`,.:.` * ' \n" +
" .~..`,.#.`  ' `  ALI  .~..`,.:.` * '  \n" +
".%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M \n" +
"=====\n" +
" .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' \n" +
".~..`,.#.`  ' `  ALI  .~..`,.:.` * '  \n" +
" .%..`,.:.` * ' ` ` ~~~  .*..`,.'.`M.M \n" +
"=====\n" +
".`,.:.` * ' .`,.:.` * ' .`,.:.` * ' \n" +
" .~..`,.#.`  ' `  ALI  .~..`,.:.` * '  \n" +
".%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M \n" +
"=====\n" +
".`,.:.` * ' .`,.:.` * ' .`,.:.` * ' \n" +
" .~..`,.#.`  ' `  ALI  .~..`,.:.` * '  \n" +
".%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M \n" +
"=====\n" +
" .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' \n" +
".~..`,.#.`  ' `  ALI  .~..`,.:.` * '  \n" +
" .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M \n" +
"=====\n" +
".`,.:.` * ' .`,.:.` * ' .`,.:.` * ' \n" +
" .~..`,.#.`  ' `  ALI  .~..`,.:.` * '  \n" +
".%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M \n" +
"=====\n" +
" .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' \n" +
".~..`,.#.`  ' `  BOOM -BA-YAY  .~..`,.:.` * '  \n" +
" .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M \n" +
"=====\n" +
".`,.:.` * ' .`,.:.` * ' .`,.:.` * ' \n" +
" .~..`,.#.`  ' `  BOOM -BA-YAY  .~..`,.:.` * '  \n" +
".%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M \n" +
"=====\n" +
" .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' \n" +
".~..`,.#.`  ' `  BOOM -BA-YAY  .~..`,.:.` * '  \n" +
" .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M \n" +
"=====\n" +
" .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' \n" +
".~..`,.#.`  ' `  BOOM -BA-YAY  .~..`,.:.` * '  \n" +
" .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M\n" +
"=====\n" +
".`,.:.` * ' .`,.:.` * ' .`,.:.` * ' \n" +
" .~..`,.#.`  ' `  BOOM -BA-YAY  .~..`,.:.` * ' \n" + 
".%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M \n" +
"=====\n" +
" .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' \n" +
".~..`,.#.`  ' `  BOOM -BA-YAY  .~..`,.:.` * '  \n" +
" .%..`,.:.` * ' ` ` ~~~  .*..`,.'.`M.M \n" +
"=====\n" +
".`,.:.` * ' .`,.:.` * ' .`,.:.` * ' \n" +
" .~..`,.#.`  ' `  ALI  .~..`,.:.` * '  \n" +
".%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M\n" +
"=====\n" +
" .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' \n" +
".~..`,.#.`  ' `  ALI  .~..`,.:.` * '  \n" +
" .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M \n" +
"=====\n" +
".`,.:.` * ' .`,.:.` * ' .`,.:.` * ' \n" +
" .~..`,.#.`  ' `  ALI  .~..`,.:.` * '  \n" +
".%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M \n" +
"=====\n" +
".`,.:.` * ' .`,.:.` * ' .`,.:.` * ' \n" +
" .~..`,.#.`  ' `  ALI  .~..`,.:.` * '  \n" +
".%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M \n" +
"=====\n" +
" .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' \n" +
".~..`,.#.`  ' `  ALI  .~..`,.:.` * '  \n" +
" .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M \n" +
"=====\n" +
".`,.:.` * ' .`,.:.` * ' .`,.:.` * ' \n" +
" .~..`,.#.`  ' `  ALI  .~..`,.:.` * '  \n" +
".%..`,.:.` * ' ` ` ~~~  .*..`,.'.` * ' \n" +
"=====\n" +
" .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' \n" +
".~..`,.#.`  ' `  BOOM -BA-YAY  .~..`,.:.` * '  \n" +
" .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M \n" +
"=====\n" +
".`,.:.` * ' .`,.:.` * ' .`,.:.` * ' \n" +
" .~..`,.#.`  ' `  BOOM -BA-YAY  .~..`,.:.` * ' \n" + 
".%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M\n" +
"=====\n" +
" .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' \n" +
".~..`,.#.`  ' `  BOOM -BA-YAY  .~..`,.:.` * '  \n" +
" .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M \n" +
" =====\n" +
" .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' \n" +
".~..`,.#.`  ' `  BOOM -BA-YAY  .~..`,.:.` * ' \n" + 
" .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M\n" +
"=====\n" +
".`,.:.` * ' .`,.:.` * ' .`,.:.` * ' \n" +
" .~..`,.#.`  ' `  BOOM -BA-YAY  .~..`,.:.` * '\n" + 
".%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M \n" +
"=====\n" +
" .`,.:.` * ' .`,.:.` * ' .`,.:.` * ' \n" +
".~..`,.#.`  ' `  BOOM -BA-YAY  .~..`,.:.` * ' \n" + 
" .%..`,.:.` * ' ` ` ~~~  .*..`,.'.` M.M"