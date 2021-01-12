let categories = {
  front: "Frontend",
  back: "Backend",
  devops: "Devops",
  fullstack: "Fullstack",
};

let levels = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};
let skills = [
  {
    id: "html-1",
    title: "HTML",
    category: categories.front,
    level: levels.advanced,
    description:
      "I have advanced level of competence which includes generating data-based page-structure, using semantic tags, and form handling.",
  },
  {
    id: "css-1",
    title: "CSS",
    category: categories.front,
    level: levels.advanced,
    description:
      "I have advanced level of competence in CSS. I use modern CSS features such as Flexbox, Grid, variables to style HTML pages into responsive and accessible sites.",
  },
  {
    id: "js-1",
    title: "JavaScript",
    category: categories.front,
    level: levels.intermediate,
    description:
      "I have intermediate to advanced level skills in JavaScript. I utilize it to add interactivity to sites, to create full-fledged interactive applications, and to build full stack applications with frameworks such as Express.",
  },
  {
    id: "wp-1",
    title: "Wordpress",
    category: categories.fullstack,
    level: levels.intermediate,
    description:
      "I have intermediate to advanced level skills in setting up and administering websites, and deploying them to Nginx servers. I can also customize existing themes and create new themes if required.",
  },
  {
    id: "python-1",
    title: "Python",
    category: categories.fullstack,
    level: levels.intermediate,
    description:
      `I have intermediate to advanced level skills python programming language. I use python for <strong>data analytics</strong>, <strong>web development</strong> and server side programming.`,
  },
];

export default skills;
