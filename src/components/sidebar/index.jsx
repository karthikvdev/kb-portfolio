import React from 'react'
import "./styles.scss"
import SibebarSection from './sections'
import FolderIcon from '../../assests/sibebar-icons/folder-icon'
import SideMenuBar from './menu'
import MailIcon from '../../assests/sibebar-icons/mail-icon'
import PhoneIcon from '../../assests/sibebar-icons/phone-icon'
import { NAMES } from '../../common/constants'

const SideBar = () => {
    const sidebar = [{
        name: "personal-info",
        sections: [{
            name: "bio",
            type: "section",
            icon: <FolderIcon color={"#E99287"} />
        }, {
            name: "interests",
            type: "section",
            icon: <FolderIcon color={"#43D9AD"} />
        }, {
            name: "education",
            type: "section",
            icon: <FolderIcon color={"#3A49A4"} />,
            subsection: [{
                name: "high-school",
                type: "subsection"
            }, {
                name: "university",
                type: "subsection"
            }]
        }
        ]
    }, {
        name: "contacts",
        menu: [{
            name: NAMES.EMAIL,
            icon: <MailIcon />,
            isNavigate: true,
            href: `mailto:${NAMES.EMAIL}`
        }, {
            name: "+91 9941145566",
            icon: <PhoneIcon />,
            isNavigate: true,
            href: `tel:${NAMES.MOBILE}`
        }]
    }]
    return (
        <>
            <div className='sidebar'>
                {sidebar?.map((menu, index) => <SibebarSection key={index} menu={menu}>
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