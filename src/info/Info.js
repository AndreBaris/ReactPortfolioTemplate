import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

export let colors = ["rgb(0,255,164)", "rgb(41, 54, 240)"];

export const info = {
    firstName: " André",
    lastName: " Barison Ribeiro",
    initials: "ABR",
    position: "a Full Stack Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '🍺',
            text: 'fueled by beer'
        },
        {
            emoji: '🌎',
            text: 'based in Brazil'
        },
        {
            emoji: "💻",
            text: "Full stack developer"
        },
        {
            emoji: "📧",
            text: "andre.baris@hotmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/AndreBaris",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/andré-barison-669839123/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }

    ],
    bio: "Hello! I'm André. I'm a Fullstack developer, working as a freelancer. I studied Analysis and systems development at UNORP, I enjoy gaming on my free time.",
    skills:
    {
        proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
        python: [{ subject: 'automation', percentage: 20 }, { subject: 'machine learning', percentage: 20 }, { subject: 'data science', percentage: 40 }, { subject: 'web scraping', percentage: 70 }],
        exposedTo: ['nodejs', 'python', 'adobe illustrator']
    }
    ,
    hobbies: [
        {
            label: 'gaming',
            emoji: '🎮'
        },
        {
            label: 'bike',
            emoji: '🚲'
        },
        {
            label: 'coding',
            emoji: '⌨️'
        },
        {
            label: 'cooking',
            emoji: '🍣'
        }

    ],
    portfolio: [
        {
            title: "Project 1",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ]
}