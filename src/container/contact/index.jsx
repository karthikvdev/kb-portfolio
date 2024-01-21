import React from 'react'
import "./style.scss"
import { scrollToTop } from '../../common/constants'
import { Link } from 'react-router-dom'
import Resume from "../../assests/kb-resume.pdf"

const Contact = () => {

    return (
        <section id='contact-me'>
            <div className='contact-container'>
                <div className='name' onClick={scrollToTop}>
                    {"{ karthik_balaji }"}
                </div>
                <div className='contact-details-section'>
                    <Link to={"tel:919941145566"}>+91 9941145566</Link>
                    <Link to={"mailto:karthikbalaji.dev@gmail.com"}>karthikbalaji.dev@gmail.com</Link>
                </div>
            </div>
            <div className='button-container'>
                <button ><a href={Resume} download="kb-resume.pdf">Download CV</a></button>
            </div>
        </section>
    )
}

export default Contact
