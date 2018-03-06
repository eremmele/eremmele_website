$j.fn.moveIt = function(){
  var $jwindow = $j(window);
  var instances = [];

  $j(this).each(function(){
    instances.push(new moveItItem($j(this)));
  });

  window.onscroll = function(){
    var scrollTop = $jwindow.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }
}

var moveItItem = function(el){
  this.el = $j(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  var pos = scrollTop / this.speed;
  this.el.css('transform', 'translateY(' + -pos + 'px)');
};

$j(function(){
  $j('[data-scroll-speed]').moveIt();
});