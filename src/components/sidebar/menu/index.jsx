import React from 'react'
import "./styles.scss"
import MenuIcons from '../../../assests/sibebar-icons/menu-icon'
import { createSearchParams, useSearchParams } from 'react-router-dom'

const SideMenuBar = ({ menu }) => {

    let [searchParams, setSearchParams] = useSearchParams();    
    const handleOnOpen = (event) => {
        event?.stopPropagation();
    }
    return (
        <div className='side-menu-bar' onClick={handleOnOpen}>
            <div>
                <span className='inner-icon-section'> {menu?.icon ?? <MenuIcons />} </span>
                {menu?.isNavigate ? <>
                {/* <Link className="navigation-btn" to={{ search: searchParams?.get("to") }} onClick={() => setSearchParams(createSearchParams({ to: menu?.name }), { replace: true })}>{menu?.name}</Link> */}
                <button className="navigation-btn" to={{ search: searchParams?.get("to") }} onClick={() => setSearchParams(createSearchParams({ to: menu?.name }), { replace: true })}>{menu?.name}</button> </>: <span>{menu?.name}</span>}
            </div>
        </div>
    )
}

export default SideMenuBar