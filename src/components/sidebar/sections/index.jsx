import React, { useState } from 'react'
import SectionOpen from '../../../assests/sibebar-icons/section-open';
import "./style.scss"
const SibebarSection = ({ menu, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOnOpen = (event) => {
        event.stopPropagation();
        setIsOpen(!isOpen)
    }

    return (
        <div className='sidebar-sections' onClick={handleOnOpen}>
            <div className='name-wrapper'>{<SectionOpen styles={!isOpen ? { rotate: "270deg" } : {}} />} {menu?.icon} <span>{menu?.name}</span></div>
            {isOpen && <div>
                {children}
            </div>}
        </div>
    )
}

export default SibebarSection