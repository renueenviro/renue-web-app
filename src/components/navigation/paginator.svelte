<script>
  //PROPS
  export let is_active;
</script>

{#if is_active}
  <div id="dot" class="w-16 h-16 bg-secondary-main" />
{:else}
  <div id="dot" class="w-16 h-16 bg-primary-main" />
{/if}

<style>
  #dot {
    border-radius: 50%;
  }
</style>
