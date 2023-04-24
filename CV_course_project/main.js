const navigation = document.querySelector('.header .navbar');
const bannermenu = document.querySelector('.header .menu');

bannermenu.addEventListener('click', () => {
  navigation.classList.toggle('show');
});

document.onscroll = () => {
  navigation.classList.remove('show');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

document.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};
