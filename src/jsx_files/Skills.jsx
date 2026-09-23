import '../css_files/Skills.css'

function Skills() {
  const skills = [
    {
      name: 'C Programming',
      category: 'Programming',
      description:
        'Strong foundation in C programming and problem solving.',
      proficiency: 'Advanced',
    },
    {
      name: 'C++',
      category: 'Programming',
      description:
        'Primary programming language for DSA and competitive programming.',
      proficiency: 'Advanced',
    },
    {
      name: 'Data Structures & Algorithms',
      category: 'Computer Science',
      description:
        'Experience with arrays, strings, linked lists, trees, and algorithmic problem solving.',
      proficiency: 'Advanced',
    },
    {
      name: 'Problem Solving',
      category: 'Core Skill',
      description:
        'Regularly practice programming problems and improve algorithmic thinking.',
      proficiency: 'Advanced',
    },
    {
      name: 'HTML',
      category: 'Web Development',
      description:
        'Building structured and semantic web pages.',
      proficiency: 'Intermediate',
    },
    {
      name: 'CSS',
      category: 'Web Development',
      description:
        'Creating responsive layouts using modern CSS techniques.',
      proficiency: 'Intermediate',
    },
    {
      name: 'JavaScript',
      category: 'Web Development',
      description:
        'Learning DOM manipulation, events, APIs, and interactive web development.',
      proficiency: 'Intermediate',
    },
    {
      name: 'Git & GitHub',
      category: 'Development Tools',
      description:
        'Managing source code and tracking project development with Git and GitHub.',
      proficiency: 'Intermediate',
    },
  ]

  return (
    <section className="skills-section">
      <header className="skills-header">
        <p>What I work with</p>
        <h2>My Skills</h2>
      </header>

      <ul className="skills-list">
        {skills.map((skill) => (
          <li className="skill-card" key={skill.name}>
            <h3>{skill.name}</h3>

            <p>{skill.description}</p>

            <p className="skill-category">
              Category: {skill.category}
            </p>

            <p className="skill-proficiency">
              Proficiency: {skill.proficiency}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills