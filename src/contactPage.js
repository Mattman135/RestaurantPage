import './style.css';

function loadContactPage() { 
    const middleDiv = document.querySelector('.middleDiv');
    middleDiv.setAttribute('class', 'middleDiv middleDivContact');

    const googleLink = document.createElement('iframe');
    googleLink.id = 'inlineFrameExample';
    googleLink.title = 'Inline fram example';
    googleLink.src = "https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik";
    googleLink.style = 'border:0';
    googleLink.loading = 'lazy';
    googleLink.allowFullscreen = true;
    googleLink.referrerPolicy = 'no-referrer-when-downgrade';


    const div = document.createElement('div');
    const address = document.createElement('p');
    address.setAttribute('class', 'address');
    address.innerHTML = '666 Oakwood The Number of the Beast Avenue';
    const phoneNumber = document.createElement('p');
    phoneNumber.setAttribute('class', 'phoneNumber');
    phoneNumber.innerHTML = '(666)-666 6666';
    div.appendChild(address);
    div.appendChild(phoneNumber);


    middleDiv.appendChild(googleLink);
    middleDiv.appendChild(div);
}

export default loadContactPage;