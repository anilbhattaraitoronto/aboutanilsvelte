<script>
  import PageTitle from "../shared/PageTitle.svelte";
  import SectionTitle from "../shared/SectionTitle.svelte";
  import education from "../../data/education.js";
</script>

<style>
  main {
    max-width: 800px;
    margin: auto;
    color: lightgray;
  }
  article {
    margin: 24px auto;
    box-shadow: 1px 2px 2px rgb(172, 164, 164);
    padding: 20px;
  }
  span {
    color: darkorange;
  }
</style>

<main class="education-page">
  <PageTitle pageTitle="Education" />
  <div class="education-container">
    {#each education as item}
      <article class="item">
        <SectionTitle sectionTitle={item.degree} />
        <p>{item.department}</p>
        <p>{item.university}</p>
        <p>{item.year}</p>
        <p>
          <span>Thesis:</span>
          {item.thesis}
        </p>
      </article>
    {/each}
  </div>

</main>
