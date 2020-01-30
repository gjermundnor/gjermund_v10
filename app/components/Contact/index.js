import React from 'react'

require('./contact.scss')

class Contact extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div className="contact-wrapper container">
        <p>If you find my profile interesting, please get in touch.</p>
        <p>gjermundnor@gmail.com</p>
      </div>
    )
  }
}

export default Contact
