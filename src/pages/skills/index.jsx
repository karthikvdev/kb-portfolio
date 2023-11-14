import React from 'react';
import PageWrapper from '../../hoc';
import "./styles.scss";
import FolderIcon from "../../assests/sibebar-icons/folder-icon";
import { useSearchParams } from 'react-router-dom';

const sidebar = [{
    name: "programming-languages",
    menu: [{
        name: "javascript",
        isNavigate: true,
        type: "subsection",
        href: `/skills`
    }, {
        name: "typescript",
        isNavigate: true,
        type: "subsection",
        href: `skills`
    }]
}, {
    name: "web-development",
    sections: [{
        name: "front-end",
        type: "section",
        icon: <FolderIcon color={"#E99287"} />,
        subsection: [{
            name: "html",
            type: "subsection",
            href: "/skills",
            isNavigate: true
        }, {
            name: "css",
            type: "subsection",
            href: "/skills",
            isNavigate: true
        }, {
            name: "angular",
            type: "subsection",
            href: "/skills",
            isNavigate: true
        },
        {
            name: "react-js",
            type: "subsection",
            href: "/skills",
            isNavigate: true
        },
        ]
    }, {
        name: "back-end",
        type: "section",
        icon: <FolderIcon color={"#43D9AD"} />,
        subsection: [{
            name: "node-js",
            type: "subsection",
            href: "/skills",
            isNavigate: true
        }, {
            name: "express-js",
            type: "subsection",
            href: "/skills",
            isNavigate: true
        }]
    }, {
        name: "full-stack",
        type: "section",
        icon: <FolderIcon color={"#4d5bce"} />,
        subsection: [{
            name: "next-js",
            type: "subsection",
            href: "/skills",
            isNavigate: true
        }]
    }]
}, {
    name: "database",
    sections: [{
        name: "sql",
        type: "section",
        icon: <FolderIcon color={"#E99287"} />,
        subsection: [{
            name: "postgre-sql",
            type: "subsection",
            href: "/skills",
            isNavigate: true
        }, {
            name: "my-sql",
            type: "subsection",
            href: "/skills",
            isNavigate: true
        }]
    }, {
        name: "no-sql",
        type: "section",
        icon: <FolderIcon color={"#43D9AD"} />,
        subsection: [{
            name: "mongo-db",
            type: "subsection",
            href: "/skills",
            isNavigate: true
        }
        ]
    }]
}, {
    name: "version-control",
    menu: [{
        name: "git",
        isNavigate: true,
        type: "subsection",
        href: `/skills`
    }, {
        name: "git-hub",
        isNavigate: true,
        type: "subsection",
        href: `/skills`
    }, {
        name: "bit-bucket",
        isNavigate: true,
        type: "subsection",
        href: `/skills`
    }, {
        name: "git-lab",
        isNavigate: true,
        type: "subsection",
        href: `/skills`
    }]
}, {
    name: "project-management-tools",
    menu: [{
        name: "jira",
        isNavigate: true,
        type: "subsection",
        href: `/skills`
    }, {
        name: "click-up",
        isNavigate: true,
        type: "subsection",
        href: `/skills`
    }, {
        name: "red-mine",
        isNavigate: true,
        type: "subsection",
        href: `/skills`
    }, {
        name: "trello",
        isNavigate: true,
        type: "subsection",
        href: `/skills`
    }, {
        name: "hub-staff",
        isNavigate: true,
        type: "subsection",
        href: `/skills`
    }, {
        name: "time-champ",
        isNavigate: true,
        type: "subsection",
        href: `/skills`
    }]
}]
const Skills = () => {

    const [searchParams] = useSearchParams();

    return (
        <div>Skills - {searchParams?.get("to")}</div>
    )
}

export default PageWrapper(Skills, { isSideBar: true, sideBarMenu: sidebar })