import React from 'react';
import './Herobg.css';
import bgimage from '../assets/retroconsoleherobg.jpg'

function Herobg() {
    return (
        <div>
            <img className="hero_background" src={bgimage} alt="this is a back pic" />
        </div>
    )
}

export default Herobg
