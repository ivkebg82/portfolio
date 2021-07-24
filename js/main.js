const navBtn = document.querySelector('.nav-btn');
const leftMenu = document.querySelector('.left-menu');
const leftMenuUl = document.querySelector('.ul');

navBtn.addEventListener('click', () => {
  leftMenu.classList.toggle('show');
  leftMenuUl.style.opacity = '1';
  leftMenuUl.style.display = 'block';
  leftMenu.style.display = 'block';
});
