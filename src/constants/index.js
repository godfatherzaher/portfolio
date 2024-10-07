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
    nextjs,
    nextjsForCircle,
    expressjs,
    postman,
    firebase,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    focalXIcon,
    youtube,
    crypto,
    dashboard,
    medicio,
    hotelWeb,
    tripguide,
    threejs,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: 'React Developer',
      icon:reactjs
    },
    {
      title: 'Next.js Developer',
      icon:nextjs
    }
    
  
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next.js",
      icon: nextjsForCircle,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Firebase",
    //   icon: firebase,
    // },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Express.js",
      icon: expressjs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Postman",
      icon: postman,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "MERN Stack Intern",
      company_name: "Focal X Agency",
      icon: focalXIcon,
      iconBg: "#383E56",
      date: "August 2024 - Present",
      points: [
        "Developing and maintaining web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js).",
    "Collaborating with senior developers to implement responsive and scalable web solutions.",
    "Debugging and optimizing front-end components using React.js and Tailwind CSS.",
    "Engaging in weekly coding sessions to enhance full-stack development skills."
        
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "July 2021 - December 2022",
    //   points: [
    //     "Developing and maintaining web applications using Html, Css, Javascripts.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
        
    //   ],
    // },
    // {
    //   title: "React.js Developer",
    //   company_name: "Starbucks",
    //   icon: starbucks,
    //   iconBg: "#383E56",
    //   date: "January 2022 - September 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // }
    
    
    
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
      name: "Youtube Clone",
      description:
        "A functional YouTube clone providing core video browsing and playback features",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Material UI",
          color: "green-text-gradient",
        },
      
      ],
      image: youtube,
      source_code_link: "https://github.com/godfatherzaher/youtube_clone",
       live_demo_link: "https://youtube-clone-liart-omega-28.vercel.app/"
    },
    {
      name: "Cryptocurrency App ",
      description:
        "Real-time cryptocurrency tracker displaying global currency trends.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Ant Design",
          color: "green-text-gradient",
        },
        {
          name: "Chart.js",
          color: "pink-text-gradient",
        },
      ],
      image: crypto,
      source_code_link: "https://github.com/godfatherzaher/cryptoApp",
      live_demo_link: "https://crypto-app-fawn-psi.vercel.app/"
    },
    {
      name: "Dashboard ",
      description:
        "Interactive real-time analytics dashboard with seamless data integration and responsive layout",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
   
          color: "pink-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
      ],
      image: dashboard,
      source_code_link: "https://github.com/godfatherzaher/DashboardZaher",
    },
    {
      name: "Landing Page (Figma-based)",
      description:
        "Responsive landing page closely following a Figma prototype, optimized for all devices.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: hotelWeb,
      source_code_link: "https://github.com/godfatherzaher/task5",
        live_demo_link: "https://task5-two-snowy.vercel.app/"
 
    },
    {
      name: "Landing Page ",
      description:
        "Responsive landing page with a clean, device-optimized design.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "React Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: medicio,
      source_code_link: "https://github.com/godfatherzaher/task4",
          live_demo_link: "https://medicio-web.vercel.app/"
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };