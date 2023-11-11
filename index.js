async function copyToClipboard({ target }) {
  if (target.getAttribute('aria-label') === 'Comment thread') {
    // Find the first comment and paste to clipboard
    const comment = target.querySelector('[data-text="true"]').innerText;
    try {
      await navigator.clipboard.writeText(comment);
    } catch (e) {
      console.error('Unable to copy to clipboard:', e);
    }
  }
}

document.addEventListener('focusin', copyToClipboard);
