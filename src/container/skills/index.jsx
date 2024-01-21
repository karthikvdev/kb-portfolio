import React from 'react';
import "./styles.scss";
import { THEME } from '../../common/constants';
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

const Skills = () => {
    const theme = THEME.DARK;
    const techStackArr = [
        <HTMLIcon theme={theme} />,
        <CSSIcon theme={theme} />,
        <JavascriptIcon theme={theme} />,
        <TypescriptIcon theme={theme} />,
        <SCSSIcon theme={theme} />,
        <ReactIcon theme={theme} />,
        <NodeJsIcon theme={theme} />,
        <MongoIcon theme={theme} />,
        <AngularIcon theme={theme} />,
        <NextIcon theme={theme} />,
    ]

    const toolsArr = [
        <GitIcon theme={theme} />,
        <GitHubIcon theme={theme} />,
        <VscodeIcon theme={theme} />,
        <PostmanIcon theme={theme} />,
        <FigmaIcon />
    ]



    return (
        <section id='skills'>
            <div className='title-container'>
                <h6 className='title'>My tech stack</h6>
                <p className='description'>Technolgies I've been working with recently</p>
            </div>
            <div className='tech-stack-icons-container'>
                {techStackArr?.map((icon) => <div className="icon-container" >{icon}</div>)}
            </div>
            <div className='title-container tools-container'>
                <p className='description'>Tools that I've been using for my development</p>
            </div>
            <div className='tech-stack-icons-container'>
                {toolsArr?.map((icon) => <div className="icon-container" >{icon}</div>)}
            </div>
        </section>
    )
}

export default Skills;