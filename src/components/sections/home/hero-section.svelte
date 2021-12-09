<script>
  //STORES

  //LIBS
  import { onMount } from "svelte";

  //COMPONENTS
  import HeroPrimary from "../../hero/hero-primary.svelte";

  export let contents;
  let heroContents;

  onMount(async () => {
    // let data = await $document;
    // if (data[0] !== undefined) {
    //heading = await contents.heading;
    //   subheading = data[0].sections[0].primary.subheading[0].text;
    //   paragraph = data[0].sections[0].primary.paragraph[0].text;
    //   console.log("data", data[0].sections[0].primary.paragraph[0].text);
    // }
  });
</script>

<!-- {#await heroContents}
  <h1>Loading</h1>
{:then data} -->
{console.log("data", contents)}
<HeroPrimary
  heading={contents.heading}
  subheading={contents.subheading}
  paragraph={contents.paragraph}
/>
<!-- {/await} -->
