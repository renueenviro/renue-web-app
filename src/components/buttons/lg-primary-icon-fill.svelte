<script>
  //LIBS
  import Icon from "@iconify/svelte";

  //PROPS
  export let icon_label, label, url;
</script>

<a href={url}>
  <button
    class="flex items-center space-x-16 w-268 h-72 text-on-background-variant font-bold rounded-md bg-primary-main hover:bg-secondary-main px-32"
  >
    <div class="text-xl">
      <Icon icon={icon_label} />
    </div>
    <h1 class="text-lg">{label}</h1>
  </button>
</a>
