const bio = document.querySelector('.bio');
const bioContent = document.querySelector('.bio .bio-content');
bio.addEventListener('click', () => {
	bio.classList.toggle('hidden');
	bioContent.classList.toggle('hidden');
});

document.addEventListener('click', (event) => {
	if (!bio.contains(event.target)) {
		bio.classList.add('hidden');
		bioContent.classList.add('hidden');
	}
});