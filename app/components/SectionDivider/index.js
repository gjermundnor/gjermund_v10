import React from 'react'

require('./sectiondivider.scss')

class SectionDivider extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div className="section-divider-wrapper">
        |
      </div>
    )
  }
}

export default SectionDivider
