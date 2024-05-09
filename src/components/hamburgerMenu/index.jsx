import React, { useState } from 'react'
import HamburgerMenuIcon from '../../assests/icons/hamburger-menu-icon';
import CloseIcon from '../../assests/icons/close-icon';

const HamburgerMenu = () => {
    const [open, setOpen] = useState(false);

    const handleOnToggle = () => {
        setOpen(!open);
        console.log('open', open)
    }

    return (
        <>
            <div>
                <div className='hamburger-menu-container'>
                    <div tabIndex={0} onClick={handleOnToggle}>
                        {open ? <CloseIcon /> : <HamburgerMenuIcon />}
                    </div>
                </div>
                <div className="hamburger-menu-container-menu" style={{ height: open ? "100%" : "0" }}>
                    {
                        open ?
                            <div className="hamburger-menu-container-menu-list">
                                {this.props.children}
                            </div> : null
                    }
                </div>
                {/* <Menu open={this.state.menuOpen}>
                    {menuItems}
                </Menu> */}
            </div>
        </>
    )
}

export default HamburgerMenu;