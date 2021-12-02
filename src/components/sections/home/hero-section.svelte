<script>
	//STORES
	import { document } from '../../../stores/renuestore';

	//LIBS
	import { onMount } from 'svelte';

	//COMPONENTS
	import HeroPrimary from '../../hero/hero-primary.svelte';

	let heading, subheading, paragraph;

	onMount(async () => {
		let data = await $document;
		heading = data[0].sections[0].primary.heading[0].text;
		subheading = data[0].sections[0].primary.subheading[0].text;
		paragraph = data[0].sections[0].primary.paragraph[0].text;
		console.log('data', data[0].sections[0].primary.paragraph[0].text);
	});
</script>

<HeroPrimary {heading} {subheading} {paragraph} />
