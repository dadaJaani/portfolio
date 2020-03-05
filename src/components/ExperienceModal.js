import React, { Component } from 'react'

import { IoIosCloseCircle, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const FIRST_ID = 1;
const LAST_ID = 2;

class ExperienceModal extends Component {

    render () {
        console.log('this.props.data', this.props.data)

        if (this.props.visible) {
            return( 
                <div >
                    <div 
                        className='experience-modal-backdrop'
                        onClick={this.props.closeModal}
                    />
                    <div className='experience-modal'>
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

                        <hr/> 

                        <div className='experience-modal-details'>
                            <p>{this.props.data.details}</p>
                        </div>

                        <hr />
                        
                        <div className='experience-modal-stack'> 
                            {this.props.data.stack}
                        </div>

                        <hr />

                        <div className='experience-modal-menu'> 
                            <button
                                className={this.props.data.id === FIRST_ID ? 'experience-modal-menu-button-disabled' : 'experience-modal-menu-button'}
                            ><IoIosArrowBack/></button>
                            <button
                                className='experience-modal-menu-button'
                                onClick={this.props.closeModal}
                            ><label>Close</label></button>
                            <button
                                className={this.props.data.id === LAST_ID ? 'experience-modal-menu-button-disabled' : 'experience-modal-menu-button'}
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