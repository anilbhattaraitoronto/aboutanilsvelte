<script>
    import writings from "../../data/writings.js";
    import PageTitle from "../shared/PageTitle.svelte";
    import SectionTitle from "../shared/SectionTitle.svelte";
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
        padding: 20px;
        transition: 200ms all ease-in-out;
        border-radius: 8px;
    }
    article:hover {
        cursor: pointer;
        box-shadow: 1px 2px 10px rgb(54, 54, 63);
    }
    a {
        color: rgb(154, 207, 154);
    }
</style>

<main transition:fade={{ duration: 600, easing: quintOut }}>
    <PageTitle pageTitle="Writings" />

    <div class="writing-container">
        {#each writings as item}
            <article class="item">
                <a href={item.link} target="_blank">
                    <SectionTitle sectionTitle={item.title} />
                </a>

                <p>{item.summary}</p>
                <p>
                    <a href={item.link} target="_blank" rel="noreferrer">Link:
                        {item.title}</a>
                </p>
                <p>{item.year}</p>
            </article>
        {/each}
    </div>
</main>
