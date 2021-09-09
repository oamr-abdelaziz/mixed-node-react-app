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
            projectPage='/work/catsAndDogs'
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
        projectPage='/work/experiments'
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
        projectPage='/work/xocola'
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
        projectPage='/work/bellevee'
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
        projectPage='/work/source-responsibly'
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
        projectPage='/work/comico'
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
        projectPage='/work/listing-wide'
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
        projectPage='/work/tea-circle'
        
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
        projectPage='/work/star-wars'
        />
    )
}

function Illusive(props){
    return( 
    <Project
        img='illusive-cover-small-work.png'
        backgroundColor='#000000'
        colorWhite='true'
        title='Illusive Typeface'
        paragraph='Typography'
        projectPage='/work/illusive-typeface'
        />
    )
}

function Interhigh(props){
    return( 
    <Project
        img='interhigh-waterloo-motion-logo-cover-small-web.jpg'
        backgroundColor='#2F0167'
        colorWhite='true'
        title='Interhigh Campaign'
        paragraph='Advertising & Animation'
        projectPage='/work/interhigh'
        />
    )
}


function Redbull(props){
    return( 
    <Project
        img='red-bull-logo-graphics-skateboard-work.png'
        backgroundColor='#A30A30'
        colorWhite='true'
        title='Red Bull Skate Arcade'
        paragraph='Illustration and Iconography'
        projectPage='/work/redbull'
        />
    )
}

let Projects = {
    0:CatsAndDogs,
    1:Experiments,
    2:XoCola,
    3:Bellevee,
    4:SourceResponsibly,
    5:Comico,
    6:ListingWide,
    7:TeaCircle,
    8:StarWars,
    9:Illusive,
    10:Interhigh,
    11:Redbull
};

export {Projects};
export {
    CatsAndDogs,
    Experiments,
    XoCola,
    Bellevee,
    SourceResponsibly,
    Comico,
    ListingWide,
    TeaCircle,
    StarWars,
    Illusive,
    Interhigh,
    Redbull
};