import './style.css';
import loadHomePage from './homePage';
import loadMenuPage from './menuPage';
import loadContactPage from './contactPage';
import removeAllChildNodes from './removeAllChildNodes';

function component() {
  const contentDiv = document.querySelector('#content');
  contentDiv.classList.add('content');


  // header
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header');

  const title = document.createElement('h1');
  title.innerHTML = 'Bon Appétit';

  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('buttonsDiv');

  const homeBtn = document.createElement('button');
  homeBtn.innerHTML = 'Home';
  homeBtn.addEventListener('click', () => {
    removeAllChildNodes(middleDiv);
    loadHomePage();
  })

  const menuBtn = document.createElement('button');
  menuBtn.innerHTML = 'Menu';
  menuBtn.addEventListener('click', () => {
    removeAllChildNodes(middleDiv);
    loadMenuPage();
  })

  const contactBtn = document.createElement('button');
  contactBtn.innerHTML = 'Contact';
  contactBtn.addEventListener('click', () => {
    removeAllChildNodes(middleDiv);
    loadContactPage();
  })

  buttonsDiv.appendChild(homeBtn);
  buttonsDiv.appendChild(menuBtn);
  buttonsDiv.appendChild(contactBtn);

  headerDiv.appendChild(title);
  headerDiv.appendChild(buttonsDiv);


  // middle content
  const middleDiv = document.createElement('div');
  middleDiv.classList.add('middleDiv');
 


  // footer
  const footerDiv = document.createElement('div');
  footerDiv.classList.add('footer');
  footerDiv.innerHTML = '© 2023 Mattman135';

  const footerLink = document.createElement('a');
  footerLink.href = 'https://github.com/Mattman135/RestaurantPage'; // change this to the correct link later
  const footerImg = document.createElement('img');
  footerImg.src = 'images/github-mark-white.png';
  footerImg.alt = 'github-image';
  footerLink.appendChild(footerImg);

  footerDiv.appendChild(footerLink);

  contentDiv.appendChild(headerDiv);
  contentDiv.appendChild(middleDiv);
  contentDiv.appendChild(footerDiv);
  return contentDiv;
}

const tabIcon = document.createElement('link');
tabIcon.rel = 'icon';
tabIcon.href = 'images/cutlery.png';
tabIcon.type = 'image/x-icon';
document.head.appendChild(tabIcon);


document.body.appendChild(component());
document.body.onload = loadHomePage();