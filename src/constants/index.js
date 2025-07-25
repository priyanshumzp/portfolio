import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from "../assets";

// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";
import screenshotAttendance from "../assets/Screenshot 2025-07-21 160048.png";
import screenshotResturant from "../assets/Screenshot 2025-07-21 143140.png";

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
    title: "full-stack Developer",
    icon: mobile,
  },

  {
    title: "Ui UX Designer",
    icon: creator,
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
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
 
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },
  

  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    // company_name: "Tekisky",
    // icon: tekisky,
    iconBg: "#383E56",
    // date: "Jan 2023 - present",
    points: [
      // "Developing and maintaining web applications using MERN technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
  //   name: "MD Mustaqeem",
  //   designation: "Ecommerce",
  //   company: "QuickMart",
  //   image: firstTestimonial,
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
  //   name: "Abdul Raheman",
  //   designation: "Ecommerce Business",
  //   company: "justbuyz",
  //   image: secondTestimonial,
  // },
  // {
  //   testimonial:
  //     "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "James Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: thirdTestimonial,
  // },
];

const projects = [
  {
    name: "Attendance Management System",
    description:
      "A web-based attendance management system for employees to mark their attendance and view their attendance history.",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: screenshotAttendance,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Resturant Website",
    description:
      "A restaurant website that allows users to view the menu, make reservations, and order food online.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: screenshotResturant,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Building Material Website",
    description:
      "A building material website that allows users to view and purchase building materials online and also showcase the brands and their products and the consultancy services and projects that are completed.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "white-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
    ],
    image: project3,
    source_code_link: "https://github.com/priyanshumzp/shree-ram-enterprises",
  },
];

export { services, technologies, experiences, testimonials, projects };
