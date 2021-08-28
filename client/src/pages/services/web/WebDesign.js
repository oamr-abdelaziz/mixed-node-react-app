import React, { useState, useEffect } from 'react';
import './WebDesign.scss';
import Service from '../../../components/Service/Service';
import { Bellevee, Experiments, ListingWide, StarWars, TeaCircle, XoCola } from '../../projects/Projects';

function WebDesign(props) {

    useEffect(() => {
        return () => {

        }
    }, []);

    return (
        
        <div className='web'>
        
             <Service
                img="web-service.gif"
                backgroundColor="#FF3C42"
                name="Web Design"
                title="The future is here"
                description="Fishfinger excels in creating the most incredible web experiences. We don't work from templates; we finely craft beautiful bespoke web designs. Bringing together skills in UI/UX, graphic design, animation and marketing, there are endless possibilities. Start-ups, microsites, or full-blown redesigns, our team will be sure to excite."
                leftImg = 'Web-Le-Chef.png'
                leftTitle = "We've been here before"
                leftHeader = 'No More Boring Websites'
                leftDesc = "Our Fishfingers don't do dull. We make your websites sing, dance and give you a little kiss on the nose. From bespoke and beautiful animated graphics to interactive designs... we do it all."
                middleImg = 'Web-Microscope@3x.png'
                middleTitle = "GETTING MOLECULAR"
                middleHeader = 'Research to the Max'
                middleDesc = "We don't just make 'pretty pictures'. First and foremost our websites directly catered to your target audience.  We dig deep, exploring analytical data and user behaviour to make sure that your visitors turn into customers."
                rightImg = 'Web-Little-Finger@3x.png'
                rightTitle = "Goldilocks syndrome"
                rightHeader = 'Never Too Big or Small'
                rightDesc = "If you're a looking to create a revolutionary experience then there's no project that we turn away. Websites little or large, the Fishfinger crew are always looking to reinvent the status quo."
                checkMsg='recent Social work...'
                Project1={ListingWide}
                Project2={XoCola}
                Project3={TeaCircle}
                Project4={Bellevee}
                Project5={Experiments}
                Project6={StarWars}
             />
                 
        </div>
        
    )
}

export default WebDesign;