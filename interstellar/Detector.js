/**
 * @author alteredq / http://alteredqualia.com/
 * @author mr.doob / http://mrdoob.com/
 */
if (!sessionStorage.getItem('firstTime'))
  sessionStorage.setItem('firstTime', true);

var Detector = {

	canvas: !! window.CanvasRenderingContext2D,
	webgl: ( function () { try { var canvas = document.createElement( 'canvas' ); return !! window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) ); } catch( e ) { return false; } } )(),
	workers: !! window.Worker,
	fileapi: window.File && window.FileReader && window.FileList && window.Blob,

	getWebGLErrorMessage: function () {

		var element = document.createElement( 'div' );
		element.id = 'webgl-error-message';
		element.style.fontFamily = 'monospace';
		element.style.fontSize = '13px';
		element.style.fontWeight = 'normal';
		element.style.textAlign = 'center';
		element.style.background = '#fff';
		element.style.color = '#000';
		element.style.padding = '1.5em';
		element.style.width = '400px';
		element.style.margin = '5em auto 0';

		if (!this.webgl) {
			var webGlMessage = window.WebGLRenderingContext ? [
				'Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />',
				'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'
			].join( '\n' ) : [
				'Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>',
				'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'
			].join( '\n' );

			element.innerHTML = html_sanitize(webGlMessage);

		}

		return element;

	},

	addGetWebGLMessage: function ( parameters ) {

		var parent, id, element;

		parameters = parameters || {};

		parent = parameters.parent !== undefined ? parameters.parent : document.body;
		id = parameters.id !== undefined ? parameters.id : 'oldie';

		element = Detector.getWebGLErrorMessage();
		element.id = id;

		parent.appendChild( element );

	},

	// if user does not have needed web tech, show message
  nonChromeRedirect: function () {
    if(sessionStorage.getItem('firstTime') == 'true') {
      // desktop and not chrome
      if(!Modernizr.touch && !window.chrome && (!supports3d() || !this.webgl) ) {
        window.location.pathname = "/get-chrome";
      } else if( Modernizr.touch && // mobile
      	!Modernizr.deviceorientation && !Modernizr.devicemotion && 
      	!supports3d() ) { 
        window.location.pathname = "/get-chrome";      	
      }
    } else if (!Modernizr.sessionstorage) {
      window.location.pathname = "/get-chrome";   
    }
  }

  
};

document.addEventListener('readystatechange', function() {
  if (document.readyState === "complete") {
    var chromeBtn = document.getElementById('getChromeButton');
    var dlChromeBtn = document.getElementById('dlChromeButton');

    if (chromeBtn) {
      chromeBtn.addEventListener('mousedown', onGetChromeMousedown, false);
      dlChromeBtn.addEventListener('mousedown', onDLChromeMousedown, false);
    }
  }
});

function onGetChromeMousedown(e) {
  e.preventDefault();

  sessionStorage.setItem('firstTime', false);

  // track click
  intTrack.event( 'roadblock', 'continue_to_site', 'roadblock');
  setTimeout(function() {
    window.location.pathname = "/";
  },300)

};

function onDLChromeMousedown(e) {
  // track click
  intTrack.event( 'roadblock', 'get_chrome', 'roadblock');
};

/* This was adpated from Daniel Ryan's gist @ https://gist.github.com/dryan/738720 */
/* Modernizr csstransfroms3D returns a false when it is supported, so we can't rely on that */
function supports3d() {
  // Modernizr returns false negative for csstransforms3d in Chrome, 
  // if false is returned try this below script
  if(Modernizr.csstransforms3d)
    return true;

  // borrowed from modernizr
  var div = document.createElement('div'),
      ret = false,
      properties = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective'];
  for (var i = properties.length - 1; i >= 0; i--){
      ret = ret ? ret : div.style[properties[i]] != undefined;
  };
      
  /* Chrome 24 running on Windows XP was returning negative at this stage, and yet was still applying
     the 3d transformations to the page.
     To combat that, we create a div and apply a transform on the fly, and if the value is obtainable,
     we know it's previous response was wrong. */
  if (ret){
      var st = document.createElement('style');
      st.textContent = '#test3d { -webkit-transform: translate3d(0, -48px, 0); }';
      document.getElementsByTagName('head')[0].appendChild(st);
      div.id = 'test3d';
      document.body.appendChild(div);
          
      function matrixToArray(matrix) {
          return matrix.substr(7, matrix.length - 8).split(', ');
      }

      var matrix = matrixToArray($("#test3d").css("webkitTransform"));
      var xOffset = matrix[5];
      
      if(xOffset != null && xOffset != '') {
          ret = true;
      }

      st.parentNode.removeChild(st);
      div.parentNode.removeChild(div);
  }
  return ret;
}
