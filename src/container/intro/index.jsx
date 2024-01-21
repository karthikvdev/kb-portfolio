import React, { useEffect, useState } from 'react'
import "./style.scss"

import Avatar from '../../assests/images/avatar';
import FloatSection from '../../components/float';

const Intro = () => {
    const roles = ["Frontend Developer", "Backend Developer", "Full stack Developer",];
    const [currentRole, setCurrentRole] = useState(roles[0])

    useEffect(() => {
        setTimeout(() => {
            if (currentRole?.length) {
                setCurrentRole((role) => role.slice(0, -1));
            }
        }, 100)
    }, [currentRole])

    return (
        <>
            <section id="intro" className='intro'>
                <div className='intro-container'>
                    <div className='left-pane'>
                        <div>
                            <div className='phrase'>Hi all, I am</div>
                            <div className='title'>Karthik Balaji</div>
                            <div className="typewriter">
                                <div className="text">
                                    <div className="wrapper">
                                        {roles?.map((role) => <p key={role}>{role}</p>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right-pane'>
                        <div className='float-avatar-wrapper'>
                            <div className='avatar-container'>
                                <Avatar />
                            </div>
                            <FloatSection />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Intro;