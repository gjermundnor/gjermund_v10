import React from 'react'

import CompanyItem from './../../components/CompanyItem'
require('./experience.scss')

const experience = [
  {
    company: 'Kindly',
    period: '08.2018 - Current',
  },
  {
    company: 'Making Waves',
    period: '08.2017 - 07.2018',
  },
  {
    company: 'Good Morning',
    period: '01.2017 - 07.2017 (Internship)',
  },
  {
    company: 'Timotei Designs',
    period: '02.2015 - 07.2017 (Part time)',
  },
  {
    company: 'Helli',
    period: '11.2015 - 05.2017 (Part time)',
  },
  {
    company: 'Godt Sagt',
    period: '11.2012 - 06.2013 (Part time)',
  },
]

class Experience extends React.Component { // eslint-disable-line react/prefer-stateless-function
  printExperience () {
    return experience.map((data, index) =>
      <CompanyItem company={data.company} period={data.period} key={index} />
    )
  }

  render () {
    return (
      <div className="experience-wrapper">
        { this.printExperience() }
      </div>
    )
  }
}

export default Experience
