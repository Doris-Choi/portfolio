const home = document.querySelector('.home');
const inner = document.createElement('div');
inner.classList.add('inner');

const contactItems = [
  {
    name: 'Phone',
    pref: 'tel:',
    desc: '010-2673-5364',
    icon: 'fas fa-phone-square',
  },
  {
    name: 'Email',
    pref: 'mailto:',
    desc: 'dychoi9298@gmail.com',
    icon: 'fas fa-envelope-square',
  },
  {
    name: 'GitHub',
    pref: '',
    desc: 'https://github.com/doyoungchoi',
    icon: 'fab fa-github-square',
  },
];

const renderPic = () => {
  const image = new Image();
  image.src = `/assets/img/profile.png`;
  inner.appendChild(image);
};

const createContact = (contact) => {
  const li = document.createElement('li');
  const ic = document.createElement('i');
  const anc = document.createElement('a');
  ic.className = contact.icon;
  anc.innerText = `${contact.name}: ${contact.desc}`;
  anc.href = `${contact.pref}${contact.desc}`;
  li.appendChild(ic);
  li.appendChild(anc);
  return li;
};

const renderInfo = () => {
  const div = document.createElement('div');
  const info = document.createElement('div');
  const name = document.createElement('h2');
  const description = document.createElement('p');
  const contact = document.createElement('div');
  const contactTitle = document.createElement('h3');
  const contactList = document.createElement('ul');

  div.classList.add('description');

  // Info
  name.innerText = '최도영 (Doris)';
  description.innerText = `상상의 세계 구현에 흠뻑 빠진 Newbie 프론트엔드 개발자입니다.`;
  info.appendChild(name);
  info.appendChild(description);
  div.appendChild(info);

  // Contact
  contactTitle.innerText = 'Contact';
  contactItems.forEach((item) => contactList.appendChild(createContact(item)));
  contact.appendChild(contactTitle);
  contact.appendChild(contactList);
  div.appendChild(contact);

  inner.appendChild(div);
};

const loadHome = () => {
  renderPic();
  renderInfo();
  home.appendChild(inner);
};

function init() {
  loadHome();
}

init();
