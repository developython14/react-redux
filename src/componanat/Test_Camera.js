import React, { useState } from 'react';
import { Navbar , NavbarBrand ,FormGroup,Label,Input,Col ,Form} from 'reactstrap';
import My_nav from './nav';





function Test_devices() {
    const startVideo = async() => {
        const constraints = {'video': true, 'audio': false};
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        const videoElement = document.querySelector('video#localVideo');
        videoElement.srcObject = stream;
	};
    const getDevices = async() =>{
        const devices = await navigator.mediaDevices.enumerateDevices();
        console.log('hadi devs');
        console.log(devices);
        var list_cameras =  devices.filter(device => device.kind === 'videoinput');
        var list_audios = devices.filter(device => device.kind === 'audioinput');
        const listElement = document.querySelector('select#availableCameras');
        listElement.innerHTML = '';
        list_cameras.map(camera => {
            const cameraOption = document.createElement('option');
            cameraOption.label = camera.label;
            cameraOption.value = camera.deviceId;
            return cameraOption
        }).forEach(cameraOption => listElement.add(cameraOption));
        const listElement_audio = document.querySelector('select#availableaudios');
        listElement_audio.innerHTML = '';
        list_audios.map(camera => {
            const cameraOption = document.createElement('option');
            cameraOption.label = camera.label;
            cameraOption.value = camera.deviceId;
            return cameraOption
        }).forEach(cameraOption => listElement_audio.add(cameraOption));
    }

    startVideo();
    getDevices();

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
                    id="availableCameras"
                    name="select"
                    type="select"
                >
                
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
                    id="availableaudios"
                    name="select"
                    type="select"
                >
                </Input>
                </Col>
            </FormGroup>
            <a href="#" className="myButton">Join Room</a>
            <a href="#" className="myButton1">Test devices</a>
            </div>
        </div>
    </div>
}



export default Test_devices;