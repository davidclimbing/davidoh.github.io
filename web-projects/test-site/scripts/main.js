let myImage = document.querySelector('img');


myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/chrome-img.webp') {
	myImage.setAttribute('src','images/chrome_pic.png');
    } else {
	myImage.setAttribute('src', 'images/chrome-img.webp');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
	setUserName();
    } else {
	localStorage.setItem('naem', myName);
	myHeading.textContent = 'Mozilla is cool ', +myNmae();
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storeName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storeName;
}


myButton.onclick = function() {
    setUserName();
}
