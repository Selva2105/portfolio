import schlImage from '../assets/images/schoolLogo.jpg';
import g2Doc from '../assets/images/g2doc.jpg'

export const Bio = {
  name: "Selvaganapathi Kanakaraj",
  roles: [
    "MERN Stack Developer",
    "Programmer",
    "Reactjs developer",
    "Backend developer",
    "Full stack developer"
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/Selva2105",
  resume:
    "https://drive.google.com/file/d/1xv-jHyOoFeCw-18eHjvix745Zyecr4Fa/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/selvaganapathi-kanakaraj/",
  twitter: "https://twitter.com/Selva47755",
  insta: "https://www.instagram.com/selvaganapathi_kanakaraj/",
  facebook: "https://www.instagram.com/selvaganapathi_kanakaraj/",
};

export const skills = [
  {
    id: 1,
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        id: "1",
        image: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
      },
      {
        name: "CSS",
        id: "2",
        image:
          "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png",
      },
      {
        name: "Javascipt",
        id: "3",
        image: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
      },
      {
        name: "Tailwind Css",
        id: "4",
        image:
          "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/tailwindcss.png",
      },
      {
        name: "React Js",
        id: "5",
        image:
          "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
      },
      {
        name: "Redux Toolkit",
        id: "6",
        image:
          "https://repository-images.githubusercontent.com/347723622/92065800-865a-11eb-9626-dff3cb7fef55",
      },
      {
        name: "Typescript",
        id: "7",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
      }
    ],
  },
  {
    id: 2,
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        id: "8",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        id: "9",
        image:
          "https://i.pinimg.com/736x/44/97/9e/44979e3d4d197e6dffbe04022e1e7c4c.jpg",
      },
      {
        name: "MSSQL",
        id: "10",
        image:
          "https://img.stackshare.io/service/7096/809746be-0b96-4af0-aa2f-5d1aeaa82658.png",
      },
      {
        name: "MongoDB",
        id: "11",
        image:
          "https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png",
      }
    ],
  },
  {
    title: "Others",
    id: 3,
    skills: [
      {
        name: "Git",
        id: "12",
        image:
          "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      },
      {
        name: "GitHub",
        id: "13",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "VS Code",
        id: "15",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        id: "16",
        image:
          "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png",
      }
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/j5pnsfwbeclljqecbknc",
    role: "MERN stack developer",
    company: "Travelfika",
    date: "Nov 2023 - Present",
    desc: "Working on Travelfika as a MERN stack developer.Here we develope SAAS web site to enhance the user experience in Flight and hotel ticket booking. I worked in Whole travelfika ui enhancements to make the website more appealing and user friendly and i developed Travelfika Blogs using next js and CMS[Contentful].Currently working in Flights module from stratch.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "ReactJS",
      "Redux",
      "NodeJs",
      "Express Js",
      "MongoDB",
      "Postman",
      "Git",
      "GitHub",
      "Tailwindcss"
    ],
    doc: "",
  },
  {
    id: 1,
    img: "https://th.bing.com/th/id/OIP.uynJZRcwvYPe1nQHJFiGrQHaHZ?pid=ImgDet&rs=1",
    role: "Fullstack Developer Intern",
    company: "G2 Technology Solutions Pvt Ltd",
    date: "Jan 2023 - Sep 2023",
    desc: "Got trained for 5 months and worked in their internal project.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "MSSql",
      "Postman",
      "Git",
      "GitHub"
    ],
    doc: g2Doc,
  },

];

export const education = [
  {
    id: 0,
    img: "https://th.bing.com/th/id/OIP.gamVDx9MWyj4P9D8z7kkvAAAAA?pid=ImgDet&rs=1",
    school: "Nehru arts and science college, Coimbatore",
    date: "Jul 2020 - May 2023",
    grade: "8 CGPA",
    desc: "I have completed mu Bachelors degree in nehru arts and science college. Here I got a good opportunities to showcase my talent and they gave an opportunity to be a vice chairman of the department which upskilled my leadership quality.",
    degree: "Bachelor of Computer Applications",
  },
  {
    id: 1,
    img: schlImage,
    school: "Sri Lathangi Vidhya Mandir Matric Higher Secondary School",
    date: "Apr 2019 - Apr 2020",
    grade: "67%",
    desc: "I completed my class 12 high school education at Sri Lathangi Vidhya Mandir Matric Higher Secondary School, Pollachi, where I studied Business maths.",
    degree: "12th Class",
  },
  {
    id: 2,
    img: schlImage,
    school: "Sri Lathangi Vidhya Mandir Matric Higher Secondary School",
    date: "Apr 2017 - Apr 2018",
    grade: "83%",
    desc: "I completed my class 10 education at Sri Lathangi Vidhya Mandir Matric Higher Secondary School, Pollachi",
    degree: "10th class",
  },
];

export const projects = [
 
];

