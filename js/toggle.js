/*$(document).ready(
    function() {
        $j("#about").on('click mouseover', function() {
            $j("#aboutinfo").toggle();
            $j("#processinfo").hide();
        });
        $j("#process").on('click mouseover', function() {
            $j("#processinfo").toggle();
            $j("#aboutinfo").hide();
        });
    });*/

$j(document).ready(function(){
  var clicked=false;
    
  //start hidden
  $j('#aboutinfo').hide();
  $j('#processinfo').hide();
    
    //about click
    $j('#about').on('click', function() {
        clicked = !clicked;
        $j('#processinfo').hide();//hide process
    });
    //process click
    $j('#process').on('click', function() {
        clicked = !clicked;
        $j('#aboutinfo').hide();//hide about
    });
    
    //about hover
    $j('#about').hover(
      function() {
        $j('#aboutinfo').show()}
      ,function() {
          if (!clicked) {
             $j('#aboutinfo').hide()
          }
      }
    ); 
    //process hover
    $j('#process').hover(
      function() {
        $j('#processinfo').show()}
      ,function() {
          if (!clicked) {
             $j('#processinfo').hide()
          }
      }
    ); 
});
