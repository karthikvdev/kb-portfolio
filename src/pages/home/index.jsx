import React from 'react'
import "./style.scss"
import PageWrapper from '../../hoc';
import Intro from '../../container/intro';
import About from '../../container/about';
import Skills from '../../container/skills';
import Projects from '../../container/projects';
import Contact from '../../container/contact';

const Home = () => {
  return (
    <>
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default PageWrapper(Home);