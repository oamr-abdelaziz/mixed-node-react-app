import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner";

const Home = React.lazy(() => import("./pages/home/home"));
const About = React.lazy(() => import("./pages/about/about"));
const GraphicDesign = React.lazy(() => import("./pages/services/graphic-design/graphicDesign"));
const MotionDesign = React.lazy(() => import("./pages/services/motion/motion"));
const WebDesign = React.lazy(() => import("./pages/services/web/WebDesign"));
const SocialDesign = React.lazy(() => import("./pages/services/social/Social"));


// const About = React.lazy(() => import("./pages/About/About"));
// const Contact = React.lazy(() => import("./pages/Contact/Contact"));
// const Portofolio = React.lazy(() => import("./pages/portofolio-page/Portofolio"));
// const Project = React.lazy(() => import("./components/Project/Project"));



export default function Routes() {
 
  return (
    <Suspense fallback={<Spinner/>}>
      <Switch>
        {/* Main Routes*/}
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About}/>
        <Route path="/graphic-design" exact component={GraphicDesign}/>
        <Route path="/motion-design" exact component={MotionDesign}/>
        <Route path="/web-design" exact component={WebDesign}/>
        <Route path="/social-design" exact component={SocialDesign}/>

        {/* <Route path="/portofolio" exact component={Portofolio}/>
        <Route path="/about" exact component={About}/>
        <Route path="/contact" exact component={Contact}/> */}
        
{/*         
        <Route path="/portofolio/vanilla"  
        render={() => <Project folderName="vanilla" no="4">
        <header>
          <h1><u>Vanilla Project</u></h1>
          <p>Static simulation to an online bootstrap template,</p>
          <p>Made using HTML & CSS</p>
        </header>
      </Project>
    } 
      />
        <Route path="/portofolio/airbnb"  render={() => <Project folderName="airbnb" no="8">
        <header>
          <h1><u>AirBnb Simulation</u></h1>
          <p>Full Simulation to AirBnb Website,</p>
          <p>Made using HTML, SCSS, Reactjs, Nodejs & MongoDb</p>
        </header>
      </Project>}/>
      <Route path="/portofolio/ecommerce-angular"  render={() => <Project folderName="EcommerceAngular" no="8">
        <header>
          <h1><u>Ecommerce Angular</u></h1>
          <p>Dynamic FrontEnd Website with most of functionalites working, login,register,guarded routes, add to cart, (add,edit,delete) products, search products ..etc,</p>
          <p>Made using Angular 10 & JavaScript</p>
        </header>
      </Project>}/>
       
        <Route path="/portofolio/ToDo-App"  render={() => <Project folderName="toDoApp" no="1">
        <header>
          <h1><u>ToDo App</u></h1>
          <p>Simple FrontEnd App, to make todolist,add,done,delete tasks.</p>
          <p>Made using React,HTML,CSS & JavaScript</p>
        </header>
      </Project>}/>
       
      <Route path="/portofolio/books-finder"  render={() => <Project folderName="books-finder" no="1">
        <header>
          <h1><u>Books Finder App</u></h1>
          <p>Simple FrontEnd App to search for books in a given api and show them</p>
          <p>Made using React,HTML,CSS & JavaScript</p>
        </header>
      </Project>}/>

      <Route path="/portofolio/wise"  render={() => <Project folderName="wise" no="6">
        <header>
          <h1><u>Wise</u></h1>
          <p>Static simulation to an online template,</p>
          <p>Made using HTML,SCSS & JQuery</p>
        </header>
      </Project>}/>

         <Route path="/portofolio/Crypto-Currency-World"  render={() => <Project folderName="Crypto-Currency-World" no="6">
        <header>
          <h1><u>Crypto Currency World</u></h1>
          <p>Dynamic FrontEnd part of App to sell crypto currency,</p>
          <p>Made using React, HTML,SCSS & JavaScript</p>
        </header>
      </Project>}/>

      <Route path="/portofolio/Stores-Management-Laravel-System"  render={() => <Project folderName="Stores-Management-Laravel-System" no="14">
        <header>
          <h1><u>Stores Management System</u></h1>
          <p>Full system to manage stores of a comany (v.1),</p>
          <p>Made using Laravel, PHP, MySQL, React, HTML,CSS & JavaScript--(Frontend & Backend separated)</p>
        </header>
      </Project>}/>

      <Route path="/portofolio/Filing-Laravel-System"  render={() => <Project folderName="Filing-Laravel-System" no="2">
        <header>
          <h1><u>Emolyees Filing System</u></h1>
          <p>Simple system to store and get files of employees of a comany (v.1),</p>
          <p>Made using Laravel, PHP, MySQL, React, HTML,CSS & JavaScript--(Frontend & Backend Integrated)</p>
        </header>
      </Project>}/> */}
      </Switch>
    </Suspense>
  );
}
