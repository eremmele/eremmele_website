$(document).ready(function(){
var images=['/rotator/bg-01.jpg',
            '/rotator/bg-02.jpg',
            '/rotator/bg-03.jpg',
            '/rotator/bg-04.jpg',
            '/rotator/bg-05.jpg',
            '/rotator/bg-06.jpg',];

var randomNumber = Math.floor(Math.random() * images.length);
var bgImg = 'url(' + images[randomNumber] + ')';

$('#rotator').css({'background':bgImg, 'background-size':'cover', });

});