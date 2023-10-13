import './style.css';

function loadHomePage() { 
    const middleDiv = document.querySelector('.middleDiv');
    middleDiv.setAttribute('class', 'middleDiv middleDivHome');

    const text1 = document.createElement('p');
    text1.innerHTML = 'Made with passion since 1953';
    const text2 = document.createElement('p');
    text2.innerHTML = 'Order online or visit us';

    const image = document.createElement('img');
    image.src = 'images/chef.png'
    image.alt = 'image';

    middleDiv.appendChild(text1);
    middleDiv.appendChild(image);
    middleDiv.appendChild(text2);
}

export default loadHomePage;