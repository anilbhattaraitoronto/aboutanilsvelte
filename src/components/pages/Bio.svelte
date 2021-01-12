<script>
    import PageTitle from "../shared/PageTitle.svelte";
    import SectionTitle from "../shared/SectionTitle.svelte";
    import Description from "../shared/Description.svelte";
    import sections from "../../data/sections.js";
    import { flip } from "svelte/animate";
    import { quintOut } from "svelte/easing";
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
        /* filter: drop-shadow(1px, 2px, 3px rgb(66, 62, 62)); */
    }

    .item {
        padding: 20px;
        box-shadow: 0 0 1px rgb(39, 80, 119);
        transition: 200ms all ease-in-out;
        margin-top: 24px;
        margin-bottom: 8px;
        border-radius: 8px;
        /* filter: drop-shadow(1px, 2px, 3px rgb(66, 62, 62)); */
    }
    .item:hover {
        cursor: pointer;
        box-shadow: 1px 0px 10px rgb(54, 54, 63);
    }
    span {
        font-size: 24px;
    }
</style>

<main class="bio">
    <PageTitle pageTitle="Brief" />

    <article>
        {#each sections as section (section)}
            <section class="item">
                <a href={section.route}>
                    <SectionTitle
                        sectionTitle={section.title}
                        icon={section.icon} />
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
