
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
  wallpaper,
  snaplingo,
  pdf_scanner,
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
  kotlin,
  java,
  python,
  firebase,
  django,
  androidstudio,
  pycharm,
  typescript,
  postgresql,
  docker,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


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
    title: "Technical Product Manager",
    icon: creator,
  },
  {
    title: "Sr. Software Engineer",
    icon: web,
  },
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Backend & DevOps",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Android Studio",
    icon: androidstudio,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Technical Product Manager",
    company_name: "Funsol Technologies",
    icon: creator,
    iconBg: "#383E56",
    date: "Sep 2023 - Present",
    points: [
      "Leading and managing multiple cross-functional teams, including Android Developers, SQA Engineers, UI/UX Designers, Python Developers, Web Developers, AI Engineers, and DevOps Engineers.",
      "Driving innovation, system design, and scalability while optimising user experience and revenue strategies.",
      "Implemented strategic AdMob monetisation techniques to maximise revenue while ensuring compliance with Google policies.",
    ],
  },
  {
    title: "Team Lead",
    company_name: "Funsol Technologies",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Sep 2023",
    points: [
      "Led the Android development team, overseeing the architecture, feature implementation, and code reviews.",
      "Spearheaded the development and optimisation of multiple high-performing utility apps.",
    ],
  },
  {
    title: "Android Developer",
    company_name: "Funsol Technologies",
    icon: mobile,
    iconBg: "#383E56",
    date: "Aug 2020 - Oct 2021",
    points: [
      "Developed and optimised Android applications, improving user engagement and retention through performance enhancements.",
      "Integrated third-party APIs, Firebase services, and in-app purchase models to enhance app functionality.",
      "Ensured best coding practices by following MVVM, Clean Architecture, and SOLID principles.",
    ],
  },
  {
    title: "Jr. Android Developer",
    company_name: "Rapidev DMCC",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - July 2020",
    points: [
      "Developed and maintained Android applications using Java and the Android SDK.",
      "Collaborated closely with cross-functional teams to design and implement robust features.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "EServeMD",
    icon: backend,
    iconBg: "#383E56",
    date: "Nov 2019 - Jan 2020",
    points: [
      "Contributed to the development and maintenance of the company's portal system using HTML, CSS, and PHP.",
      "Ensured a responsive and user-friendly interface.",
    ],
  },
  {
    title: "Freelance Android & Web Developer",
    company_name: "Self Employed",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Mar 2018 - Jan 2021",
    points: [
      "Began as a freelance web developer before transitioning into Android app development.",
      "Designed and developed scalable mobile applications and implemented backend solutions with RESTful APIs using PHP & Python.",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Osama proved me wrong.",
  //   name: "MD Mustaqeem",
  //   designation: "Ecommerce",
  //   company: "QuickMart",
  //   image: firstTestimonial,
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Osama does.",
  //   name: "Abdul Raheman",
  //   designation: "Ecommerce Business",
  //   company: "justbuyz",
  //   image: secondTestimonial,
  // },
  // {
  //   testimonial:
  //     "After Osama optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "James Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: thirdTestimonial,
  // },
];

const projects = [
  {
    name: "SnapLingo - AI-Powered Language Learning App",
    description:
      "SnapLingo is an intelligent, cross-platform language learning application developed in Compose Multiplatform designed specifically for children. It delivers a highly personalized educational experience through dynamic AI-generated lessons and an interactive AI chat tutor. To keep learners engaged, the app integrates rich gamification features including XP points, daily streaks, and achievement badges. It also features a comprehensive family management system, allowing parents to track multiple children's progress, alongside a seamless subscription model for premium content.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "Compose Multiplatform",
        color: "green-text-gradient",
      },
      {
        name: "jetpack-compose",
        color: "orange-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },
    ],
    image: snaplingo,
  },
  {
    name: "Live Wallpapers 4K, HD, Anime - AI-Powered Personalization App",
    description:
      "A feature-rich, dynamic screen personalization application that brings mobile interfaces to life. The app goes beyond static backgrounds by offering an integrated AI Wallpaper Generator, allowing users to create custom, high-definition wallpapers instantly using text prompts. It also houses a massive, categorized library of ultra-HD 4K, 3D, and 4D parallax wallpapers to suit diverse user preferences.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "green-text-gradient",
      },
    ],
    image: wallpaper,
    source_code_link: "https://play.google.com/store/apps/details?id=com.wallpaperapp.hdwallpapers.livewallpaperfree.coolwallpapers",
  },
  {
    name: "PDF Scanner : Document Reader",
    description:
      "A comprehensive utility application that transforms a smartphone camera into a powerful, portable document scanner. Designed for seamless digitization, the app allows users to scan, manage, and share high-quality PDFs on the go. It utilizes advanced image processing to accurately capture multi-page documents, ID cards, and books, making digital archiving completely effortless.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "jetpack-compose",
        color: "orange-text-gradient",
      },
      {
        name: "camera-api",
        color: "white-text-gradient",
      },
    ],
    image: pdf_scanner,
    source_code_link: "https://play.google.com/store/apps/details?id=com.docscan.camscan.pdfscanner.pagescanner.documentscanner",
  },
];

export { services, technologies, experiences, testimonials, projects };
