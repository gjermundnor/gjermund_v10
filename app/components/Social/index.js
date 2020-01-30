import React from 'react'

require('./social.scss')

class Social extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div className="social-wrapper container">
        <div className="social-inner">
          <a target="_blank" href="https://www.linkedin.com/in/gjermund-norderhaug-266a9981/">
            <span id="linkedin"></span>
            <p>My LinkedIn profile.</p>
          </a>
        </div>
        <div className="social-inner">
          <a target="_blank" href="https://www.instagram.com/gjermundda/">
            <span id="instagram"></span>
            <p>Stuff I do when away from the computer.</p>
          </a>
        </div>
      </div>
    )
  }
}

export default Social
