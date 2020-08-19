// NAVI Link
const lis = document.querySelectorAll('nav ul li');
for (let li of lis) {
  li.addEventListener('click', (e) => {
    const elem =
      document.querySelector('.' + li.innerText.toLowerCase()) ||
      document.querySelector('header');
    window.scrollTo({ top: elem.offsetTop - 50, behavior: 'smooth' });
  });
}

// SKILLS section
`field
 ㄴ subject: field 대표 이름
 ㄴ items: field에 포함되는 skill의 객체
    ㄴ skill(각 스킬 별)
       ㄴ name: 스킬 이름
       ㄴ icon: icon의 svg 코드`;

const skills = {
  // Front-End
  frontEnd: {
    subject: 'Front-End',
    items: {
      html: {
        name: 'HTML',
        icon: '',
      },
      css: {
        name: 'CSS',
        icon: '',
      },
      sass: {
        name: 'Sass',
        icon: '',
      },
      javascript: {
        name: 'JavaScript',
        icon: '',
      },
      typescript: {
        name: 'TypeScript',
        icon: '',
      },
      webpack: {
        name: 'Webpack',
        icon: '',
      },
      reactjs: {
        name: 'React JS',
        icon: '',
      },
      redux: {
        name: 'Redux',
        icon: '',
      },
    },
  },
  // Back-End
  backEnd: {
    subject: 'Back-End',
    items: {
      nodejs: {
        name: 'Node JS',
        icon: '',
      },
      express: {
        name: 'Express',
        icon: '',
      },
    },
  },
  // Database
  database: {
    subject: 'Database',
    items: {
      mysql: {
        name: 'MySQL',
        icon: '',
      },
    },
  },
  // Data Analysis
  dataAnalysis: {
    subject: 'Data Analysis',
    items: {
      python: {
        name: 'python',
        icon: '',
      },
      r: {
        name: 'R',
        icon: '',
      },
    },
  },
};

let elem = '<h2 class="description--title">SKILLS</h2>';
for (let field in skills) {
  elem += `<div class="wrapper"><h3>` + skills[field].subject + `</h3><ul>`;
  for (let skill in skills[field].items) {
    elem +=
      `<li><div class="icon">` +
      skills[field].items[skill].icon +
      `</div><span>` +
      skills[field].items[skill].name +
      `</span></li>`;
  }
  elem += `</ul></div>`;
}
document.querySelector('.skills').innerHTML = elem;
