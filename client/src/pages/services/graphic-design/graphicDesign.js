import React, { useState, useEffect } from 'react';
import './graphicDesign.scss';
import Service from '../../../components/Service/Service';
import { Bellevee, CatsAndDogs, Comico, Experiments, SourceResponsibly, XoCola } from '../../projects/Projects';

function GraphicDesign(props) {
    return (
        
        <div className='graphic'>
        
             <Service
                img="design-service.gif"
                backgroundColor="#3CB778"
                name="Design"
                title="Designing beyond gravity"
                description="Our Fishfingers love nothing more than transforming imagination into reality. Our team specialise in branding, packaging, illustration & advertising. So, whether you are looking to convey ideas in beautiful simplicity or with mind-blowing visuals, we'll create something that will make your audience salivate."
                leftImg = 'Graphic-Design-Dave.png'
                leftTitle = 'FROM THE BOTTOM TO THE TOP'
                leftHeader = 'Building Brands'
                leftDesc = "We build brands from the ground up. Injecting life, personality and amazing stories. If you're the next big start-up or an established brand needing an overhaul, our Fishfingers are ready."
                middleImg = 'Graphic-Design-Chef.png'
                middleTitle = 'THE FULL PACKAGE'
                middleHeader = 'Not Just a Logo Design'
                middleDesc = "We're a multi-talented school that delivers a complete brand makeover. Packaging, brand guidelines, stationery, vehicles, logos, adverts... if it needs to look good, we've got you covered."
                rightImg = 'Graphic-Design-Cod.png'
                rightTitle = "YOU CAN'T BEAT A BIT OF BULLY!"
                rightHeader = 'Always on Point'
                rightDesc = "Our Fishfingers constantly evolve to keep our designs fresh and tasty. We strive to push boundaries that capture the attention of our clients' audiences. We create work that people want to see."
                chekMsg='work...'
                Project1={CatsAndDogs}
                Project2={Experiments}
                Project3={XoCola}
                Project4={Bellevee}
                Project5={SourceResponsibly}
                Project6={Comico}
             />
                 
        </div>
        
    )
}

export default GraphicDesign;