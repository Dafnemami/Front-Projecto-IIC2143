import React, { useState } from 'react';
import ReactModal from 'react-modal';
import './popupbutton.css'



function PopUpButton(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <button className='button-pop-up' onClick={() => setIsOpen(true)}>
            {props.button}
        </button>
        <ReactModal
        isOpen={isOpen}
        contentLabel={props.name}
        className={props.name}
        onRequestClose={() => setIsOpen(false)}
        >
        {props.instruction}
        </ReactModal>
        </div>
        );
}

export default PopUpButton;