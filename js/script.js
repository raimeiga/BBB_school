const logoMenu = document.getElementById('logo-menu');

const navMenu = document.getElementById('nav-menu');


  // HTML要素がクリックされたときにイベント処理を実行する
  logoMenu.addEventListener('click', () => {
    logoMenu.style.display = 'block';
    navMenu.style.display = 'block';
  });

