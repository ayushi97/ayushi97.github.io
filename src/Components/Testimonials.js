import React, { Component } from 'react';
import { BsArrowDownCircleFill } from "react-icons/bs";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


class Testimonials extends Component {
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

    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">

         <div className="twelve columns collapsed">
               <h3 className = "title_test"><span>Check Out Some of My Works.</span></h3>
            </div>

          

            </div>

            <div className = "Slider_Resume_TEST">
        <Slider {...settings}>
          <div>
            <h3 className = "heading_projects">Awesome Design Studio</h3>
            <p className="projects">Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. </p>
          </div>
          <div>
            <h3 className = "heading_projects" >Awesome Design Studio</h3>
            <p className="projects">Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. </p>
          </div>
          <div>
            <h3 className = "heading_projects">Awesome Design Studio</h3>
            <p className="projects">Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. </p>
          </div>
          <div>
            <h3 className = "heading_projects">Awesome Design Studio</h3>
            <p className="projects">Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. </p>
          </div>
          <div>
            <h3 className = "heading_projects">Awesome Design Studio</h3>
            <p className="projects">Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. </p>
          </div>
          <div>
            <h3 className = "heading_projects">Awesome Design Studio</h3>
            <p className="projects">Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. Awesome Design Studio - Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know. </p>
          </div>
        </Slider>


</div>

         </div>
   </section>
    );
  }
}

export default Testimonials;
