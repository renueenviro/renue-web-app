<script>
  //STORES

  //LIBS

  //COMPONENTS
  import Carousel from "../../widgets/carousel/carousel.svelte";

  //PROPS
  export let data;

  const slides = [];

  let id = 1;

  data.carousel.slides.forEach((slide) => {
    // console.log(slide);

    let isActive;

    if (id == 1) {
      isActive = true;
    } else {
      isActive = false;
    }

    slides.push({
      path: slide.image_url,
      headline: slide.headline,
      paragraph: slide.paragraph,
      id: id,
      active: isActive,
    });

    id++;
  });

  const handleImageClicked = (e) => {
    console.log(e.detail);
  };
</script>

<div class="bg-background-light w-full h-auto py-240">
  <Carousel
    {slides}
    displayControls={true}
    autoplay={true}
    autoplaySpeed={5000}
    speed={800}
    on:imageClicked={handleImageClicked}
  />
</div>
