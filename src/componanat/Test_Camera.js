import React, { useState } from 'react';
import { Navbar , NavbarBrand ,FormGroup,Label,Input,Col ,Form} from 'reactstrap';
import My_nav from './nav';



function Cameras(props){
    const list_cams = props.list_cameras.map((opt) => {return (<option key={opt.id} value = {opt.deviceId} >{opt.deviceId}</option>)});
    console.log('function here caled succesfly and thies componant ');
    console.log(list_cams)
    return list_cams;

}

function Test_devices() {
    const startVideo = async() => {
        const constraints = {'video': true, 'audio': false};
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        const videoElement = document.querySelector('video#localVideo');
        videoElement.srcObject = stream;
	};
    async function getConnectedDevices_camera() {
        const devices = await navigator.mediaDevices.enumerateDevices();
        list_cameras =  devices.filter(device => device.kind === 'videoinput');
        list_audios = devices.filter(device => device.kind === 'audioinput');
        const listElement = document.querySelector('select#availableCameras');
        listElement.innerHTML = '';
        list_cameras.map(camera => {
            const cameraOption = document.createElement('option');
            cameraOption.label = camera.label;
            cameraOption.value = camera.deviceId;
        }).forEach(cameraOption => listElement.add(cameraOption));
        const listElement_audio = document.querySelector('select#availableaudios');
        listElement.innerHTML = '';
        list_audios.map(camera => {
            const cameraOption = document.createElement('option');
            cameraOption.label = camera.label;
            cameraOption.value = camera.deviceId;
        }).forEach(cameraOption => listElement.add(cameraOption));
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
                    <option>
                    1
                    </option>
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