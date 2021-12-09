<script>
  import Button from "../buttons/lg-primary-fill.svelte";
  export let heading, subheading, paragraph;

  let splitted = subheading.split("%%");
  console.log("splitted", splitted);
</script>

<div id="wrapper" class="w-full">
  <div id="gradient">
    <div class="text-on-background-variant pt-168 px-148">
      <h1 class="text-8xl font-bold">
        {heading}
      </h1>
      <h2 class="text-6xl mt-16 font-bold">
        {splitted[0]}<span class="text-primary-main">{splitted[1]}</span
        >{splitted[2]}
      </h2>
      <h2 class="text-2xl mt-56 max-w-md">
        {paragraph}
      </h2>
      <div class="mt-56">
        <Button />
      </div>
    </div>
  </div>
</div>
<div id="phantom" class="" />

<style>
  * {
    overflow: hidden;
  }
  #wrapper {
    position: absolute;
    left: 0;
    top: 0;
    min-height: 800px;

    z-index: -1;

    background-image: url("https://media.istockphoto.com/photos/stainless-steel-pipes-and-pipelines-in-modern-beer-factory-brewery-picture-id1152495926");
    background-repeat: no-repeat;
    background-size: cover;
  }

  #gradient {
    position: absolute;
    left: 0;
    top: 0;
    min-height: 800px;
    width: 100%;
    z-index: 0;
    background: linear-gradient(to bottom, #0f1011de, rgba(53, 53, 53, 0.541));
  }

  #phantom {
    min-height: 800px;
  }
</style>
