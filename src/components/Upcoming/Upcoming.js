import React, { useState } from 'react';
import './details.css'

const Upcoming = () => {

    return (
        <div className='container'>
            <h1>Upcoming events</h1>
            <div className='details'>
                <h4>Full Body Workout</h4>
                <p>Time:4.00pm</p>
                <p>Location:Bashundhara</p>
            </div>
            <div className='details'>
                <h4>yoga session</h4>
                <p>Time:5.00pm</p>
                <p>Location:Dhanmondi</p>
            </div>
            <div className='details'>
                <h4>Marathon</h4>
                <p>Time:5.00am</p>
                <p>Location:Uttara campus</p>
            </div>

        </div>
    );
};

export default Upcoming;