<script>
  import PageTitle from "../shared/PageTitle.svelte";
  import projects from "../../data/projects.js";
  import SectionTitle from "../shared/SectionTitle.svelte";
</script>

<style>
  main {
    max-width: 800px;
    margin: auto;
    color: lightgray;
  }
  .item {
    margin: 24px auto;
    box-shadow: 1px 2px 2px rgb(172, 164, 164);
    padding: 20px;
  }
  .thumbnail {
    float: left;
    height: 100%;
    width: 120px;
    padding: 0 20px 8px 0;
  }
  a {
    color: darkorange;
  }
</style>

<main class="project-page">
  <PageTitle pageTitle="Projects" />
  <div class="projects">
    {#each projects as item}
      <article class="item">

        <a href={item.weblink} target="_blank">
          <SectionTitle sectionTitle={item.title} />
        </a>

        <p>Languages used: {item.languages}</p>
        <p>Frameworks: {item.frameworks}</p>
        <p>
          <img src={item.thumbnail} alt="" class="thumbnail" />
          {item.description}
        </p>
        <p>
          <a href={item.weblink}>{item.weblink}</a>
        </p>
        <p>
          Repository:
          <a href={item.repoLocation} target="_blank">{item.repoLocation}</a>

        </p>
        <p>{item.year}</p>

      </article>
    {/each}
  </div>

</main>
