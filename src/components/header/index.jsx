import React from 'react'
import "./style.scss"
import { NAMES, ROUTES, scrollToTop } from '../../common/constants'
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
            <Link className='menu' to={ROUTES.HOME} onClick={scrollToTop}>{NAMES.USER_NAME}</Link>
            <div className='center-menu text-align'>
                {centerMenu?.map((menu, index) => <a key={index} className={`menu ${location.pathname === menu.to ? 'active' : ''}`} href={"#" + menu.to}>{menu?.label}</a>)}
            </div>
            <a className={`menu ${location.pathname === ROUTES.CONTACT ? 'active' : ''} text-align`} href={"#" + ROUTES.CONTACT}>_contact-me</a>
        </div>
    )
}

export default Header