const getProject = (req, res, next) => {
    // console.log(req);
    const projects = {
        catsAndDogs:{
            img:"cats-and-dogs.png",
            backgroundColor:'#FFE20C',
            textColor:'black',
            title:"MOBILE APP DESIGN & DEVELOPMENT",
            name:"CATS & DOGS - WEATHER",
            description:"The cutest way to fetch the weather, Cats & Dogs creates a unique pawsome experience, mixing routine weather checking with virtual pets in the most enjoyable way that barks joy!",
            description2:"You don't just get the precise and accurate weather forecast information, it’s also now your job to take care of your cuddly pet by dressing them up in the silliest, cutest and trendiest outfits! Beautifully designed and super simple to use — with animated weather backgrounds and fun graphics— Cats & Dogs is the best-looking weather app around!",
          
            images:[['cats-dogs-1.png'],
                    ['cats-dogs-2.png'], 
                    ['cats-dogs-3.png'],
                    ['cats-dogs-4.gif'],
                    ['cats-dogs-5.gif','cats-dogs-6.gif'],
                    ['cats-dogs-7.gif'],
                    ['cats-dogs-8.gif','cats-dogs-9.gif'],
                    ['cats-dogs-10.png'],
                    ['cats-dogs-11.gif'],
                    ['cats-dogs-12.gif']
            ],
            nextProject:'xocola',
            nextProjImg:'xocola-chocolate-bar-milk-cover.png',
        },
        xocola:{
            img:"xocola-chocolate-bar-milk-cover.png",
            backgroundColor:'#F2E41F',
            textColor:'black',
            title:"BRAND IDENTITY | ILLUSTRATION | PACKAGING",
            name:"XOCOLA CHOCOLATE",
            description:"Born from the desire to create the simplest and purest “bean–to–bar” confectionery, Xocola is one of only a handful of micro-batch makers of premium and fair trade chocolates. Xocola only uses organic, high–quality ingredients combined with non–roasting techniques to bring out the truest and purest cacao flavours.",
            challenge1:"The challenge was to design an identity that visually encapsulated the essence of the brand and product that positions them in a premium space by utilizing a strong, simple, clean, tasteful and well-thought out design that maintained a healthy balance of functionality, versatility and visual impact.",
            solution1:"The decision early on was to use a clean, simple and pretty straightforward serif wordmark as the pointy termination of the serif hints at the sharp edges of the chocolate bar while a bold yellow is used as an accent colour, lending a bright contrast to the deep-brown chocolate bar, adding a playful pop of colour to the black and white design.",
            solution2:'The stylised illustration takes its cue from the shape of the cacao fruit and its leaves; keeping it organic than geometric with fluid lines for a softer impression when combined with the yellow "splatter" that takes its cue from the irregular shapes of the broken cacao nibs and shards.',
            solution3:"The result is a strong, bold, and modern brand that will easily catch your eye.",
            images:[['xocola-project-2.png'],
                    ['xocola-3.png','xocola-4.png'],
                    ['xocola-5.png','xocola-6.png','xocola-7.png','xocola-8.png'],
                    ['xocola-9.png'],
                    ['xocola-10.png'],
                    ['xocola-11.png'],
                    ['xocola-12.png']
                ],
            nextProject:'comico',
            nextProjImg:'comic-con-comico-bradford-yellow-pop-art-logo-web.png',
            prevProject:'catsAndDogs',
            prevProjImg:'cats-and-dogs.png'
        },
        comico:{
            img:"comic-con-comico-bradford-yellow-pop-art-logo-web.png",
            backgroundColor:'#EC1D32',
            textColor:'white',
            title:"BRAND NAMING | BRAND IDENTITY | PRINT DESIGN",
            name:"BRADFORD COMICO",
            description:"Bradford Comico is a multi-genre entertainment convention held annually in conjunction with the Bradford Literature Festival. The convention showcases comic books, graphic novels, anime, pop culture related film, television, and other similar arts including a larger range of entertainment elements across virtually all genres that highlight quality, diversity and individuality.",
            challenge1:"The challenge was to create a complete brand identity system that was aesthetically exciting.",
            challenge2:"The logo design had to be versatile in many uses, well-thought out to be able to work with various colour combinations as well as various patterns which easily helps to expand the brand system, if required. It should convey the energy and enthusiasm of the event while still showcasing the pop-culture influence throughout the identity.",
            solution1:"Speech bubbles, used most commonly in comic books and manga, are used as the logo frame. Because they connote communication, they perfectly convey what a convention is — a social gathering of like-minded individuals to discuss thoughts, voice opinions and express ideas.",
            solution2:'Patterns representing the 3 aspects of the event are used interchangeably. A "Halftone" pattern for vintage and pop (superheroes and comic books), "Sunburst" pattern for the "Land-of the Rising Sun" (Asian pop-culture) and a "Cloud Explosion" pattern (dark concept and themed graphic novels).',
            solution3:"Coupling everything with a loud and bright colour scheme, the result is a brand that's adaptive, versatile and exciting.",
            images:[['comic-2.png'],
            ['comico-3.png'],
            ['comico-4.png','comico-5.png'],
            ['comico-6.png'],
            ['comico-7.png','comico-8.png'],
            ['comico-9.png','comico-10.png'],
            ['comico-11.png'],
        ],
        nextProject:'redbull',
        nextProjImg:'red-bull-logo-graphics-shapes-illustrations-new-logo-web.png',

        prevProject:'xocola',
        prevProjImg:'xocola-chocolate-bar-milk-cover.png'

        },
        redbull:{
            img:"red-bull-logo-graphics-shapes-illustrations-new-logo-web.png",
            backgroundColor:'#A30A30',
            textColor:'white',
            title:"ILLUSTRATION",
            name:"RED BULL",
            description:"The Red Bull Skate Arcade is an interactive video game & online global campaign that went live in 23 countries across Europe, Asia & South America. Organised by Red Bull to celebrate its skate competitions, it blends a digital contest format with an in-person showdown, offering young skateboarders the chance to playfully flex and test their skills before piling on the pressure of a live crowd.",
            challenge1:"The challenge was to create a series of unique custom digital illustrations for use across its interactive media campaign.",
            solution1:"The stylised illustration showcases a mixture of shapes, geometric ornamentation and detailed line art that explore the concept of skate boarding, capturing the creative energy of the skate culture and mixing it with the retro feel and language of classic arcade gaming.",
            images:[['red-bull-2.png'],
            ['red-bull-3.png','red-bull-4.png'],
            ['red-bull-5.png'],
            ['red-bull-6.png'],
            ['red-bull-7.png'],
            ['red-bull-8.png']
            
        ],
        prevProject:'comico',
        prevProjImg:'comic-con-comico-bradford-yellow-pop-art-logo-web.png'

        }
    }
    const project_name = req.params.name;
    if(projects[project_name]){
        let fetched_project=projects[project_name];
        res.status(200).json({fetched_project})
    }
    else{
        next();
    }
};

module.exports.getProject = getProject;