$(document).ready(function () {
  /*---------------------------------------
  共通部分の読み込み
  ----------------------------------------- */
  $("#header").load("./header.html", function () {
    /*------------------------------------
    ハンバーガー
    -----------------------------------*/
    const body = document.querySelector('body');
    const headerMenuBox = document.getElementById('header__menu-box');
    const headerMenuBtn = document.getElementById('header__menu-btn');
    const headerNavBox = document.getElementById('header__nav-box');
    const headerNav = document.getElementById('header__nav');
    const headerNavLis = document.querySelectorAll('.header__nav-li');

    // クリックイベントのリスナーを追加
    headerMenuBox.addEventListener('click', toggleNav);

    // ナビゲーション表示の切り替え
    function toggleNav() {
      const isNavHidden = !headerNavBox.classList.contains('header__nav-box_active');
      if (isNavHidden) {
        showNav();
      } else {
        hideNav();
      }
    }
    // ナビゲーション表示
    function showNav() {
      // スクロール制限
      body.style.overflow = 'hidden';
      headerNavBox.classList.add('header__nav-box_active');
      headerMenuBtn.classList.add('header__menu-btn_close');
    }
    // ナビゲーション非表示
    function hideNav() {
      // スクロール制限解除
      body.style.overflow = 'scroll';
      headerNavBox.classList.remove('header__nav-box_active');
      headerMenuBtn.classList.remove('header__menu-btn_close');
    }
    // リストアイテムのクリックイベントのリスナーを追加
    headerNavLis.forEach((li) => {
      li.addEventListener('click', () => {
        let widthPx = window.innerWidth;
        hideNav();
      });
    });

  });

  $("#footer").load("./footer.html");









});
