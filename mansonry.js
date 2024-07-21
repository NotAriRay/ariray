import { inject } from "@vercel/analytics"

document.addEventListener("DOMContentLoaded", function() {
  var elem = document.querySelector('.grid');
  var msnry = new Masonry(elem, {
    itemSelector: '.border-container',
    columnWidth: '.border-container',
    percentPosition: true
  });
});
