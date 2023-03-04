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
    resume: 'https://drive.google.com/file/d/1wEZ3ZzDmVYhERqJDDJGNu765zszmfBuG/view?usp=sharing'
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




const items = [
    
    {
    title: "2021-2022",
    cardTitle: "Full-stack Development",
    cardSubtitle:"CCBP Intensive Program",
    cardDetailedText: "Full Stack Development course on CCBP Intensive program, I have gained a wealth of knowledge and hands-on experience in front-end and back-end technologies. i have learned how to use HTML and CSS to create visually appealing web pages, and React to build interactive user interfaces. On the back-end side, i have learned Node.js for server-side development and SQL for managing databases. Additionally, i have gained experience working with GitHub to collaborate on code projects and manage version control. With my newly acquired skills and certifications.my portfolio of projects demonstrates my ability to build robust web applications and my commitment to continuous learning and improvement.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://img.freepik.com/free-vector/illustration-social-media-concept_53876-18146.jpg?w=900&t=st=1677916775~exp=1677917375~hmac=b499b94411e765de308d3ab4ecc7ae8473a349b2685b9e6fb67d56addc807a08"
      }
    }
  },

  {
    title: "2019-2021",
    cardTitle: "Post-Graduation",
    cardSubtitle:"Mahatma Gandhi University",
    cardDetailedText: "After completing my undergraduate degree, I decided to pursue a post-graduation program. During my time at university, I had the opportunity to learn a variety of skills and gain practical experience through extracurricular activities.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://img.freepik.com/free-vector/happy-diverse-students-celebrating-graduation-from-school_74855-5853.jpg?w=900&t=st=1677916935~exp=1677917535~hmac=c4c227009767f31e62eb269264a63242aa0e3216b8021dad5af359c0dcbca89f"
      }
    }
  },

  {
    title: "2016-2019",
    cardTitle: "Bachelor's Degree",
    cardSubtitle:"Vivekananda Degree and Pg College",
    cardDetailedText: "I completed my 3-year degree program in 2019, and it was a transformative experience that taught me a lot about myself and the world around me. Throughout my studies, I had the opportunity to learn a diverse range of subjects. Beyond the classroom, I participated in a variety of extracurricular activities, including a task program where I worked with other students and learned team management soft skills. These experiences helped me develop my leadership skills, as well as my ability to work collaboratively with others towards a common goal. Additionally, I learned a lot about soft skills like time management, communication, and critical thinking, which have proven to be valuable assets in both my personal and professional life. Overall, my 3-year degree program was an enriching experience that provided me with a strong foundation for my future endeavors.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://img.freepik.com/free-vector/graduation-concept-illustration_114360-625.jpg?w=740&t=st=1677916982~exp=1677917582~hmac=e7be70fca3a86de850f4263893e2cb645a46a6fbf7e66e209a91491861d7d670"
      }
    }
  },


  {
    title: "2014-2016",
    cardTitle: "Intermediate",
    cardSubtitle:"SR Junior College",
    cardDetailedText: "After completing my secondary education, I enrolled in an intermediate program that was a pivotal experience in my personal and academic growth. During my two years in the program, I had the opportunity to study a variety of subjects, including physics, science. I also participated in extracurricular activities sports teams. In addition to academic and extracurricular pursuits, I also learned valuable life skills such as time management and self-discipline. These skills have proven useful in my personal and professional life, as they allow me to set goals and effectively manage my time to achieve them. Overall, my intermediate education provided me with a solid foundation for my academic and personal growth, and I look back on that time with fondness and gratitude.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://img.freepik.com/free-vector/students-concept-illustration_114360-8327.jpg?w=900&t=st=1677917174~exp=1677917774~hmac=4c202cce1f138af09ba7dab88d6c5b0023cd8e48889d4e0c00b538ed7d7932de"
      }
    }
  },

  {
    title: "2013-2014",
    cardTitle: "Secondary School Certificate",
    cardSubtitle:"ZPHS High School",
    cardDetailedText: "My secondary school education (SSC) was a formative period in my life that helped shape my academic and personal development. During my time in secondary school, I had the opportunity to study a variety of subjects, including mathematics, science, and language arts. I also participated in extracurricular activities such as sports and Quiz games.I learned important life lessons from my teachers such as time management and self-discipline, which have proven useful in my personal and professional life. Overall, I am grateful for the opportunities and experiences I had during that time.    ",
    media: {
      type: "IMAGE",
      source: {
        url: "https://img.freepik.com/premium-vector/student-wearing-uniform-character-collection_180264-155.jpg?w=996"
      }
    }
  },


];


export function getTimeline() {
    return items
}


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