const ul = document.getElementById('show');
const open = document.getElementById('open');
const links = document.querySelectorAll('.menu-link');

if (ul.classList.contains('show')) {
  ul.classList.remove('show');
}

links.forEach((link) => {
  link.addEventListener('click', () => {
    ul.classList.remove('show');
  });
});

open.addEventListener('click', () => {
  ul.classList.add('show');
});
