/*
Name: Aravind Arampu
File: main.js
Date: 03 March 2025
This Javascript file is for a Challenge: Silly story generator.

link to repo https://github.com/AAravindDC/INFT-1206-03-Web-Development-Fundamentals.git
*/
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// This is the main story template that will be customized
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

// Lists of words that will replace placeholders in the story
const insertx = [ "Willy the Goblin", "Big Daddy", "Father Christmas"];
const inserty = ["soup kitchen", "Disneyland", "the White House"];
const insertz = ["spontaneously combusted", "melted into a puddle on", "turned into a slug and crawled away"];

// This function picks a random item from an array
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// Wait for the user to click the "Generate random story" button, then run the result function
randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const  xItem = randomValueFromArray(insertx);
  const  yItem = randomValueFromArray(inserty);
  const  zItem = randomValueFromArray(insertz);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  // If the user typed a name, use that instead of "Bob"
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob',name);
  }
}

  // If the "UK" radio button is selected, convert weight and temperature
  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.0714286) + " stone";
    const temperature = Math.round((94-32) * 5 / 9) + " centigrade";

    // Replace the numbers in the story with UK values
    newStory = newStory.replaceAll('300 pounds', weight);
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
  }

  story.textContent = newStory ;
  story.style.visibility = 'visible';
}
