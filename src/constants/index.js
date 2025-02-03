import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  github,
  hub,
  firebase,
  cpp,
  openai,
  sql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Fullstack Developer",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },{
    name: "git",
    icon: hub,
  },
];

const experiences = [
  {
    title: "Front end Developer",
    company_name: "Utkrisht - GGSIPU",
    icon: "../../../images-Photoroom.png",
    iconBg: "#383E56",
    date: "july 2023 - September 2023",
    points: [
      " Executed a responsive and dynamic website project during a 4-week internship and training program for GGSIPU students, addressing problem statements with innovative solutions and ensuring user-friendly design.",
      " Delivered impactful results by enhancing the usability and interactivity of the website, meeting program objectives effectively.",
      "engthened team management, collaboration, and leadership skills by guiding peers, delegating tasks, and maintaining effective communication to ensure project milestones were achieved within the specified timeframe.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "PurePharma",
    description:
      "PurePharma is a comprehensive solution for purchasing health and wellness products online. It provides a user-friendly platform for browsing, filtering, and buying products like multivitamins, ensuring a seamless shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Shivam-Gopal/PurePharma",
    live_link: "https://679c3e27a9da88be017bd374--dashing-dragon-13ab92.netlify.app/"
  },
  {
    name: "RealTime GPS Tracker",
    description:
      "This project allows you to track the real-time location of mobile devices using GPS and display the markers on a map. The location data is transmitted using WebSockets and displayed using Leaflet.js. The project works on both mobile and desktop devices.",
    tags: [
      {
        name: "Html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "purple-text-gradient",
      },
      {
        name: "ejs",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Shivam-Gopal/Realtime-Tracking-System",
  },
];

export { services, technologies, experiences, testimonials, projects };
