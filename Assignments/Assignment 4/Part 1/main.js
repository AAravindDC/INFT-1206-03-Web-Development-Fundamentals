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

//The String variable holds the story text.
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
//Arrays that hold a few string texts, that would be used to replace the placeholder values in the story text.
const insertx = [ "Willy the Goblin", "Big Daddy", "Father Christmas"];
const inserty = ["soup kitchen", "Disneyland", "the White House"];
const insertz = ["spontaneously combusted", "melted into a puddle on", "turned into a slug and crawled away"];

//Function that's used to get a random number value use to select an index in the string text arrays.
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
// Event listener for the 'Generate Story' button
randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const  xItem = randomValueFromArray(insertx);
  const  yItem = randomValueFromArray(inserty);
  const  zItem = randomValueFromArray(insertz);
// Replaces placeholder values in the storey text, with a string text from the array.
  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  //checks to see if a name has been entered, if not Bob will be the default name
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob',name);
  }
  //check to see if a radio button is selected for the UK if true,
  //it will change the units of measurement to UK standards.
  if(document.getElementById("uk").checked) {
    //Calculation to convert pounds into stone
    const weight = Math.round(300 * 0.0714286) + " stone";
    //calculation to covert Fahrenheit into Celsius
    const temperature = Math.round((94-32) * 5 / 9) + " centigrade";

    // replace "300 pounds" text in the story string with the string variable weight.
    newStory = newStory.replaceAll('300 pounds', weight);
    // replace "94 fahrenheit" text in the story string with the string variable temperature.
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
  }
  //Changes the story element with the text that was randomly selected
  story.textContent = newStory ;
  // Makes the 'story' element visible on the page
  story.style.visibility = 'visible';
}
