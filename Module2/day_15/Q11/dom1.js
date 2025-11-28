const title = document.getElementById('title');
title.textContent = "Welcome to the DOM World!";

const firstContainer = document.querySelector('.container');
firstContainer.style.backgroundColor = 'yellow';

const allElements = document.getElementsByTagName("*");
for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.color = "black";
}