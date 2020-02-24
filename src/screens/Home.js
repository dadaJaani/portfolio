import React, { Component } from 'react';
import '../styles/main.css';
import Canvas from '../components/Canvas'
import Anime, {anime} from 'react-anime';

import { FaAngular, FaJava, FaReact, FaNode, FaAws } from "react-icons/fa";
import { IoLogoJavascript, IoIosDocument } from "react-icons/io";
import { 
  DiMongodb, 
  DiGoogleCloudPlatform, 
  DiJqueryLogo, 
  DiHtml5, 
  DiCss3, 
  DiJavascript,
  DiAndroid,
  DiIllustrator, 
  DiPhotoshop } from "react-icons/di";

import ExperienceModal from '../components/ExperienceModal';

import logoC from '../assets/icon-c.svg'
import resume from '../assets/resume/CV1.pdf'


import '../styles/main.css';



class Home extends Component {

  constructor (props) {
    super(props);

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      experienceModalVisible: false,
    }
  }

  openModal = () => {
    this.setState({
      experienceModalVisible: true
    })
  }

  closeModal = () => {
    this.setState({
      experienceModalVisible: false
    })
  }


  render() {
    console.log(this.state);
    return (
      <div className="main-container">
        {/* <Canvas /> */}
        <ExperienceModal 
          closeModal={this.closeModal}
          visible={this.state.experienceModalVisible}
          data={this.projectData}
        />

        <div className='home-section'>
          <span>
            <h2>Waqas Rehmani</h2>
            <h1><b>software engineer.</b></h1>
          </span>
          
        </div>
        <hr/>

        <p style={{textAlign:'left'}}>
          A young, hardworking and diligent individual who is inherently passionate about the field of computers. Actively seeking a position in a
          progressive organization with an aim towards the objectives and values of the organization and to provide a blend of intellect, hard work, creativity, teamwork and knowledge to achieve professional 
          growth and also impart my computer-centric knowledge onto any tasks presented before me.  
        </p>

        <hr/>
        <br/>
        <br/>

        <h3>Tech I have worked with</h3>

        <div className='skills-container'>
          <Anime 
            delay={anime.stagger(200)}
            opacity={[0.1, 1]}
          >
            <a href="https://reactjs.org/" target="_blank"><FaReact /><label>React</label></a>
            <a href="https://facebook.github.io/react-native/" target="_blank"><FaReact /><label>React Native</label></a>
            <a href="https://nodejs.org/en/" target="_blank"><FaNode /><label>NodeJS</label></a>
            <a href="https://www.mongodb.com/" target="_blank"><DiMongodb /><label>MongoDB</label></a>
            <a href="https://redux.js.org/" target="_blank">
              <svg fill="#eee" viewBox="0 0 48.06 46" width="40px" height="40px"><path d="M23,0C15.86,0,10,8.29,10,18.49a22.61,22.61,0,0,0,4.06,13.37,3.49,3.49,0,0,0,2.8,4.08,3.39,3.39,0,0,0,.64.06,3.5,3.5,0,0,0,0-7,3.66,3.66,0,0,0-.57.05A19.25,19.25,0,0,1,14,18.49C14,10.63,18.15,4,23,4c4.12,0,7.69,4.74,8.7,10.94A28,28,0,0,1,36,16.56C35.28,7.27,29.74,0,23,0Zm-1.5,15a3.5,3.5,0,0,0,0,7h0a3.5,3.5,0,0,0,3.14-2,18.71,18.71,0,0,1,10.47,2.88C42,27,45.73,34.22,43.28,38.62a6.5,6.5,0,0,1-4.18,3,15.63,15.63,0,0,1-9.58-1A28.09,28.09,0,0,1,26,43.42,22.8,22.8,0,0,0,36.09,46a15.64,15.64,0,0,0,4-.51,10.39,10.39,0,0,0,6.65-4.92c3.58-6.45-.63-15.71-9.58-21.08a22.58,22.58,0,0,0-13.14-3.4A3.5,3.5,0,0,0,21.53,15ZM8.19,21.32C1.11,26.8-1.93,34.8,1.27,40.57a10.43,10.43,0,0,0,6.66,4.92A15.58,15.58,0,0,0,12,46a23.29,23.29,0,0,0,11.76-3.49A23.76,23.76,0,0,0,32.9,33,3.49,3.49,0,1,0,29,29.5a3.41,3.41,0,0,0,.35,1.5,20,20,0,0,1-7.7,8.08c-4.3,2.58-9,3.53-12.72,2.55a6.49,6.49,0,0,1-4.19-3c-1.93-3.48,0-8.7,4.29-12.76A26.24,26.24,0,0,1,8.19,21.32Z"/></svg>
              <label>Redux</label>
            </a> 
            <a href="https://jquery.com/" target="_blank"><DiJqueryLogo /><label>jQuery</label></a>
            <a href="https://angular.io/" target="_blank"><FaAngular /><label>Angular</label></a>
            <a href="https://www.javascript.com/" target="_blank"><DiJavascript /><label>JavaScript</label></a>
            <a href="https://www.w3schools.com/whatis/whatis_html.asp" target="_blank"><DiHtml5 /><label>HTML</label></a>
            <a href="https://www.w3schools.com/whatis/whatis_css.asp" target="_blank"><DiCss3 /><label>CSS</label></a>
          </Anime>

        </div>

        <div className='skills-container'>
          <Anime 
            delay={anime.stagger(200)}
            opacity={[0.1, 1]}
          >
            <a href="https://aws.amazon.com/" target="_blank"><FaAws /><label>AWS</label></a>
            <a href="https://cloud.google.com/vision" target="_blank"><DiGoogleCloudPlatform /><label>GCV</label></a>
            
            <a href="https://developer.android.com/studio" target="_blank"><DiAndroid /><label>Android Studio</label></a> 

            <a href="https://www.java.com/en/" target="_blank"><FaJava /><label>Java</label></a> 
            <a href="http://www.cplusplus.com/" target="_blank">
              <svg fill="#eee" viewBox="0 0 42 46" width="40px" height="40px"><path d="M39.91,10,23.07.54a4.24,4.24,0,0,0-4.14,0L2.09,10A4.06,4.06,0,0,0,0,13.53V32.46A4.05,4.05,0,0,0,2.09,36l16.84,9.47a4.24,4.24,0,0,0,4.14,0L39.91,36A4.05,4.05,0,0,0,42,32.46V13.53A4.06,4.06,0,0,0,39.91,10ZM21,35a12,12,0,1,1,9.54-19.26l-4.38,2.53a7,7,0,1,0,0,9.45l4.38,2.53A11.93,11.93,0,0,1,21,35ZM33,24H31v2H29V24H27V22h2V20h2v2h2Zm7,0H38v2H36V24H34V22h2V20h2v2h2Z"/></svg>
              <label>C++</label>
            </a> 
            <a href="https://www.python.org/" target="_blank">
              <svg fill="#eee" viewBox="0 0 42 46" width="40px" height="40px"> <path d="M22.5,0C13.8,0,12,4.49,12,7.09V12H22v1H7.09C3.79,13,0,15.6,0,23S3.79,33,7.09,33H13V27a4,4,0,0,1,4-4H29a3,3,0,0,0,3-3V7.09C32,3.59,28.7,0,22.5,0ZM18,5a2,2,0,1,1-2,2A2,2,0,0,1,18,5Zm15,8v7a4,4,0,0,1-4,4H17a3,3,0,0,0-3,3V38.91c0,3.5,3.3,7.09,9.5,7.09C32.2,46,34,41.51,34,38.91V34H24V33H38.91C42.21,33,46,30.4,46,23s-3.79-10-7.09-10ZM28,37a2,2,0,1,1-2,2A2,2,0,0,1,28,37Z"/> </svg>
              <label>Python</label>
            </a> 
          </Anime>
        </div>

        <div className='skills-container'>
          <Anime 
            delay={anime.stagger(200)}
            opacity={[0.1, 1]}
          >
            <a href="https://www.adobe.com/products/photoshop.html" target="_blank"><DiPhotoshop /><label>Photoshop</label></a>
            <a href="https://www.adobe.com/products/illustrator.html" target="_blank"><DiIllustrator /><label>Illustrator</label></a>
          </Anime>
        </div>

        <br/>
        <br/>


        <hr/>

        <br/>
        <br/>
        <h3>Things I have worked on</h3>


        <div className='projects-container'>
          <div 
            className='projects-item'
            onClick={this.openModal}
          >
            Coaching Mate Social Website App
            </div>
        </div>

        <br/>
        <br/>

        <h3>Detailed Resume</h3>

        <div className='skills-container'>
          <a href='./public/resume/CV.pdf' target="_blank"><IoIosDocument/><label>Resume</label></a>
        </div>


        <br/>
        <br/>


      </div>
    )
  }
}

export default Home
