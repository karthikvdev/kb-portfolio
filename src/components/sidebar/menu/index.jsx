import React from 'react'
import "./styles.scss"
import MenuIcons from '../../../assests/sibebar-icons/menu-icon'
import { Link } from 'react-router-dom'

const SideMenuBar = ({ menu }) => {

    const handleOnOpen = (event) => {
        event.stopPropagation();
    }
    return (
        <div className='side-menu-bar'  onClick={handleOnOpen}>
            <div>
                <span className='inner-icon-section'> {menu?.icon ?? <MenuIcons />} </span>
                {menu?.isNavigate ? <Link className="navigation-btn" to={menu?.href}>{menu?.name}</Link> : <span>{menu?.name}</span>}
            </div>
        </div>
    )
}

export default SideMenuBar