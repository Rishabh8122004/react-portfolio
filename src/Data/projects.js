/* ==================================================
   PROJECT DATA
   WEEK 4 REACT PORTFOLIO

   Optional fields (only add them if they are real):
   - projectLink       (+ projectLinkLabel for the button text)
   - githubLink
   - howItWorks        (short steps, taken from the real code)
================================================== */

const projects = [
  {
    id: 'tic-tac-toe',
    name: 'Tic Tac Toe',
    description:
      'A simple console-based Tic Tac Toe game implemented in C++. It allows two players to take turns and play the classic game.',
    technologies: ['C++'],
    category: 'Other',
    visual: 'tic-tac-toe',
    // githubLink: 'PASTE_REPO_URL_HERE',
    features: [
      'Two-player gameplay',
      'Turn-based game logic',
      'Win detection',
      'Console-based input handling',
    ],
    howItWorks: [
      'The board is a 3 x 3 grid of characters, numbered 1 to 9, so a player picks a square by typing its number.',
      'Player 1 chooses X or O, and Player 2 gets the other symbol.',
      'Players take turns. The chosen square is replaced by the player\u2019s symbol.',
      'After each move, the program checks every row, column and both diagonals for three matching symbols, and checks for a full board.',
      'The game ends by announcing the winner or a tie.',
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
    // githubLink: 'PASTE_REPO_URL_HERE',
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
    id: 'hospital-management-system',
    name: 'Hospital Management System',
    description:
      'A console-based hospital management system for managing patients, doctors, and appointments. It uses a custom min-heap (priority queue) to list the nearest appointment first.',
    technologies: ['C++', 'DSA'],
    category: 'Other',
    visual: 'hospital',
    // githubLink: 'PASTE_REPO_URL_HERE',
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
      'Each appointment\u2019s date and time are turned into one number of minutes. That number is its priority.',
      'Appointments go into a custom min-heap (an array with 1-based indexing) that keeps the earliest one at the top.',
      'To list appointments, the program copies the heap and removes the top one by one, so the original heap stays intact.',
      'A numbered menu lets you add patients and doctors, schedule appointments and view everything.',
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
    id: 'javascript-interactive-portfolio',
    name: 'JavaScript Interactive Portfolio',
    description:
      'An interactive portfolio developed using JavaScript for dynamic content, DOM manipulation, events, APIs, and local storage.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'JavaScript',
    visual: 'javascript',
    githubLink: 'https://github.com/Rishabh8122004/rishabh-portfolio',
    // projectLink: 'PASTE_LIVE_URL_HERE',
    // projectLinkLabel: 'View live site',
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
    id: 'react-portfolio',
    name: 'React Portfolio',
    description:
      'A multi-page React portfolio built with Vite and React Router, with a searchable project section, a live API quote, a validated contact form, and a dark / light theme.',
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
      'API quote with loading, success and error states',
      'Controlled contact form with validation',
      'Dark / light theme saved in Local Storage',
    ],
    howItWorks: [
      'React Router shows each page without a full reload, including the dynamic /project/:id route.',
      'All projects live in one array of objects. The gallery and this page are both built from it.',
      'The gallery filters that array using search and category state.',
      'The theme is saved in Local Storage, and a live quote is fetched from an API with loading, success and error states.',
    ],
  },
]

export default projects