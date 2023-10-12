import './style.css';


function loadMenuPage() { 
    const middleDiv = document.querySelector('.middleDiv');
    middleDiv.setAttribute('class', 'middleDiv middleDivMenu');


    // coffe
    const imgDiv1 = document.createElement('div');
    imgDiv1.classList.add('imgDiv');
    const img1 = document.createElement('img');
    img1.src = 'coffe.png';
    img1.alt = 'coffe image';
    const img1Text = document.createElement('p');
    img1Text.innerHTML = 'Coffe';
    imgDiv1.appendChild(img1);
    imgDiv1.appendChild(img1Text);

    // hamburger
    const imgDiv2 = document.createElement('div');
    imgDiv2.classList.add('imgDiv');
    const img2 = document.createElement('img');
    img2.src = 'hamburger.png';
    img2.alt = 'hamburger image';
    const img2Text = document.createElement('p');
    img2Text.innerHTML = 'Hamburger';
    imgDiv2.appendChild(img2);
    imgDiv2.appendChild(img2Text);

    // hotdog
    const imgDiv3 = document.createElement('div');
    imgDiv3.classList.add('imgDiv');
    const img3 = document.createElement('img');
    img3.src = 'hotdog.png';
    img3.alt = 'hotdog image';
    const img3Text = document.createElement('p');
    img3Text.innerHTML = 'Hotdog';
    imgDiv3.appendChild(img3);
    imgDiv3.appendChild(img3Text);

    // mixed
    const imgDiv4 = document.createElement('div');
    imgDiv4.classList.add('imgDiv');
    const img4 = document.createElement('img');
    img4.src = 'mixed.png';
    img4.alt = 'mixed image';
    const img4Text = document.createElement('p');
    img4Text.innerHTML = 'Mixed';
    imgDiv4.appendChild(img4);
    imgDiv4.appendChild(img4Text);

    // salad
    const imgDiv5 = document.createElement('div');
    imgDiv5.classList.add('imgDiv');
    const img5 = document.createElement('img');
    img5.src = 'salad.png';
    img5.alt = 'salad image';
    const img5Text = document.createElement('p');
    img5Text.innerHTML = 'Salad';
    imgDiv5.appendChild(img5);
    imgDiv5.appendChild(img5Text);

    // salmon
    const imgDiv6 = document.createElement('div');
    imgDiv6.classList.add('imgDiv');
    const img6 = document.createElement('img');
    img6.src = 'salmon.png';
    img6.alt = 'salmon image';
    const img6Text = document.createElement('p');
    img6Text.innerHTML = 'Salmon';
    imgDiv6.appendChild(img6);
    imgDiv6.appendChild(img6Text);

    // sandwich
    const imgDiv7 = document.createElement('div');
    imgDiv7.classList.add('imgDiv');
    const img7 = document.createElement('img');
    img7.src = 'sandwich.png';
    img7.alt = 'sandwich image';
    const img7Text = document.createElement('p');
    img7Text.innerHTML = 'Sandwich';
    imgDiv7.appendChild(img7);
    imgDiv7.appendChild(img7Text);

    // schrimps
    const imgDiv8 = document.createElement('div');
    imgDiv8.classList.add('imgDiv');
    const img8 = document.createElement('img');
    img8.src = 'schrimps.png';
    img8.alt = 'schrimps image';
    const img8Text = document.createElement('p');
    img8Text.innerHTML = 'Schrimps';
    imgDiv8.appendChild(img8);
    imgDiv8.appendChild(img8Text);

    // spare ribs
    const imgDiv9 = document.createElement('div');
    imgDiv9.classList.add('imgDiv');
    const img9 = document.createElement('img');
    img9.src = 'spareribs.png';
    img9.alt = 'spare ribs image';
    const img9Text = document.createElement('p');
    img9Text.innerHTML = 'Spare ribs';
    imgDiv9.appendChild(img9);
    imgDiv9.appendChild(img9Text);

    // steak
    const imgDiv10 = document.createElement('div');
    imgDiv10.classList.add('imgDiv');
    const img10 = document.createElement('img');
    img10.src = 'steak.png';
    img10.alt = 'steak image';
    const img10Text = document.createElement('p');
    img10Text.innerHTML = 'Steak';
    imgDiv10.appendChild(img10);
    imgDiv10.appendChild(img10Text);

    // sushi
    const imgDiv11 = document.createElement('div');
    imgDiv11.classList.add('imgDiv');
    const img11 = document.createElement('img');
    img11.src = 'sushi.png';
    img11.alt = 'sushi image';
    const img11Text = document.createElement('p');
    img11Text.innerHTML = 'Sushi';
    imgDiv11.appendChild(img11);
    imgDiv11.appendChild(img11Text);

    // taco
    const imgDiv12 = document.createElement('div');
    imgDiv12.classList.add('imgDiv');
    const img12 = document.createElement('img');
    img12.src = 'taco.png';
    img12.alt = 'taco image';
    const img12Text = document.createElement('p');
    img12Text.innerHTML = 'Taco';
    imgDiv12.appendChild(img12);
    imgDiv12.appendChild(img12Text);

    // append
    middleDiv.appendChild(imgDiv1);
    middleDiv.appendChild(imgDiv2);
    middleDiv.appendChild(imgDiv3);
    middleDiv.appendChild(imgDiv4);
    middleDiv.appendChild(imgDiv5);
    middleDiv.appendChild(imgDiv6);
    middleDiv.appendChild(imgDiv7);
    middleDiv.appendChild(imgDiv8);
    middleDiv.appendChild(imgDiv9);
    middleDiv.appendChild(imgDiv10);
    middleDiv.appendChild(imgDiv11);
    middleDiv.appendChild(imgDiv12);
}

export default loadMenuPage;