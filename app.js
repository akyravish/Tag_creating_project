// jshint esversion:6

const tags = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

const createTags = (input) => {
	const tagsArray = input
		.split(',')
		.filter((tag) => tag.trim() !== '')
		.map((tag) => tag.trim());

	tags.innerHTML = ''; // * Empty the tags id

	tagsArray.forEach((tag) => {
		const span = document.createElement('span');
		span.classList.add('tag');
		span.innerText = tag;

		tags.appendChild(span);
	});
};

const pickRandomTag = () => {
	const tagList = document.querySelectorAll('.tag');
	return tagList[Math.floor(Math.random() * tagList.length)];
};

const highLightTag = (tag) => {
	return tag.classList.add('highlight');
};

const unHighLightTag = (tag) => {
	return tag.classList.remove('highlight');
};

const randomTagSelect = () => {
	// how many time you want to highlight
	const times = 30;

	const interval = setInterval(() => {
		const randomTag = pickRandomTag();

		highLightTag(randomTag);

		setTimeout(() => {
			unHighLightTag(randomTag);
		}, 100);
	}, 100);

	setTimeout(() => {
		setTimeout(() => {
			clearInterval(interval);
		}, 100);

		const randomTag = pickRandomTag();
		highLightTag(randomTag);
		console.log(randomTag);
	}, times * 100);
};

textarea.addEventListener('keyup', (e) => {
	createTags(e.target.value);

	if (e.key === 'Enter') {
		setTimeout(() => {
			e.target.value = '';
		}, 10);

		randomTagSelect();
	}
});
