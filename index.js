const ul = document.getElementById("show");
const open = document.getElementById("open");
const links = document.querySelectorAll(".menu-link");
const data = [
  {
    title: "TONIC",
    desktop: "./images/SnapshootPortfolioB.svg",
    mobile: "./images/tonic.svg",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    info: {
      counter: "./images/counter.svg",
      year: 2015,
      canopy: "CANOPY",
      dev: "Back End Dev",
    },
    badges: ["html", "css", "Ruby"],
    livelink: "https://joffreynk.github.io/portfolio-desktop/",
    githublink: "https://github.com/JoffreyNK/portfolio-desktop",
  },
  {
    title: "Multi-Post Stories",
    desktop: "./images/SnapshootPortfolioA.svg",
    mobile: "./images/multi-post.svg",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    info: {
      counter: "./images/counter.svg",
      year: 2015,
      canopy: "CANOPY",
      dev: "Back End Dev",
    },
    badges: ["html", "css", "bootstap"],
    live: "https://joffreynk.github.io/portfolio-desktop/",
    github: "https://github.com/JoffreyNK/portfolio-desktop",
  },
  {
    title: "Professional",
    desktop: "./images/SnapshootPortfolioC.svg",
    mobile: "./images/profesional.svg",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    info: {
      counter: "./images/counter.svg",
      year: 2015,
      canopy: "CANOPY",
      dev: "Back End Dev",
    },
    badges: ["html", "css", "bootstap", "Ruby"],
    live: "https://joffreynk.github.io/portfolio-desktop/",
    github: "https://github.com/JoffreyNK/portfolio-desktop",
  },
  {
    title: "Multi-Post Stories",
    desktop: "./images/SnapshootPortfolioD.svg",
    mobile: "./images/tonic2.svg",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    info: {
      counter: "./images/counter.svg",
      year: 2015,
      canopy: "CANOPY",
      dev: "Back End Dev",
    },
    badges: ["html", "css", "bootstap", "Ruby"],
    live: "https://joffreynk.github.io/portfolio-desktop/",
    github: "https://github.com/JoffreyNK/portfolio-desktop",
  },
];

if (ul.classList.contains("show")) {
  ul.classList.remove("show");
}

links.forEach((link) => {
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  });
});

open.addEventListener("click", () => {
  ul.classList.add("show");
});

const bttns = document.querySelectorAll(".relatepop");

bttns.forEach((bttn) => {
  bttn.addEventListener("click", () => {
    const mainSection = document.querySelector("#portfolio");
    const id = Number(bttn.getAttribute("id"));
    const section = document.createElement("section");
    section.setAttribute("class", "popup-window");
    section.setAttribute("id", "modal");
    const project = create(data[id]);
    section.innerHTML = project;
    section.classList.add("showpop");
    mainSection.appendChild(section);
  });
});

function loop(par) {
  let text = ``;
  par.forEach((badge) => {
    text += `<li class="badge">${badge} </li>`;
  });
  return text;
}

function create(project, id) {
  const code = `<ul class="popup">
  <li class="popheader">
    <h2 class="project-title">${project.title}</h2>
    <img class="closeModal" id="closeModel" onclick="clicked();"  src="./images/closeIconpopup.svg" alt="close Icon">
  </li>
  <li class="project-info">
    <span class="project-info-items canopy">${project.info.canopy}</span>
    <img src=${project.info.counter} alt="counter">
    <span class="project-info-items dsk-fw">${project.info.dev}</span>
    <img src=${project.info.counter} alt="counter">
    <span class="project-info-items">${project.info.year}</span>
  </li>
  <li class="p-img-container">
    <img src=${project.mobile} alt="Tonic Activity on mobile version" class="mobile-image">
    <img src=${project.desktop} alt="Tonic activity on desktop version" 
   class="desktop-image">
  </li>
  <li class="card-description">
    <p class="project-welcome-text">${project.description}</p>
    <div class="skills-resources">
      <ul class="badges">
      ${
        loop(project.badges)
      }
      </ul>
      <div class="line-sep"><img src="./images/SeparatorBottom.svg" alt="separator"></div>
      <div class="btn-pop">
        <button class="button popbtn" type="button"><span>See live</span> <a href=${project.livelink}><img src="./images/viewMoreIcon.svg" alt="live"/></a> </button>
        <button class="button popbtn" type="button"><span>See source</span> <a href=${project.githublink}><img src="./images/github.svg" alt="source"/></a></button>
      </div>
    </div>
  </li>
  <li class="bottom-line"></li>
</ul>`;
return code;
}
