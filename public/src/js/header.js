function sideBarToggle() {
  const sideMenu = document.getElementById('side_menu');
  const mobileHeaderWrapper = document.getElementById('mobile_header_wrapper');

  const isOpen = sideMenu.style.left === '0px';

  if (isOpen) {
    mobileHeaderWrapper.style.left = '0';
    sideMenu.style.left = '-300px';
  } else {
    mobileHeaderWrapper.style.left = '300px';
    sideMenu.style.left = '0';
  }
}

function getUrlPath() {
  const urlPath = window.location.href;
  let webSelected = '';
  let mobileSelected = '';

  switch (true) {
    case urlPath.includes('index'):
      mobileSelected = 'mobile_nav_home';
      break;
    case urlPath.includes('about'):
      webSelected = 'nav_about';
      mobileSelected = 'mobile_nav_about';
      break;
    case urlPath.includes('plans'):
      webSelected = 'nav_plans';
      mobileSelected = 'mobile_nav_plans';
      break;
    default:
      console.log('default');
      break;
  }

  /**
   * Css to create the dot below the navigation menu
   */
  const cssText =
    'color: #6cbf84;' +
    'background-position: bottom;' +
    'background-size: 15px 15px;' +
    'background-repeat: no-repeat;' +
    'background-image: radial-gradient(circle,#6cbf84 25%,transparent 33%,transparent 33%);';

  if (webSelected) {
    document.getElementById(webSelected).style.cssText = cssText;
  }

  if (mobileSelected) {
    document.getElementById(mobileSelected).style.cssText = cssText;
  }
}
