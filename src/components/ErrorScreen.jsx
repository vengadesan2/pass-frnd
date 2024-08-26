import React from 'react'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
// import errorScreenAnime from '../assets/svg/errorScreenAnime.svg'

function ErrorScreen() {
  return <>
    <div className='mx-auto d-flex flex-column justify-content-between align-items-center'>
      {/* <div style={{backgroundImage: `url(${errorScreenAnime})`, backgroundRepeat: 'no-repeat',
      width:'50rem',height:'100vh'}}></div> */}
      {/* <img src={errorScreenAnime} alt="errorscreen" style={{width : "40%",height : "40%"}} /> */}
      <h1> error </h1>
      
      <Link to={'/'}><Button style={{width : "max-content"}}>Go to Home</Button></Link>
    </div>
  </>
}

export default ErrorScreen