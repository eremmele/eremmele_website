$j(document).ready(function () {
    //Disable cut copy paste
    $j('body').bind('cut copy paste', function (e) {
        e.preventDefault();
    });
   
    //Disable mouse right click
    $j("body").on("contextmenu",function(e){
        return false;
    });
});