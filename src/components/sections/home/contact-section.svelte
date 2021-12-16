<script>
  //SECTIONS
  import SectionContainer from "../../containers/section-one-col-center.svelte";

  //COMPONENTS
  import Button from "../../buttons/lg-primary-icon-fill.svelte";
</script>

<SectionContainer>
  <div class="flex flex-col justify-center w-full text-center py-120">
    <h1 class="text-2xl font-bold text-on-background-variant mb-56">
      Ready to <span class="text-primary-main font-bold">RENUE</span> the world?
    </h1>
    <div class="w-auto mx-auto">
      <Button icon_label="ic:outline-eco" label="Get Started" url="/contact" />
    </div>
  </div>
</SectionContainer>
