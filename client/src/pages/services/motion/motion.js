import React, { useState, useEffect } from 'react';
import './motion.scss';
import Service from '../../../components/Service/Service';
import { Bellevee, CatsAndDogs, Experiments, ListingWide, SourceResponsibly, XoCola } from '../../projects/Projects';

function Motion(props) {

    useEffect(() => {
        return () => {

        }
    }, []);

    return (
        
        <div className='motion'>
        
             <Service
                img="animation-service.gif"
                backgroundColor="#15A9DE"
                name="Motion"
                title="Shake that money maker"
                description="Reading text is boring, and the more intelligent of you will have already stopped... Our Fishfingers love making things move, and it's what we do best. Motion is an amazingly effective way of conveying concepts quickly and simply. We create animated videos, adverts, social campaigns and a whole lot more. If you're tired of seeing the same old static, pick up the Fishfinger phone."
                leftImg = 'Motion-Dave@3x.png'
                leftTitle = 'A WORLD OF PURE IMAGINATION'
                leftHeader = 'Master Storytellers'
                leftDesc = "Through animation, our Fishfingers create fantastical stories. Giving your brand strong character and compelling narrative will captivate the hearts and minds of your audience."
                middleImg = 'Motion-Chef@3x.png'
                middleTitle = "DON'T WATCH PAINT DRY"
                middleHeader = 'Fun, Fun, Fun!'
                middleDesc = "Motion gets 'dem juices flowing and makes your dorsal fins stand on end. Our Fishfingers leap at the opportunity to transform even the most mundane subjects into 'must-see' animated content."
                rightImg = 'Motion-Fish@3x.png'
                rightTitle = "KEEP ON MOVING"
                rightHeader = 'Animate Everything'
                rightDesc = "Products, services, mysterious prancing Germans, there are no limits to motion. Whether it's for your website, social campaigns or digital billboards, we'll get those tastebuds tingling."
                checkMsg='recent Social work...'
                Project1={CatsAndDogs}
                Project2={SourceResponsibly}
                Project3={Experiments}
                Project4={ListingWide}
                Project5={Bellevee}
                Project6={XoCola}
             />
                 
        </div>
        
    )
}

export default Motion;