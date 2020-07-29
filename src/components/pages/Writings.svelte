<script>
  import writings from "../../data/writings.js";
  import PageTitle from "../shared/PageTitle.svelte";
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
  a {
    color: darkorange;
  }
</style>

<main>
  <PageTitle pageTitle="Writings" />
  <div class="writing-container">
    {#each writings as item}
      <article class="item">
        <a href={item.link} target="_blank">
          <h4 class="item-title">{item.title}</h4>
        </a>
        <p>{item.summary}</p>
        <p>
          <a href={item.link} target="_blank">{item.link}</a>
        </p>
        <p>{item.year}</p>
      </article>
    {/each}

  </div>
</main>
