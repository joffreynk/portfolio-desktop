const ul = document.getElementById('show');
const open = document.getElementById('open');
const links = document.querySelectorAll('.menu-link');
const data = [
    {
      title: 'TONIC',
      desktop: './images/SnapshootPortfolioB.svg',
      mobile:"./images/tonic.svg",
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
      info:{
        counter:'./images/counter.svg',
        year:2015,
        canopy:'CANOPY',
        dev:'Back End Dev'
      },
      badges: [
        'html',
        'css',
        'Ruby',
      ],
      livelink: 'https://joffreynk.github.io/portfolio-desktop/',
      githublink: 'https://github.com/JoffreyNK/portfolio-desktop',
    },
    {
      title: 'Multi-Post Stories',
      desktop: './images/SnapshootPortfolioA.svg',
      mobile:"./images/multi-post.svg",
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
      info:{
        counter:'./images/counter.svg',
        year:2015,
        canopy:'CANOPY',
        dev:'Back End Dev'
      },
      badges: [
        'html',
        'css',
        'bootstap',
      ],
      live: 'https://joffreynk.github.io/portfolio-desktop/',
      github: 'https://github.com/JoffreyNK/portfolio-desktop',
    },
    {
      title: 'Professional',
      desktop: './images/SnapshootPortfolioC.svg',
      mobile:"./images/profesional.svg",
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
      info:{
        counter:'./images/counter.svg',
        year:2015,
        canopy:'CANOPY',
        dev:'Back End Dev'
      },
      badges: [
        'html',
        'css',
        'bootstap',
        'Ruby',
      ],
      live: 'https://joffreynk.github.io/portfolio-desktop/',
      github: 'https://github.com/JoffreyNK/portfolio-desktop',
    },
    {
      title: 'Multi-Post Stories',
      desktop: './images/SnapshootPortfolioD.svg',
      mobile:"./images/tonic2.svg",
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
      info:{
        counter:'./images/counter.svg',
        year:2015,
        canopy:'CANOPY',
        dev:'Back End Dev'
      },
      badges: [
        'html',
        'css',
        'bootstap',
        'Ruby',
      ],
      live: 'https://joffreynk.github.io/portfolio-desktop/',
      github: 'https://github.com/JoffreyNK/portfolio-desktop',
    }
  ];
  
  const bttns  = document.querySelectorAll('.relatepop');

  bttns.forEach((bttn) => {
    bttn.addEventListener('click',() => {
      const mainSection = document.querySelector('#portfolio')
      const id = Number(bttn.getAttribute('id'));
      const section = document.createElement('section');
      section.setAttribute('class', 'popup-window');
      section.setAttribute('id', 'modal');
      const project = create(data[id]);
      section.innerHTML =  project;
      section.classList.add('showpop');
      mainSection.appendChild(section);
    });
  });
  
  function loop(par) {
    let text = ``;
    par.forEach((badge) => {
      text+=`<li class="badge">${badge} </li>`;
    });
    return text;
  } 
  if (ul.classList.contains('show')) {
    ul.classList.remove('show');
  }
  
  links.forEach((link) => {
    link.addEventListener('click', () => {
      ul.classList.remove('show');
    });
  });
  
  open.addEventListener('click', () => {
    ul.classList.add('show');
  });
