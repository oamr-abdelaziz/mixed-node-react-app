import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import MainFooter from "../Main-Footer/MainFooter";
import { Projects } from "../../pages/projects/Projects";
import "./projectDetails.scss";
import { axiosInstance } from "../../axiosInstance";
import { useHistory } from "react-router-dom";

// change to class componet and rechange routes to here and make api and start coding backend to get data on location change and rerender after data changes with animation effect
function ProjectDetails(props) {
  const [projectsArray, setProjectsArray] = useState([]);
  const [data, setData] = useState({});
  const [prevProps, setPrevProps] = useState(props.match.params.name);


  // const img = 'xocola-chocolate-bar-milk-cover.png';
  const {
    img,
    backgroundColor,
    textColor,
    title,
    name,
    description,
    description2,
    challenge1,
    challenge2,
    solution1,
    solution2,
    solution3,
    images,
    nextProject,
    nextProjImg,
    prevProject,
    prevProjImg,
  } = data;

  const history = useHistory();
  const projects_array = [];

  const randomProject = (obj) => {
    // var randomProperty = function (obj) {
    let keys = Object.keys(obj);

    for (let i = 1; i <= 6; i++) {
      let randProject = obj[keys[(keys.length * Math.random()) << 0]];

      while (projects_array.some((proj) => proj === randProject)) {
        randProject = obj[keys[(keys.length * Math.random()) << 0]];
      }

      projects_array.push(randProject);
    }
    setProjectsArray([...projects_array]);
  };

  const getNextProject = (proj) => {
    window.scrollTo(0, 0);
    history.push(`/work/${proj}`);
  };

  const getData = async (proj, status) => {
    try {
      window.scrollTo(0, 0);
      const response = await axiosInstance.get(`project/${proj}`);
      console.log(response);
      setData(response.data.fetched_project);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getData(props.match.params.name);
    randomProject(Projects);
  }, []);

  useEffect(() => {
    console.log(props.match.params.name);

    if (props.match.params.name !== prevProps) {
      window.scrollTo(0, 0);
      if (props.match.params.name === prevProject) {
        console.log("baaaack");
        document.getElementById("prev-proj").classList.add("animate-next");
        // if(document.getElementById('next-proj').classList.contains('animate-next')){

        // }
      } else if (props.match.params.name === nextProject) {
        console.log("fronnnnt");
        // //   document.getElementById('prev-proj').classList.add('animate-next')
        // // }
        // // else if(props.location.state && props.location.state.next){
        document.getElementById("next-proj").classList.add("animate-next");
        // if(prevProject){
        //   document.getElementById('prev-proj').classList.remove('animate-next')
        // }
      }
      // else if(prevProject && backward){
      //   document.getElementById('prev-proj').classList.add('animate-next')

      // }
      setTimeout(() => {
        // if(props.match.params.name ===prevProject){
        // getData(props.match.params.name, 'prev');
        // }
        // else if(props.match.params.name ===nextProject){
        getData(props.match.params.name, "next");
        // }
        randomProject(Projects);
        setPrevProps(props.match.params.name);
      }, 2000);
    }
  }, [props.match.params.name]);

  useEffect(() => {
    if (nextProject) {
      document.getElementById("next-proj").classList.remove("animate-next");
    }

    if (prevProject) {
      document.getElementById("prev-proj").classList.remove("animate-next");
    }
  }, [data]);

  window.onscroll = function () {
    var backGround = document.getElementById("landing-project-page");
    var showHideSecondTxt = document.getElementsByClassName(
      "second-project-page"
    )[0];
    var moveLogo = document.getElementById("fishfingerLogo");

    if (window.pageYOffset > 180) {
      backGround.classList.add("yellowBack");
      showHideSecondTxt.classList.add("displayTxt");
      moveLogo.classList.add("moveLogo");
    } else {
      backGround.classList.remove("yellowBack");
      showHideSecondTxt.classList.remove("displayTxt");
      moveLogo.classList.remove("moveLogo");
    }
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
                .yellowBack {
                background-color: ${backgroundColor};
                }
            `,
        }}
      />
      <div id="project-details">
        <div id="landing-project-page" style={{ color: textColor }}>
          <img id="landing-image" src={`./assets/${img}`} alt={`${img}`} />
          {prevProject && (
            <img
              className="animate-next-basic"
              id="prev-proj"
              src={`./assets/${prevProjImg}`}
              alt=""
            />
          )}
          {nextProject && (
            <img
              className="animate-next-basic"
              id="next-proj"
              src={`./assets/${nextProjImg}`}
              alt=""
            />
          )}

          <div id="imgTxt">
            {nextProject ? (
              <button
                onClick={() => {
                  getNextProject(nextProject);
                }}
              >
                Next Project <i className="fas fa-caret-right" />
              </button>
            ) : (
              ""
            )}
          </div>
          <div className="second-project-page">
            <div className="main-project-text">
              <hr />
              <h6>{title}</h6>
              <h1>{name}</h1>
              <p>{description}</p>
              <p>{description2}</p>

            </div>
            {challenge1 &&
             <div className="row challenge-solution">
              <div className="col-6 challenge">
                <h6>THE CHALLENGE</h6>
                <p>{challenge1 && challenge1}</p>
                <p>{challenge2 && challenge2}</p>
              </div>
              <div className="col-6 solution">
                <h6>SOLUTION</h6>
                <p>{solution1 && solution1}</p>

                <p>{solution2 && solution2}</p>

                <p>{solution3 && solution3}</p>
              </div>
            </div>
            }
          </div>
        </div>
        {images &&
          images.map((item, index) => {
            return (
              <div key={index} className={`images-${item.length}`}>
                {item.map((i, ind) => {
                  return <img key={ind} src={`./assets/${i}`} alt={i} />;
                })}
              </div>
            );
          })}

        {projectsArray.length === 6 && (
          <MainFooter
            Project1={projectsArray[0]}
            Project2={projectsArray[1]}
            Project3={projectsArray[2]}
            Project4={projectsArray[3]}
            Project5={projectsArray[4]}
            Project6={projectsArray[5]}
            Teller="true"
          />
        )}
        <Footer />
      </div>
    </>
  );
}

export default ProjectDetails;
