import React, { Component } from 'react';
import './Herobg.css';
import bgimage from '../assets/retroconsoleherobg.jpg'

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
