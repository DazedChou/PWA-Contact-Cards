import { Workbox } from 'workbox-window';
import '../css/styles.css';

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  // Register workbox service worker
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
} else {
  console.error('Service workers are not supported in this browser.');
}
