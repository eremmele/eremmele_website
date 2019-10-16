var title = "";
$j(document).mousemove(function (e) {    
    
    $j(".image_container").each(function(i, v){
    
        var container = v;
        var img = $j(this).children()[0];
        
        if((e.pageY < $j(img).offset().top || 
           e.pageY > $j(img).offset().top + $j(img).height() ||
           e.pageX < $j(img).offset().left ||
           e.pageX > $j(img).offset().left + $j(img).width()) ){
           
            if( $j(container).children().length == 2){
               $j(container).children()[0].title = $j($j(container).children()[1]).html();
               container.removeChild($j(container).children()[1]);
            }
    
        }
        else{  
            if($j(container).children().length == 1){
                console.log("printing title");
                title = $j("<div class='img_title'>" + $j(container).children()[0].title + "</div>");
                $j(container).children()[0].title = "";
                $j(container).append(title);
            }
            title.offset({
                top: (e.pageY ? e.pageY : e.clientX),
                left: (e.pageX ? e.pageX : e.clientY)
            });
        }
    });
                 
});