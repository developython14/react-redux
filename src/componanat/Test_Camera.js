import React, { useState } from 'react';
import { Navbar , NavbarBrand ,FormGroup,Label,Input,Col ,Form} from 'reactstrap';
import My_nav from './nav';



function Cameras(prpos){
    const list_cams = prpos.map((dish) => {return (<p>hadi options</p>)});
    return list_cams;

}

function Test_devices() {
    var list_cameras = [];
    var list_audios = [];
    const startVideo = async() => {
        const constraints = {'video': true, 'audio': false};
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        const videoElement = document.querySelector('video#localVideo');
        videoElement.srcObject = stream;
	};
    async function getConnectedDevices_camera() {
        const devices = await navigator.mediaDevices.enumerateDevices();
        console.log('hado devices');
        console.log(devices);
        list_cameras =  devices.filter(device => device.kind === 'videoinput');
        list_audios = devices.filter(device => device.kind === 'audioinput');
        console.log(list_cameras);
    }
    startVideo();
    getConnectedDevices_camera();

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
                    <Cameras/>
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