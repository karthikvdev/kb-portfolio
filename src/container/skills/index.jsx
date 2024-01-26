import React, { useContext } from 'react';
import "./styles.scss";
import HTMLIcon from '../../assests/icons/html';
import CSSIcon from '../../assests/icons/css';
import AngularIcon from '../../assests/icons/angular';
import JavascriptIcon from '../../assests/icons/javascript';
import TypescriptIcon from '../../assests/icons/typescript';
import SCSSIcon from '../../assests/icons/scss';
import NodeJsIcon from '../../assests/icons/nodejs';
import ReactIcon from '../../assests/icons/react';
import NextIcon from '../../assests/icons/next';
import MongoIcon from '../../assests/icons/mongo';
import GitIcon from '../../assests/icons/git';
import GitHubIcon from '../../assests/icons/github';
import VscodeIcon from '../../assests/icons/vscode';
import PostmanIcon from '../../assests/icons/postman';
import FigmaIcon from '../../assests/icons/figma';
import { AppContext } from '../../context';

const Skills = () => {
    const { theme } = useContext(AppContext)
    const techStackArr = [
        { icon: <HTMLIcon theme={theme} />, name: "HTML" },
        { icon: <CSSIcon theme={theme} />, name: "CSS" },
        { icon: <JavascriptIcon theme={theme} />, name: "Javascript" },
        { icon: <TypescriptIcon theme={theme} />, name: "Typescript" },
        { icon: <SCSSIcon theme={theme} />, name: "SCSS" },
        { icon: <ReactIcon theme={theme} />, name: "React" },
        { icon: <NodeJsIcon theme={theme} />, name: "NodeJS" },
        { icon: <MongoIcon theme={theme} />, name: "MongoDB" },
        { icon: <AngularIcon theme={theme} />, name: "Angular" },
        { icon: <NextIcon theme={theme} />, name: "NextJS" },
    ]

    const toolsArr = [
        { icon: <GitIcon theme={theme} />, name: "Git" },
        { icon: <GitHubIcon theme={theme} />, name: "GitHub" },
        { icon: <VscodeIcon theme={theme} />, name: "VS Code" },
        { icon: <PostmanIcon theme={theme} />, name: "Postman" },
        { icon: <FigmaIcon />, name: "Figma" }
    ]



    return (
        <section id='skills'>
            <div className='title-container'>
                <h6 className='title'>My tech stack</h6>
                <p className='description'>Technolgies I've been working with recently</p>
            </div>
            <div className='tech-stack-icons-container'>
                {techStackArr?.map((icon, index) =>
                    <div className="icon-container" key={index} >
                        {icon?.icon}
                        <span className='tech-name'>{icon?.name}</span>
                    </div>)}
            </div>
            <div className='title-container tools-container'>
                <p className='description'>Tools that I've been using for my development</p>
            </div>
            <div className='tech-stack-icons-container'>
                {toolsArr?.map((icon, index) =>
                    <div className="icon-container" key={index}>
                        {icon?.icon}
                        <span className='tech-name'>{icon?.name}</span>
                    </div>)}
            </div>
        </section>
    )
}

export default Skills;