const skills = document.querySelector('.skills');
const skillInner = document.createElement('div');
skillInner.classList.add('inner');

const groups = [
  {
    name: 'Front-end',
    skills: [
      {
        name: 'HTML5',
        level: 3,
        icon: 'fab fa-html5',
      },
      {
        name: 'CSS3',
        level: 3,
        icon: 'fab fa-css3-alt',
      },
      {
        name: 'JavaScript',
        level: 3,
        icon: 'fab fa-js',
      },
      {
        name: 'j-query',
        level: 1,
        icon: 'fas fa-code',
      },
      {
        name: 'React.js',
        level: 2,
        icon: 'fab fa-react',
      },
      {
        name: 'TypeScript',
        level: 1,
        icon: 'fas fa-file-alt',
      },
      {
        name: 'Sass/SCSS',
        level: 3,
        icon: 'fab fa-sass',
      },
    ],
  },
  {
    name: 'Back-end & Database',
    skills: [
      {
        name: 'Node.js',
        level: 2,
        icon: 'fab fa-node-js',
      },
      {
        name: 'Express.js',
        level: 2,
        icon: 'fas fa-clipboard',
      },
      {
        name: 'MySQL',
        level: 2,
        icon: 'fas fa-database',
      },
      {
        name: 'C',
        level: 1,
        icon: 'fas fa-laptop',
      },
      {
        name: 'C++',
        level: 1,
        icon: 'fas fa-laptop-medical',
      },
    ],
  },
  {
    name: 'ETC',
    skills: [
      {
        name: 'git/GitHub',
        level: 2,
        icon: 'fab fa-github',
      },
      {
        name: 'JIRA',
        level: 1,
        icon: 'fab fa-jira',
      },
      {
        name: 'Slack',
        level: 2,
        icon: 'fab fa-slack',
      },
      {
        name: 'python',
        level: 2,
        icon: 'fab fa-python',
      },
      {
        name: 'TensorFlow',
        level: 2,
        icon: 'fas fa-graduation-cap',
      },
      {
        name: 'R',
        level: 2,
        icon: 'fab fa-r-project',
      },
      {
        name: 'Google Analytics',
        level: 2,
        icon: 'fab fa-google',
      },
      {
        name: 'Firebase',
        level: 1,
        icon: 'fas fa-fire',
      },
    ],
  },
];

const skillItem = (skill) => {
  const li = document.createElement('li');
  const icon = document.createElement('i');
  const name = document.createElement('span');
  const level = document.createElement('div');

  icon.className = skill.icon;
  name.innerText = skill.name;
  level.innerText = `(LEVEL: ${skill.level})`;

  li.appendChild(icon);
  li.appendChild(name);
  li.appendChild(level);

  return li;
};

const skillGroup = (group) => {
  const div = document.createElement('div');
  const title = document.createElement('h4');
  const ul = document.createElement('ul');

  div.classList.add('group');
  title.innerText = group.name;
  group.skills.forEach((skill) => ul.appendChild(skillItem(skill)));

  div.appendChild(title);
  div.appendChild(ul);

  return div;
};

const loadSkills = () => {
  const title = document.createElement('h2');
  const div = document.createElement('div');
  title.innerText = 'Skills';
  skillInner.appendChild(title);
  groups.forEach((group) => div.appendChild(skillGroup(group)));
  skillInner.appendChild(div);
};

function init() {
  loadSkills();
  skills.appendChild(skillInner);
}

init();
