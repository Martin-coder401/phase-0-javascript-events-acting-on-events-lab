// index.js

// Grab the dodger element
const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  const left = parseInt(dodger.style.left.replace('px',''), 10);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  const left = parseInt(dodger.style.left.replace('px',''), 10);
  const rightEdge = left + 40;        // dodger is 40px wide
  if (rightEdge < 400) {             // game field is 400px wide
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft')  moveDodgerLeft();
  if (e.key === 'ArrowRight') moveDodgerRight();
});
// Your code here
