import React, { Component } from 'react';
import './Herobg.css';
import bgimage from '../assets/retroconsoleherobg.jpg'


//tried to figure out exporting classes so that I can make components dissappear....it didn't work out 
// function Herobg() {
//     return (
//         <div>
//             <img className="hero_background" src={bgimage} alt="this is a back pic" />
//         </div>
//     )
// }

// export default Herobg


export default class Herobg extends Component {
    state = {
        visible: true
    };
    render() {
        return (
            <div>
                <img className="hero_background" src={bgimage} alt="this is a back pic" />
            </div>
        )
    }
}
