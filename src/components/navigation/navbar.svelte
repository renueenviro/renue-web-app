<script>
  import MenuItem from "./menu-item.svelte";

  let label1 = "who-we-are";
  let label2 = "what-we-do";
  let label3 = "leadership";
  let label4 = "news";
  let label5 = "contact";
</script>

<div
  id="wrapper"
  class="w-full xl:px-148 lg:px-96 md:px-72 h-72 bg-on-background-variant-alpha"
>
  <nav class="flex py-16 xl:text-lg lg:text-lg md:text-md">
    <div class="flex-grow">
      <a class="" href="/">
        <img src="assets/logo.png" alt="Renue Logo" class="w-200" />
      </a>
    </div>
    <div class="flex items-center xl:space-x-32 lg:space-x-32">
      <MenuItem label="Who We Are" url={"/" + label1} id={label1} />
      <MenuItem label="What We Do" url={"/" + label2} id={label2} />
      <MenuItem label="Leadership" url={"/" + label3} id={label3} />
      <MenuItem label="News" url={"/" + label4} id={label4} />
      <MenuItem label="Contact" url={"/" + label5} id={label5} />
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
