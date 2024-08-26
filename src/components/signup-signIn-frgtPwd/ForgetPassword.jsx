import React from 'react'
import {Container,Row, Col,Form,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import AxiosService from '../../utils/AxiosService';
import ApiRoutes from '../../utils/ApiRoutes';


function ForgotPassword() {

    let emailFormik = useFormik({
        initialValues:{
            email : ''
        },
        validationSchema:Yup.object({          
            email:Yup.string().required('Email is required').email('Enter a valid email')
        }),
        onSubmit : async(values) => {
            console.log(values);
            try {
                // console.log(values);  
                let res = await AxiosService.put(`${ApiRoutes.FORGOTPASSWORD.path}`,values)
                if(res.status === 200){
                    toast.success(res.data.message)
                    localStorage.setItem('forgotPassToken',res.data.forgotPassToken)
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
                        
                            <div className='formData rounded-4 p-5 d-flex justify-content-around flex-column'>
                                <h3 className='text-white text-center'>Forgot Password</h3>

                                <Form onSubmit={emailFormik.handleSubmit} className='forgotPassForm d-flex justify-content-around flex-column'>                                
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter registered email" id='email' name='email' onChange={emailFormik.handleChange} value={emailFormik.values.email} onBlur={emailFormik.handleBlur}/>
                                        {emailFormik.touched.email && emailFormik.errors.email ? (<div style={{color:"red"}}>{emailFormik.errors.email}</div>) : null}
                                    </Form.Group>
                                    <Button variant="primary" type="submit" className='col-12'>Submit</Button>
                                </Form>

                                {/* <Form onSubmit={verificationCodeFormik.handleSubmit}>
                                    <Form.Group className="mb-4">
                                        <Form.Label>Enter Verification code</Form.Label>
                                        <Form.Control type="text" placeholder="Enter code" name="text" id='text' onChange={verificationCodeFormik.handleChange} value={verificationCodeFormik.values.text} onBlur={verificationCodeFormik.handleBlur}/>
                                        {verificationCodeFormik.touched.text && verificationCodeFormik.errors.text ? (<div style={{color:"red"}}>{verificationCodeFormik.errors.text}</div>) : null}
                                    </Form.Group>
                                    <Button variant="primary" type="submit" className='col-12'>Submit</Button>  
                                </Form> */}

                      </div>
                      </div>
                      </div>
            </Container>
        
    </>
}

export default ForgotPassword