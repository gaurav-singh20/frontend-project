// header.js
window.addEventListener('DOMContentLoaded', function() {
  fetch('header.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('header').innerHTML = data;
      });
});