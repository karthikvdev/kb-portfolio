import React from 'react'
import "./styles.scss"
import MenuIcons from '../../../assests/sibebar-icons/menu-icon'

const SideMenuBar = ({ menu }) => {
    return (
        <div className='side-menu-bar'>
            <div>
                {menu?.icon ?? <MenuIcons />}
                {menu?.isNavigate ? <a className="navigation-btn" href={menu?.href}>{menu?.name}</a> : <span>{menu?.name}</span>}
            </div>
        </div>
    )
}

export default SideMenuBar