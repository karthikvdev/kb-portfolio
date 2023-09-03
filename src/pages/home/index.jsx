import React from 'react'
import "./style.scss"
import PageWrapper from '../../hoc';

const Home = () => {
    return (
        <div className='home'>Karthik Balaji - FullStack Developers</div>
    )
}

export default PageWrapper(Home);