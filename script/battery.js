// var whrereim;
var Textid = document.getElementById("hey");
 
var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 500, 
    // get page height from video duration
    setHeight = document.getElementById("set-height"), 
    // select video element         
    vid = document.getElementById('v0'); 

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function() {
  setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";

});

// Use requestAnimationFrame for smooth playback
function scrollPlay(){  
  var frameNumber  = window.pageYOffset/playbackConst;
  vid.currentTime  = frameNumber;

  console.log("free",frameNumber);
  

  

  if(frameNumber>1){
    
    console.log("helo")
    document.getElementById("animateddiv").style.animationPlayState="Running";
    // document.getElementById("animateddiv").style.visibility="hidden";
  }
  

  window.requestAnimationFrame(scrollPlay);
}


window.requestAnimationFrame(scrollPlay);