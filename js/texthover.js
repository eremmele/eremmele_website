var title = "";
$(document).mousemove(function (e) {    
    
    $(".image_container").each(function(i, v){
    
        var container = v;
        var img = $(this).children()[0];
        
        if((e.pageY < $(img).offset().top || 
           e.pageY > $(img).offset().top + $(img).height() ||
           e.pageX < $(img).offset().left ||
           e.pageX > $(img).offset().left + $(img).width()) ){
           
            if( $(container).children().length == 2){
               $(container).children()[0].title = $($(container).children()[1]).html();
               container.removeChild($(container).children()[1]);
            }
    
        }
        else{  
            if($(container).children().length == 1){
                console.log("printing title");
                title = $("<div class='img_title'>" + $(container).children()[0].title + "</div>");
                $(container).children()[0].title = "";
                $(container).append(title);
            }
            title.offset({
                top: (e.pageY ? e.pageY : e.clientX),
                left: (e.pageX ? e.pageX : e.clientY)
            });
        }
    });
                 
});