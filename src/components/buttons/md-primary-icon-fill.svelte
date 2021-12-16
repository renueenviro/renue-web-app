<script>
  //LIBS
  import Icon from "@iconify/svelte";

  //PROPS
  export let icon_label, label, url;
</script>

<button
  class="flex items-center space-x-8 w-auto h-56 text-primary-main font-bold rounded-md border-4 border-primary-main hover:border-secondary-main px-16"
>
  <h1 class="text-md">{label}</h1>
  <div class="text-xl">
    <Icon icon={icon_label} />
  </div>
</button>
