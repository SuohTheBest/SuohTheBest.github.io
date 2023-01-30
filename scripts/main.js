let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem('name', myName);
        myHeading.textContent = '你好，' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '你好，' + storedName;
}

let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/win.jpg') {
        myImage.setAttribute('src', 'images/oho.png');
    } else {
        myImage.setAttribute('src', 'images/win.jpg');
    }
}

myButton.onclick = function () {
    setUserName();
}
