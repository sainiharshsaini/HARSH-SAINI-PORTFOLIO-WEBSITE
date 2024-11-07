import countryImg from './assets/projectImages/countryImg.png'
import PortfolioImg from './assets/projectImages/HarshPortfolio.png'

import htmlIcon from './assets/icons/HTML_icon.svg'
import cssIcon from './assets/icons/CSS_icon.svg'
import jsIcon from './assets/icons/JS_icon.svg'
import reactIcon from './assets/icons/React_icon.svg'
import bootstrapIcon from './assets/icons/Bootstrap_icon.svg'
import nodeIcon from './assets/icons/Node_icon.svg'
import expressIcon from './assets/icons/Express_icon.svg'
import mongodbIcon from './assets/icons/MongoDB_icon.svg'

export default [
    {
        id: crypto.randomUUID(),
        projectImg: countryImg,
        projectName: 'COUNTRIES APP',
        aboutProject: 'This Website app allows users to explore detailed information about every country in the world. It includes data on population, languages, currency, climate, government type, and other important details.',
        techUsed: [
            {
                id: crypto.randomUUID(),
                icon: htmlIcon,
            },
            {
                id: crypto.randomUUID(),
                icon: cssIcon,
            },
            {
                id: crypto.randomUUID(),
                icon: jsIcon,
            },
            {
                id: crypto.randomUUID(),
                icon: reactIcon,
            },
        ],
        deployLink: 'https://countriesappbyharsh.netlify.app/',
        githubLink: 'https://github.com/sainiharshsaini/COUNTRIES-APP',
    },
    {
        id: crypto.randomUUID(),
        projectImg: PortfolioImg,
        projectName: 'MY PORTFOLIO',
        aboutProject: 'A personal, fully interactive portfolio website The site is responsive and optimized for speed, emphasizing a clean and sleek design while showcasing the power of Projects & Skills in Web development.',
        techUsed: [
            {
                id: crypto.randomUUID(),
                icon: htmlIcon,
            },
            {
                id: crypto.randomUUID(),
                icon: cssIcon,
            },
            {
                id: crypto.randomUUID(),
                icon: jsIcon,
            },
            {
                id: crypto.randomUUID(),
                icon: reactIcon,
            },
        ],
        deployLink: 'https://www.harshsaini.tech/',
        githubLink: 'https://github.com/sainiharshsaini/HARSH-SAINI-TECH',
    },
]