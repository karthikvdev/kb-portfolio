import React from 'react'
import "./style.scss"
import PageWrapper from '../../hoc'
import FolderIcon from '../../assests/sibebar-icons/folder-icon'
import MailIcon from '../../assests/sibebar-icons/mail-icon'
import PhoneIcon from '../../assests/sibebar-icons/phone-icon'
import { NAMES } from '../../common/constants'
import { Editor } from '@monaco-editor/react'
import { useSearchParams } from 'react-router-dom'

const sidebar = [{
    name: "personal-info",
    sections: [{
        name: "bio",
        type: "section",
        icon: <FolderIcon color={"#E99287"} />,
        subsection: [{
            name: "about-me",
            type: "subsection",
            href: "/about-me",
            isNavigate: true
        }]
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
            type: "subsection",
            href: "/about-me",
            isNavigate: true
        }, {
            name: "higher-secondary",
            type: "subsection",
            href: "/about-me",
            isNavigate: true
        }, {
            name: "university",
            type: "subsection",
            href: "/about-me",
            isNavigate: true
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
const About = () => {
    const [searchParams] = useSearchParams();
    const rTabs = (str) => str.trim().replace(/^ {4}/gm, "");
    const code = rTabs(`
    // A sample react code snippets.
      // asdasdsad ${searchParams.get("to")}   
  `)

    return (
        <div>
            <Editor
                height="500px"
                theme={"vs-dark"}
                language='javascript'
                value={code}
                onChange={(e) => console.log("EVENT", e)}
                options={{ readOnly: false }}
            />
        </div>
    )
}

export default PageWrapper(About, { isSideBar: true, sideBarMenu: sidebar })