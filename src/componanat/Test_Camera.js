import React, { useState } from 'react';
import { Navbar , NavbarBrand} from 'reactstrap';
import My_nav from './nav';


function Test_devices() {
    
    return <div>
        <My_nav/>
        <div className='d-flex flex-row'>
            <div className='video-bar'>
            <video id="localVideo" autoplay playsinline controls="false"/>
            </div>
        </div>
    </div>
}



export default Test_devices;