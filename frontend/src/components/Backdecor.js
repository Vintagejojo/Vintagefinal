import React from 'react';
import './Backdecor.css';


//destructured elements below (show, click) that allow the opening and closing of the sidebar
const Backdecor = ({show, click}) => {
    return show &&  
        <div className="backdecor" onClick={click}>
            
        </div>
    
}

export default Backdecor
