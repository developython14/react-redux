import React, { useState } from 'react';
import { Navbar , NavbarBrand ,FormGroup,Label,Input,Col ,Form} from 'reactstrap';
import My_nav from './nav';

import { ReactMediaRecorder } from "react-media-recorder";

const RecordView = () => (
  <div>
    <ReactMediaRecorder
      video
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div>
          <p>{status}</p>
          <button onClick={startRecording}>Start Recording</button>
          <button onClick={stopRecording}>Stop Recording</button>
          <video src={mediaBlobUrl} controls autoPlay loop />
        </div>
      )}
    />
  </div>
);



function Test_devices() {
    const startVideo = async() => {
        const constraints = {'video': true, 'audio': true};
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        const videoElement = document.querySelector('video#localVideo');
        videoElement.srcObject = stream;
	};
    startVideo();

    
    return <div>
        <RecordView/>
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