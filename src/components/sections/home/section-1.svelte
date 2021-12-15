<script>
  //STORES

  //LIBS

  //COMPONENTS
  import Carousel from "../../widgets/carousel/carousel.svelte";

  const slides = [
    {
      path: "https://5.imimg.com/data5/CW/AL/MY-40404807/hydrogenated-castor-oil-500x500.jpg",
      id: "1",
    },
    {
      path: "https://cdn.shopify.com/s/files/1/0521/8513/products/Opulence---Essential-Oil-DIffuser-by-Organic-Aromas_2048x.jpg?v=1555655056",
      id: "2",
    },
    {
      path: "https://cdn.shopify.com/s/files/1/2255/9153/products/key_lime_74b07b44-898f-4cf8-9896-01b7d9e53495_2048x2235.jpg?v=1591808720",
      id: "3",
    },
  ];

  const handleImageClicked = (e) => {
    console.log(e.detail);
  };
</script>

<div class="bg-background-light w-full h-auto py-240">
  <Carousel
    {slides}
    displayControls={true}
    autoplay={true}
    autoplaySpeed={4000}
    speed={1000}
    on:imageClicked={handleImageClicked}
  />
</div>
