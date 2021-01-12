<script>
    import active from "svelte-spa-router/active";
</script>

<style>
    nav {
        max-height: 40px;
        width: 100%;
        margin: 16px auto;
        display: flex;
        justify-content: center;
        align-items: center;
        /* background: rgb(8, 104, 201); */
        /* box-shadow: 0 1px 0 rgb(44, 117, 201, 0.5); */
    }
    a {
        padding: 2px 12px;
        border-right: 1px solid rgba(100, 133, 182, 0.205);
        color: rgb(218, 212, 212);
        font-size: 0.9em;
        /* box-shadow: 1px 2px 3px black; */
        border-top-right-radius: 16px;
    }
    .main-link:hover {
        color: rgb(154, 207, 154);
    }
</style>

<nav>
    <a
        href="#/projects"
        class="main-link"
        use:active={{ path: '/projects', className: 'active' }}>
        Projects
    </a>
    <a
        href="#/skills"
        class="main-link"
        use:active={{ path: '/skills', className: 'active' }}>
        Skills
    </a>
    <a
        href="#/education"
        class="main-link"
        use:active={{ path: '/education', className: 'active' }}>
        Education
    </a>
    <a
        href="#/writings"
        class="main-link"
        use:active={{ path: '/writings', className: 'active' }}>
        Writings
    </a>
</nav>
