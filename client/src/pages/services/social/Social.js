import React, { useState, useEffect } from 'react';
import './Social.scss';
import Service from '../../../components/Service/Service';
import { Bellevee, Comico, Experiments, SourceResponsibly, TeaCircle, XoCola } from '../../projects/Projects';

function Social(props) {
    

    useEffect(() => {
        return () => {

        }
    }, []);

    return (
        
        <div className='web'>
        
             <Service
                img="social-service.gif"
                backgroundColor="#0171BB"
                name="Social"
                title="Hauling in the fish"
                description="This is where it gets interesting! Our Fishfingers combine their full range of skills to create the ultimate campaigns. Spearheaded by pin-point strategy, our creative team begin creating 'must-see' content that will get your audience out of their seats. We design, animate, and code until we're ready to launch! Finally, our promotion team begin shouting from the rooftops to ensure maximum coverage. If you want to be noticed then you know who to call."
                leftImg = 'Social-Dave.png'
                leftTitle = "Must-see mayhem"
                leftHeader = '#KillerContent'
                leftDesc = "Getting seen isn’t just about being the loudest. You need to create something that excites your audience, and that's where we join the scene. Creating exceptional newsworthy content is why we wake up in the mornings."
                middleImg = 'Social-Chef.png'
                middleTitle = "RIDING TO VICTORY"
                middleHeader = '#SuperStrategy'
                middleDesc = "The campaigns we create are firmly grounded by their meticulous planning. By clearly visualising the project goals, we put together the Who, What Where, When and Why, to produce a bespoke campaign just for you."
                rightImg = 'Social-Mr-Salmon.png'
                rightTitle = "From MySpace to Bebo..."
                rightHeader = '#SingItLoud'
                rightDesc = "When we’ve created amazing content, we want everyone in the atmosphere to hear about it. We use our little black book of contacts to begin the push, then our Fishfingers gather their voices, so loud, that the campaign won’t be missed."
                checkMsg='recent Social work...'
                Project1={Bellevee}
                Project2={XoCola}
                Project3={Comico}
                Project4={SourceResponsibly}
                Project5={Experiments}
                Project6={TeaCircle}
             />
                 
        </div>
        
    )
}

export default Social;