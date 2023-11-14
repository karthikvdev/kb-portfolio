import React, { useEffect, useState } from 'react'
import "./style.scss"
import PageWrapper from '../../hoc';
import Avatar from '../../assests/images/avatar';
import FloatSection from '../../components/float';

const Home = () => {
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
    <div className='home'>
      <div className='inner-container'>
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
    </div>
  )
}

export default PageWrapper(Home);