function scrollToAnchor(options) {
  var normalizedHash = window.decodeURI(options.target);
  var targetID = "user-content-" + normalizedHash.slice(1);
  var target = document.getElementById(targetID);
  var realTarget = target.parentNode;
  var top = realTarget.getBoundingClientRect().top;

  window.scrollTo({
    top,
    behavior: options.isSmooth ? "smooth" : "auto"
  });
}

if (window.location.hash)
  window.setTimeout(function() {
    scrollToAnchor({
      target: window.location.hash
    });
  }, 750);

var filter = Array.prototype.filter;
var links = document.querySelectorAll("a");
var hyperlinks = filter.call(links, function(link) {
  return link.hash;
});

hyperlinks.forEach(function(hyperlink) {
  hyperlink.addEventListener("click", function() {
    scrollToAnchor({
      target: hyperlink.hash,
      isSmooth: true
    });
  });
});
