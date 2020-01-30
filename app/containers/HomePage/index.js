/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react'

import TopView from './../../components/TopView'
import SectionDivider from './../../components/SectionDivider'
import Contact from './../../components/Contact'
import Social from './../../components/Social'
import Experience from './../Experience'
import Skills from './../Skills'
require('./homePage.scss')

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div className="experience-wrapper">
        <div className="frameLeft"></div>
        <div className="frameTop"></div>
        <div className="frameRight"></div>
        <div className="frameBottom"></div>
        <TopView />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Social />
        <Contact />
      </div>
    )
  }
}
