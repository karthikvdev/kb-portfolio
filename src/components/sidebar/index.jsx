import React from 'react'
import "./styles.scss"
import SibebarSection from './sections'
import SideMenuBar from './menu'


const SideBar = ({ sideBarMenu }) => {

    return (
        <>
            <div className='sidebar'>
                {sideBarMenu?.map((menu, index) => <SibebarSection key={index} menu={menu}>
                    <div className='section-wrapper'>
                        {menu?.sections?.map((section, secIndex) => <SibebarSection key={secIndex} menu={section}>
                            {section?.subsection?.map((subsection, subSecIndex) => <SideMenuBar key={subSecIndex} menu={subsection} />)}
                        </SibebarSection>)}
                        {menu?.menu?.map((submenu, index) => <SideMenuBar key={index} menu={submenu} />)}
                    </div>
                </SibebarSection>)}
            </div>
        </>
    )
}

export default SideBar;