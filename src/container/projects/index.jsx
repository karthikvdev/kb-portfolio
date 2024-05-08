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
            title: "E-commerce",
            description: "I have built this application to help users/customers to easily shop products from online store. It has many features from adding to cart to easy payment gateway and much more. One cool feature is that it automatically notifies any great sale that is currently happening in the store. From tracking the order to easy returns and refunds this app has many interesting features for users/customers to try on. Due to its very user friendly interface, it has helped clients to target various range of customers which eventually lead to increase in its sale and revenue.",
            techstacks: ["NextJS", "ExpressJS", "MongoDB", "NodeJs"],
            url: "https://www.unipick.com/",
            repolink: "https://karthikbalaji-dev.web.app/"
        },
        {
            thumbnail: Project2,
            title: "Inventory management",
            description: "This application was designed to help businesses to track, organise and oversee all of their inventory/stocks/goods, as well as their inventory-related processes. It will reduce man-made error and reduce human effort in tracking inventory levels,tracking product movement throughout the warehouse and determining whether all needed items are available for production.",
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
            title: "Construction Consultant App",
            description: "This application was built for a start-up construction company. In this application, one can see the various construction works made by that start-up, their designs and their completed and on-going projects. This will help customers to decide what suits them best matching their needs. This application has provision to schedule meeting with the builder to discuss their requirements.",
            techstacks: ["HTML", "SCSS", "React", "NodeJs"],
            url: "https://tridentbuilders.in/",
            repolink: "https://karthikbalaji-dev.web.app/"
        },
        {
            thumbnail: Project5,
            title: "Educare",
            description: "This application is built for school which enables teachers to monitor and create syllabus for each standard/class. The teacher can upload syllabus and track its completeness as and when required. The teacher can also create project works and solutions for students to assign. This will reduce the effort of teachers to repeat the same task every academic year.",
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
                {projectArr?.map((project, index) =>
                    <ProjectCard
                        key={index}
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
