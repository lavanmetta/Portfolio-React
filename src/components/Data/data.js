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
    heading: "My creative skills & experiences",
    aboutMe : "Hi, I'm Lavan, a software developer based in [insert location]. I have always been fascinated by technology and its ability to improve our lives, and I am passionate about creating software solutions that solve real-world problems. With [insert number] years of experience in the industry, I have had the opportunity to work on a wide range of projects, from web applications to mobile apps and everything in between. When I'm not coding, I enjoy [insert hobbies or interests]. I'm excited to continue learning and growing in my career as a software developer, and I look forward to the challenges and opportunities that lie ahead.",
    img: myProfile,
    skillPara : "I am a React Js Developer with a passion for learning and can work with estimation of future tasks and client feedback. I am highly-motivated, result oriented, self-driven, hard-working, fast learner and constantly seeking to improve my skills and am fully aware of the latest Front-end Development Tools. I have a firm knowledge of JavaScript and React Js, Parcel js, Node js, Redux, HTML5, CSS3, Git, SASS, Tailwind CSS, Bootstrap, REST API, JSON, Axios, Adobe Photoshop and possess a good knowledge of computer software packages (frameworks and tools) that are used in today’s technology."

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
        projectDescribe: "Description of project and some of details about that project Description of project and some of details about that project and used technologies and whatever you want and used technologies and whatever you want"
    },
    {
        id: 2,
        projectImg : "https://res.cloudinary.com/dxm2oqlbo/image/upload/v1661005639/IMG-20220820-WA0035_v7vkl5.jpg",
        projectName: "Covid Dashboard",
        projectDescribe: "Description Description of project and some of details about that project and used technologies and whatever you want of project and some of details about that project and used technologies and whatever you want"
    },
    {
        id: 3,
        projectImg : "https://res.cloudinary.com/dxm2oqlbo/image/upload/v1677349506/calc_zfrrbr.png",
        projectName: "Calculator",
        projectDescribe: "Description  Description of project and some of details about that project and used technologies and whatever you want of project and some of details about that project and used technologies and whatever you want"
    }
]



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