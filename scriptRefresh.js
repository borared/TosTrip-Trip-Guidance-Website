window.onload = function() {
  // 1. Clear the hash fragment from the URL immediately (optional, but good practice)
  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname + window.location.search);
  }
  
  // 2. Force the page to scroll to the top
  window.scrollTo(0, 0); 
};