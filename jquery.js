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


/**
 * Check a href for an anchor. If exists, and in document, scroll to it.
 * If href argument ommited, assumes context (this) is HTML Element,
 * which will be the case when invoked by jQuery after an event
 */

    var $content = $('#two');
    $('.seework').each(function(){
        var $this=$(this);
            scrollTo = 0;
        $this.on('click', function(){
            var $target = $('#'+$this.data('scrollid'));
            scrollTo = scrollTo + $target.position().top + $target.scrollTop();
            $content.animate({scrollTop: scrollTo}, 1000);
        })
    })