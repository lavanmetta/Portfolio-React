import myProfile from '../Assets/myProfile.jpg';
import bootstrap from "../Assets/logo/bootstrap.png";
import nodejs from "../Assets/logo/nodejs.png";
import excel from "../Assets/logo/excel.png";
import github from "../Assets/logo/github.png";
import js from "../Assets/logo/js.png";
import html from "../Assets/logo/html.png";
import css from "../Assets/logo/css.png";
import sql from "../Assets/logo/sql.png";
import react from "../Assets/logo/react.png";


const links = [
    {
        name: "Home",
        nav:"#home"
    },
    {
        name: "About",
        nav:"#about"
    },
    {
        name: "Skills",
        nav:"#skills"
    },
    {
        name: "Projects",
        nav:"#projects"
    },
    {
        name: "Contact Me",
        nav:"#contact"
    }
]



const aboutMe = {
    about: "A Little Bit About Me",
    skill : 'What I\'m Good At',
    aboutMe : "Hello, I'm Lavan and I'm a ReactJS developer with a post-graduation degree from 2021. I have a passion for creating beautiful and functional interfaces, and I'm always eager to learn and develop my skills. I'm a self-motivated and enthusiastic learner who enjoys taking on new challenges and collaborating with teams to achieve common goals. Thank you for taking the time to get to know me!",
    img: myProfile,
    skillPara : " Hello, I'm a ReactJS developer with a passion for learning and improving my skills. I'm highly motivated, result-oriented, and a self-driven hard worker. With a firm grasp of JavaScript, ReactJS, NodeJS, Redux, HTML5, CSS3, Git, CSS, Bootstrap, REST API, JSON, and Axios, SQL. As a fresher, I'm eager to take on new challenges and collaborate with others to create beautiful and functional interfaces.",
    name: "Metta Lavan",
    email:"lavanmetta111@gmail.com",
    address:"Karimnagar, Telanagana",
    type1:"Optimistic",
    type2:"Enthusiastic",
    type3:"React JS",
    type4:"Front-End Developer",
}





const skills = [
    react,
    js,
    bootstrap,
    html,
     css,
     sql,
     nodejs,
     github,
     excel
]


const projects = [

    {
        id: 1,
        projectImg : "https://res.cloudinary.com/dxm2oqlbo/image/upload/v1659881587/InShot_20220807_193959982_1_wipxgw.jpg",
        projectName: "Food Munch",
        projectDescribe: "Food Munch is a responsive project for selecting food items, built using HTML, CSS, and Bootstrap for accessibility and a user-friendly interface."
    },
    {
        id: 2,
        projectImg : "https://res.cloudinary.com/dxm2oqlbo/image/upload/v1661005639/IMG-20220820-WA0035_v7vkl5.jpg",
        projectName: "Covid Dashboard",
        projectDescribe: "COVID-19 dashboard, built with React JS, displays state-wise data on confirmed, active, and recovered cases, sourced from RESTful APIs. "
    },
    {
        id: 3,
        projectImg : "https://res.cloudinary.com/dxm2oqlbo/image/upload/v1677349506/calc_zfrrbr.png",
        projectName: "Calculator",
        projectDescribe: "Simple calculator project was built using pure JavaScript, HTML, and CSS, featuring basic arithmetic functions and a user-friendly interface."
    },
    
   
]


const socialMedia = [
    {
        name : 'linkedin',
        link : 'https://www.linkedin.com/in/lavanmetta/',
        remixIconClass: 'ri-linkedin-fill'
    },
    {
        name : 'github',
        link : 'https://github.com/lavanmetta',
        remixIconClass: 'ri-github-fill'
    },
    {
        name : 'facebook',
        link : 'https://www.facebook.com/lava.metta',
        remixIconClass: 'ri-facebook-fill'
    },
    {
        name : 'instagram',
        link : 'https://www.instagram.com/lavan_metta?igshid=YmJhNjkzNzY=',
        remixIconClass: 'ri-instagram-line'
    },
    {
        name : 'snapchat',
        link : 'https://snapchat.com/add/proxima_centuri',
        remixIconClass: 'ri-snapchat-line'
    }
]


export function getSocialMedia() {
    return socialMedia
}

export function getLinks() {
    return links
}

export function getAboutMe() {
    return aboutMe
}

export function getMySkills() {
    return skills
}

export function getMyProject() {
    return projects
}