import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import GitHubIcon from '../../../assests/icons/github'
import { THEME } from '../../../common/constants'
import UrlLinks from '../../../assests/icons/urllinks'

const ProjectCard = ({ thumbnail, title, description, techstacks, url, repoLink }) => {
    const theme = THEME.DARK;
    return (
        <div className='project-card'>
            <div className='thumbnail-container'>
                <img src={thumbnail} alt={title} />
            </div>
            <div className='project-info'>
                <h6 className='project-title'>
                    {title}
                </h6>
                <p className='project-description'>
                    {description}
                </p>
                <div className='project-tech-stack'>
                    <span className='label'>Tech Stack:</span>  <span>{techstacks?.map(stack => " " + stack)?.toString()} </span>
                </div>
                <div className='nav-links'>
                    <Link className='live-preview link' to={url} target='_blank'><UrlLinks theme={theme} /> Live Preview</Link>
                    <Link className="view-code link" to={repoLink} target='_blank'><GitHubIcon theme={theme} /> View Code</Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard