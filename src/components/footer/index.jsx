import React from 'react'
import "./style.scss"
import { NAMES, ROUTES, URLS } from '../../common/constants'
import { Link } from 'react-router-dom'
import GitHubIcon from '../../assests/icons/github'
import TwitterIcon from '../../assests/icons/twitter'
import FacebookIcon from '../../assests/icons/facebook'
import Instagram from '../../assests/icons/instagram'
import LinkedInIcon from '../../assests/icons/linkedin'

const Footer = () => {

  const centerMenu = [
    { label: <TwitterIcon />, to: URLS.TWITTER },
    { label: <FacebookIcon />, to: URLS.FACEBOOK },
    { label: <Instagram />, to: URLS.INSTAGRAM },
    { label: <LinkedInIcon />, to: URLS.LINKEDIN }

  ]

  return (
    <div className='footer-container'>
      <div className='menu'>Find me in:</div>
      <div className='center-menu'>
        {centerMenu?.map((menu, index) => <Link key={index} className='menu icon-container' target="_blank" to={menu.to}>{menu?.label}</Link>)}
      </div>
      <div className='menu'></div>
      <Link className='menu github-menu' to={URLS.GITHUB} target="_blank">{NAMES.GITHUB}<GitHubIcon /></Link>
    </div >
  )
}

export default Footer