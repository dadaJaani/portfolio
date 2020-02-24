import React, { Component } from 'react'

class ExperienceModal extends Component {

    render () {
        if (this.props.visible) {
            return( 
                <div >
                    <div 
                        className='experience-modal-backdrop'
                        onClick={this.props.closeModal}
                    />
                    <div className='experience-modal'>

                        
                    </div>

                </div>
            )
        } else {
            return null
        }
        
    }
}

export default ExperienceModal;