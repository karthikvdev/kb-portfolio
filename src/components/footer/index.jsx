import React from 'react'
import "./style.scss"
import { NAMES, URLS } from '../../common/constants'
import { Link } from 'react-router-dom'
import GitHubIcon from '../../assests/icons/github'
import TwitterIcon from '../../assests/icons/twitter'
import FacebookIcon from '../../assests/icons/facebook'
import Instagram from '../../assests/icons/instagram'
import PhoneIcon from "../../assests/sibebar-icons/phone-icon"
import LinkedInIcon from '../../assests/icons/linkedin'
import MailIcon from '../../assests/sibebar-icons/mail-icon'

const Footer = () => {

  const centerMenu = [
    { label: <TwitterIcon />, to: URLS.TWITTER },
    { label: <FacebookIcon />, to: URLS.FACEBOOK },
    { label: <Instagram />, to: URLS.INSTAGRAM },
    { label: <LinkedInIcon />, to: URLS.LINKEDIN },
    { label: <PhoneIcon />, to: URLS.MOBILE, toolTipText: NAMES.MOBILE },
    { label: <MailIcon />, to: URLS.EMAIL, toolTipText: NAMES.EMAIL }

  ]

  return (
    <div className='footer-container'>
      <div className='menu find-me'>Find me in:</div>
      <div className='center-menu'>
        {centerMenu?.map((menu, index) => <Link key={index} title={menu?.toolTipText} className='sub-menu icon-container' target="_blank" to={menu.to}>{menu?.label}</Link>)}
      </div>
      <div className='menu empty-menu'></div>
      <Link className='menu github-menu' to={URLS.GITHUB} target="_blank"><span className='github-name'>{NAMES.GITHUB}</span><GitHubIcon /></Link>
    </div >
  )
}

export default Footer