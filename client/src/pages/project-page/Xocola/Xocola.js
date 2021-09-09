import React, { useState, useEffect } from 'react';
import ProjectDetails from '../../../components/project-details/projectDetails';
import './Xocola.scss';
function XocolaProject(props) {
    const [state, setState] = useState('');

    useEffect(() => {
        return () => {

        }
    }, []);

    return (
        <>
                <style
                dangerouslySetInnerHTML={{
                __html: `
                .yellowBack {
                background-color: #F2E41F;
                }
            `
                }}
            />
            <ProjectDetails
                img="xocola-chocolate-bar-milk-cover.png"
                backgroundColor='#F2E41F'
                title="BRAND IDENTITY | ILLUSTRATION | PACKAGING"
                name="XOCOLA CHOCOLATE"
                description="Born from the desire to create the simplest and purest “bean–to–bar” confectionery, Xocola is one of only a handful of micro-batch makers of premium and fair trade chocolates. Xocola only uses organic, high–quality ingredients combined with non–roasting techniques to bring out the truest and purest cacao flavours."
                challenge1="The challenge was to design an identity that visually encapsulated the essence of the brand and product that positions them in a premium space by utilizing a strong, simple, clean, tasteful and well-thought out design that maintained a healthy balance of functionality, versatility and visual impact."
                solution1="The decision early on was to use a clean, simple and pretty straightforward serif wordmark as the pointy termination of the serif hints at the sharp edges of the chocolate bar while a bold yellow is used as an accent colour, lending a bright contrast to the deep-brown chocolate bar, adding a playful pop of colour to the black and white design."
                solution2='The stylised illustration takes its cue from the shape of the cacao fruit and its leaves; keeping it organic than geometric with fluid lines for a softer impression when combined with the yellow "splatter" that takes its cue from the irregular shapes of the broken cacao nibs and shards.'
                solution3="The result is a strong, bold, and modern brand that will easily catch your eye."
            >
                <div className='second-project-image'>
                    <img src='./assets/xocola-project-2.png' alt='xocola-2' />
                </div>
                <div className='third-project-images'>
                    <img  src='./assets/xocola-3.png' alt='xocola-3' />
                    <img  src='./assets/xocola-4.png' alt='xocola-4' />
                </div>
                <div className='fourth-project-images'>
                    <img  src='./assets/xocola-5.png' alt='xocola-5' />
                    <img  src='./assets/xocola-6.png' alt='xocola-6' />
                    <img  src='./assets/xocola-7.png' alt='xocola-7' />
                    <img  src='./assets/xocola-8.png' alt='xocola-8' />
                </div>
                <div className='fifth-project-image'>
                    <img src='./assets/xocola-9.png' alt='xocola-9' />
                </div>
                <div className='sixth-project-image'>
                    <img src='./assets/xocola-10.png' alt='xocola-10' />
                </div>
                <div className='seventh-project-image'>
                    <img src='./assets/xocola-11.png' alt='xocola-11' />
                </div>
                <div className='eighth-project-image'>
                    <img src='./assets/xocola-12.png' alt='xocola-12' />
            
                </div>
           

            </ProjectDetails>
        </>
    )
}

export default XocolaProject;