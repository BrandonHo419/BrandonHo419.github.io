const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear().toString();

// A fresh iframe per session: removal stops the runtime and its audio.
const farmDemo = document.querySelector('#grid-based-farming-game-demo');
if (farmDemo) {
  const viewport = farmDemo.querySelector('.farm-demo-viewport');
  const template = farmDemo.querySelector('template');
  const summary = farmDemo.querySelector('summary');
  const label = farmDemo.querySelector('.farm-demo-label');
  const close = farmDemo.querySelector('.farm-close');
  const syncGame = () => {
    if (farmDemo.open && !viewport.querySelector('iframe')) {
      const frame = template.content.querySelector('iframe').cloneNode(true);
      frame.addEventListener('load', () => {
        // raylib consumes Tab. Keep a keyboard route out of the same-origin game.
        frame.contentWindow.addEventListener('keydown', event => {
          if (event.key !== 'Tab') return;
          event.preventDefault();
          event.stopImmediatePropagation();
          (event.shiftKey ? summary : close).focus();
        }, true);
      });
      frame.src = frame.dataset.src;
      viewport.append(frame);
    } else if (!farmDemo.open) {
      const focusWasInside = viewport.contains(document.activeElement) || document.activeElement === close;
      viewport.replaceChildren();
      if (focusWasInside) summary.focus();
    }
    close.hidden = !farmDemo.open;
    label.textContent = farmDemo.open ? 'Close to unload and reset the farm' : 'Open to start the browser demo';
  };
  close.addEventListener('click', () => {
    farmDemo.open = false;
    syncGame();
    summary.focus();
  });
  farmDemo.addEventListener('toggle', syncGame);
  syncGame();
}
