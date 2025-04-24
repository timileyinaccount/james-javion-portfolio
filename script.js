const roles = ["Social Media Manager", "Visual Designer", "Creative Strategist"];
let i = 0;
let j = 0;
let currentRole = '';
let isDeleting = false;
const typedText = document.getElementById('typed-text');

function type() {
  if (i < roles.length) {
    if (!isDeleting && j <= roles[i].length) {
      currentRole = roles[i].substring(0, j++);
    }
    if (isDeleting && j >= 0) {
      currentRole = roles[i].substring(0, j--);
    }
    typedText.textContent = currentRole;

    if (j === roles[i].length && !isDeleting) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (j === 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % roles.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
  }
}
type();