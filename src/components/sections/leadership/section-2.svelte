<script>
  //CONTAINERS
  import SectionContainer from "../../containers/section-matrix.svelte";

  //COMPONENTS
  import CardBioDark from "../../cards/bio-dark.svelte";

  //PROPS
  export let contents;
  //console.log("contents.", contents.section_2_data);
</script>

<SectionContainer>
  {#if contents !== undefined}
    {#each contents.section_2_data as card}
      <div class="flex justify-center">
        <CardBioDark
          name={card.name}
          role={card.role}
          more={card.more}
          img_url={card.img_url}
        />
      </div>
    {/each}
  {/if}
</SectionContainer>
