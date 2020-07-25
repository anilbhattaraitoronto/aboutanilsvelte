<script>
  import PageTitle from "../shared/PageTitle.svelte";
  import SectionTitle from "../shared/SectionTitle.svelte";
  import Description from "../shared/Description.svelte";
  import sections from "../../data/sections.js";
</script>

<style>
  .bio {
    padding: 0 16px;
    /* background: rgb(0, 100, 200); */
  }
  a {
    color: white;
  }
  article {
  }
</style>

<main class="bio">
  <PageTitle pageTitle="Brief Bio" />
  <article>
    {#each sections as section}
      <section class="item">
        <a href={section.route}>
          <SectionTitle sectionTitle={section.title} />
        </a>
        <Description description={section.description} />
      </section>
    {/each}
  </article>

</main>
