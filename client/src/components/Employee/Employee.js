import React, { useState, useEffect } from 'react';
import './Employee.scss';

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
                <div id={`leftPage${props.pageNumber}`} style={{backgroundColor:props.backgroundColorImg}} className='leftPage about-image-div'>
                    <img width="70%"  src={`./assets/${props.img}`} alt="The Fishfinger Team"/>
                </div>}

                <div id={props.imgleft?`rightPage${props.pageNumber}`:`leftPage${props.pageNumber}`} style={{backgroundColor:props.backgroundColorTxt}} className={`page${props.pageNumber} about-text-div ${props.imgleft?'rightPage':'leftPage'}`}>
                        <div className='employee'>
                            <div className='mobileSizeImage'>
                                    <img width="50%"  src={`./assets/${props.img}`} alt="The Fishfinger Team"/>

                            </div>
                            <div class='innerEmployee'>
                                <div>
                                    <h1 >
                                        {props.name}
                                    </h1>
                                    <h3 className='italic'>{props.position}</h3>
                                </div>
                                <div className='underline'>
                                    <i className="fas fa-grip-lines"></i>
                                    <i className="fas fa-grip-lines"></i>
                                    <i className="fas fa-grip-lines"></i>
                                    <i className="fas fa-grip-lines"></i>
                                    <i className="fas fa-grip-lines"></i>
                                    <i className="fas fa-grip-lines"></i>
                                    <i className="fas fa-grip-lines"></i>
                                    <i className="fas fa-grip-lines"></i>

                                </div>
                                <p>{props.description}</p>
                                
                                <div>
                                    <h4>{props.title1}</h4>
                                    <h6>{props.title1desc}</h6>
                                </div>
                                <div  className='displayNoneAtMobile'>
                                    <h4>{props.title2}</h4>
                                    <h6>{props.title2desc}</h6>
                                </div>

                                <button  class='about-button' onClick={()=>{props.scroll()}}> <span className='displayNoneAtMobile'>Meet {props.nextEmployee}</span><br/><i className="fas fa-sort-down"></i></button>

                            </div>
                        </div>
                    </div>
                {props.imgright&&
                <div id={`rightPage${props.pageNumber}`} style={{backgroundColor:props.backgroundColorImg}} className='rightPage about-image-div'>
                    <img width="70%"  src={`./assets/${props.img}`} alt="The Fishfinger Team"/>
                </div>}
            </div>
        </>
    )
}

export default Employee;