<script>
  import Navbar from "../components/navigation/navbar.svelte";
  import MainContainer from "../components/containers/main.svelte";

  import "../layout.css";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Mulish&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<MainContainer>
  <Navbar />
  <slot />
</MainContainer>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
