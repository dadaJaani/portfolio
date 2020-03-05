import React, { Component } from 'react'

import { IoIosCloseCircle, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const FIRST_ID = 0;
const LAST_ID = 6;

class ExperienceModal extends Component {

    handleKeyPress = (event) => {
        if (event.keyCode === 39){
            this.props.nextProject();
        } else if (event.keyCode === 37){
            this.props.previousProject();
        }
    }

    render () {
        console.log('this.props.data', this.props.data)

        if (this.props.visible) {
            return( 
                <div >
                    <div 
                        className='experience-modal-backdrop'
                        onClick={this.props.closeModal}
                    />
                    <div className='experience-modal' onKeyDown={(e) => this.handleKeyPress(e)} tabIndex='0'>
                        <IoIosCloseCircle className='close-button-modal' onClick={this.props.closeModal} />
                        
                        <div> 
                            <h3>
                                {this.props.data.title}
                            </h3>
                        </div>
                        
                        <hr/>

                        <div>
                            <h5>{this.props.data.subtitle}</h5>
                        </div>

                        <div className='experience-modal-description'>
                            <p>{this.props.data.description}</p>
                        </div>

                        {
                            this.props.data.link !== "" 
                            ? <a className='experience-modal-link' href={this.props.data.link} target='_blank'>Visit</a>
                            : null
                        }

                        <hr/> 

                        <h6>Details</h6>

                        <div className='experience-modal-details'>
                            <p>{this.props.data.details}</p>
                        </div>

                        <hr />

                        <h6>Tech Stack</h6>
                        <div className='experience-modal-stack'> 
                            
                            {this.props.data.stack.map(item => <span>{item}</span>)}
                        </div>

                        <hr />

                        <div className='experience-modal-menu'> 
                            <button
                                className={this.props.data.id === FIRST_ID ? 'experience-modal-menu-button-disabled' : 'experience-modal-menu-button'}
                                onClick={this.props.previousProject}
                            ><IoIosArrowBack/></button>
                            <button
                                className='experience-modal-menu-button'
                                onClick={this.props.closeModal}
                            ><label>Close</label></button>
                            <button
                                className={this.props.data.id === LAST_ID ? 'experience-modal-menu-button-disabled' : 'experience-modal-menu-button'}
                                onClick={this.props.nextProject}
                            ><IoIosArrowForward/></button>
                        </div>


                        

                    </div>

                </div>
            )
        } else {
            return null
        }
        
    }
}

export default ExperienceModal;