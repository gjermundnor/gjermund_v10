import React from 'react'

require('./companyitem.scss')

class CompanyItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div className="company-item-wrapper">
        <h2 className="company">{ this.props.company }</h2>
        <em className="period">{ this.props.period }</em>
      </div>
    )
  }
}

export default CompanyItem
