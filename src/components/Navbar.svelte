<style>
  nav {
    max-height: 40px;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(0, 100, 200);
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
    color: white;
    font-size: 0.9em;
  }
  .main-link:hover,
  .active {
    color: yellow;
  }
</style>

<nav>
  <h1 class="masthead">
    <a href="#/">🍏🍇</a>
  </h1>
  <div class="link-container">
    <a href="#/" class="main-link">Welcome</a>
    <a href="#/projects" class="main-link">Projects</a>
    <a href="#/skills" class="main-link">Skills</a>
    <a href="#/education" class="main-link">Education</a>
    <a href="#/writings" class="main-link">Writings</a>
  </div>

</nav>
