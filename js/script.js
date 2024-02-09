
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


// ナビゲーションメニューの各メニューをクリック後、それぞれの箇所に遷移させる
const link_to_section2 = document.getElementById('link_to_section-2');
link_to_section2.addEventListener('click', () => {
    navMenu.style.display = 'none';
  });
 
const link_to_section3 = document.getElementById('link_to_section-3');
link_to_section3.addEventListener('click', () => {
    navMenu.style.display = 'none';
  });

const link_to_section4 = document.getElementById('link_to_section-4');
link_to_section4.addEventListener('click', () => {
    navMenu.style.display = 'none';
  });

const link_to_top = document.getElementById('link_to_top');
link_to_top.addEventListener('click', () => {
    navMenu.style.display = 'none';
  });


//   ここまでヘッダー


// フェードイン（左から出てくるように） 
// white-background-1というidを持つ要素が、画面内に現れたら、その要素にinviewというクラスを付与する」という意味
// cssの#white-background-1.inview{ }と対応
$(function () {
  $("#white-background-1").on("inview", function () {
      $(this).addClass("inview");
  });
});

// フェードイン（右から出てくるように） 
// white-background-2というidを持つ要素が、画面内に現れたら、その要素にinviewというクラスを付与する」という意味
// cssの#white-background-2.inview{ }と対応
$(function () {
  $("#white-background-2").on("inview", function () {
      $(this).addClass("inview");
  });
});

// 吹き出し1:拡大しながらフェードイン(中央から四隅へ)
// voice01というidを持つ要素が、画面内に現れたら、その要素にinviewというクラスを付与する」という意味
// cssの#voice01.inview{ }と対応
$(function () {
  $("#voice01").on("inview", function () {
      $(this).addClass("inview");
  });
});

// 吹き出し3:拡大しながらフェードイン(中央から四隅へ)
// voice02というidを持つ要素が、画面内に現れたら、その要素にinviewというクラスを付与する」という意味
// cssの#voice01.inview{ }と対応
$(function () {
  $("#voice02").on("inview", function () {
      $(this).addClass("inview");
  });
});

// 吹き出し3:拡大しながらフェードイン(中央から四隅へ)
// voice03というidを持つ要素が、画面内に現れたら、その要素にinviewというクラスを付与する」という意味
// cssの#voice01.inview{ }と対応
$(function () {
  $("#voice03").on("inview", function () {
      $(this).addClass("inview");
  });
});
