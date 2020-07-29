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
    color: rgba(255, 255, 255, 0.815);
  }

  .section-image {
    float: left;
    height: 100px;
    width: 180px;
    object-fit: cover;
    padding: 0px 20px 0 0;
  }

  .item {
    padding: 8px;
    box-shadow: 1px 0 1px rgb(119, 131, 141);
    margin-bottom: 8px;
    border-radius: 8px;
  }
</style>

<main class="bio">
  <PageTitle pageTitle="Brief" />
  <article>
    {#each sections as section}
      <section class="item">

        <a href={section.route}>

          <SectionTitle sectionTitle={section.title} />
        </a>
        <img
          src={section.thumbnail}
          title={section.altText}
          alt={section.altText}
          class="section-image" />

        <Description description={section.description} />

      </section>
    {/each}
  </article>

</main>
