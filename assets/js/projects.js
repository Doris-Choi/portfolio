import openModal from './modal.js';
import { projData } from './data.js';

const projects = document.querySelector('.projects');
const projInner = document.createElement('div');
projInner.classList.add('inner');

const listItem = (text) => {
  const li = document.createElement('li');
  li.innerText = text;
  return li;
};

const projDetail = (e) => {
  openModal();
  let curr = e.target;
  while (curr.tagName !== 'LI') {
    curr = curr.parentNode;
  }
  const data = projData.filter((proj) => proj.id === curr.className * 1)[0];
  // detail
  const content = document.querySelector('.modal-content');
  const title = document.createElement('h2');
  const desc = document.createElement('p');
  const button = document.createElement('a');
  const skillTitle = document.createElement('h3');
  const skillUl = document.createElement('ul');
  const featTitle = document.createElement('h3');
  const featUl = document.createElement('ul');

  title.innerText = data.name;
  desc.innerText = data.desc;
  button.innerText = '링크로 연결하기🔗';
  button.href = data.url;
  button.target = '_blank';
  skillTitle.innerText = '사용 스킬';
  skillUl.classList.add('skill-container');
  featTitle.innerText = '기능 사항';
  featUl.classList.add('feat-container');
  data.skills.forEach((skill) => skillUl.appendChild(listItem(skill)));
  data.feats.forEach((feat) => featUl.appendChild(listItem(feat)));

  content.appendChild(title);
  content.appendChild(desc);
  content.appendChild(button);
  content.appendChild(skillTitle);
  content.appendChild(skillUl);
  content.appendChild(featTitle);
  content.appendChild(featUl);
};

const projItem = (proj) => {
  const li = document.createElement('li');
  const title = document.createElement('h4');
  const desc = document.createElement('div');

  li.classList.add(proj.id);
  title.innerText = proj.name;
  desc.innerHTML = proj.desc;

  li.addEventListener('click', projDetail);
  li.appendChild(title);
  li.appendChild(desc);

  return li;
};

const projList = (projs) => {
  const ul = document.createElement('ul');
  projs.forEach((proj) => ul.appendChild(projItem(proj)));
  return ul;
};

const loadProj = () => {
  const title = document.createElement('h2');
  const ul = projList(projData);
  title.innerText = 'Projects';
  projInner.appendChild(ul);
  projects.appendChild(title);
  projects.appendChild(projInner);
};

function init() {
  loadProj();
}

init();
