import React from 'react';
import banner from './../../images/Build-a-Team-to-Create.jpg'
import "./Mission.css"

const Mission = () => {
    return (
        <div className='container'>
            <h1>Our mission</h1>
            <div className='mission'>

                <div>

                    <p className='missionPara'>Mission of our fitness club has a real meaning.we want to build a fit nation.we work together with you.Kepping you fit and eating healthy is our responsiblities.</p>
                </div>
                <img src={banner} alt="" srcset="" width='400px' style={{ borderRadius: "10px" }} />

            </div>
        </div >
    );
};

export default Mission;