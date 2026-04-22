// Minimal Lucide shim — only icons actually used on this site
(function(global){
  var h = {xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"};
  var icons = {
    ArrowRight:["svg",h,[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]]],
    Check:["svg",h,[["path",{d:"M20 6 9 17l-5-5"}]]],
    ExternalLink:["svg",h,[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]]],
    MessageCircle:["svg",h,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}]]],
    Phone:["svg",h,[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.09 6.09l.94-.94a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]],
    Plus:["svg",h,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]],
    Square:["svg",h,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]]
  };
  function createElement(icon){
    var ns = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(ns, "svg");
    var attrs = icon[1] || {};
    for(var k in attrs) svg.setAttribute(k, attrs[k]);
    var children = icon[2] || [];
    children.forEach(function(c){
      var el = document.createElementNS(ns, c[0]);
      for(var k in c[1]) el.setAttribute(k, c[1][k]);
      svg.appendChild(el);
    });
    return svg;
  }
  global.lucide = {icons: icons, createElement: createElement};
})(window);
