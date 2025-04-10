/*<
Name: Aravind Arampu
File: main.js
Date: 7 April 2025
This JavaScript file is for a Challenge: Accessibility troubleshooting.
Link to repo https://github.com/AAravindDC/INFT-1206-03-Web-Development-Fundamentals.git
 >*/
// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

// Hides the comment section when the HTML file is first run.
commentWrapper.style.display = 'none';

//Makes the comment section visible once "Show comments" is clicked.
showHideBtn.onclick = function() {
  //Gets the current text of the button
  let showHideText = showHideBtn.textContent;
  //check if the text of the button is "Show comments"
  //if true, it will change the button to "Hide comments
  // and makes the comments section visible
  if(showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    //change the button to "Show comments"
    showHideBtn.textContent = 'Show comments';
    //makes the comments section not visible
    commentWrapper.style.display = 'none';
  }
};

// functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

// Stop default form action and execute submitComment.
form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  // Makes a list item.
  const listItem = document.createElement('li');
  //creates a p-tag for the name.
  const namePara = document.createElement('p');
  //Creates a p-tag for the comment.
  const commentPara = document.createElement('p');

  //Gets the entered value from the name input field
  const nameValue = nameField.value;
  //Gets the entered value from the comment input field
  const commentValue = commentField.value;

  // Sets the p-tag for comment to contain the name value
  namePara.textContent = nameValue;
  // Sets the p-tag for comment to contain the comment value
  commentPara.textContent = commentValue;

  // Adds the list item to the comment list container.
  list.appendChild(listItem);
  // Adds the name paragraph to the list item.
  listItem.appendChild(namePara);
  // Adds the comment paragraph to the list item.
  listItem.appendChild(commentPara);

  // Clears the input field for name.
  nameField.value = '';
  // Clears the input field for comment.
  commentField.value = '';
}
