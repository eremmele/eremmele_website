//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$j(window).load(function() {
		// Animate loader off screen
		$j("body").addClass("loaded");;
	});

//$j(document).ready(function() {
	
//	setTimeout(function(){
//		$j('body').addClass('loaded');
		
//	}, 100); //3000
	
//});

;(function(){
  function id(v){return document.getElementById(v); }
  function loadbar() {
    var ovrl = id("preloader-stats"),
        prog = id("progress"),
        stat = id("progstat"),
        img = document.images,
        c = 0;
        tot = img.length;

    function imgLoaded(){
      c += 1;
      var perc = ((100/tot*c) << 0) +"%";
      prog.style.width = perc;
      stat.innerHTML = perc; //stat.innerHTML = "Loading "+ perc;
      if(c===tot) return doneLoading();
    }
    function doneLoading(){
      ovrl.style.opacity = 0;
      setTimeout(function(){ 
        ovrl.style.display = "none";
      }, 1200);
    }
    for(var i=0; i<tot; i++) {
      var tImg     = new Image();
      tImg.onload  = imgLoaded;
      tImg.onerror = imgLoaded;
      tImg.src     = img[i].src;
    }    
  }
  document.addEventListener('DOMContentLoaded', loadbar, false);
}());