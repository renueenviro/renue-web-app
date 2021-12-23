<script>
  //STORES
  import { cms_url } from "../stores/renuestore";

  //LIBS

  //COMPONENTS
  import SpacerLine from "../components/containers/spacer-line.svelte";

  //SECTIONS
  import HeroSection from "../components/sections/home/hero-section.svelte";
  import Section1 from "../components/sections/home/section-1.svelte";
  import Section2 from "../components/sections/home/section-2.svelte";
  import Section3 from "../components/sections/home/section-3.svelte";
  import ContactSection from "../components/sections/home/contact-section.svelte";

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

    console.log(data.results[2].data.body[1].items);

    let sections = [];
    let carouselSlides = [];

    data.results[2].data.body[1].items.forEach((item) => {
      // console.log(item.thumbnail.url);
      let tmpData = {
        image_url: item.thumbnail.url,
        headline: item.headline[0].text,
        paragraph: item.paragraph[0].text,
      };
      carouselSlides.push(tmpData);
    });

    // await data.results.map((data, index) => {
    console.log("section", data.results[2].data.body[4].primary);

    // data.data.body.forEach((section) => {
    //   //console.log("section", section);
    //   sections.push(section);
    // });

    // data.results[2].data.body[0].items.forEach((item) => {
    //   // console.log(item.thumbnail.url);
    //   let tmpData = {
    //     image_url: item.thumbnail.url,
    //     headline: item.headline[0].text,
    //     paragraph: item.paragraph[0].text,
    //   };
    //   carouselSlides.push(tmpData);
    // });

    console.log("original data", data);

    let cleanData = {
      sections: sections,
      navbar: {},
      hero: {
        id: data.id,
        uid: data.uid,
        image_url: data.results[2].data.body[0].primary["bg-image"].url,
        slice_type: data.results[2].data.body[0].slice_type,
        button_label: data.results[2].data.body[0].primary.button_label,
        heading: data.results[2].data.body[0].primary.heading[0].text,
        subheading: data.results[2].data.body[0].primary.subheading[0].text,
        paragraph: data.results[2].data.body[0].primary.paragraph[0].text,
      },
      section1: {
        carousel: {
          slides: carouselSlides,
        },
      },
      section2: {
        headline: data.results[2].data.body[2].items[0].headline[0].text,
        paragraph: data.results[2].data.body[2].items[0].paragraph[0].text,
        start:
          data.results[2].data.body[2].items[0].paragraph[0].spans[0].start,
        end: data.results[2].data.body[2].items[0].paragraph[0].spans[0].end,
      },
      section3: {
        headline: data.results[2].data.body[3].primary.headline[0].text,
      },
      contact: {
        headline: data.results[2].data.body[4].primary.headline[0].text,
        start: data.results[2].data.body[4].primary.headline[0].spans[0].start,
        end: data.results[2].data.body[4].primary.headline[0].spans[0].end,
      },
    };
    //console.log("cleanData", cleanData);
    callback(cleanData);
    // });
  };

  let navbarData;
  let heroData;
  let section1Data, section2Data, section3Data;
  let contactData;

  fetchData($cms_url, async (data) => {
    //console.log("hero", data.hero);
    navbarData = await data.navbar;
    heroData = await data.hero;
    section1Data = await data.section1;
    section2Data = await data.section2;
    section3Data = await data.section3;
    contactData = await data.contact;
  });
</script>

<svelte:head>
  <title>RENUE</title>
</svelte:head>

{#await heroData}
  <h1 class="text-secondary text-8xl mt-72">Loading...</h1>
{:then data}
  {#if data !== undefined}
    <HeroSection contents={data} />
  {/if}
{/await}

{#await section1Data}
  <h1 class="text-secondary text-8xl mt-72">Loading...</h1>
{:then data}
  {#if data !== undefined}
    <Section1 {data} />
  {/if}
{/await}

<SpacerLine />

{#await section2Data}
  <h1 class="text-secondary text-8xl mt-72">Loading...</h1>
{:then data}
  {#if data !== undefined}
    <Section2 {data} />
  {/if}
{/await}

{#await section3Data}
  <h1 class="text-secondary text-8xl mt-72">Loading...</h1>
{:then data}
  {#if data !== undefined}
    <Section3 {data} />
  {/if}
{/await}

{#await contactData}
  <h1 class="text-secondary text-8xl mt-72">Loading...</h1>
{:then data}
  {#if data !== undefined}
    <ContactSection {data} />
  {/if}
{/await}

<style>
  .section-2-out {
    opacity: 0;
  }

  .section-2-in {
    -webkit-animation: fadein 20s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 20s; /* Firefox < 16 */
    -ms-animation: fadein 20s; /* Internet Explorer */
    -o-animation: fadein 20s; /* Opera < 12.1 */
    animation: fadein 20s;
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
