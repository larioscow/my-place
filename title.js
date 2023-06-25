const title = document.getElementsByTagName('title');
const word = 'My Place';

const addLetter = letter => {
	return new Promise(resolve => {
		setTimeout(() => {
			title[0].innerHTML += word[letter];
			resolve();
		}, 70);
	});
};

async function animation() {
	for (let i = 0; i < word.length; i++) {
		await addLetter(i);
	}
}

window.addEventListener('load', animation);
