var path = '.',
    imgs = ['bg-01.jpg','bg-02.jpg','bg-03.jpg','bg-04.jpg','bg-05.jpg','bg-06.jpg'],
    i = Math.floor(Math.random()*imgs.length);
$('.rotator').append("<img src='"+path+imgs[i]+"'>").hide().fadeIn(2000);