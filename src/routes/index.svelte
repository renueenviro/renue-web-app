<script>
  //STORES
  import { cms_url } from "../stores/renuestore";
  //LIBS

  //COMPONENTS

  //SECTIONS
  import HeroSection from "../components/sections/home/hero-section.svelte";
  import Section1 from "../components/sections/home/section-1.svelte";
  import Section2 from "../components/sections/home/section-2.svelte";
  import Section3 from "../components/sections/home/section-3.svelte";

  //CODE

  const fetchRefs = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data.refs;
  };

  const fetchData = async (cms_url, callback) => {
    const refs = await fetchRefs(cms_url);

    const masterRef = await refs.map((ref, index) => {
      return ref.ref;
    });

    const url = cms_url + "/documents/search?ref=" + masterRef + "#format=json";
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);

    let sections = [];

    await data.results.map((data, index) => {
      //console.log(data.data.body);
      data.data.body.forEach((section) => {
        //console.log("section", section);
        sections.push(section);
      });
      console.log("original data", data);

      let cleanData = {
        sections: sections,
        hero: {
          id: data.id,
          uid: data.uid,
          image_url: data.data.body[0].primary["bg-image"].url,
          slice_type: data.data.body[0].slice_type,
          button_label: data.data.body[0].primary.button_label,
          heading: data.data.body[0].primary.heading[0].text,
          subheading: data.data.body[0].primary.subheading[0].text,
          paragraph: data.data.body[0].primary.paragraph[0].text,
        },
      };
      console.log("cleanData", cleanData);
      callback(cleanData);
    });
  };

  let heroData;

  fetchData($cms_url, async (data) => {
    console.log("XXXXX", data);
    heroData = await data;
  });
</script>

<svelte:head>
  <title>RENUE</title>
</svelte:head>

{#await heroData}
  <h1 class="text-secondary text-8xl mt-72">Loading...</h1>
{:then data}
  {#if data !== undefined}
    <!-- {console.log("heroContent", data)} -->
    <HeroSection contents={data.hero} />
  {/if}
{/await}

<Section1 />
<Section2 />
<Section3 />
