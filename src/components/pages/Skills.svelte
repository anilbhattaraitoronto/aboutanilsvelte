<script>
  import PageTitle from "../shared/PageTitle.svelte";
  import SectionTitle from "../shared/SectionTitle.svelte";
  import skills from "../../data/skills.js";
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
</style>

<main>
  <PageTitle pageTitle="Skills" />
  <div class="skills">
    {#each skills as item (item.id)}
      <article class="skill">
        <SectionTitle sectionTitle={item.title} />
        <p>Category: {item.category}</p>
        <p>Competence Level: {item.level}</p>
        <p>{item.description}</p>
      </article>
    {/each}
  </div>
</main>
