import React, { useState } from 'react';
import { Navbar , NavbarBrand ,FormGroup,Label,Input,Col ,Form} from 'reactstrap';
import My_nav from './nav';


async function Test_devices() {
    const  play = ()=>{
        const constraints = {'video': true, 'audio': true};
        const stream = navigator.mediaDevices.getUserMedia(constraints).then(()=>{  
        const videoElement = document.querySelector('video#localVideo');
        videoElement.srcObject = stream;
    });  
}
    
    const constraints = {'video': true, 'audio': true};
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    return <div>
        <My_nav/>
        <div className='d-flex flex-row'>
            <div className='video-bar'>
            <video id="localVideo" src='stream' autoPlay/>
            </div>
            <div className='test_devices d-flex flex-column justify-content-evenly'>
            <FormGroup className='d-flex flex-row justify-content-evenly align-items-center ' >
                <Label
                for="exampleSelect"

                >
                Camera :
                </Label>
                <Col >
                <Input
                    id="exampleSelect"
                    name="select"
                    type="select"
                >
                    <option>
                    1
                    </option>
                </Input>
                </Col>
            </FormGroup>
            <FormGroup className='d-flex flex-row justify-content-evenly align-items-center ' >
                <Label
                for="exampleSelect"
                >
                Sound :
                </Label>
                <Col >
                <Input
                    id="exampleSelect"
                    name="select"
                    type="select"
                >
                    <option>
                    1
                    </option>
                </Input>
                </Col>
            </FormGroup>
            <a href="#" class="myButton">Join Room</a>
            <a href="#" class="myButton1">Test devices</a>
            </div>
        </div>
    </div>
}



export default Test_devices;