import React, { useContext, useState } from 'react'
import "./style.scss"
import { NAMES, ROUTES, THEME, scrollToTop } from '../../common/constants'
import { Link, useLocation } from 'react-router-dom'
import HamburgerMenu from '../../assests/icons/hamburger-menu'
import ThemeToggle from '../../assests/icons/theme-toggle'
import { AppContext } from '../../context'

const Header = () => {
    const { theme, setTheme } = useContext(AppContext);
    const [isDarkTheme, setIsDarkTheme] = useState(theme === THEME.DARK ? true : false)
    const location = useLocation()
    const centerMenu = [
        { label: "_about-me", to: ROUTES.ABOUT },
        { label: "_skills", to: ROUTES.SKILLS },
        { label: "_projects", to: ROUTES.PROJECTS },
    ]

    const handleOpenMenu = () => {
        // A function to open popup for header menu.
    }

    const handleOnToggle = (darkTheme) => {
        localStorage?.setItem("theme", darkTheme ? THEME.DARK : THEME.LIGHT);
        setTheme(darkTheme ? THEME.DARK : THEME.LIGHT);
        setIsDarkTheme(darkTheme);
    }

    return (
        <div className='header-container'>
            <div className='menu hamburger-menu' onClick={handleOpenMenu}>
                <HamburgerMenu />
            </div>
            <Link className='menu' to={ROUTES.HOME} onClick={scrollToTop}>{NAMES.USER_NAME}</Link>
            <div className='center-menu text-align'>
                {centerMenu?.map((menu, index) => <a key={index} className={`sub-menu ${location.pathname === menu.to ? 'active' : ''}`} href={"#" + menu.to}>{menu?.label}</a>)}
            </div>
            <div className='menu toggle-theme'>
                <span className='theme-btn' onClick={() => handleOnToggle(!isDarkTheme)}>
                    <ThemeToggle theme={theme ? THEME.DARK : THEME.LIGHT} />
                </span>
            </div>
        </div>
    )
}

export default Header