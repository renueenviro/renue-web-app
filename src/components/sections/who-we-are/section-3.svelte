<script>
  //CONTAINERS
  import SectionContainer from "../../containers/section-one-col-center.svelte";

  //PROPS
  export let contents;
</script>

<div class="bg-background-light">
  <SectionContainer>
    <div
      class="w-full px-240 py-360 items-center text-3xl font-bold text-center "
    >
      <h1 class="gradient-text-dark">{contents.headline}</h1>
    </div>
  </SectionContainer>
</div>
