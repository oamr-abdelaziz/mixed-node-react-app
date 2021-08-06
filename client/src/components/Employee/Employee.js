import React, { useState, useEffect } from 'react';

function Employee(props) {
    const [state, setState] = useState('');

    useEffect(() => {
        return () => {

        }
    }, []);

    return (
        <>
            <div id={`page${props.pageNumber}`} className='about-page' >
                {props.imgleft&&
                <div style={{backgroundColor:props.backgroundColorImg}} className='about-image-div'>
                    <img width="70%"  src={`./assets/${props.img}`} alt="The Fishfinger Team"/>
                </div>}

                <div style={{backgroundColor:props.backgroundColorTxt}} className='about-text-div'>
                        <div style={{width:"80%"}}>
                            <h1 >
                                {props.name}
                            </h1>
                            <h3>{props.position}</h3>
                            <p>{props.description}</p>
                            <h3>{props.title1}</h3>
                            <h6>{props.title1desc}</h6>
                            <h3>{props.title2}</h3>
                            <h6>{props.title1desc}</h6>

                            <button onClick={()=>{props.scroll(parseInt(props.pageNumber)+1)}}>Meet{props.nextEmployee}</button>
                        </div>
                    </div>
                {props.imgright&&
                <div style={{backgroundColor:props.backgroundColorImg}} className='about-image-div'>
                    <img width="70%"  src={`./assets/${props.img}`} alt="The Fishfinger Team"/>
                </div>}
            </div>
        </>
    )
}

export default Employee;