import {BsHeadset, BsFillCloudCheckFill, BsCode, BsWhatsapp, BsMessenger} from 'react-icons/bs';
import {GiAchievement} from 'react-icons/gi';
import C from '../assets/c++.png';
import css from '../assets/css.png';
import html from '../assets/html.png';
import java from '../assets/java.png';
import vs from '../assets/vs.png';
import wordpress from '../assets/wordpress.png';
import notion from '../assets/notion.png';
import python from '../assets/python.png';
import figma from '../assets/Logo.png';
import client from '../assets/client.png';
import {SiMaterialdesignicons} from 'react-icons/si';
import {AiOutlineLayout, AiOutlineMail} from 'react-icons/ai';

export const feedbackcard = [
    {
        id: 1,
        icon:<img src={client} alt='profile'/>,
        say: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        author: 'lorem ipsum',
        position: 'lorem ipsum, lorem'
    },
    {
        id: 2,
        icon: <img src={client} alt='profile'/>,
        say: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        author: 'lorem ipsum',
        position: 'lorem ipsum, lorem'
    }
];

export const details = [
    {
        id: 1,
        icon: <AiOutlineMail/>,
        title:'Email',
        info: 'user@gmail.com'
    },
    {
        id: 2,
        icon: <BsWhatsapp/>,
        title:'Whatsapp',
        info: '+91 12345-56780'
    },
    {
        id: 3,
        icon: <BsMessenger/>,
        title:'Messenger',
        info: 'user.fb123'
    },
];

export const education = [
    {
        id: 1,
        title: 'Web Design',
        place: 'India Institute',
        year: '2023 - Present'
    },
    {
        id: 2,
        title: 'Web Development',
        place: 'India Institute',
        year: '2017 - 2023'
    },
];
export const experience = [
    {
        id: 1,
        title: 'Art Design',
        place: 'India Institute',
        year: '2023 - Present'
    },
    {
        id: 2,
        title: 'UI Expert',
        place: 'India Institute',
        year: '2019 - 2022'
    },
];

export const aboutInfo = [
    {
        id: 1,
        icon: <GiAchievement/>,
        title:'Experience',
        info: '1 + years'
    },
    {
        id: 2,
        icon: <BsFillCloudCheckFill/>,
        title:'Completed',
        info: '10 + projects'
    },
    {
        id: 3,
        icon: <BsHeadset/>,
        title:'Supports',
        info: 'Online 24/7'
    }
];

export const skills = [
    {
        id: 1,
        icon: <img src={figma} alt='figma'/>,
        title: 'Figma',
        info: 'UI Design Prototyping'
    },
    {
        id: 2,
        icon: <img src={C} alt='C'/>,
        title: 'C++',
        info: 'Application Development'
    },
    {
        id: 3,
        icon: <img src={java} alt='java'/>,
        title: 'Java',
        info: 'Software Development'
    },
    {
        id: 4,
        icon: <img src={python} alt='python'/>,
        title: 'Python',
        info: 'Design Workspace'
    },
    {
        id: 5,
        icon: <img src={html} alt='html'/>,
        title: 'HTML 5',
        info: 'Structural Design'
    },
    {
        id: 6,
        icon: <img src={css} alt='css'/>,
        title: 'CSS 3',
        info: 'Style Design'
    },
    {
        id: 7,
        icon: <img src={wordpress} alt='wordpress'/>,
        title: 'Wordpress',
        info: 'Web Devlopment'
    },
    {
        id: 8,
        icon: <img src={vs} alt='vs'/>,
        title: 'Vs Code',
        info: 'Code Editor'
    },
    {
        id: 9,
        icon: <img src={notion} alt='notion'/>,
        title: 'Notion',
        info: 'Project Management'
    },
];

export const services = [
    {
        id: 1,
        icon: <AiOutlineLayout />,
        title: 'Web Designer',
        info: 'View More'
    },
    {
        id: 2,
        icon: <BsCode />,
        title: 'UI/UX Designer',
        info: 'View More'
    },
    {
        id: 3,
        icon: <SiMaterialdesignicons />,
        title: 'Branding Designer',
        info: 'View More'
    },
]