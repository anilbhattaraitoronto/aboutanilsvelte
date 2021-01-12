<script>
    export let pageTitle = "Hello";
    export let icon = "";
</script>

<style>
    h2 {
        color: rgb(143, 173, 238);
        letter-spacing: 3px;
    }
</style>

<h2 title={pageTitle}>{icon}{pageTitle}</h2>
