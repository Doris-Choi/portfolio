const list = ['Home', 'Introduce', 'Skill', 'Project'];
const nav = document.querySelector('nav');

const handleClick = (e) => {
  const ele = document.querySelector(`.${e.target.innerText.toLowerCase()}`);
  window.scrollTo({ top: ele.offsetTop, behavior: 'smooth' });
};

const createItem = (item, parent) => {
  const li = document.createElement('li');
  li.innerText = item;
  li.addEventListener('click', (item) => handleClick(item));
  parent.appendChild(li);
};

const loadNav = () => {
  const ul = document.createElement('ul');
  list.forEach((item) => createItem(item, ul));
  nav.appendChild(ul);
};

function init() {
  loadNav();
}

init();
