import countryImg from './assets/projectImages/countryImg.png'
import PortfolioImg from './assets/projectImages/HarshPortfolio.png'

import HtmlIcon from './assets/icons/icons8-html-48.png'
import CssIcon from './assets/icons/icons8-css-48.png'
import JsIcon from './assets/icons/icons8-javascript-48.png'
import ReactIcon from './assets/icons/icons8-react-js-48.png'
import ExpressIcon from './assets/icons/icons8-express-js-40.png'
import NodeIcon from './assets/icons/icons8-node-js-48.png'
import MongoDBIcon from './assets/icons/icons8-mongodb-48.png'
import TypescriptIcon from './assets/icons/icons8-typescript-48.png'
import TailwindCSSIcon from './assets/icons/icons8-tailwind-css-48.png'
import SassIcon from './assets/icons/icons8-sass-48.png'
import MySQLIcon from './assets/icons/icons8-mysql-48.png'
import PythonIcon from './assets/icons/icons8-python-48.png'

export default [
    {
        id: crypto.randomUUID(),
        projectImg: countryImg,
        projectName: 'COUNTRIES APP',
        aboutProject: 'This Website app allows users to explore detailed information about every country in the world. It includes data on population, languages, currency, climate, government type, and other important details.',
        techUsed: [
            {
                id: crypto.randomUUID(),
                icon: HtmlIcon,
            },
            {
                id: crypto.randomUUID(),
                icon: CssIcon,
            },
            {
                id: crypto.randomUUID(),
                icon: JsIcon,
            },
            {
                id: crypto.randomUUID(),
                icon: ReactIcon,
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
                icon: HtmlIcon,
            },
            {
                id: crypto.randomUUID(),
                icon: CssIcon,
            },
            {
                id: crypto.randomUUID(),
                icon: JsIcon,
            },
            {
                id: crypto.randomUUID(),
                icon: ReactIcon,
            },
            {
                id: crypto.randomUUID(),
                icon: TailwindCSSIcon,
            },
        ],
        deployLink: 'https://www.harshsaini.tech/',
        githubLink: 'https://github.com/sainiharshsaini/HARSH-SAINI-PORTFOLIO-WEBSITE',
    },
]