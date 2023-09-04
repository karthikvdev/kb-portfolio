import React from 'react'
import "./style.scss"
import { NAMES, ROUTES } from '../../common/constants'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation()
    const centerMenu = [
        { label: "_about-me", to: ROUTES.ABOUT },
        { label: "_skills", to: ROUTES.SKILLS },
        { label: "_projects", to: ROUTES.PROJECTS },
    ]

    return (
        <div className='header-container'>
            <Link className='menu' to={ROUTES.HOME}>{NAMES.USER_NAME}</Link>
            <div className='center-menu text-align'>
                {centerMenu?.map((menu, index) => <Link key={index} className={`menu ${location.pathname === menu.to ? 'active' : ''}`} to={menu.to}>{menu?.label}</Link>)}
            </div>
            <Link className={`menu ${location.pathname === ROUTES.CONTACT ? 'active' : ''}`} to={ROUTES.CONTACT}>_contact-me</Link>
        </div>
    )
}

export default Header