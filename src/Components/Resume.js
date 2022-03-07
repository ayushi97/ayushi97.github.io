import React, { Component } from 'react';
import { Fade } from "react-slideshow-image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { BsArrowDownCircleFill } from "react-icons/bs";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


class Resume extends Component {


  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows : true,
      className : "slides",
      //centerMode: true
      centerPadding: "100px"
    };

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return  <li  className="skill-bar-wrapper" key={skills.name}>
                <span className = "skill-name">{skills.name}</span>
                
                <div style={{width:skills.level}}className="skill-bar"></div>
               </li>
              
      })
    }

    
    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      {/*<div className="row work">


        <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>*/}



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">



          <p>{skillmessage}</p>
				  
              <ul className="skills">{skills}</ul>

			</div>
      </div>
{/*}
      <div className="row work">
        <div className="three columns header-col"></div>
    </div>
    <div className="row">
    <div className="three columns header-col">
          <h1 className = "space"><span>Projects</span></h1>
    </div>
    </div>

      <div className = "Slider_Resume">
        <Slider {...settings}>
          <div>
            <h3 className = "heading_projects">1</h3>
            <p className="projects">Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. </p>
          </div>
          <div>
            <h3 className = "heading_projects" >2</h3>
            <p className="projects">Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. </p>
          </div>
          <div>
            <h3 className = "heading_projects">3</h3>
            <p className="projects">Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. </p>
          </div>
          <div>
            <h3 className = "heading_projects">4</h3>
            <p className="projects">Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. </p>
          </div>
          <div>
            <h3 className = "heading_projects">5</h3>
            <p className="projects">Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. </p>
          </div>
          <div>
            <h3 className = "heading_projects">6</h3>
            <p className="projects">Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. </p>
          </div>
        </Slider>


    </div>*/}

   </section>
    );
  }
}

export default Resume;
