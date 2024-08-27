import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbuttons.css';

function Navbuttons() {
  const navigate = useNavigate();

  return (
    <div className='button'>
      <button onClick={() => navigate('/Form')} className="nav-button">Go to Form</button>
      <button onClick={() => navigate('/Response')} className="nav-button">Go to Respondents</button>
    </div>
  );
}

export default Navbuttons;

