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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    python, 
    softeng, 
    icic, 
    hqo,
    shinola,
    bu,
    go,
    c,
    sort_algo,
    personal_website, 
    resume_icon,
    imnotlatte, 
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "tech",
      title: "Tech", 

    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "resume", 
      title: "Resume", 
    }, 
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Fullstack Developer",
      icon: web,
      description: "As a capable fullstack MERN developer, " +  
      "I possess proficiency in MongoDB, Express, React, and Node.js, " + 
      "and have the ability to build full-stack web applications with clean, "+
      "scalable, and maintainable code. I excel at working in a team, understanding " +
      "software architecture and design patterns, and deploying applications " +
      "using tools such as Git, and Docker.", 
    },
    {
      title: "Software Engineer",
      icon: mobile,
      description: "As a software engineer, I possess the skills to design, develop, and maintain " +
      "software applications using various programming languages and technologies. I have experience in software architecture, "+
      "design patterns, and testing methodologies, and can write clean, efficient, and maintainable code. "+
      "I have a strong problem-solving aptitude, and can work collaboratively with other engineers, "+
      "designers, and stakeholders to deliver high-quality products. "+
      "I keep myself updated with the latest trends and advancements in the field, "+
      "and strive for continuous improvement in my skills and knowledge.",
    },
    {
      title: "Graph Designer",
      icon: creator,
      description: "As a graphic designer proficient in Adobe and Figma, "+
      "I have the skills to create visually compelling designs for various mediums such as print, "+
      "web, and mobile. I have expertise in design principles, typography, and color theory, "+
      "and can use various design software tools such as Photoshop, Illustrator, "+
      "and Figma to produce high-quality designs. I have a strong attention to detail and can work collaboratively "+
      "with clients and team members to deliver designs that meet their requirements and exceed their expectations. "+
      "I am passionate about staying up-to-date with the latest design trends and continuously improving my skills." ,
    },
  ];
  
  const technologies = [
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
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
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
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
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "Go",
      icon: go,
    },
    {
      name: "C",
      icon: c,
    }
  ];
  
  const experiences = [
    {
      title: "Marketing and Media Intern",
      company_name: "Inner City Capical Connections",
      icon: icic,
      iconBg: "#383E56",
      date: "July 2019 - Aug 2019",
      points: [
        "Participated in the tech. development and product management meetings.",
        "Utilized Salesforce to update salesforce information on the website.", 
        "Used Excel to manage all the existing data of existing/potential clients.", 
        "Pitched sales to potential customers to convince them to buy a product or service.",
        "Conducted market research and analyzed customer feedback to inform sales pitches.",
        "Assisted with digital marketing campaigns using tools such as Google Analytics, Hootsuite, Mailchimp, and AdWords.",
      ],
    },
    {
      title: "Graphic Design and Marketing Intern",
      company_name: "HeadQuarter Optimizer (HqO)",
      icon: hqo,
      iconBg: "#E6DEDD",
      date: "July 2020 - Aug 2020",
      points: [
        "Proposed potential designs for holiday-themed HqO company logos using design software.",
        "Designed user personas through Figma and online interviews for user experience (UX) design.",
        "Created templates for a weekly company design newsletter using graphic design skills.",
        "Used collaboration tools such as Figma, Google Drive, or Slack to work with other designers or stakeholders.",
      ],
    },
    {
      title: "Assistant Librarian ",
      company_name: "Boston University: Mugar Memorial Library",
      icon: bu,
      iconBg: "#383E56",
      date: "Aug 2021 - Present",
      points: [
        "Managed and maintained library databases, including cataloging systems and digital archives.",
        "Assisted patrons with using library technology, such as computers, printers, and scanners.",
        "Conducted research and analysis using library databases and search engines, such as EBSCO and JSTOR.",
        "Provided training and support to staff on library databases and technology systems.", 
        "Worked with IT department to troubleshoot and resolve technology issues related to library systems and equipment.", 
        "Developed and implemented strategies for integrating new technology and databases into the library's collection and services.", 
        "Collaborated with librarians and staff to ensure accurate and efficient organization of physical and digital materials.", 
        "Monitored and evaluated the effectiveness of library technology and databases, and made recommendations for improvement.", 
        "Stayed up-to-date with emerging technologies and trends in library databases and information management.",
      ],
    },
    {
      title: "Retail Sales Associate ",
      company_name: "Shinola",
      icon: shinola,
      iconBg: "#383E56",
      date: "Aug 2022 - Present",
      points: [
        "Utilized Point of Sale (POS) systems to process transactions, manage inventory, and generate sales reports.", 
        "Demonstrated expertise in Shinola's product offerings, including watches, leather goods, and bicycles, by utilizing internal computer systems to access detailed information.",
        "Used customer relationship management (CRM) software to track customer purchases, preferences, and contact information to build relationships and increase sales.",
        "Conducted product research and comparison shopping for customers using online resources, such as brand websites and customer reviews.",
        "Assisted customers with online orders and returns, and provided support for e-commerce platform, including order management and fulfillment.",
        "Coordinated with the corporate office to resolve customer issues related to online purchases or shipping.",
        "Stayed informed about current trends in luxury retail, technology, and fashion through training, seminars, and online resources.",
        "Assisted with visual merchandising efforts and updates to the company's website and social media accounts.",
        "Provided in-store technical support and troubleshooting for customers who needed assistance with smartwatch, fitness tracker, or other wearable technology.",
      ],
    },
  ];
  
  const hobbies= [
    {
      hobby: "Visual Art",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      hobby: "Guitar", 
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      hobby: "Badminton",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "3D Personal Website",
      description:
        "As a software engineer, I am always looking for new and exciting ways to showcase my skills and experience. That's why I created my personal website using React-Vite and Three.js. This 3D project features an interactive canvas with a playful Shiba Inu that visitors can play around with whenever they need a break from scrolling. To achieve this, I used React hooks, motion, display, and CSS styling with Tailwind to create a smooth and engaging user experience. I also utilized the power of React-Three/@fiber to add in 3D models and animation, allowing me to showcase my proficiency in various 3D frameworks. Through this project, I was able to demonstrate my ability to think outside the box and incorporate innovative features into my work. It allowed me to further hone my skills in React and explore new areas like 3D modeling and animation. Overall, I'm excited to continue exploring new technologies and frameworks in my future projects.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "vite",
          color: "purple-text-gradient",
        },
        {
          name: "react-three-fiber",
          color: "yellow-text-gradient",
        },
        {
          name: "react-spring",
          color: "orange-text-gradient",
        },
      ],
      image: personal_website,
      source_code_link: "https://github.com/jinghong1111/personal_website",
    },
    {
      name: "Sorting Algo. Visualizer",
      description:
        "Sorting Algorithm Visualizer is a Python-based project I developed that enables users to visualize various sorting algorithms, including bubble sort, bucket sort, counting sort, heap sort, insertion sort, merge sort, quick sort, radix sort, and selection sort. The project uses the matplotlib framework to generate visual representations of the sorting algorithms in action, and includes color imports to enhance the user experience. This project allowed me to deepen my understanding of these sorting algorithms and develop my proficiency in Python programming. It also honed my problem-solving skills as I worked to identify and resolve issues with the visualizations. Overall, Sorting Algorithm Visualizer was an engaging and rewarding project that helped me to grow as a developer.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "matplotlib",
          color: "green-text-gradient",
        },
      ],
      image: sort_algo,
      source_code_link: "https://github.com/jinghong1111/Sorting_algo_visualization",
    },
    {
      name: "I'm Not Latte",
      description:
        "I developed a full-stack web application with my teammatemates called 'I'm Not Latte' using Python, JS, CSS, HTML, and React. The project aimed to help users find the nearest and highest-rated coffee shops near their current location. My responsibilities included integrating a MongoDB database to store coffee shop data and user preferences, designing and developing the application's user interface, optimizing performance for fast load times and a smooth user experience, and collaborating with a team of developers to meet project deadlines. I was particularly focused on providing users with an extensive UI that would be easy to use and ensure a satisfying user experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "flask",
          color: "pink-text-gradient",
        },
          {
            name: "python",
            color: "purple-text-gradient",
          },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "css",
          color: "orange-text-gradient",
        },

      ],
      image: imnotlatte,
      source_code_link: "https://github.com/Yu-Yang-Wang/cs411-team-project/tree/main/411-latte",
    },
  ];
  
  export { services, technologies, experiences, hobbies, projects };