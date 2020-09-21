const projects = document.querySelector('.projects');
const projInner = document.createElement('div');
projInner.classList.add('inner');

const data = [
  {
    name: 'Portfolio',
    desc: '현재 포트폴리오 사이트',
    url: 'https://doyoungchoi.github.io/portfolio/',
    skills: ['HTML', 'CSS', 'Vanila JS', 'Font Awesome'],
    feats: [
      '연락처별 연결 방식 구현',
      'Skill별 상세보기 (모달)',
      'Project별 상세보기 (모달)',
      '반응형 웹사이트 구현',
    ],
  },
  {
    name: 'Portfolio',
    desc: '현재 포트폴리오 사이트',
    url: 'https://doyoungchoi.github.io/portfolio/',
    skills: ['HTML', 'CSS', 'Vanila JS', 'Font Awesome'],
    feats: [
      '연락처별 연결 방식 구현',
      'Skill별 상세보기 (모달)',
      'Project별 상세보기 (모달)',
      '반응형 웹사이트 구현',
    ],
  },
  {
    name: 'Portfolio',
    desc: '현재 포트폴리오 사이트',
    url: 'https://doyoungchoi.github.io/portfolio/',
    skills: ['HTML', 'CSS', 'Vanila JS', 'Font Awesome'],
    feats: [
      '연락처별 연결 방식 구현',
      'Skill별 상세보기 (모달)',
      'Project별 상세보기 (모달)',
      '반응형 웹사이트 구현',
    ],
  },
  {
    name: 'Portfolio',
    desc: '현재 포트폴리오 사이트',
    url: 'https://doyoungchoi.github.io/portfolio/',
    skills: ['HTML', 'CSS', 'Vanila JS', 'Font Awesome'],
    feats: [
      '연락처별 연결 방식 구현',
      'Skill별 상세보기 (모달)',
      'Project별 상세보기 (모달)',
      '반응형 웹사이트 구현',
    ],
  },
  {
    name: 'Portfolio',
    desc: '현재 포트폴리오 사이트',
    url: 'https://doyoungchoi.github.io/portfolio/',
    skills: ['HTML', 'CSS', 'Vanila JS', 'Font Awesome'],
    feats: [
      '연락처별 연결 방식 구현',
      'Skill별 상세보기 (모달)',
      'Project별 상세보기 (모달)',
      '반응형 웹사이트 구현',
    ],
  },
];

const projectItem = (project) => {
  const li = document.createElement('li');
  const title = document.createElement('h4');
  const desc = document.createElement('div');

  title.innerText = project.name;
  desc.innerHTML = project.desc;

  li.appendChild(title);
  li.appendChild(desc);

  return li;
};

const projectList = (data) => {
  const ul = document.createElement('ul');
  data.forEach((project) => ul.appendChild(projectItem(project)));
  return ul;
};

const loadProject = () => {
  const title = document.createElement('h2');
  const ul = projectList(data);
  title.innerText = 'Projects';
  projInner.appendChild(ul);
  projects.appendChild(title);
  projects.appendChild(projInner);
};

function init() {
  loadProject();
}

init();
