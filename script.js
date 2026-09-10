/*
 * Feel free to use this code :D. Released under CC0.
 * Also http://youmightnotneedjquery.com
 */

const canvas  = document.getElementById('canvas');
const about   = document.getElementById('about');
const siteTop = document.getElementById('siteTop');
const siteBtm = document.getElementById('siteBottom');
const projects = document.getElementById('projects');

/**
 * Run a callback after an element has finished sliding.
 */
function afterTransition(element, callback) {
  element.addEventListener('transitionend', function(event) {
    if (event.target === element && event.propertyName === 'transform') {
      callback();
    }
  }, {once: true});
}

/**
 * Show or hide content based on hash change.
 */
function showHideContent(url) {
  const show = {about: showAbout, projects: showProjects}[url.split('#').pop()];

  if (about.classList.contains('in')) return hideAbout(show);
  if (canvas.classList.contains('open')) return hideProjects(show);
  if (show) show();
}

/**
 * Show about panel
 */
function showAbout() {
  about.classList.remove('hidden');
  canvas.classList.add('shrunk');
  void about.offsetWidth;
  about.classList.add('in');
}

/**
 * Hide the about panel, then optionally show another panel.
 */
function hideAbout(next = () => {}) {
  afterTransition(about, function() {
    about.classList.add('hidden');
    next();
  });

  canvas.classList.remove('shrunk');
  about.classList.remove('in');
}

/**
 * Show the projects panel.
 */
function showProjects() {
  afterTransition(siteTop, () => projects.classList.add('in'));
  projects.classList.remove('hidden');
  canvas.classList.add('open', 'split');

  window.requestAnimationFrame(() => {
    siteTop.classList.add('shadow');
    siteBtm.classList.add('shadow');
  });
}

/**
 * Hide the projects panel, then optionally show another panel.
 */
function hideProjects(next = () => {}) {
  afterTransition(siteTop, function() {
    siteTop.classList.remove('shadow');
    siteBtm.classList.remove('shadow');
    canvas.classList.remove('split');
    projects.classList.add('hidden');
    next();
  });

  canvas.classList.remove('open');
  projects.classList.remove('in');
}

/**
 * Initialize
 */
(function() {
  // Go back to initial state when clicking on the canvas
  document.querySelectorAll('#canvas > *').forEach(function(el) {
    el.addEventListener('click', function(event) {
      if (window.location.href.match(/#.+$/) && !event.target.closest('a')) window.location = '#';
    });
  });

  // Add handler when URL # changes
  window.addEventListener('hashchange', (event) => showHideContent(event.newURL));

  // Show content based on current # on load
  window.addEventListener('load', function() {
    showHideContent(window.location.href);
  });
})();
