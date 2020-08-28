import React, {Component} from 'react';
import '../styles/main.css';
import Anime, {anime} from 'react-anime';
import projectData from '../utils/projects.json'

import {
    FaAngular,
    FaJava,
    FaReact,
    FaNode,
    FaAws,
    FaYoutube,
    FaInstagram,
    FaLinkedinIn,
    FaGithub
} from "react-icons/fa";
import {IoIosDocument} from "react-icons/io";
import {
    DiMongodb,
    DiGoogleCloudPlatform,
    DiJqueryLogo,
    DiHtml5,
    DiCss3,
    DiJavascript,
    DiAndroid,
    DiIllustrator,
    DiPhotoshop
} from "react-icons/di";

import ExperienceModal from '../components/ExperienceModal';

import '../styles/main.css';


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            experienceModalVisible: false,
            selectedProject: {}
        }
    }

    openExperienceModal = (item) => {
        this.setState({
            experienceModalVisible: true,
            selectedProject: item
        })
    }

    closeExperienceModal = () => {
        this.setState({
            experienceModalVisible: false
        })
    }

    nextProject = () => {
        let thisProject = this.state.selectedProject
        let nextProject = thisProject;
        for (var i = 0; i < projectData.length; i++) {
            if (i < projectData.length - 1 && thisProject === projectData[i]) {
                nextProject = projectData[i + 1];
                break;
            }
        }
        this.setState({
            selectedProject: nextProject
        })
    }

    previousProject = () => {
        let thisProject = this.state.selectedProject
        let previousProject = thisProject;
        for (var i = 1; i < projectData.length; i++) {
            if (i > 0 && thisProject === projectData[i]) {
                previousProject = projectData[i - 1];
                break;
            }
        }
        this.setState({
            selectedProject: previousProject
        })
    }


    render() {
        console.log(projectData);
        return (
            <div className="main-container">
                {/* <Canvas /> */}
                <ExperienceModal
                    closeModal={this.closeExperienceModal}
                    visible={this.state.experienceModalVisible}
                    data={this.state.selectedProject}
                    previousProject={this.previousProject}
                    nextProject={this.nextProject}
                />

                <div className='intro'>
                    <p>Hi, I'm</p>
                    <h2>Waqas Rehmani,</h2>
                    <div className={"intro-line"}>
                        <p>and I make</p>
                        <h1><b>software.</b></h1>
                    </div>

                </div>

                <hr/>

                <p style={{textAlign: 'center'}}>
                    I am a graduate student living in Melbourne.
                    <br/>
                    <br/>
                    I love to build  things.
                </p>

                <hr/>
                <br/>
                <br/>

                <h3>Tech I work with</h3>

                <div className='skills-container'>
                    <Anime
                        delay={anime.stagger(200)}
                        opacity={[0.1, 1]}
                    >
                        <a href="https://reactjs.org/" target="_blank"
                           rel="noopener noreferrer"><FaReact/><label>React</label></a>
                        <a href="https://facebook.github.io/react-native/" target="_blank"
                           rel="noopener noreferrer"><FaReact/><label style={{fontSize: "10px"}}>React
                            Native</label></a>
                        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" fill="#eee" viewBox="0 0 207 124" version="1.1">
                                <path
                                    d="M48.9421964,32.6320058 L87.9011585,32.6320058 L87.9011585,35.7136421 L52.5134345,35.7136421 L52.5134345,58.9070103 L85.7908813,58.9070103 L85.7908813,61.9886466 L52.5134345,61.9886466 L52.5134345,87.4526941 L88.306981,87.4526941 L88.306981,90.5343303 L48.9421964,90.5343303 L48.9421964,32.6320058 Z M91.3912326,32.6320058 L95.5306221,32.6320058 L113.8738,58.0960534 L132.622801,32.6320058 L158.124498,0.286809811 L116.22757,60.7722112 L137.817329,90.5343303 L133.51561,90.5343303 L113.8738,63.4483691 L94.1508254,90.5343303 L89.9302715,90.5343303 L111.682358,60.7722112 L91.3912326,32.6320058 Z M139.359455,35.713642 L139.359455,32.6320058 L183.756439,32.6320058 L183.756439,35.7136421 L163.302983,35.7136421 L163.302983,90.5343303 L159.731745,90.5343303 L159.731745,35.7136421 L139.359455,35.713642 Z"/>
                                <polygon
                                    points="0.202923647 32.6320058 4.66697141 32.6320058 66.2235778 124.303087 40.785176 90.5343303 3.93649086 37.0111732 3.77416185 90.5343303 0.202923647 90.5343303"/>
                                <path
                                    d="M183.396622,86.5227221 C184.134938,86.5227221 184.673474,85.9601075 184.673474,85.233037 C184.673474,84.5059658 184.134938,83.9433513 183.396622,83.9433513 C182.666993,83.9433513 182.11977,84.5059658 182.11977,85.233037 C182.11977,85.9601075 182.666993,86.5227221 183.396622,86.5227221 Z M186.905793,83.1297235 C186.905793,85.2763149 188.460599,86.678523 190.727662,86.678523 C193.142388,86.678523 194.601647,85.233037 194.601647,82.7229099 L194.601647,73.8855335 L192.655968,73.8855335 L192.655968,82.7142542 C192.655968,84.1078073 191.952397,84.8521899 190.710289,84.8521899 C189.598473,84.8521899 188.842785,84.1597409 188.816727,83.1297235 L186.905793,83.1297235 Z M197.146664,83.0172011 C197.285642,85.2503478 199.153145,86.678523 201.932686,86.678523 C204.903321,86.678523 206.762139,85.1811034 206.762139,82.792155 C206.762139,80.9138876 205.702439,79.8752151 203.131364,79.2779777 L201.750279,78.9404092 C200.117298,78.5595622 199.457158,78.0488813 199.457158,77.1573541 C199.457158,76.0321243 200.482113,75.296398 202.019547,75.296398 C203.478806,75.296398 204.48639,76.0148135 204.668797,77.1660091 L206.562359,77.1660091 C206.44944,75.0626962 204.590622,73.5825873 202.045605,73.5825873 C199.309495,73.5825873 197.48542,75.0626962 197.48542,77.2871878 C197.48542,79.1221767 198.519063,80.2127835 200.786126,80.7407758 L202.401734,81.1302779 C204.060773,81.5197807 204.790402,82.091051 204.790402,83.0431676 C204.790402,84.1510859 203.643842,84.9560573 202.08035,84.9560573 C200.403939,84.9560573 199.240006,84.2030196 199.074971,83.0172011 L197.146664,83.0172011 Z"/>
                            </svg>

                            <label>NextJS</label></a>
                        <a href="https://nodejs.org/en/" target="_blank"
                           rel="noopener noreferrer"><FaNode/><label>NodeJS</label></a>
                        <a href="https://www.mongodb.com/" target="_blank"
                           rel="noopener noreferrer"><DiMongodb/><label>MongoDB</label></a>
                        <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
                            <svg fill="#eee" viewBox="0 0 48.06 46" width="40px" height="40px">
                                <path
                                    d="M23,0C15.86,0,10,8.29,10,18.49a22.61,22.61,0,0,0,4.06,13.37,3.49,3.49,0,0,0,2.8,4.08,3.39,3.39,0,0,0,.64.06,3.5,3.5,0,0,0,0-7,3.66,3.66,0,0,0-.57.05A19.25,19.25,0,0,1,14,18.49C14,10.63,18.15,4,23,4c4.12,0,7.69,4.74,8.7,10.94A28,28,0,0,1,36,16.56C35.28,7.27,29.74,0,23,0Zm-1.5,15a3.5,3.5,0,0,0,0,7h0a3.5,3.5,0,0,0,3.14-2,18.71,18.71,0,0,1,10.47,2.88C42,27,45.73,34.22,43.28,38.62a6.5,6.5,0,0,1-4.18,3,15.63,15.63,0,0,1-9.58-1A28.09,28.09,0,0,1,26,43.42,22.8,22.8,0,0,0,36.09,46a15.64,15.64,0,0,0,4-.51,10.39,10.39,0,0,0,6.65-4.92c3.58-6.45-.63-15.71-9.58-21.08a22.58,22.58,0,0,0-13.14-3.4A3.5,3.5,0,0,0,21.53,15ZM8.19,21.32C1.11,26.8-1.93,34.8,1.27,40.57a10.43,10.43,0,0,0,6.66,4.92A15.58,15.58,0,0,0,12,46a23.29,23.29,0,0,0,11.76-3.49A23.76,23.76,0,0,0,32.9,33,3.49,3.49,0,1,0,29,29.5a3.41,3.41,0,0,0,.35,1.5,20,20,0,0,1-7.7,8.08c-4.3,2.58-9,3.53-12.72,2.55a6.49,6.49,0,0,1-4.19-3c-1.93-3.48,0-8.7,4.29-12.76A26.24,26.24,0,0,1,8.19,21.32Z"/>
                            </svg>
                            <label>Redux</label>
                        </a>
                        <a href="https://jquery.com/" target="_blank"
                           rel="noopener noreferrer"><DiJqueryLogo/><label>jQuery</label></a>
                        <a href="https://angular.io/" target="_blank"
                           rel="noopener noreferrer"><FaAngular/><label>Angular</label></a>
                        <a href="https://www.javascript.com/"
                           target="_blank" rel="noopener noreferrer"><DiJavascript/><label>JavaScript</label></a>
                        <a href="https://www.w3schools.com/whatis/whatis_html.asp"
                           target="_blank" rel="noopener noreferrer"><DiHtml5/><label>HTML</label></a>
                        <a href="https://www.w3schools.com/whatis/whatis_css.asp"
                           target="_blank" rel="noopener noreferrer"><DiCss3/><label>CSS</label></a>
                    </Anime>

                </div>

                <div className='skills-container'>
                    <Anime
                        delay={anime.stagger(200)}
                        opacity={[0.1, 1]}
                    >
                        <a href="https://aws.amazon.com/" target="_blank"
                           rel="noopener noreferrer"><FaAws/><label>AWS</label></a>
                        <a href="https://cloud.google.com/vision"
                           target="_blank" rel="noopener noreferrer"><DiGoogleCloudPlatform/><label>GCV</label></a>

                        <a href="https://developer.android.com/studio" target="_blank"
                           rel="noopener noreferrer"><DiAndroid/><label style={{fontSize: "8px"}}>Android
                            Studio</label></a>

                        <a href="https://www.java.com/en/" target="_blank"
                           rel="noopener noreferrer"><FaJava/><label>Java</label></a>
                        <a href="http://www.cplusplus.com/" target="_blank" rel="noopener noreferrer">
                            <svg fill="#eee" viewBox="0 0 42 46" width="40px" height="40px">
                                <path
                                    d="M39.91,10,23.07.54a4.24,4.24,0,0,0-4.14,0L2.09,10A4.06,4.06,0,0,0,0,13.53V32.46A4.05,4.05,0,0,0,2.09,36l16.84,9.47a4.24,4.24,0,0,0,4.14,0L39.91,36A4.05,4.05,0,0,0,42,32.46V13.53A4.06,4.06,0,0,0,39.91,10ZM21,35a12,12,0,1,1,9.54-19.26l-4.38,2.53a7,7,0,1,0,0,9.45l4.38,2.53A11.93,11.93,0,0,1,21,35ZM33,24H31v2H29V24H27V22h2V20h2v2h2Zm7,0H38v2H36V24H34V22h2V20h2v2h2Z"/>
                            </svg>
                            <label>C++</label>
                        </a>
                        <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                            <svg fill="#eee" viewBox="0 0 42 46" width="40px" height="40px">
                                <path
                                    d="M22.5,0C13.8,0,12,4.49,12,7.09V12H22v1H7.09C3.79,13,0,15.6,0,23S3.79,33,7.09,33H13V27a4,4,0,0,1,4-4H29a3,3,0,0,0,3-3V7.09C32,3.59,28.7,0,22.5,0ZM18,5a2,2,0,1,1-2,2A2,2,0,0,1,18,5Zm15,8v7a4,4,0,0,1-4,4H17a3,3,0,0,0-3,3V38.91c0,3.5,3.3,7.09,9.5,7.09C32.2,46,34,41.51,34,38.91V34H24V33H38.91C42.21,33,46,30.4,46,23s-3.79-10-7.09-10ZM28,37a2,2,0,1,1-2,2A2,2,0,0,1,28,37Z"/>
                            </svg>
                            <label>Python</label>
                        </a>
                    </Anime>
                </div>

                <div className='skills-container'>
                    <Anime
                        delay={anime.stagger(200)}
                        opacity={[0.1, 1]}
                    >
                        <a href="https://www.adobe.com/products/photoshop.html"
                           target="_blank" rel="noopener noreferrer"><DiPhotoshop/><label>Photoshop</label></a>
                        <a href="https://www.adobe.com/products/illustrator.html"
                           target="_blank" rel="noopener noreferrer"><DiIllustrator/><label>Illustrator</label></a>
                    </Anime>
                </div>

                <br/>
                <br/>


                <hr/>

                <br/>
                <br/>
                <h3>Things I have worked on</h3>

                <br/>

                <div className='projects-container'>
                    {
                        projectData.map(item =>
                            <div
                                className='projects-item'
                                onClick={() => this.openExperienceModal(item)}
                            >
                                {item.title}
                            </div>
                        )
                    }
                </div>

                <br/>
                <br/>

                <hr/>

                <p style={{textAlign: 'left', marginBottom: '0'}}>
                    Beyond the realm of computers and software, I have picked up various hobbies over the years.
                    I started playing guitar and piano and over the years I have learned to compose music but it's not
                    something fancy.
                    Then I started learning to draw during 2020. I can cook good food too. I mostly upload my music
                    to Instagram.
                    Below are the links to my Instagram account and YouTube Channel, if you're also into music.
                </p>
                <br/>
                <div className='skills-container'>
                    <Anime
                        delay={anime.stagger(200)}
                        opacity={[0.1, 1]}
                    >
                        <a href="https://www.youtube.com/channel/UC1LVlNLVzbedzXH3MsIYwdA?view_as=subscriber"
                           target="_blank" rel="noopener noreferrer"><FaYoutube/><label>YouTube</label></a>
                        <a href="https://www.instagram.com/waqasrehmani/"
                           target="_blank" rel="noopener noreferrer"><FaInstagram/><label>Instagram</label></a>
                    </Anime>

                </div>
                <br/>

                <hr/>

                <br/>
                <br/>

                <h3>If you are interested, my detailed resume and GitHub are:</h3>
                <br/>

                <div className='skills-container'>
                    <a href='./resume/WaqasCV.pdf' target="_blank"
                       rel="noopener noreferrer"><IoIosDocument/><label>Resume</label></a>
                    <a href='https://www.linkedin.com/in/waqas-rehmani-8843b3b1/'
                       target="_blank" rel="noopener noreferrer"><FaLinkedinIn/><label>LinkedIn</label></a>
                    <a href='https://github.com/dadaJaani' target="_blank"
                       rel="noopener noreferrer"><FaGithub/><label>GitHub</label></a>
                </div>


                <br/>
                <hr/>
                <br/>


                <h3>You can contact me through LinkedIn</h3>
                <br/>

                <div className='skills-container'>
                    <a href='https://www.linkedin.com/in/waqas-rehmani-8843b3b1/'
                       target="_blank" rel="noopener noreferrer"><FaLinkedinIn/><label>LinkedIn</label></a>
                </div>

            </div>
        )
    }
}

export default Home
