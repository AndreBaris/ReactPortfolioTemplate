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
    bio: "Hello! I'm André. I'm a Fullstack developer, working as a freelancer. I've studied Analysis and systems development at UNORP, I enjoy gaming on my free time.",
    skills:
    {
        languages: [{title: 'Javascript', percentage: 100},{title: 'HTML', percentage: 100},{title: 'CSS', percentage: 80},{title: 'SQL', percentage: 70},{title: 'Python', percentage: 50},{title: 'PHP', percentage: 40},{title: 'Java', percentage: 40},{title: 'Ruby', percentage: 25}],
        frameworksLibraries: [{title: 'Angular', percentage: 90}, {title: 'React', percentage: 70}, {title: 'Ionic', percentage: 100}, {title: 'ExpressJS', percentage: 80}, {title: 'ElectronJS', percentage: 60}, {title: 'Bootstrap', percentage: 100}, {title: 'Unreal engine', percentage: 25}],
        concepts: ['SOLID', 'DRY', 'Clean Code', 'OOP', 'MVC Architectural pattern', 'Code Reuse'],
        subjects: [{title: 'Automation', percentage: 40}, {title: 'Web scraping', percentage: 90}, {title: 'ML', percentage: 20}, {title: 'Data Science', percentage: 70}, {title: 'UI', percentage: 60}, {title: 'UX', percentage: 80}],
        tools: ['Postman', 'VS Code', 'GIT', 'Linux'],
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