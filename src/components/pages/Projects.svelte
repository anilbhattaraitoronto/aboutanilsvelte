<script>
    import PageTitle from "../shared/PageTitle.svelte";
    import projects from "../../data/projects.js";
    import SectionTitle from "../shared/SectionTitle.svelte";
    import { scale, slide, fade } from "svelte/transition";
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
        box-shadow: 0px 0px 1px rgb(39, 80, 119);
        transition: 200ms all ease-in-out;
        padding: 20px;
        border-radius: 8px;
    }
    article:hover {
        cursor: pointer;
        box-shadow: 1px 2px 10px rgb(54, 54, 63);
    }
    .thumbnail {
        float: left;
        height: 100%;
        width: 120px;
        padding: 0 20px 8px 0;
    }
    a {
        color: rgb(154, 207, 154);
    }
</style>

<main
    class="project-page"
    transition:fade={{ duration: 600, easing: quintOut }}>
    <PageTitle pageTitle="Projects" />

    <div class="projects">
        {#each projects as item}
            <article class="item">
                <a href={item.weblink} target="_blank" rel="noreferrer">
                    <SectionTitle sectionTitle={item.title} />
                </a>

                <p>Languages used: {item.languages}</p>
                <p>Frameworks: {item.frameworks}</p>
                <p>
                    <img src={item.thumbnail} alt="" class="thumbnail" />
                    {item.description}
                </p>
                <p><a href={item.weblink}>{item.weblink}</a></p>
                <p>
                    Github Repository Link:
                    <a
                        href={item.repoLocation}
                        target="_blank"
                        rel="noreferrer">{item.title}</a>
                </p>
                <p>{item.year}</p>
            </article>
        {/each}
    </div>
</main>
