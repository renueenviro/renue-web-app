<script>
  export let label, url, id;

  const handleMouseEnter = () => {
    let underline = document.getElementById(id);
    underline.style.background = "linear-gradient(to right, #3FC4E5, #C5E87B)";
  };

  const handleMouseleave = () => {
    let underline = document.getElementById(id);
    underline.style.background = "#00000000";
  };
</script>

<div>
  <div
    class="px-16"
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseleave}
  >
    <a class="hover:text-secondary-main" href={url}>
      {label}
    </a>
  </div>
  <div class="flex justify-center ">
    <div {id} class="h-8 w-75" />
  </div>
</div>
