import React, { useState } from 'react';
import { Navbar , NavbarBrand ,FormGroup,Label,Input,Col ,Form} from 'reactstrap';
import My_nav from './nav';


function Test_devices() {
    
    return <div>
        <My_nav/>
        <div className='d-flex flex-row'>
            <div className='video-bar'>
            <video id="localVideo" src='http://techslides.com/demos/sample-videos/small.mp4' autoPlay/>
            </div>
            <div className='test_devices'>
            <Form>
  <FormGroup row>
    <Label
      for="exampleSelect"
      sm={2}
    >
      Select
    </Label>
    <Col sm={10}>
      <Input
        id="exampleSelect"
        name="select"
        type="select"
      >
        <option>
          1
        </option>
        <option>
          2
        </option>
        <option>
          3
        </option>
        <option>
          4
        </option>
        <option>
          5
        </option>
      </Input>
    </Col>
  </FormGroup>
  </Form>

            </div>
        </div>
    </div>
}



export default Test_devices;