const about = document.querySelector('.about');
const aboutInner = document.createElement('div');
aboutInner.classList.add('inner');

const edu = [
  {
    course: '학사 과정',
    campus: '서울대학교',
    major: '지구과학교육과 전공',
    period: '2011.03 - 2017.02',
  },
  {
    course: '석사 과정',
    campus: '서울대학교',
    major: '과학교육과 위성물리해양학 전공',
    period: '2017.03 - 2019.02',
  },
  {
    course: '외부 교육',
    campus: '한국과학기술정보연구원(KISTI)',
    major: '빅데이터 분석가 양성 과정 교육 이수',
    period: '2019.04 - 2019.09',
  },
];

const eduItem = (item) => {
  const li = document.createElement('li');
  const course = document.createElement('h4');
  const campus = document.createElement('div');
  const major = document.createElement('div');
  const period = document.createElement('div');

  campus.classList.add('campus');
  major.classList.add('major');
  period.classList.add('period');

  course.innerText = item.course;
  campus.innerText = item.campus;
  major.innerText = item.major;
  period.innerText = item.period;

  li.appendChild(course);
  li.appendChild(campus);
  li.appendChild(major);
  li.appendChild(period);

  return li;
};

const loadEdu = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const ul = document.createElement('ul');
  div.classList.add('edu');
  title.innerText = 'Edu.';
  edu.forEach((item) => ul.appendChild(eduItem(item)));
  div.appendChild(title);
  div.appendChild(ul);

  aboutInner.appendChild(div);
};

const introItem = (item) => {
  const p = document.createElement('p');
  p.innerText = item;
  return p;
};

const loadIntro = () => {
  const intro = [
    `Do Young! 젊음을 하는 최도영입니다. 언제나 좋아하는 일, 즐거운 일을 하고 있습니다. 교육, 연구 등 멀리 돌아왔지만 생각 속의 세계를 실현시킬 수 있는 개발자가 되고 싶다는 생각에 개발자의 길에 입문하였습니다.`,
    `JavaScript의 변화무쌍한 매력에 빠져 웹 서비스 개발에 관심을 갖게 되었고 특히 프론트엔드에 Deep Dive하고 있습니다. `,
    `제가 만든 세상 속에서 많은 사람들이 더 많이 인터렉티브하고, 더 쉽게 의지를 표현하길 바라는 마음에서 UI에 대한 지속적인 고민, 비즈니스 발전을 위해 뛰어들겠습니다.`,
  ];
  const div = document.createElement('div');
  const title = document.createElement('h2');
  div.classList.add('intro');
  title.innerText = 'Introduce';
  div.appendChild(title);
  intro.forEach((item) => div.appendChild(introItem(item)));

  aboutInner.appendChild(div);
};

function init() {
  loadEdu();
  loadIntro();
  about.appendChild(aboutInner);
}

init();
