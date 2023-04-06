const apiURL = 'https://api.chucknorris.io/jokes/random';

const generateButton = document.getElementById('generate-btn');
const jokeText = document.getElementById('joke-text');

generateButton.addEventListener('click', generateJoke);

function generateJoke() {
     // Fetches a random Chuck Norris joke from the API

	fetch(apiURL)
		.then(response => response.json())
		.then(data => {
			jokeText.textContent = data.value;
		})
		.catch(() => {
             // Displays an error message if there's a problem with the API request
			jokeText.textContent = 'An error occurred, please try again later.';
		});
}
let likeCounter = 0;

const likeButton = document.querySelector('.heart-btn');

likeButton.addEventListener('click', () => {
     // Increases the like counter by 1 when the heart button is clicked
  likeCounter++;
  document.querySelector('.numb').textContent = likeCounter;
});
function generateJoke() {
    // Resets the like counter and updates the display when a new joke is generated
	likeCounter = 0;
	document.querySelector('.numb').textContent = likeCounter;
	fetch(apiURL)
		.then(response => response.json())
		.then(data => {
			jokeText.textContent = data.value;
		})
		.catch(() => {
			jokeText.textContent = 'An error occurred, please try again later.';
		});
}
// JQuery code that adds functionality to the heart button

$(document).ready(function(){
  let likes = 0;
  const content = $('.content');
  const text = $('.text');
  const numb = $('.numb');
  const heart = $('.heart');

   heart-active.click(function(){
    content.toggleClass("heart-active");
    text.toggleClass("heart-active");
    numb.toggleClass("heart-active");
    heart.toggleClass("heart-active");

    if (content.hasClass('heart-active')) {
      likes++;
    } else {
      likes = Math.max(likes - 1, 0);
    }

    numb.text(likes);
  });
});

