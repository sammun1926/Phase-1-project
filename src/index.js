const apiURL = 'https://api.chucknorris.io/jokes/random';

const generateButton = document.getElementById('generate-btn');
const jokeText = document.getElementById('joke-text');

generateButton.addEventListener('click', generateJoke);

function generateJoke() {
	fetch(apiURL)
		.then(response => response.json())
		.then(data => {
			jokeText.textContent = data.value;
		})
		.catch(() => {
			jokeText.textContent = 'An error occurred, please try again later.';
		});
}
let likeCounter = 0;

const likeButton = document.querySelector('.heart-btn');

likeButton.addEventListener('click', () => {
  likeCounter++;
  document.querySelector('.numb').textContent = likeCounter;
});
function generateJoke() {
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

