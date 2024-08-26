import React from 'react'
import {Container,Row, Col} from 'react-bootstrap';
import NavbarAfterLogin from './common/NavbarAfterLogin'
import Feedbar from './middlebars/Feedbar';
import UserTimeline from './middlebars/UserTimelime';


function MyTimeline() {
  return <>
    <NavbarAfterLogin/>

    <Container fluid>
      <Row>
        <Col><Leftbar/></Col>
        <Col xs md={6}><UserTimeline/></Col>
        <Col><Rightbar/></Col>
      </Row>
    </Container>
  </>
}

export default MyTimeline