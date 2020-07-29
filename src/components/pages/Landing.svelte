<script>
  import PageTitle from "../shared/PageTitle.svelte";
  import Bio from "./Bio.svelte";
</script>

<style>
  .landing {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8px;
    background: rgb(0, 100, 200);
  }
  .landing-image {
    display: block;
    width: 100%;
    margin: auto;
    box-shadow: 1px 0 1px #aaa;
    border-radius: 4px;
  }
  figure {
    all: unset;
    text-align: right;
    color: rgba(170, 170, 170, 0.603);
    font-size: 14px;
    font-style: italic;
    padding: 0;
  }
  .cv {
    text-align: right;
    display: flex;
    justify-content: end;
    align-items: center;
  }
  .cv-link {
    padding: 0 16px;
  }
  .cv-link,
  .email-link {
    color: darkorange;
  }
  .bio-text {
    padding: 20px;
    color: lightgray;
    /* background: white; */
  }
  .cv-section-title {
    background: rgb(0, 65, 139);
    padding: 2px 8px;
    color: white;
  }
  /* .link-container {
    display: flex;
    justify-content: start;
    align-items: center;
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
  } */
  @media (max-width: 700px) {
    .landing {
      grid-template-columns: 1fr;
    }
  }
</style>

<main class="landing">

  <article>
    <PageTitle pageTitle="Welcome" />
    <div class="image-container">
      <figure>
        <img
          src="/images/profile_pic.jpg"
          alt="Anil Bhattarai"
          class="landing-image" />
        <figcaption>Dr Anil Bhattarai, 2014, Photo: Bicram Rizal</figcaption>
      </figure>

    </div>
    <div class="bio-text">
      <p class="cv">
        <span class="cv-section-title cv-link">Full Résumé:</span>
        <a href="#/cv" class="cv-link">HTML</a>
        <a href="/resume_2020.pdf" class="cv-link">PDF</a>
      </p>

      <p>Hello!</p>
      <p>
        My name is Anil Bhattarai. I am a full-stack programmer. In this page, I
        will showcase my projects, skills, educational qualifications and
        writings.
      </p>
      <p>
        I like playing guitar 🎸, writing songs 🎼, hiking 🧗🏽‍♂️, and
        philosophizing about almost everything in the universe: from tiniest
        sub-atomic particles to the making of the universe itself.
      </p>
      <p>
        You can also email me at
        <a href="mailto:anilbhattarai@SpeechGrammarList.com" class="email-link">
          anilbhattarai@gmail.com
        </a>
      </p>

    </div>
  </article>
  <Bio />

</main>
