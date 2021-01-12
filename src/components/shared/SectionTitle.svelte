<script>
    export let sectionTitle;
    export let icon = "";
</script>

<style>
    .section-title {
        text-transform: capitalize;
        text-align: left;
        letter-spacing: 3px;
        font-size: 1.3em;
        color: goldenrod;
        font-family: Roboto;
    }
</style>

<h3 class="section-title">{sectionTitle} {icon}</h3>
