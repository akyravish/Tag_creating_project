// jshint esversion:6

const textarea = document.getElementById('textarea');
const tags = document.getElementById('tags');

const addTags = (value) => {
	tags.innerHTML = '';
	const tagArray = value
		.split(',')
		.filter((tag) => tag.trim() !== '')
		.map((tag) => tag.trim());

	textarea.innerHTML = '';

	tagArray.forEach((tag) => {
		const span = document.createElement('span');
		span.classList.add('tag');
		span.innerText = tag;

		tags.appendChild(span);
	});
};

const getRandomTags = () => {
	const tagArray = document.querySelectorAll('.tag');
	return tagArray[Math.floor(Math.random() * tagArray.length)];
};

const highLight = (tag) => {
	return tag.classList.add('highlight');
};

const unHighLight = (tag) => {
	return tag.classList.remove('highlight');
};

const peakRandomTags = () => {
	const times = 30;

	const interval = setInterval(() => {
		const randomTags = getRandomTags();

		highLight(randomTags);
		setTimeout(() => {
			unHighLight(randomTags);
		}, 100);
	}, 100);

	setTimeout(() => {
		clearInterval(interval);
		setTimeout(() => {
			const randomTags = getRandomTags();
			highLight(randomTags);
		}, 100);
	}, times * 100);
};

textarea.addEventListener('keyup', (e) => {
	addTags(e.target.value);

	if (e.key === 'Enter') {
		setTimeout(() => {
			e.target.value = '';
		}, 10);

		peakRandomTags();
	}
});
