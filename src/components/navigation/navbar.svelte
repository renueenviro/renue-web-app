<script>
  //COMPONENTS
  import MenuItem from "./menu-item.svelte";

  //STORES
  import { navbar_data } from "../../stores/renuestore";

  let menuItems = $navbar_data["menu-item"];
</script>

<div
  id="wrapper"
  class="w-full xl:px-148 lg:px-96 md:px-72 h-72 bg-on-background-variant-alpha"
>
  <nav class="flex py-16 lg:text-md md:text-md">
    <div class="flex-grow">
      <a class="" href="/">
        <img src={$navbar_data.logo.url} alt="Renue Logo" class="md:w-168" />
      </a>
    </div>
    <div class="flex items-center xl:space-x-16 lg:space-x-32">
      {#each menuItems as item}
        <MenuItem label={item.label} url={item.url} id={item.label} />
      {/each}
    </div>
  </nav>
</div>

<style>
  * {
    overflow: hidden;
  }
  #wrapper {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
  }
</style>
