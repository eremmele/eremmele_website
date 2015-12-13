$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    $('.fade').css({
        'opacity': ((height - scrollTop) / height)
    });
});

//$(document).ready(function(){
//    $(".btn1").click(function(){
//        $("#rotator").slideUp();
//    });
//    $(".btn2").click(function(){
//       $("#rotator").slideDown();
//    });
//});

$(document).ready(function(){
		$('#changeText').click(function(){
			$('#content').text('#newcontent');
		});
	});

//////////////////////////////

//GOOGLE ANALYTICS//

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-49225036-2', 'auto');
  ga('send', 'pageview');
