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

