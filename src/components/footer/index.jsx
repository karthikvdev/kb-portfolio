import React from 'react'
import "./style.scss"
import { ROUTES, URLS } from '../../common/constants'
import { Link } from 'react-router-dom'
import GitHubIcon from '../../assests/icons/github'
import TwitterIcon from '../../assests/icons/twitter'
import FacebookIcon from '../../assests/icons/facebook'
import Instagram from '../../assests/icons/instagram'

const Footer = () => {

  const centerMenu = [
    { label: <TwitterIcon />, to: ROUTES.HOME },
    { label: <FacebookIcon />, to: ROUTES.HOME },
    { label: <Instagram />, to: ROUTES.HOME },
    
  ]

  return (
    <div className='footer-container'>
      <div className='menu'>Find me in:</div>
      <div className='center-menu'>
        {centerMenu?.map((menu, index) => <Link key={index} className='menu icon-container' to={menu.to}>{menu?.label}</Link>)}
      </div>
      <div className='menu'></div>
      <Link className='menu github-menu' to={URLS.GITHUB} target="_blank">@karthikvdev<GitHubIcon /></Link>
    </div >
  )
}

export default Footer