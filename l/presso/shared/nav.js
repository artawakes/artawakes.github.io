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

  /* ── First-slide hint + pulse stop on first navigation ── */
  function initNavHint() {
    // Use an embedded hint if the deck provides one (e.g. TDS cover),
    // otherwise inject a fixed floating one.
    var embedded = document.getElementById('tds-nav-hint');
    var hint;
    if (embedded) {
      hint = embedded;
    } else {
      hint = document.createElement('div');
      hint.className = 'nav-hint';
      hint.innerHTML =
        '<span class="nav-hint-key">←</span>' +
        '<span class="nav-hint-key">→</span>' +
        '<span>navigate</span>';
      document.body.appendChild(hint);
    }

    // Stop pulse + hide hint on first navigation
    function onNavigated() {
      document.body.classList.add('has-navigated');
      hint.style.opacity = '0';
      hint.style.pointerEvents = 'none';
      // Remove after transition
      setTimeout(function () { if (!embedded) hint.remove(); }, 700);
      prevBtn && prevBtn.removeEventListener('click', onNavigated);
      nextBtn && nextBtn.removeEventListener('click', onNavigated);
    }

    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
    if (prevBtn) prevBtn.addEventListener('click', onNavigated);
    if (nextBtn) nextBtn.addEventListener('click', onNavigated);

    // Also stop on keyboard navigation (decks support arrow keys)
    document.addEventListener('keydown', function onKey(e) {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        onNavigated();
        document.removeEventListener('keydown', onKey);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavHint);
  } else {
    initNavHint();
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
