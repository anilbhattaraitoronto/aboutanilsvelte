<script>
    import PageTitle from "../shared/PageTitle.svelte";
    import SectionTitle from "../shared/SectionTitle.svelte";
    import education from "../../data/education.js";
    import { fade } from "svelte/transition";
    import { quintOut } from "svelte/easing";
</script>

<style>
    main {
        max-width: 800px;
        margin: auto;
        color: lightgray;
    }
    article {
        margin: 20px auto;
        box-shadow: 0 0 1px rgb(39, 80, 119);
        transition: 200ms all ease-in-out;
        padding: 20px;
        border-radius: 8px;
    }
    article:hover {
        cursor: pointer;
        box-shadow: 1px 2px 10px rgb(54, 54, 63);
    }
    span {
        color: rgb(154, 207, 154);
    }
</style>

<main
    class="education-page"
    transition:fade={{ duration: 600, easing: quintOut }}>
    <PageTitle pageTitle="Education" />

    <div class="education-container">
        {#each education as item}
            <article class="item">
                <SectionTitle sectionTitle={item.degree} />
                <p>{item.department}</p>
                <p>{item.university}</p>
                <p>{item.year}</p>
                <p><span>Thesis:</span> {item.thesis}</p>
            </article>
        {/each}
    </div>
</main>
