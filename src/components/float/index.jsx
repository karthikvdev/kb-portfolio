import React from 'react'
import ReactIcon from '../../assests/icons/react';
import JavascriptIcon from '../../assests/icons/javascript';
import NextIcon from '../../assests/icons/next';
import NodeJsIcon from '../../assests/icons/nodejs';
import MongoIcon from '../../assests/icons/mongo';
import TypescriptIcon from '../../assests/icons/typescript';
import AngularIcon from '../../assests/icons/angular';
import "./styles.scss"

const FloatSection = () => {
    return (
        <div className='float-container'>
            <div className='float-section-wrapper'>
                <section className="section-1">
                    <div className='float-icons icon-1'>
                        <ReactIcon />
                    </div>
                    <div className="float-icons icon-2">
                        <AngularIcon />
                    </div>

                </section>
                <section className="section-2">
                    <div className="float-icons icon-3">
                        <NextIcon />
                    </div>
                    <div className="float-icons icon-4">
                        <TypescriptIcon />
                    </div>
                </section>
                <section className="section-3">
                    <div className='float-icons icon-5'>
                        <JavascriptIcon />
                    </div>
                </section>
                <section className="section-4">
                    <div className="float-icons icon-6">
                        <NodeJsIcon />
                    </div>
                    <div className="float-icons icon-7">
                        <MongoIcon />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default FloatSection;