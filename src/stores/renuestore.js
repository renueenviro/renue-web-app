import { writable } from 'svelte/store';

export const document = writable([]);

const repoUrl = 'https://renue-web-app.prismic.io/api/v2';

const fetchRefs = async () => {
	const res = await fetch(repoUrl);
	const data = await res.json();
	return data.refs;
};

const fetchData = async () => {
	const refs = await fetchRefs();

	const masterRef = await refs.map((ref, index) => {
		return ref.ref;
	});

	const url = repoUrl + '/documents/search?ref=' + masterRef + '#format=json';
	const res = await fetch(url);
	const data = await res.json();

	let sections = [];

	const loadedData = await data.results.map((data, index) => {
		//console.log(data.data.body);

		data.data.body.forEach((section) => {
			//console.log('section', section);
			sections.push(section);
		});

		return {
			sections: sections
		};

		// return {
		// 	id: data.id,
		// 	uid: data.uid,
		// 	image_url: data.data.body[0].primary.icon_image.url,
		// 	slice_type: data.data.body[0].slice_type,
		// 	button_label: data.data.body[0].primary.button_label
		// };
	});
	document.set(loadedData);
};

fetchData();
