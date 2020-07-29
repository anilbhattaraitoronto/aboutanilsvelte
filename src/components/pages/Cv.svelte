<script>
  import { fade, slide, scale } from "svelte/transition";
  import { flip } from "svelte/animate";

  import PageTitle from "../shared/PageTitle.svelte";
  import SectionTitle from "../shared/SectionTitle.svelte";
  //import pages

  import Projects from "./Projects.svelte";
  import Skills from "./Skills.svelte";
  import Education from "./Education.svelte";
  import Writings from "./Writings.svelte";
  //import data
  import projects from "../../data/projects.js";
  import skills from "../../data/skills.js";
  import education from "../../data/education.js";
  import writings from "../../data/writings.js";

  let tabs = ["Projects", "Skills", "Education", "Writings"];
  let activeTab = "Projects";

  let visible = true;
  function showHide() {
    visible = visible === true ? !visible : !visible;
    console.log(visible);
  }
</script>

<style>
  main {
    width: 100%;
    max-width: 800px;
    margin: auto;
    color: lightgray;
  }
  nav {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .main-link {
    background: rgb(8, 104, 201);
    color: rgb(240, 230, 230);
    cursor: pointer;
    padding: 0 12px;
  }
  .active-tab,
  .main-link:hover {
    color: orange;
  }
</style>

<main>
  <PageTitle pageTitle="Full Résumé" />
  <nav>
    {#each tabs as item}
      <button
        class="main-link "
        class:active-tab={item === activeTab}
        on:click={() => (activeTab = item)}>
        {item}
      </button>
    {/each}
  </nav>
  {#if activeTab === 'Projects'}
    <section>
      <Projects />
    </section>
  {:else if activeTab === 'Skills'}
    <section>
      <Skills />
    </section>
  {:else if activeTab === 'Education'}
    <section>
      <Education />
    </section>
  {:else if activeTab === 'Writings'}
    <section>
      <Writings />
    </section>
  {/if}
</main>
