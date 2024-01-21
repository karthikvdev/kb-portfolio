import React from 'react'
import "./style.scss"
import ProjectCard from './project-card'
import Project1 from '../../assests/images/projects/1.png'
import Project2 from '../../assests/images/projects/2.png'
import Project3 from '../../assests/images/projects/3.png'
import Project4 from '../../assests/images/projects/4.png'
import Project5 from '../../assests/images/projects/5.png'
import Project6 from '../../assests/images/projects/6.png'

const Projects = () => {
    const projectArr = [
        {
            thumbnail: Project1,
            title: "Unipick",
            description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            techstacks: ["NextJS", "ExpressJS", "MongoDB", "NodeJs"],
            url: "https://www.unipick.com/",
            repolink: "https://karthikbalaji-dev.web.app/"
        },
        {
            thumbnail: Project2,
            title: "Poorvika",
            description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            techstacks: ["React", "ExpressJS", "MongoDB", "NodeJs"],
            url: "https://www.poorvika.com/",
            repolink: "https://karthikbalaji-dev.web.app/"
        },
        {
            thumbnail: Project3,
            title: "Waymore",
            description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            techstacks: ["Angular", "PHP", "SQL", "MongoDB", "NodeJs", "React"],
            url: "https://www.waymore.io/",
            repolink: "https://karthikbalaji-dev.web.app/"
        },
        {
            thumbnail: Project4,
            title: "Trident Builders",
            description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            techstacks: ["HTML", "SCSS", "React", "NodeJs"],
            url: "https://tridentbuilders.in/",
            repolink: "https://karthikbalaji-dev.web.app/"
        },
        {
            thumbnail: Project5,
            title: "Top School",
            description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            techstacks: ["NextJS", "ExpressJS", "MongoDB", "NodeJs"],
            url: "https://thetopschool.com/",
            repolink: "https://karthikbalaji-dev.web.app/"
        },
        {
            thumbnail: Project6,
            title: "Unipick",
            description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
            techstacks: ["NextJS", "ExpressJS", "MongoDB", "NodeJs"],
            url: "https://karthikbalaji-dev.web.app/",
            repolink: "https://karthikbalaji-dev.web.app/"
        }
    ]
    return (
        <section id='projects'>
            <div className='title-container'>
                <h6 className='title'>Projects</h6>
                <p className='description'>Things I've build so far</p>
            </div>
            <div className='projects-list-container'>
                {projectArr?.map((project) =>
                    <ProjectCard
                        thumbnail={project?.thumbnail}
                        title={project?.title}
                        description={project?.description}
                        techstacks={project?.techstacks}
                        url={project?.url}
                        repoLink={project?.repolink}
                    />
                )}
            </div>
        </section>
    )
}

export default Projects;