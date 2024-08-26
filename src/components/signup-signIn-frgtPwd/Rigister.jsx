import React from 'react'
import {Container,Row, Col,Form,Button} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import AxiosService from '../../utils/AxiosService'
import ApiRoutes from '../../utils/ApiRoutes'


function Register() {

    const navigate = useNavigate();

    let formik = useFormik({
      initialValues:{
        firstName:'',
        lastName:'',
        email:'',
        mobile:'',
        password:'',
        confirmPassword:''
      },
      validationSchema:Yup.object({       
        firstName:Yup.string().required('FirstName is required').max(20,'Name can not exceed 20 characters').min(3,'firstName can not be shorter than 3 leters'),
        lastName:Yup.string().required('LastName is required').max(20,'Name can not exceed 20 characters').min(3,'LastName can not be shorter than 3 leters'),
        email:Yup.string().required('Email is required').email('Enter a valid email'),
        mobile:Yup.string().required('Mobile is required').matches(/^\d{10}$/,'Enter a valid mobile number'),
        password:Yup.string().required('Password is required').matches(/^[a-zA-Z0-9!@#$%^&*]{8,15}$/,'Enter a valid Password'),
        confirmPassword:Yup.string().required('Confirm Password is required').matches(/^[a-zA-Z0-9!@#$%^&*]{8,15}$/,'Confirm Password should match Password')
      }),
      onSubmit : async(values) => {
          try {
            //   console.log(values);          
              if(values.password === values.confirmPassword){
                let res = await AxiosService.post(`${ApiRoutes.REGISTER.path}`,values)
                // console.log(res);
                if(res.status === 200){
                  navigate('/')
                }     
              }else{
                toast.error("Passwords doesnt match! Please enter the same passwords")
              }
          } catch (error) {
              toast.error(error.response.data.message || error.message)
          }
      }
  })

    return <>
    
       
            <Container fluid>
            <div className="row wrapper"> 
                <div className="col-10 col-lg-5" style={{marginTop:"50px"}}>
                        <Form onSubmit={formik.handleSubmit} className=' shadow bg-light my-1 p-1 formData loginFormdata p-5 rounded-4'>
                            <Row className="mb-3">
                              <Col lg xs={12} className='fieldBottom'>
                                <Form.Label>Firstname</Form.Label>
                                <Form.Control type='text' placeholder="Enter Firstname" id='firstName' name='firstName'onChange={formik.handleChange} value={formik.values.firstName} onBlur={formik.handleBlur}/>
                                {formik.touched.firstName && formik.errors.firstName ? (<div style={{color:"red"}}>{formik.errors.firstName}</div>) : null}
                              </Col>
                              <Col lg xs={12}>
                                <Form.Label>Lastname</Form.Label>
                                <Form.Control type='text' placeholder="Enter Lastname" id='lastName' name='lastName'onChange={formik.handleChange} value={formik.values.lastName} onBlur={formik.handleBlur}/>
                                {formik.touched.lastName && formik.errors.lastName ? (<div style={{color:"red"}}>{formik.errors.lastName}</div>) : null}
                              </Col>
                            </Row>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" id="email" name='email'onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>
                                {formik.touched.email && formik.errors.email ? (<div style={{color:"red"}}>{formik.errors.email}</div>) : null}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control type="text" placeholder="Enter Mobile number" maxLength={10} id="mobile" name='mobile' onChange={formik.handleChange} value={formik.values.mobile} onBlur={formik.handleBlur}/>
                                {formik.touched.mobile && formik.errors.mobile ? (<div style={{color:"red"}}>{formik.errors.mobile}</div>) : null}
                            </Form.Group>
                            <Row className="mb-4">
                              <Col lg xs={12} className='fieldBottom'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' placeholder="Enter password" id="password" name='password'onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur}/>
                                {formik.touched.password && formik.errors.password ? (<div style={{color:"red"}}>{formik.errors.password}</div>) : null}
                              </Col>
                              <Col lg xs={12}>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type='password' placeholder="Enter Confirm Password" id="confirmPassword" name='confirmPassword'onChange={formik.handleChange} value={formik.values.confirmPassword} onBlur={formik.handleBlur}/>
                                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (<div style={{color:"red"}}>{formik.errors.confirmPassword}</div>) : null}
                              </Col>
                            </Row>
                            <div className="d-grid mb-3">
                                <Button variant='primary' type="submit">Register</Button>
                            </div>
                            <div className='text-center mb-2'>
                                Already existing user? <Link to={'/'} className='loginTextLink'>Login</Link>
                            </div>
                        </Form>
                     </div>
                     </div>
               
            </Container>
       


  </>
}

export default Register