<script>
    import active from "svelte-spa-router/active";
</script>

<style>
    nav {
        max-height: 40px;
        width: 100%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgb(7, 36, 65);
        position: sticky;
        top: 0;
        /* box-shadow: 0 1px 0 rgba(11, 48, 89, 0.5); */
        z-index: 100;
    }
    .link-container {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .masthead {
        font-size: 1em;
        border: 1px solid rgba(211, 211, 211, 0.205);
        padding: 4px;
        border-radius: 3px;
        cursor: pointer;
    }
    a {
        padding: 0 8px;
        border-right: 1px solid rgba(211, 211, 211, 0.205);
        color: rgb(218, 212, 212);
        font-size: 0.9em;
    }
    .main-link:hover {
        color: rgb(154, 207, 154);
    }
    :global(a.active) {
        color: rgb(154, 207, 154);
        text-decoration: underline;
    }
</style>

<nav>
    <div class="link-container">
        <a
            href="#/"
            class="main-link"
            use:active={{ path: '/', className: 'active' }}>
            🏠 Home
        </a>
        <!-- <a
      href="#/cv"
      class="main-link"
      use:active={{ path: '/cv', className: 'active' }}>
      Full Résumé
    </a> -->
    </div>
    <h1 class="masthead"><a href="#/">🍏🍇</a></h1>
</nav>
