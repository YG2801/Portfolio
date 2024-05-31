const data = {
  words: [
    "Front-end Developer",
    "Web Developer",
    "Competitive Programmer",
    "Tech Enthusiast",
  ],
  menuOptions: [
    { name: "Home", scroll: "hero" },
    { name: "About", scroll: "about" },
    { name: "Education", scroll: "education" },
    { name: "Projects", scroll: "projects" },
    { name: "Skills", scroll: "skills" },
    { name: "Contact", scroll: "contact" },
  ],
  aboutData: [
    "Hi, I'm Yash Garg, a front-end developer specializing in React and front-end development.",
    "I'm originally from Delhi and currently in my 3rd year of undergraduate studies, pursuing BTech.",
    "I have a strong background in JavaScript and have been creating many responsive frontend/web applications.",
    "In addition to my development work, I enjoy solving DSA problems and participating in competitive programming.",
    "I'm actively looking for internships and opportunities to expand my skills. Feel free to reach out to me through ",
  ],
  educationData: [
    {
      title: "Class X",
      year: "2019",
      school: "Lovely Public Sr. Sec. School",
      location: "Delhi, India",
      grade: "96.6%",
      image:
        "https://content.jdmagicbox.com/comp/delhi/b4/011p1219747106r1a7b4/catalogue/lovely-public-sr-sec-school-priyadarshini-vihar-delhi-schools-vqxa9x.jpg",
    },
    {
      title: "Class XII",
      year: "2021",
      school: "Lovely Public Sr. Sec. School",
      location: "Delhi, India",
      grade: "98.2%",
      image:
        "https://content.jdmagicbox.com/comp/delhi/b4/011p1219747106r1a7b4/catalogue/lovely-public-sr-sec-school-priyadarshini-vihar-delhi-schools-vqxa9x.jpg",
    },
    {
      title: "B.Tech",
      year: "2021-2025",
      school: "Delhi Technological University",
      location: "Delhi, India",
      grade: "8.9 CGPA",
      image:
        "https://images.shiksha.com/mediadata/images/1632465297phpyUzixv.jpeg",
    },
  ],
  projectsData: [
    {
      image: "project-bloggie.png",
      title: "Bloggie",
      liveLink: "https://my-bloggie.vercel.app/",
      githubLink: "https://github.com/YG2801/Bloggie",
      alignment: "left",
      techStack: {
        React:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        TailwindCSS:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png",
        Redux: "https://cdn.worldvectorlogo.com/logos/redux.svg",
        Appwrite: "https://appwrite.io/assets/logomark/logo.png",
      },
      isVideo: false,
    },
    {
      image: "project-space-tourism-website.png",
      title: "Space Tourism Website",
      liveLink: "https://space-tourism-website-delta-azure.vercel.app/",
      githubLink: "https://github.com/YG2801/Space-tourism-website",
      alignment: "center",
      techStack: {
        React:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        TailwindCSS:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png",
        Firebase:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Firebase_icon.svg/2048px-Firebase_icon.svg.png",
        FramerMotion: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
      },
    },
    {
      image: "project-quiz-app.png",
      title: "Quiz App",
      liveLink: "https://quiz-app-one-delta.vercel.app/",
      githubLink: "https://github.com/YG2801/Quiz-App",
      alignment: "left",
      techStack: {
        React:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        TailwindCSS:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png",
      },
      isVideo: false,
    },
    {
      image: "project-github-profile-finder.png",
      title: "Github User Finder",
      liveLink: "https://github-user-finder-28.vercel.app/",
      githubLink: "https://github.com/YG2801/Github-User-Finder",
      alignment: "center",
      techStack: {
        JavaScript: "https://www.svgrepo.com/show/303206/javascript-logo.svg",

        TailwindCSS:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png",
      },
      isVideo: false,
    },
    {
      image: "project-my-dictionary.png",
      title: "My Dictionary",
      liveLink: "https://my-dictionary-theta.vercel.app/",
      githubLink: "https://github.com/YG2801/My-Dictionary",
      alignment: "center",
      techStack: {
        React:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        TailwindCSS:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png",
      },
      isVideo: false,
    },
    {
      image: "project-meloverse.png",
      title: "Meloverse",
      liveLink: "https://meloverse28.netlify.app/",
      githubLink: "https://github.com/YG2801/MeloVerse",
      alignment: "left",
      techStack: {
        CSS: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png",
        JavaScript: "https://www.svgrepo.com/show/303206/javascript-logo.svg",
      },
      isVideo: false,
    },
    {
      image: "project-calci.png",
      title: "My Calci",
      liveLink: "https://my-calci-amber.vercel.app/",
      githubLink: "https://github.com/YG2801/Calci",
      alignment: "center",
      techStack: {
        JavaScript: "https://www.svgrepo.com/show/303206/javascript-logo.svg",
        TailwindCSS:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png",
      },
      isVideo: false,
    },
    {
      image: "project-interactive-card-component.png",
      title: "Interactive Card form",
      liveLink: "https://interactive-card-details-form-lime.vercel.app/",
      githubLink: "https://github.com/YG2801/Interactive-card-details-form",
      alignment: "center",
      techStack: {
        JavaScript: "https://www.svgrepo.com/show/303206/javascript-logo.svg",
        TailwindCSS:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png",
      },
      isVideo: false,
    },
    {
      image: "project-single-page-portfolio.png",
      title: "Single page Portfolio",
      liveLink: "https://single-page-portfolio-zeta.vercel.app/",
      githubLink: "https://github.com/YG2801/single-page-portfolio",
      alignment: "center",
      techStack: {
        TailwindCSS:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png",
      },
      isVideo: false,
    },
    {
      image: "project-dashblend.png",
      title: "Dashblend",
      liveLink:
        "https://drive.google.com/file/d/1VZUnq522C3F-zgKnS2uyxfo_2FHWqa8k/view",
      githubLink: "https://github.com/YG2801/Personal-Dashboard",
      alignment: "right",
      techStack: {
        CSS: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png",
        JavaScript: "https://www.svgrepo.com/show/303206/javascript-logo.svg",
      },
      isVideo: true,
    },
    {
      image: "project-rock-paper-scissors.png",
      title: "Rock Paper Scissors",
      liveLink: "https://rock-paper-scissors-nine-virid.vercel.app/",
      githubLink: "https://github.com/YG2801/Rock-Paper-Scissors",
      alignment: "center",
      techStack: {
        JavaScript: "https://www.svgrepo.com/show/303206/javascript-logo.svg",
        TailwindCSS:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png",
      },
    },
    {
      image: "project-passlock-pro.png",
      title: "Pass Lock Pro",
      liveLink: "https://pass-lock-pro.netlify.app/",
      githubLink: "https://github.com/YG2801/Password-Generator",
      alignment: "center",
      techStack: {
        CSS: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png",
        JavaScript: "https://www.svgrepo.com/show/303206/javascript-logo.svg",
      },
    },
  ],
};

export default data;
