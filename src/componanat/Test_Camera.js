import React, { useState } from 'react';
import { Navbar , NavbarBrand} from 'reactstrap';



function Test_devices() {
    
    return <Navbar
    className=""
    color="dark"
    dark
  >
    <NavbarBrand href="/">
      <img
        alt="logo"
        src="/logo-white.svg"
        style={{
          height: 40,
          width: 40
        }}
      />
      Inrepm
    </NavbarBrand>
  </Navbar>
}



export default Test_devices;