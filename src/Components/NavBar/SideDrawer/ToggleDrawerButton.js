import React from 'react';
import './toggleDrawerButton.css';

function toggleDrawerButton(props) {
  return (
    <button className="toggle_button" onClick={props.click}>
      <div className="toggle_line" />
      <div className="toggle_line" />
      <div className="toggle_line" />
    </button>
  )
}

export default toggleDrawerButton;