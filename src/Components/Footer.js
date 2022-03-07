import React, { Component } from 'react';
import { BsArrowDownCircleFill } from "react-icons/bs";


class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <section id="footer">

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <ul className="copyright">
              <li>&copy; Copyright 2017 Tim Baker</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
           </ul>

        </div>
        <div className="button_footer">
        <a className="smoothscroll"  href="#home"><BsArrowDownCircleFill /></a>
      </div>
     </div>
  </section>
    );
  }
}

export default Footer;
