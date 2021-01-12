let projects = [
  {
    id: "kelytas-django-1",
    title: "A brand site for Kelytas wedding shop in Barrie, Ontario",
    languages: "Python, JavaScript, HTML, CSS",
    frameworks: "Django/Python in the backend and vanilla JS in the frontend",
    thumbnail: "/images/projects/kelytas_thumbnail.png",
    description:
      "A basic site for Kelytas shop in Barie, Ontario. It has the flexibility of expanding into full-fledged shop in the future if the client wants it.",
    repoLocation: "https://github.com/anilbhattaraitoronto/kelytas",
    weblink: "https://kelytas.com",
    completed: true,
    year: "2020",
  },
  {
    id: "anilresume-1",
    title: "Resume Single Page App in Svelte",
    languages: "HTML, CSS, JavaScript",
    frameworks: "Svelte",
    thumbnail: "/images/projects/resume_svelte_thumbnail.png",
    description:
      "A static resume site created with Svelte front-end framework.",
    repoLocation: "https://github.com/anilbhattaraitoronto/aboutanilsvelte.git",
    weblink: "https://about.dr-anil.com",
    completed: true,
    year: "2020",
  },
  {
    id: "resume-express-1",
    title: "Fullstack resume application",
    languages: "HTML, CSS, JavaScript",
    frameworks:
      "Node, Express, Ejs templating engine, Sqlite3 as database engine",
    thumbnail: "/images/projects/ab_logo_bw.png",
    description:
      "A fullstack resume application, this uses Express Node framework at the backend with Sqlite3 as database engine and EJS as templating engine. The front-end is vanilla HTML, CSS, and JavaScript. This application has authentication, and allows admin user to create, read, update, and delete functionality. Non admin users can read. It uses HTML tags such as Summary and Details to minimize the requests to the server and giving the users an app-like feel. It also uses vanilla JavaScript in the frontend to reduce the server requests while creating or updating posts, or signing in as admin user.",
    repoLocation: "https://github.com/anilbhattaraitoronto/resumefinal.git",
    weblink: "https://resume.dr-anil.com",
    completed: true,
    year: "2020",
  },
  {
    id: "playingpets-1",
    title: "A fullstack web application built in express and svelte",
    languages: "HTML, CSS, JavaScript",
    frameworks:
      "Svelte in the frontend, Express in the backend, Nginx as proxy server in Ubuntu VM, and Sqlite3 (for now) as database engine",
    thumbnail: "/images/projects/playingpets_thumbnail.png",
    description:
      "A web application built with Svelte in the frontend and express/Nodejs in the backend to create regular polls on different aspects of different pets. When completed, it will have a smooth animated user interface, full authentication, and full CRUD options for admin user(s).",
    repoLocation:
      "https://github.com/anilbhattaraitoronto/playingpets-svelte.git",
    weblink: "https://playingpets.com",
    completed: false,
    year: 2020,
  },
  {
    id: "nepali-merohouse-1",
    title: "Learn Nepali With Full topics",
    languages: "HTML, CSS, JavaScript",
    frameworks: "Vanilla JavaScript, CSS flexbox and grid, HTML",
    thumbnail: "/images/projects/nepali_merohouse_thumbnail.png",
    description:
      "A full application built by using vanilla JavaScript, CSS, HTML. This application provides a complete details about Nepali language. With the use of CSS grid and flexbox and JavaScript, it provides smooth navigation in different screents.",
    repoLocation:
      "https://github.com/anilbhattaraitoronto/nepali.merohouse.com.git",
    weblink: "https://nepali.merohouse.com",
    completed: false,
    year: "2020",
  },
  {
    id: "nepalijs-1",
    title: "nepalijs",
    languages: "HTML, CSS, JavaScript",
    frameworks: "Vanilla JavaScript, HTML, and CSS",
    thumbnail: "/images/projects/nepalijs_thumbnail.png",
    description:
      "A vanilla JavaScript application for learning Nepali language. This project uses modular approach in designing data structures. It combines both functional and object oriented approaches.",
    repoLocation: "https://github.com/anilbhattaraitoronto/nepalijs",
    weblink: "https://nepalijs.com",
    completed: true,
    year: "2019",
  },
  {
    id: "learn-nepali-netlify",
    title: "Learn Nepali",
    languages: "HTML, CSS, JavaScript",
    frameworks: "Vanilla JavaScript, HTML, and CSS",
    thumbnail: "/images/projects/nepali_netlify_thumbnail.png",
    description:
      "A JavaScript Application that gives an app-like feel in operation and look, for learning Nepali letters.",
    repoLocation: "https://github.com/anilbhattaraitoronto/learnnepalinow",
    weblink: "https://nepali.netlify.app",
    completed: true,
    year: "2019",
  },
  {
    id: "vowel-netlify",
    title: "Memory Game For Learning Nepali Vowels",
    languages: "HTML, CSS, JavaScript",
    frameworks: "Vanilla JavaScript, HTML, and Css",
    thumbnail: "/images/projects/netlify_vowel_memory_thumbnail.png",
    description:
      "A memory game that uses JavaScript, CSS Flexbox, and HTML to learn Nepali vowels.",
    repoLocation: "https://github.com/anilbhattaraitoronto/vowelmemory",
    weblink: "https://vowel.netlify.app",
    completed: true,
    year: "2019",
  },
  {
    id: "french-netlify",
    title: "Posts and fweets in French to Practice French Language",
    languages: "HTML, CSS, JavaScript",
    frameworks: "Vanilla JavaScript, HTML, CSS",
    thumbnail: "/images/projects/netlify_french_thumbnail.png",
    description:
      "An application for writing posts and short, snappy fweets (my version of tweets in French) in French to practice the language. It uses vanilla JavaScript, CSS grid and HTML. It uses mjs modules.",
    repoLocation: "https://github.com/anilbhattaraitoronto/mydailyfrench",
    weblink: "https://mydailyfrench.netlify.app/",
    completed: false,
    year: 2019,
  },
  {
    id: "f-m-s-multilang",
    title: "Posts on French, mandarin and spanish",
    languages: "HTML, CSS, JavaScript",
    frameworks: "Svelte, Nodejs, Express, HTML, CSS",
    thumbnail: "/images/projects/fms.png",
    description:
      "An application for writing posts  in French, Mandarin, and Spanish to practice the languages. It uses Nodejs and Express in the backend, Svelte in the front end and is deployed in Nginx server.",
    repoLocation: "https://github.com/anilbhattaraitoronto/",
    weblink: "https://french.merohouse.com",
    completed: false,
    year: 2019,
  },
];

export default projects;
