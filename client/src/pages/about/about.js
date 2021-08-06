import React, { useState, useEffect } from "react";
import Employee from "../../components/Employee/Employee";
import "./about.scss";

function About(props) {
  const [state, setState] = useState("");

  useEffect(() => {
    return () => {};
  }, []);

  const scrollDown = (number) => {
    // window.scrollTo({
    //   top:  620,
    //   behavior: 'smooth'
    // });
    var elem = document.getElementById(`page${number}`);
    elem.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="about">
        <div className="about-page">
          <div className="about-image-div">
            <img
              width="70%"
              src="./assets/meet-the-team.png"
              alt="The Fishfinger Team"
            />
          </div>
          <div className="about-text-div">
            <h1>Who's FishFinger?</h1>
            <button onClick={()=>{scrollDown(2)}}>Discover More</button>
          </div>
        </div>
        <div id="page2" className="about-page">
          <div
            style={{ backgroundColor: "#004A92" }}
            className="about-image-div"
          >
            <img
              width="70%"
              src="./assets/meet-the-team-fallback.gif"
              alt="The Fishfinger Team"
            />
          </div>
          <div
            style={{ backgroundColor: "#01519B" }}
            className="about-text-div"
          >
            <div style={{ width: "80%" }}>
              <h1>We’re Fishfinger!</h1>
              <h3>A creative agency like no other.</h3>
              <p>
                We're a team of creatives that love nothing more than creating
                incredible stories. We specialise in branding, animation and web
                design; uniquely combining our skills to produce magical digital
                experiences. We don't do 'boring'. We pride ourselves on turning
                even the dullest subjects into must-see material.
              </p>
              <p>
                The Fishfingers are always ready to create something
                unforgettable.
              </p>
              <button onClick={()=>{scrollDown(3)}}>Meet the team</button>
            </div>
          </div>
        </div>
        <Employee
          img="le-chef-fallback.gif"
          imgright={true}
          imgleft={false}
          backgroundColorTxt="#FF3C42"
          backgroundColorImg="#FE4A4F"
          name="Monsieur Le Chef"
          position="CEO"
          title1="Greatest Achievement:"
          title1desc="Winning the Tour De France"
          title2="Likes:"
          title2desc="Fishing, cycling & food hygiene"
          descripton="Our beloved CEO, head chef and former Tour de France winner, Monsieur Le Chef, has finely crafted a collection of the most supremely talented Fishfingers since records began. They bring exceptional creativity, endless enthusiasm and pinpoint focus to every project they undertake."
          pageNumber="3"
          scroll={scrollDown}
        />

<Employee
          img="dave-fallback.gif"
          imgright={false}
          imgleft={true}
          backgroundColorTxt="#008AD8"
          backgroundColorImg="#0290DA"
          name="Dave"
          position="Co-founder and Chief Blogger"
          title1="Claim to Fame:"
          title1desc="Donald Duck's stunt double"
          title2="Favourite Pastime:"
          title2desc="Moonlight waddles on the beach"
          descripton="Monsieur Le Chef's best and only friend. Never seen without his cap, Dave is our chief blogger. Rumours of what's hidden under his headpiece are plentiful... a comb-over, Tupac Shakur or merely a passion for writing content..."
          pageNumber="4"
          scroll={scrollDown}
        />

<Employee
          img="andy-fallback.gif"
          imgright={true}
          imgleft={false}
          backgroundColorTxt="#008AD8"
          backgroundColorImg="#0290DA"
          name="Andy Warsole"
          position="Creative Director"
          title1="Greatest Achievement:"
          title1desc="25m swimming badge"
          title2="Dislikes:"
          title2desc="Moonlight waddles on the beach"
          descripton="Bullied at school because of the silent 'W' on his surname, Andy turned to art and graphic design. An award-winning creative genius, he will create a design masterpiece from anything."
          pageNumber="5"
          scroll={scrollDown}
        />

<Employee
          img="wendy-fallback.gif"
          imgright={false}
          imgleft={true}
          backgroundColorTxt="#FF3C42"
          backgroundColorImg="#FE4A4F"
          name="Wendy W. Wrasse"
          position="Code Person"
          title1="Greatest Achievement:"
          title1desc="Solving the Da Vinci Code"
          title2="Favourite Quote:"
          title2desc="Give me a <br>"
          descripton="Graduating with a C++ at code school, W.W.W takes charge of turning our Fishfingers' dreams into digital reality. Wendy has never left her desk and furiously bashes on her keyboard day and night developing websites endlessly."
          pageNumber="6"
          scroll={scrollDown}
        />

<Employee
          img="cod-sparrow-fallback.gif"
          imgright={true}
          imgleft={false}
          backgroundColorTxt="#008AD8"
          backgroundColorImg="#0290DA"
          name="Cod & Sparrow"
          position="Animator"
          title1="The Ocean"
          title1desc="Solving the Da Vinci Code"
          title2="Favourite Operetta:"
          title2desc="The Pirates of Penzance"
          descripton="Cod may only have one eye, but that's what makes him the best 2D animator across the Seven Seas. When depth perception is required, his trusty bi-focal bird is always happy to cast an eye."
          pageNumber="7"
          scroll={scrollDown}
        />
        <div id='page8'></div>

      </div>
    </>
  );
}

export default About;
