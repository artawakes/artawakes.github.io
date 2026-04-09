(function () {
  'use strict';

  var ANIM     = 260; // nav width animation (ms) — matches CSS transition
  var FADE_OUT = 220; // page fade-out after nav finishes (ms)
  var FADE_IN  = 380; // page fade-in on load (ms)

  /* ── Fade in on every page load ── */
  document.documentElement.style.opacity = '0';

  function fadeIn() {
    document.documentElement.style.transition = 'opacity ' + FADE_IN + 'ms cubic-bezier(0.4, 0, 0.2, 1)';
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        document.documentElement.style.opacity = '1';
      });
    });
  }

  // Script runs at end of <body> — DOM is already ready, DOMContentLoaded has fired
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fadeIn);
  } else {
    fadeIn();
  }

  /* ── Project pill click: animate then navigate ── */
  document.querySelectorAll('.nav-project-pill').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var href = btn.dataset.href;
      if (!href) return;

      var expanded = document.querySelector('.nav-project[data-state="expanded"]');
      var target   = btn.closest('.nav-project');
      if (!expanded || !target || expanded === target) return;

      // Measure natural pixel widths before touching anything
      var bigW   = expanded.getBoundingClientRect().width;
      var smallW = target.getBoundingClientRect().width;

      // Pin both containers to their current widths
      expanded.style.width = bigW + 'px';
      target.style.width   = smallW + 'px';

      // RAF 1: browser registers the pinned widths
      requestAnimationFrame(function () {
        // Swap content (instant — display change)
        expanded.dataset.state = 'collapsing';
        target.dataset.state   = 'expanding';

        // RAF 2: browser computes new layout; now trigger the width transition
        requestAnimationFrame(function () {
          expanded.style.width = smallW + 'px';
          target.style.width   = bigW + 'px';
        });
      });

      // Wait for nav to finish, then fade the whole page out, then navigate
      setTimeout(function () {
        document.documentElement.style.transition = 'opacity ' + FADE_OUT + 'ms ease';
        document.documentElement.style.opacity = '0';
      }, ANIM + 20);

      setTimeout(function () {
        window.location.href = href;
      }, ANIM + 20 + FADE_OUT + 20);
    });
  });
}());
