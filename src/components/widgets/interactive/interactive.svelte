<script>
  //LIBS
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  export let contents;

  onMount(async () => {
    await contents.forEach((item, i) => {
      let highlight = document.getElementById(item.id);
      highlight.style.visibility = "hidden";

      if (item.visible == true) {
        let root = document.querySelector(":root");
        root.style.setProperty("--imgurl", "url(" + item.imageUrl + ")");
      }
    });
  });

  const handleMouseEnter = async (item) => {
    let highlight = await document.getElementById(item);
    highlight.style.visibility = "visible";

    await contents.forEach((interactiveItem, i) => {
      if (interactiveItem.id == item) {
        contents[i].visible = true;
        let root = document.querySelector(":root");
        root.style.setProperty(
          "--imgurl",
          "url(" + interactiveItem.imageUrl + ")"
        );
      } else {
        contents[i].visible = false;
      }
    });
  };

  const handleMouseLeave = async (item) => {
    let highlight = document.getElementById(item);
    highlight.style.visibility = "hidden";
  };
</script>

<div
  id="wrapper"
  class="grid grid-flow-col grid-cols-5 w-full  gradient-bg-semidark-secondary"
>
  <div
    class="flex col-span-2 py-240 pl-148 h-full items-center text-4xl font-bold"
  >
    <div class="w-full space-y-24">
      {#each contents as item}
        <div
          class="flex w-full items-center space-x-16"
          on:mouseenter={() => handleMouseEnter(item.id)}
          on:mouseleave={() => handleMouseLeave(item.id)}
        >
          <div
            id={item.id}
            class="w-16 h-64 gradient-blue-to-green-light-diagonal"
          />
          <h1 class="gradient-text-blue-to-green-vertical">{item.label}</h1>
        </div>
      {/each}
    </div>
  </div>
  <div class="col-span-3">
    {#each contents as item}
      {#if item.visible}
        <div
          id="slide"
          class="w-1120 h-1120"
          transition:fly={{ x: 600, duration: 1000 }}
        >
          <div
            id="overlay"
            class="flex w-1120 h-1120 text-lg text-on-background-variant"
          >
            <div id="text-wrapper" class="flex m-32">
              <h1>{item.paragraph}</h1>
            </div>
          </div>
          <div id="img-container" />
        </div>
      {/if}
    {/each}
  </div>
</div>

<style>
  :root {
    --imgurl: "";
  }

  * {
    overflow: hidden;
  }

  #wrapper {
    position: relative;
  }

  #img-container {
    width: 1200px;
    height: 820px;
    background-image: var(--imgurl);
    background-repeat: no-repeat;
    background-size: fit;
  }

  #slide {
    position: absolute;
    right: 0;
    display: flex;
    height: auto;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  #text-wrapper {
    position: absolute;
    bottom: 0;
  }

  #overlay {
    position: absolute;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      #02161b55,
      #02161b55 65%,
      #000000c9 85%
    );
  }
</style>
