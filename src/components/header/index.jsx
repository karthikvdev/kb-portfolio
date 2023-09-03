import React from 'react'
import "./style.scss"
import { ROUTES } from '../../common/constants'
import { Link } from 'react-router-dom'

const Header = () => {

    const centerMenu = [
        { label: "_hello", to: ROUTES.HOME },
        { label: "_about-me", to: ROUTES.ABOUT },
        { label: "_projects", to: ROUTES.PROJECTS },
    ]

    return (
        <div className='header-container'>
            <Link className='menu' to={ROUTES.HOME}>karthik-balaji</Link>
            <div className='center-menu'>
                {centerMenu?.map((menu, index) => <Link key={index} className='menu' to={menu.to}>{menu?.label}</Link>)}
            </div>
            <Link className='menu' to={ROUTES.CONTACT}>_contact-me</Link>
        </div>
    )
}

export default Header