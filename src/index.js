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

