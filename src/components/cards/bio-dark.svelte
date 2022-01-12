<script>
  //LIBS
  import { Motion } from "svelte-motion";
  import { onMount } from "svelte";
  import { scale } from "svelte/transition";

  //COMPONENTS
  import Button from "../buttons/sm-primary-text-only.svelte";

  //PROPS
  export let name, role, more, img_url;
  //console.log(img_url);

  let isHover = false;

  const handleMouseEnter = async () => {
    console.log("Hovering...");
    isHover = true;
  };

  const handleMouseLeave = async () => {
    console.log("Not Hovering...");
    isHover = false;
  };

  onMount(async () => {
    let root = document.querySelector(":root");
    root.style.setProperty("--img_url", "url(" + img_url + ")");
  });
</script>

<div id="wrapper" class="w-360 h-564 gradient-bg-secondary-main rounded-lg">
  <div
    id="horizontal-spacer"
    class="w-full h-24 gradient-blue-to-green-light-diagonal"
  />

  <Motion whileHover={{ scale: 1.1, transition: { duration: 0.5 } }} let:motion>
    <div id="image-container" transition:scale={{ start: 1.5 }} use:motion />
  </Motion>

  <div
    id="info-wrapper"
    class="space-y-4 py-24 w-full gradient-bg-secondary-main"
  >
    <div class="text-xl text-center text-primary-light font-bold">
      <h1>{name}</h1>
    </div>
    <div class="text-md text-center text-primary-light-variant font-bold">
      <p>{role}</p>
    </div>
    <div>
      <Button label={more} />
    </div>
  </div>
</div>

<style>
  * {
    overflow: hidden;
  }

  :root {
    --img_url: url("");
  }

  #wrapper {
    position: relative;
  }

  #info-wrapper {
    position: absolute;
    bottom: 0;
  }

  #horizontal-spacer {
    position: absolute;
    top: 0;
    z-index: 20;
  }

  #image-container {
    height: 100%;
    width: 100%;
    cursor: pointer;
    background-image: var(--img_url);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
