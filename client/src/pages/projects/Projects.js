import React, { useState, useEffect } from 'react';
import Project from '../../components/Project/Project';

function CatsAndDogs(props) {
    return(
        <Project
            img='cats-dogs.png'
            backgroundColor='#ffe20c'
            colorWhite='false'
            title='Cats &amp; Dogs - The Weather App'
            paragraph='Mobile App Designs &amp; Development'
            projectPage='cats-dogs'
            />
    )
}

function Experiments(props){ 
    return(

    <Project
        img='experiments.png'
        backgroundColor='#2480BE'
        colorWhite='true'
        title='The Insurance Experiments'
        paragraph=' Web Design &amp; Illustration'
        projectPage='experiments'
        />
    )
}

function XoCola (props){
    return( 
    <Project
        img='xocola.png'
        backgroundColor='#F2E41F'
        colorWhite='false'
        title='Xocola Chocolate'
        paragraph='Brand Identity &amp; Packaging'
        projectPage='xocola'
        />
    )
}


function Bellevee(props){
    return( 
    <Project
        img='bellevee.png'
        backgroundColor='#464541'
        colorWhite='true'
        title='The Bellevue Residences'
        paragraph='Brand Identity & Print'
        projectPage='bellevee'
        />
        )
}


function SourceResponsibly(props){
    return( 
    <Project
        img='source-responsibly.jpg'
        backgroundColor='#E1C28C'
        colorWhite='false'
        title='WWF Source Responsibly'
        paragraph='Animation & Illustration'
        projectPage='source-responsibly'
        />
        )
}


function Comico(props){
    return( 
    <Project
        img='comico.png'
        backgroundColor='#EC1D32'
        colorWhite='true'
        title='Bradford Comico'
        paragraph='Brand Identity and Print'
        projectPage='comico'
        />
        )
}

function ListingWide(props){
    return( 
    <Project
        img='Listing-Wide_vmhkt.png'
        backgroundColor='#e8f7f7'
        colorWhite='false'
        title='Element'
        paragraph='Web Design & Animation'
        projectPage='listing-wide'
        />
    )
}

function TeaCircle(props){
    return( 
    <Project
        img='tea-circle-cover-short-work.jpg'
        backgroundColor='#501D71'
        colorWhite='true'
        title='The Tea Circle'
        paragraph='Web Design & Packaging'
        projectPage='tea-circle'
        
/>
    )
}


function StarWars(props){
    return( 
    <Project
        img='star-wars-cover-work.jpg'
        backgroundColor='#000000'
        colorWhite='true'
        title='Adidas x Star Wars'
        paragraph='T-Shirt & Clothing Design'
        projectPage='star-wars'
        />
    )
}

export {
    CatsAndDogs,
    Experiments,
    XoCola,
    Bellevee,
    SourceResponsibly,
    Comico,
    ListingWide,
    TeaCircle,
    StarWars
};