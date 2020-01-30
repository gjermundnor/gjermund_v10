import React from 'react'

require('./skills.scss')

const skills = [
  { skill: 'React' },
  { skill: 'Redux' },
  { skill: 'Javascript ES6' },
  { skill: 'HTML' },
  { skill: 'CSS / SASS' },
  { skill: 'PHP' },
  { skill: 'jQuery' },
  { skill: 'Webpack' },
  { skill: 'WordPress' },
  { skill: 'Scrum' },
  { skill: 'PhotoShop' },
  { skill: 'MySQL' },
  { skill: 'REST' },
  { skill: 'Git' },
  { skill: 'JSON' },
  { skill: 'WCAG 2.0' },
  { skill: 'Interaction design' },
  { skill: 'Styled Components' },
  { skill: 'Google Analytics' },
  { skill: 'Balsamiq' },
  { skill: 'Git flow' },
  { skill: 'Octopus Deploy' },
]

class Skills extends React.Component { // eslint-disable-line react/prefer-stateless-function
  printSkills () {
    return skills.map((data, index) =>
      <h2 className="skill" key={index}>{data.skill}</h2>
    )
  }

  render () {
    return (
      <div className="skills-wrapper container">
        { this.printSkills() }
      </div>
    )
  }
}

export default Skills
