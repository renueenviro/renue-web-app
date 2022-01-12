<script>
  //LIBS
  import { onMount } from "svelte";

  //COMPONENTS
  import Button from "../buttons/sm-primary-text-only.svelte";

  //PROPS
  export let name, role, more, img_url;
  //console.log(img_url);

  onMount(async () => {
    let root = document.querySelector(":root");
    root.style.setProperty("--img_url", "url(" + img_url + ")");
  });
</script>

<div id="wrapper" class="w-360 h-520 gradient-bg-secondary-main rounded-lg">
  <div
    id="horizontal-spacer"
    class="w-full h-24 gradient-blue-to-green-light-diagonal"
  />
  <div id="image-container" />
  <div class="space-y-4 pt-32 pb-24">
    <div class="text-lg text-center text-primary-light font-bold">
      <h1>{name}</h1>
    </div>
    <div class="text-md text-center text-primary-light-variant font-bold">
      <p>{role}</p>
    </div>
    <div class="">
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

  #horizontal-spacer {
    position: absolute;
    top: 0;
  }

  #image-container {
    height: 70%;
    background-image: var(--img_url);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
