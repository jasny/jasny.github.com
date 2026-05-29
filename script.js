/*
 * Feel free to use this code :D. Released under CC0.
 * Also http://youmightnotneedjquery.com
 */

const canvas  = document.getElementById('canvas');
const about   = document.getElementById('about');
const siteTop = document.getElementById('siteTop');
const siteBtm = document.getElementById('siteBottom');

/**
 * Show or hide content based on hash change
 */
function showHideContent(url) {
  let delay = 0;

  if (about.classList.contains('in')) { hideAbout(); delay = 1000; }
  else if (canvas.classList.contains('open')) { closeCanvas('projects'); delay = 1000; }

  if (url.match(/#$/)) return;

  setTimeout(function() {
    if (url.match(/#about$/)) showAbout();
    if (url.match(/#projects$/)) openCanvas('projects');
  }, delay);
}

/**
 * Show about panel
 */
function showAbout() {
  about.classList.remove('hidden');
  canvas.classList.add('shrunk');
  setTimeout(() => about.classList.add('in'), 50);
}

/**
 * Hide about panel
 */
function hideAbout() {
  canvas.classList.remove('shrunk');
  about.classList.remove('in');
  setTimeout(function() {
    if (!about.classList.contains('in')) about.classList.add('hidden');
  }, 1000);
}

/**
 * Open the canvas effect
 */
function openCanvas(id) {
  if (canvas.classList.contains('open')) return;

  const element = document.getElementById(id);
  element.classList.remove('hidden');
  canvas.classList.add('open', 'split');

  setTimeout(() => { siteTop.classList.add('shadow'); siteBtm.classList.add('shadow'); }, 40);
  setTimeout(() => element.classList.add('in'), 1000);
}

/**
 * Close the canvas effect
 */
function closeCanvas(id) {
  if (!canvas.classList.contains('open')) return;

  const element = document.getElementById(id);
  canvas.classList.remove('open');
  element.classList.remove('in');

  setTimeout(function() {
    if (canvas.classList.contains('open')) return;
    siteTop.classList.remove('shadow');
    siteBtm.classList.remove('shadow');
  }, 960);

  setTimeout(function() {
    if (canvas.classList.contains('open')) return;
    canvas.classList.remove('split');
    element.classList.add('hidden');
  }, 1000);
}

/**
 * Initialize
 */
(function() {
  // Go back to initial state when clicking on the canvas
  document.querySelectorAll('#canvas > *').forEach(function(el) {
    el.addEventListener('click', function(event) {
      if (window.location.href.match(/#.+$/) && event.target.tagName !== 'A') window.location = '#';
    });
  });

  // Add handler when URL # changes
  window.addEventListener('hashchange', (event) => showHideContent(event.newURL));

  // Show content based on current # on load
  window.addEventListener('load', function() {
    if (window.location.href.match(/#.+$/)) setTimeout(() => showHideContent(window.location.href), 500);
  });
})();

