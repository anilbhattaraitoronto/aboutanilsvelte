<script>
  import PageTitle from "../shared/PageTitle.svelte";
  import Bio from "./Bio.svelte";
</script>

<style>
  .landing {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8px;
    background: rgb(0, 100, 200);
    padding: 0 8px;
  }
  .landing-image {
    display: block;
    width: 100%;
    margin: auto;
    padding-bottom: 8px;
  }
  /* .link-container {
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .main-link {
    padding: 0 8px;
    border-right: 1px solid rgba(211, 211, 211, 0.205);
    color: white;
    font-size: 0.9em;
  }
  .main-link:hover,
  .active {
    color: yellow;
  } */
  @media (max-width: 700px) {
    .landing {
      grid-template-columns: 1fr;
    }
  }
</style>

<main class="landing">

  <article>
    <PageTitle pageTitle="Welcome" />
    <div class="image-container">
      <img
        src="/images/profile_pic.jpg"
        alt="Anil Bhattarai"
        class="landing-image" />
    </div>
  </article>
  <Bio />

</main>
