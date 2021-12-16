<script>
  import Icon from "@iconify/svelte";
</script>

<div
  id="wrapper"
  class="w-full h-auto xl:px-148 lg:px-96 md:px-72 bg-on-background-variant-alpha"
>
  <nav class="flex items-center py-32 xl:text-lg lg:text-lg md:text-md">
    <div class="flex flex-grow space-x-48 text-sm">
      <a href="/">
        <img src="assets/logo.png" alt="Renue Logo" class="w-120" />
      </a>
      <p>©RENUE, All rights reserved</p>
    </div>
    <div
      class="flex items-center xl:space-x-48 sm:space-x-32 text-2xl text-secondary-dark"
    >
      <a href="">
        <Icon icon="akar-icons:twitter-fill" />
      </a>
      <a href="">
        <Icon icon="akar-icons:facebook-fill" />
      </a>
      <a href="">
        <Icon icon="akar-icons:youtube-fill" />
      </a>
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
