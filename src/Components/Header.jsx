import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='secondary'style={{height:'70px'}}>
        <MDBContainer fluid >
          <MDBNavbarBrand href='/'>
           
            <h3 className='text-light'>Login & Registration</h3>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header