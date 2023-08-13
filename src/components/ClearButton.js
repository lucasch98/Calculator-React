import React from "react";
import '../style-sheets/ClearButton.css'

const ClearButton = (props) => (
  <button 
    className='button-clear' 
    onClick={props.onClickAC}
  >
    {props.children}
  </button>
);

export default ClearButton;