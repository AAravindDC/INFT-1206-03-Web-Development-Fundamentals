/*
Name: Aravind Arampu
File: main.js
Date: 13 March 2025
This Javascript file is for a Challenge: Image gallery

link to repo https://github.com/AAravindDC/INFT-1206-03-Web-Development-Fundamentals.git
*/
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imagesArray = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg','pic6.jpg'];
/* Declaring the alternative text for each image file */
const textArray = ['Closeup of a human eye', 'A rock formation resembling a wave','White and purple flowers', 'Section of wall from a pharoah\'s tomb', 'Butter fly on a large green leaf'];

/* Looping through images */
for (let i = 1; i < imagesArray.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/pic${i}.jpg`);
    newImage.setAttribute('alt', textArray[i-1]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener(
        'click', e => {displayedImage.src = e.target.src
                       displayedImage.alt = e.target.alt
                        });
}


/* Wiring up the Darken/Lighten button */
