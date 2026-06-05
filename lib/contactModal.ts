export function openContactModal() {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('civorax:open-contact-modal'));
}

export function closeContactModal() {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('civorax:close-contact-modal'));
}
