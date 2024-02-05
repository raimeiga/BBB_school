
// ここからヘッダー
const logoMenu = document.getElementById('logo-menu');
const navMenu = document.getElementById('nav-menu');
// イベント処理
logoMenu.addEventListener('click', () => {
    navMenu.style.display = 'block';
  });

const close = document.getElementById('close');
// イベント処理
close.addEventListener('click', () => {
    navMenu.style.display = 'none';
  });

//   ここまでヘッダー








