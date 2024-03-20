import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';
function Footer() {
  return (
    <div>
            <MDBFooter bgColor='secondary' className='text-center text-lg-left'>
      <div className='text-center p-3 bg-secondary' style={{  color:'white'}}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-light' href=''>
          login&Reg.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer