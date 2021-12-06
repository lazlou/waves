/* MarqueeTitle v4.0 | MIT License | git.io/vQZbs */
const marquee = function(c=undefined, m=300, a="-") {
  if (c === undefined ){
    c = document.title;
  }
  var title = (c || document.title) + " " + (a || "-") + " ";
  setInterval(function() {
    title = title.substring(1) + title.charAt(0);
    document.title = title;
  }, m || 300);
}


/* Tab Text -  "This webpage has a scrolling tab title", */
/* Title Repeat Separator  "-", */
/* Scroll Speed (in milleseconds)  300 */