(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-19995902-25', 'auto');
ga('create', 'UA-31835-209', 'auto', {'name': 'paramount'});  // New tracker.
ga('require', 'displayfeatures');
ga('paramount.require', 'displayfeatures');

/* handler for GA page and event tracking across mult accounts */
var intTrack = {
  page : function(page, title) {
    ga('send', 'pageview', {
      'page': page,
      'title': title
    });
    ga('paramount.send', 'pageview', {
      'page': page,
      'title': title
    });
  },
  event : function(cat, action, label) {
    ga('send', 'event', cat, action, label);
    ga('paramount.send', 'event', cat, action, label);
  }
}