<script>
    import PageTitle from "../shared/PageTitle.svelte";
    import SectionTitle from "../shared/SectionTitle.svelte";
    import skills from "../../data/skills.js";
    import { slide, fade } from "svelte/transition";
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
</style>

<main transition:fade={{ duration: 600, easing: quintOut }}>
    <PageTitle pageTitle="Skills" />

    <div class="skills">
        {#each skills as item (item.id)}
            <article class="skill">
                <SectionTitle sectionTitle={item.title} />
                <p>Category: {item.category}</p>
                <p>Competence Level: {item.level}</p>
                <p>
                    {@html item.description}
                </p>
            </article>
        {/each}
    </div>
</main>
