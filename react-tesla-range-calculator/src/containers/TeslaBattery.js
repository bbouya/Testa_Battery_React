import React from 'react';
import './TeslaBattery.css';
import TeslaNotice from '../components/TeslaNotice/TeslaNotice';
import TeslaCar from '../components/TeslaCar/TeslaCar';

class TeslaBattery extends React.Component{
    render(){
        return(

            <form className='tesla-battery'>
                <h1>Range per Charge</h1>
                <TeslaNotice/>
                <TeslaCar/>
            </form>

        )
    }
    
    
}
export default TeslaBattery;
