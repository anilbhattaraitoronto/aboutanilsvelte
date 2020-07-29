<style>
  nav {
    max-height: 40px;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(8, 104, 201);
    position: sticky;
    top: 0;
    box-shadow: 0 1px 0 rgb(44, 117, 201, 0.5);
  }
  .link-container {
    display: flex;
    justify-content: end;
    align-items: center;
  }
  .masthead {
    font-size: 1em;
    border: 1px solid rgba(211, 211, 211, 0.205);
    padding: 4px;
    border-radius: 3px;
    cursor: pointer;
  }
  .main-link {
    padding: 0 8px;
    border-right: 1px solid rgba(211, 211, 211, 0.205);
    color: rgb(218, 212, 212);
    font-size: 0.9em;
  }
  .main-link:hover,
  .active {
    color: goldenrod;
  }
</style>

<nav>
  <h1 class="masthead">
    <a href="#/">🍏🍇</a>
  </h1>
  <div class="link-container">
    <a href="#/" class="main-link">Welcome</a>
    <a href="#/cv" class="main-link">Full Résumé</a>
  </div>

</nav>
