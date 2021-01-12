<script>
    import Router from "svelte-spa-router";
    import Navbar from "./components/Navbar.svelte";
    import MiniNavbar from "./components/MiniNavbar.svelte";
    //   import Cv from "./components/pages/Cv.svelte";
    import Landing from "./components/pages/Landing.svelte";
    import Projects from "./components/pages/Projects.svelte";
    import Skills from "./components/pages/Skills.svelte";
    import Education from "./components/pages/Education.svelte";
    import Writings from "./components/pages/Writings.svelte";
    import Footer from "./components/Footer.svelte";

    const routes = {
        // "/cv": Cv,
        "/": Landing,
        "/projects": Projects,
        "/skills": Skills,
        "/education": Education,
        "/writings": Writings,
    };
</script>

<style>
    main {
        position: relative;
        width: 100%;
        max-width: 1200px;
        margin: auto;
        z-index: 20;
    }
</style>

<main>
    <Navbar />

    <div class="mini-navbar">
        <MiniNavbar />
    </div>

    <Router {routes} />
    <Footer />
</main>
