$(function() {
    $('#bookmarklet').attr('href', "javascript:void((function(){var d=document;d.write('<!DOCTYPE html><html><head><meta charset=\"UTF-8\"><title>'+d.title+' - Responsive test</title><link rel=\"stylesheet\" href=\"../../responsive.victorcoulon.fr/assets/css/app.css\"><script src=\"../../responsive.victorcoulon.fr/assets/js/app.min.js\"></script></head><body><header><div class=\"close\"><a href=\"#\">×</a></div><div id=\"size\"></div><div class=\"keyboard\"><a href=\"#\">I</a></div><div class=\"cssrefresh\"><a href=\"#\">I</a></div><div id=\"devices\"><a href=\"#\" class=\"tablet-portrait\"><span>Tablet Portrait</span></a><a href=\"#\" class=\"tablet-landscape\"><span>Tablet Landscape</span></a><a href=\"#\" class=\"smartphone-landscape\"><span>iPhone Landscape</span></a><a href=\"#\" class=\"smartphone-portrait\"><span>iPhone Portrait</span></a><a href=\"#\" class=\"auto active\"><span>Auto</span></a></div></header><section><div id=\"wrapper\"><iframe src=\"'+d.URL+'\" onLoad=\"resbook.changeUrl(this.contentWindow.location,this.contentDocument.title);\"></iframe><span class=\"keyboard-bg\"></span></div></section></body></html>')})());")
})
