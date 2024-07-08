import React from 'react'
import AboutLeft from './AboutLeft';
import Overview from './RightChild';
import RightChild from './RightChild';

function About() {
    return (
        <div className="h-auto w-auto flex flex-row gap-5 p-5 pb-20">
            {/* about */}
            <div className="w-2/3 bg-white rounded-md p-5">
                <AboutLeft />
                {/* using outlet navigate all the pages in the overview component using outlet */}
            </div>
            {/* overview */}
            <div className="w-full bg-white rounded-md p-5">
                {/*  here using outlet to render all component  */}
                <RightChild />
            </div>
        </div>
    )
}

export default About;