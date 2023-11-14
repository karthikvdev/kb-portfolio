import React, { useState } from 'react'
import "./style.scss"
import SectionOpen from '../../../assests/sibebar-icons/section-open';
import SectionClose from '../../../assests/sibebar-icons/section-close';
const SibebarSection = ({ menu, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOnOpen = (event) => {
        event?.stopPropagation();
        setIsOpen(!isOpen)
    }

    return (
        <div className='sidebar-sections' tabIndex={0} onKeyDown={(e) => e?.key === "Enter" && handleOnOpen()} onClick={handleOnOpen}>
            <div className='name-wrapper'>{isOpen ? <SectionOpen /> : <SectionClose styles={{ rotate: "270deg" }} />} {menu?.icon && <span className='icon-wrapper'>{menu?.icon}</span>}<span>{menu?.name}</span></div>
            {isOpen && children && <div className='inner-section'>
                {children}
            </div>}
        </div>
    )
}

export default SibebarSection