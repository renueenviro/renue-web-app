<script>
  //LIBS
  import Icon from "@iconify/svelte";

  //STORES
  import { footer_data } from "../../stores/renuestore";

  let socialItems = $footer_data.social;

  // console.log($footer_data);
</script>

<div
  id="wrapper"
  class="w-full h-auto xl:px-148 lg:px-96 md:px-72 bg-on-background-variant-alpha"
>
  <nav class="flex items-center py-32 xl:text-lg lg:text-lg md:text-md">
    <div class="flex flex-grow space-x-32 text-sm">
      <a href="/">
        <img src={$footer_data.logo.url} alt="Renue Logo" class="w-120" />
      </a>
      <p>{$footer_data.copyright[0].text}</p>
    </div>
    <div class="flex items-center xl:space-x-48 sm:space-x-32 text-2xl">
      {#each socialItems as item}
        <a href="">
          <div class="text-secondary-dark hover:text-secondary-main">
            <Icon icon={"akar-icons:" + item.id + "-fill"} />
          </div>
        </a>
      {/each}
    </div>
  </nav>
</div>

<style>
  * {
    overflow: hidden;
  }
  #wrapper {
    z-index: 100;
  }
</style>
