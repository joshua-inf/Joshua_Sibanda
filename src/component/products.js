import image from '../img/Screenshot 2023-08-26 115611.png'
import image2 from '../img/Screenshot 2023-08-26 140015.png'
import image3 from '../img/Screenshot 2023-08-26 140041.png'


//react icons 
import { BiLogoReact } from 'react-icons/bi'







//object layout template
/*
{
        name: '',
        Descriptin:'',
        image: ,
        category: '',
        languages: [
            {
                name:'',
                icon: 
            }
        ],
        links: [
            {
                name: '',
                link: '',
                liveprview: ''
            }
        ]
    }


*/

//object starts here
export const Projects = [
    {
        ProjectId: 1,
        name: 'Golf Web Ui',
        Descriptin: 'write up to be made soon, but was mainly for skill improvement purposes',
        image: image,
        category: 'Web',
        languages: [
            {
                name: 'reactjs',
                icon: <BiLogoReact />
            }
        ],
        links: [
            {
                name: 'github',
                link: 'https://github.com/joshua-inf/golfclub',
                liveprview: 'https://joshua-inf.github.io/golfclub/'
            }
        ]
    },
    {
        ProjectId: 2,
        name: 'Local Council info web',
        Descriptin:'this is an ongoing project we are working on in hopes to solving our current system of things',
        image: image2,
        category: 'Web',
        languages: [
            {
                name: 'reactjs',
                icon: <BiLogoReact />
            }
        ],
        links: [
            {
                name: 'github',
                link: 'https://github.com/joshua-inf/mazabukacc',
                liveprview: 'https://joshua-inf.github.io/mazabukacc/'
            }
        ]
    },
    {
        ProjectId: 3,
        name: 'perfect five cleaning solutions',
        Descriptin:'this was one of our clients who we helped showcase their services online',
        image: image3,
        category: 'Web',
        languages: [
            {
                name: 'reactjs',
                icon: <BiLogoReact />
            }
        ],
        links: [
            {
                name: 'github',
                link: 'https://github.com/joshua-inf/perfect5',
                liveprview: ''
            }
        ]
    }
]


export const AllProjects = [
    {
        ProjectId: 1,
        name: 'Golf Web Ui',
        Descriptin: 'write up to be made soon, but was mainly for skill improvement purposes',
        image: image,
        category: 'Web',
        languages: [
            {
                name: 'reactjs',
                icon: <BiLogoReact />
            }
        ],
        links: [
            {
                name: 'github',
                link: 'https://github.com/joshua-inf/golfclub',
                liveprview: 'https://joshua-inf.github.io/golfclub/'
            }
        ]
    },
    {
        ProjectId: 2,
        name: 'Local Council info web',
        Descriptin:'this is an ongoing project we are working on in hopes to solving our current system of things',
        image: '',
        category: 'Web',
        languages: [
            {
                name: 'reactjs',
                icon: <BiLogoReact />
            }
        ],
        links: [
            {
                name: 'github',
                link: 'https://github.com/joshua-inf/mazabukacc',
                liveprview: 'https://joshua-inf.github.io/mazabukacc/'
            }
        ]
    },
    {
        ProjectId: 3,
        name: 'perfect five cleaning solutions',
        Descriptin:'this was one of our clients who we helped showcase their services online',
        image: '',
        category: 'Web',
        languages: [
            {
                name: 'reactjs',
                icon: <BiLogoReact />
            }
        ],
        links: [
            {
                name: 'github',
                link: 'https://github.com/joshua-inf/perfect5',
                liveprview: ''
            }
        ]
    }
]
