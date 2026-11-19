
/* ==================================================
   PROJECT DATA
   All projects displayed in the portfolio
================================================== */

const projects = [
  {
    id: 'trackly',
    name: 'Trackly',
    description:
      'A full-stack learning organizer and progress tracker that helps users organize external learning resources, track course progress, manage goals, and build consistent learning habits.',
    technologies: [
      'React 19',
      'Vite',
      'Node.js',
      'Express 5',
      'MongoDB',
      'Mongoose',
      'JWT',
    ],
    category: 'Full Stack',
    visual: 'trackly',
    githubLink: 'https://github.com/Rishabh8122004/Trackly',
    projectLink: 'https://trackly-rust.vercel.app',
    projectLinkLabel: 'View live app',
    features: [
      'User registration, email verification and login',
      'JWT-based authentication and password reset',
      'Course browsing, search and filtering',
      'Course enrollment and lesson progress tracking',
      'Nested goals, milestones, habits and targets',
      'Progress logs, habit history and streak tracking',
      'Personal dashboard and notifications',
      'Admin dashboard and course management',
      'Light and dark themes',
      'Responsive interface',
    ],
    howItWorks: [
      'The React frontend communicates with a REST API built using Node.js and Express.',
      'MongoDB Atlas stores user accounts, courses, enrollments, goals and progress entries.',
      'JWT authentication protects private routes, while role-based middleware restricts administrative operations.',
      'Users organize external learning resources into courses, enroll in them and track completed lessons.',
      'The goal system supports nested subgoals, milestones, habits and targets, with progress recorded through individual entries.',
      'The dashboard brings together learning progress, goals and activity in one place.',
    ],
  },

  {
    id: 'react-portfolio',
    name: 'React Portfolio',
    description:
      'A multi-page React portfolio built with Vite and React Router, with a searchable project section, a live GitHub API snapshot, a validated contact form, and a dark / light theme.',
    technologies: ['React', 'Vite', 'JavaScript', 'CSS'],
    category: 'React',
    visual: 'react',
    githubLink: 'https://github.com/Rishabh8122004/react-portfolio',
    projectLink: 'https://rishabh8122004.github.io/react-portfolio/',
    projectLinkLabel: 'View live site',
    features: [
      'Reusable components built with props',
      'Project search and category filter',
      'Dynamic project details route',
      'GitHub API integration with loading, success and error states',
      'Controlled contact form with validation',
      'Dark / light theme saved in Local Storage',
    ],
    howItWorks: [
      'React Router shows each page without a full reload, including the dynamic /project/:id route.',
      'All projects live in one array of objects. The gallery and this page are both built from it.',
      'The gallery filters that array using search and category state.',
      'The theme is saved in Local Storage, and GitHub data is fetched from the API with loading, success and error states.',
    ],
  },

  {
    id: 'hospital-management-system',
    name: 'Hospital Management System',
    description:
      'A console-based hospital management system for managing patients, doctors, and appointments. It uses a custom min-heap (priority queue) to list the nearest appointment first.',
    technologies: ['C++', 'DSA'],
    category: 'Other',
    visual: 'hospital',
    features: [
      'Patient records',
      'Doctor records',
      'Appointment scheduling',
      'Custom min-heap / priority queue',
      'Nearest appointment listed first',
      'Menu-driven console interface',
    ],
    howItWorks: [
      'Patients and doctors are stored in hash maps, each with an ID that increases automatically.',
      'Each appointment’s date and time are turned into one number of minutes. That number is its priority.',
      'Appointments go into a custom min-heap (an array with 1-based indexing) that keeps the earliest one at the top.',
      'To list appointments, the program copies the heap and removes the top one by one, so the original heap stays intact.',
      'A numbered menu lets you add patients and doctors, schedule appointments and view everything.',
    ],
  },

  {
    id: 'dsa-problem-solving',
    name: 'DSA Problem Solving',
    description:
      'A collection of data structure and algorithm problems solved while developing problem-solving and competitive programming skills.',
    technologies: ['C++', 'DSA'],
    category: 'Other',
    visual: 'dsa',
    githubLink: 'https://github.com/Rishabh8122004/DSA',
    projectLink: 'https://leetcode.com/u/Rxhabh_/',
    projectLinkLabel: 'View LeetCode profile',
    certificate: {
      image: `${import.meta.env.BASE_URL}image/Data_Structure_certificate.jpg`,
      title: 'DSA Certificate',
    },
    features: [
      'Array problems',
      'String problems',
      'Linked lists',
      'Hash maps',
      'Heaps',
      'Trees',
      'Dynamic programming',
      'Searching and sorting',
    ],
    howItWorks: [
      'Problems are solved in C++ on LeetCode.',
      'LeetSync automatically sends every accepted submission to the DSA repository on GitHub, which also adds to my GitHub contributions.',
      'The GitHub repository is the code archive. The LeetCode profile shows the full problem history.',
    ],
  },

  {
    id: 'javascript-interactive-portfolio',
    name: 'JavaScript Interactive Portfolio',
    description:
      'An interactive portfolio developed using JavaScript for dynamic content, DOM manipulation, events, APIs, and local storage.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'JavaScript',
    visual: 'javascript',
    githubLink: 'https://github.com/Rishabh8122004/rishabh-portfolio',
    projectLink: 'https://rishabh8122004.github.io/rishabh-portfolio/',
    projectLinkLabel: 'View live site',
    features: [
      'Dynamic project rendering',
      'Dynamic skill rendering',
      'Project search and filtering',
      'Project details modal',
      'DOM manipulation',
      'Event handling',
      'API integration',
      'Local storage theme persistence',
    ],
  },

  {
    id: 'personal-portfolio',
    name: 'Personal Portfolio',
    description:
      'A personal portfolio website built from scratch while learning HTML, CSS, and web development fundamentals.',
    technologies: ['HTML', 'CSS'],
    category: 'Web',
    visual: 'portfolio',
    githubLink: 'https://github.com/Rishabh8122004/html-css-portfolio',
    projectLink: 'https://rishabh8122004.github.io/html-css-portfolio/',
    projectLinkLabel: 'View live site',
    features: [
      'Semantic HTML structure',
      'Responsive CSS layouts',
      'Navigation system',
      'Portfolio sections',
      'Contact form',
    ],
  },

  {
    id: 'number-conversion-system',
    name: 'Number Conversion System',
    description:
      'A console-based system for converting numbers between binary, octal, decimal, and hexadecimal.',
    technologies: ['C++'],
    category: 'Other',
    visual: 'number-conversion',
    features: [
      'Binary conversion',
      'Octal conversion',
      'Decimal conversion',
      'Hexadecimal conversion',
      'Number representation and base conversion',
    ],
    howItWorks: [
      'You type the base you are starting from and the base you want, as words: binary, octal, decimal or hexadecimal.',
      'Binary becomes decimal by adding up the value of each bit, using left shifts.',
      'Decimal becomes binary, octal or hexadecimal by dividing again and again by the base and collecting the remainders.',
      'Octal and hexadecimal are first expanded into groups of binary digits, then converted to the target base.',
      'Binary and decimal act as the bridge between all four systems.',
    ],
  },

  {
    id: 'tic-tac-toe',
    name: 'Tic Tac Toe',
    description:
      'A simple console-based Tic Tac Toe game implemented in C++. It allows two players to take turns and play the classic game.',
    technologies: ['C++'],
    category: 'Other',
    visual: 'tic-tac-toe',
    features: [
      'Two-player gameplay',
      'Turn-based game logic',
      'Win detection',
      'Console-based input handling',
    ],
    howItWorks: [
      'The board is a 3 x 3 grid of characters, numbered 1 to 9, so a player picks a square by typing its number.',
      'Player 1 chooses X or O, and Player 2 gets the other symbol.',
      'Players take turns. The chosen square is replaced by the player’s symbol.',
      'After each move, the program checks every row, column and both diagonals for three matching symbols, and checks for a full board.',
      'The game ends by announcing the winner or a tie.',
    ],
  },
]

export default projects
