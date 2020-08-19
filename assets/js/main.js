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
        icon:
          'https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png',
      },
      css: {
        name: 'CSS',
        icon:
          'https://seeklogo.com/images/C/css3-logo-8724075274-seeklogo.com.png',
      },
      sass: {
        name: 'Sass/SCSS',
        icon:
          'https://seeklogo.com/images/S/sass-logo-EFE1469B2C-seeklogo.com.png',
      },
      javascript: {
        name: 'JavaScript',
        icon:
          'https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png',
      },
      typescript: {
        name: 'TypeScript',
        icon:
          'https://seeklogo.com/images/T/typescript-logo-B29A3F462D-seeklogo.com.png',
      },
      webpack: {
        name: 'Webpack',
        icon:
          'https://seeklogo.com/images/W/webpack-logo-9E66EE203A-seeklogo.com.png',
      },
      reactjs: {
        name: 'React JS',
        icon: 'assets/img/reactjs.png',
      },
      redux: {
        name: 'Redux',
        icon:
          'https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png',
      },
    },
  },
  // Back-End & Database
  backEnd: {
    subject: 'Back-End & Database',
    items: {
      python: {
        name: 'python',
        icon:
          'https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png',
      },
      nodejs: {
        name: 'Node JS',
        icon:
          'https://seeklogo.com/images/N/node-node-js-logo-81A4CC16D2-seeklogo.com.png',
      },
      express: {
        name: 'Express',
        icon: 'assets/img/express.png',
      },
      mysql: {
        name: 'MySQL',
        icon:
          'https://seeklogo.com/images/M/MySQL-logo-F6FF285A58-seeklogo.com.png',
      },
    },
  },
  // etc
  etc: {
    subject: 'ETC',
    items: {
      c: {
        name: 'C',
        icon: 'assets/img/c.png',
      },
      cpp: {
        name: 'C++',
        icon: 'assets/img/cpp.png',
      },
      //   https://bashlogo.com/img/symbol/png/monochrome_dark.png
      linux: {
        name: 'Linux',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg',
      },
      github: {
        name: 'GitHub',
        icon: 'assets/img/github.svg',
      },
    },
  },
  // Data Analysis
  dataAnalysis: {
    subject: 'Data Analysis',
    items: {
      tensorflow: {
        name: 'TensorFlow',
        icon:
          'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg',
      },
      r: {
        name: 'R',
        icon: 'assets/img/r.svg',
      },
    },
  },
};

let elem = '<h2 class="description--title">SKILLS</h2>';
for (let field in skills) {
  elem += `<div class="wrapper"><h3>` + skills[field].subject + `</h3><ul>`;
  for (let skill in skills[field].items) {
    elem +=
      `<li><div class="icon" style="background-image: url(` +
      skills[field].items[skill].icon +
      `)">` +
      `</div><span>` +
      skills[field].items[skill].name +
      `</span></li>`;
  }
  elem += `</ul></div>`;
}
document.querySelector('.skills').innerHTML = elem;
