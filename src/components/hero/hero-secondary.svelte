<script>
  //PROPS
  export let headline, paragraph;
</script>

<div id="wrapper">
  <div id="gradient">
    <div
      id="contents"
      class="flex flex-col text-on-background-variant pt-360 xl:px-148 lg:px-96 md:px-72"
    >
      <div class="flex items-center space-x-24 lg:h-240">
        <div
          id="vertical-line"
          class="pt-360 w-24 gradient-blue-to-green-light-diagonal"
        />
        <div>
          <div>
            <h1 class="text-4xl font-bold leading-4xl">
              {headline}
            </h1>
          </div>
          <div class="lg:w-720 sm:w-520">
            <h2 class="text-lg leading-md mt-16">
              {paragraph}
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  * {
    overflow: hidden;
  }
  #wrapper {
    position: relative;
    z-index: 1;
    min-height: 800px;
    margin: auto;
    background-image: url("https://media.istockphoto.com/photos/stainless-steel-pipes-and-pipelines-in-modern-beer-factory-brewery-picture-id1152495926");
    background-repeat: no-repeat;
    background-size: cover;
  }

  #gradient {
    position: absolute;
    margin: auto;
    left: 0;
    top: 0;
    min-height: 800px;
    width: 100%;
    z-index: -10;
    background: linear-gradient(
      to bottom right,
      #0b1d2ee5 10%,
      rgba(53, 53, 53, 0.541)
    );
  }

  #contents {
    position: absolute;
    z-index: 10;
  }
</style>
