// NAVI Link
const lis = document.querySelectorAll('nav ul li');
for (let li of lis) {
  li.addEventListener('click', (e) => {
    const elem =
      document.querySelector(`.${li.innerText.toLowerCase()}`) ||
      document.querySelector('header');
    window.scrollTo({ top: elem.offsetTop - 30, behavior: 'smooth' });
    offElements();
  });
}

// Toggle Button
const toggles = document.querySelectorAll('.toggle');
const toggleBtn = document.getElementById('toggle-btn');

function toggleOn() {
  [].forEach.call(toggles, (toggle) => {
    toggle.classList.toggle('on');
  });
}
function offElements() {
  [].forEach.call(toggles, (toggle) => {
    toggle.classList.remove('on');
  });
}

toggleBtn.addEventListener('click', () => {
  toggleOn();
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 800) offElements();
});

// SKILLS section
`field
 ㄴ subject: field 대표 이름
 ㄴ items: field에 포함되는 skill의 객체
    ㄴ skill(각 스킬 별)
       ㄴ name: 스킬 이름
       ㄴ icon: icon의 svg 코드`;
import { skills } from './skills.js';

const skillSection = document.querySelector('.skills');

const frag = document.createDocumentFragment();
for (let field in skills) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  const subject = document.createElement('h3');
  subject.innerText = skills[field].subject;

  const ul = document.createElement('ul');
  for (let skill in skills[field].items) {
    const li = document.createElement('li');
    const icon = document.createElement('div');
    const name = document.createElement('span');

    icon.classList.add('icon');
    icon.style.backgroundImage = `url(${skills[field].items[skill].icon})`;
    name.innerText = skills[field].items[skill].name;

    li.appendChild(icon);
    li.appendChild(name);
    ul.appendChild(li);
  }
  wrapper.appendChild(subject);
  wrapper.appendChild(ul);
  frag.appendChild(wrapper);
}
skillSection.appendChild(frag);
