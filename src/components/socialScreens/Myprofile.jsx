import React, { useContext } from 'react'
import {Container,Row, Col} from 'react-bootstrap';
import NavbarAfterLogin from './common/NavbarAfterLogin'
import MyProfileBar from  './middlebars/Myprofilebar'
import { SharedDataContext } from './others/Context';
function MyProfile() {
  const {cartItems,setCartItems } =useContext(SharedDataContext)
  return <>
    <NavbarAfterLogin cartItems={cartItems} setCartItems={setCartItems}/>

    <Container fluid>
      <Row>
        {/* <Col><Leftbar/></Col> */}
        <MyProfileBar/>
        {/* <Col><Rightbar/></Col> */}
      </Row>
    </Container>
  </>
}

export default MyProfile