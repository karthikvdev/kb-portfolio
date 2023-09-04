import React from 'react'
import "./style.scss"
import PageWrapper from '../../hoc';

const Home = () => {
    return (
        <div className='home'>
            <div className='inner-container'>
                <div className='left-pane'>
                    <div>
                        <div className='phrase'>Hi all, I am</div>
                        <div className='title'>Karthik Balaji</div>
                        <div className='role'>{"> Full stack Developer"}</div>
                    </div>
                </div>
                <div className='right-pane'>
                    
                </div>
            </div>
        </div>
    )
}

export default PageWrapper(Home);