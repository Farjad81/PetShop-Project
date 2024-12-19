function openMenu() {
    const menuContent = document.querySelector('.menu-content');
    menuContent.style.opacity = '1';
    menuContent.style.visibility = 'visible';
    menuContent.style.transform = 'translateY(0)';
  }

  function closeMenu() {
    const menuContent = document.querySelector('.menu-content');
    menuContent.style.opacity = '0';
    menuContent.style.visibility = 'hidden';
    menuContent.style.transform = 'translateY(-20px)';
  }