import { skillData } from './data.js';

const skills = document.querySelector('.skills');
const skillInner = document.createElement('div');
skillInner.classList.add('inner');

const skillItem = (skill) => {
  const li = document.createElement('li');
  const icon = document.createElement('i');
  const name = document.createElement('span');
  const level = document.createElement('div');

  li.classList.add(skill.id);
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

const handleMouseEnter = (e) => {
  const desc = e.target.firstElementChild;
  desc.classList.remove('hidden');
};

const handleMouseLeave = (e) => {
  const desc = e.target.firstElementChild;
  desc.classList.add('hidden');
};

const loadSkills = () => {
  const title = document.createElement('h2');
  const icon = document.createElement('i');
  const descBox = document.createElement('div');
  const desc1 = document.createElement('p');
  const desc2 = document.createElement('p');
  const desc3 = document.createElement('p');
  const div = document.createElement('div');

  title.innerText = 'Skills';
  icon.className = 'fas fa-question-circle';
  descBox.classList.add('hidden');
  desc1.innerText = '1. 기초 지식 습득 후 자주 활용하지 않는 수준';
  desc2.innerText = '2. 취미 개발에 활용하는 수준';
  desc3.innerText = '3. 프로젝트에 활용 가능하며 자주 적용하는 수준';
  icon.addEventListener('mouseenter', handleMouseEnter);
  icon.addEventListener('mouseleave', handleMouseLeave);

  descBox.appendChild(desc1);
  descBox.appendChild(desc2);
  descBox.appendChild(desc3);
  icon.appendChild(descBox);
  title.appendChild(icon);
  skillInner.appendChild(title);
  skillData.forEach((group) => div.appendChild(skillGroup(group)));
  skillInner.appendChild(div);
};

function init() {
  loadSkills();
  skills.appendChild(skillInner);
}

init();
