// TeslaCar Component 
// 

import React from "react";
import './TeslaCar.css';
import prototypes from 'prop-types'; 

const TeslaCar = (props) => (
    <div className="tesla-car">
        <div className="tesla-wheels">
            <div className={`tesla-wheel tesla-wheel--front tesla-wheel--${props.wheelsize}`}></div>
            <div className={`tesla-wheel tesla-wheel--rear tesla-wheel--${props.wheelsize}`}></div>
        </div>
    </div>
);

//TeslaCar.prototypes = {
  //  wheelsize: React.prototype.number
//}
export default TeslaCar;

// Here we specify prototypes using the react Built-in type checking.
// In development mode. React checks props passed to the component.
// Only in developement mode for perforamance reasons .
