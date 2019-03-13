/*
 * Feel free to use this code :D (http://www.jasny.net/mit)
 * Also http://youmightnotneedjquery.com
 */


/**
 * Show or hide content based on hash change
 */
function showHideContent(url) {
  var wait = true;

  // Hide content
  if (document.getElementById('about').classList.contains('in')) hideAbout();
  else if (document.getElementById('canvas').classList.contains('open')) closeCanvas('projects');
  else wait = false;
  
  if (wait) {
    if (!url.match(/#$/)) setTimeout(function() { showHideContent(url); }, 1000);
    return;
  }
  
  // Show content
  if (url.match(/#about$/)) showAbout();
  if (url.match(/#projects$/)) openCanvas('projects');
}

/**
 * Show about panel
 */
function showAbout() {
  document.getElementById('about').classList.remove('hidden');
  document.getElementById('canvas').classList.add('shrunk');
  
  setTimeout(function() {
    document.getElementById('about').classList.add('in');
  }, 50);
}

/**
 * Hide about panel
 */
function hideAbout() {
  document.getElementById('canvas').classList.remove('shrunk');
  document.getElementById('about').classList.remove('in');
  
  setTimeout(function() {
    if (document.getElementById('about').classList.contains('in')) return;
    document.getElementById('about').classList.add('hidden');
  }, 1000);
}

/**
 * Open the canvas effect
 *
 * @param string id  Element id to show
 */
function openCanvas(id) {
  var canvas = document.getElementById('canvas');
  var element = document.getElementById(id);

  if (canvas.classList.contains('open')) return;

  element.classList.remove('hidden');

  canvas.classList.add('open');
  canvas.classList.add('split');

  setTimeout(function() {
    document.getElementById('siteTop').classList.add('shadow');
    document.getElementById('siteBottom').classList.add('shadow');
  }, 40);

  setTimeout(function() {
    element.classList.add('in');
  }, 1000);
}

/**
 * Close the canvas effect
 */
function closeCanvas(id) {
  var canvas = document.getElementById('canvas');
  var element = document.getElementById(id);

  if (!canvas.classList.contains('open')) return;

  canvas.classList.remove('open');
  element.classList.remove('in');

  setTimeout(function() {
    if (canvas.classList.contains('open')) return;
    document.getElementById('siteTop').classList.remove('shadow');
    document.getElementById('siteBottom').classList.remove('shadow');
  }, 960);

  setTimeout(function() {
    if (canvas.classList.contains('open')) return;
    canvas.classList.remove('split');
    element.classList.add('hidden');
  }, 1000);
}

/**
 * Slide the canvas effect
 */
function slideCanvas(id) {
  var canvas = document.getElementById('canvas');

  if (canvas.classList.contains('slid')) return;
  
  document.getElementById(id).classList.remove('hidden');

  canvas.classList.add('moved'); 
  canvas.classList.add('slid');
}

/**
 * Slide the canvas back effect
 */
function unslideCanvas(id) {
  document.getElementById('canvas').classList.remove('slid');
  
  setTimeout(function() {
    if (canvas.classList.contains('slid')) return;
    document.getElementById('canvas').classList.remove('moved');
    document.getElementById(id).classList.add('hidden');
  }, 1000);
}

/**
 * Initialize
 */
(function() {
  // Go back to initial state when clicking on the canvas
  Array.prototype.forEach.call(document.querySelectorAll('#canvas > *'), function(el) {
    el.addEventListener('click', function(event) {
      if (window.location.href.match(/#.+$/) && event.target.tagName !== 'A') window.location = '#';
    });
  });
  
  // Add handler when URL # changes
  window.addEventListener('hashchange', function(event) {
    showHideContent(event.newURL);
  }, false);
  
  window.addEventListener('load', function() {
    // Show content based on current #
    if (window.location.href.match(/#.+$/)) setTimeout(function() {
       showHideContent(window.location.href);
    }, 500);
  });
})();

