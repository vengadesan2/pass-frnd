import React from 'react'
import {Container,Row, Col,Form,Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { jwtDecode } from "jwt-decode";
import AxiosService from '../../utils/AxiosService';
import ApiRoutes from '../../utils/ApiRoutes';


function ResetPassword() {

    let navigate = useNavigate()

    let updatePasswordFormik = useFormik({
        initialValues:{
            email : '',
            text:'',
            password:''
        },
        validationSchema:Yup.object({
            email:Yup.string().required('Email is required').email('Enter a valid email'),
            password:Yup.string().required('Password is required').matches(/^[a-zA-Z0-9!@#$%^&*]{8,15}$/,'Enter a valid Password'),
            confirmPassword:Yup.string().required('Confirm Password is required').matches(/^[a-zA-Z0-9!@#$%^&*]{8,15}$/,'Confirm Password should match Password')
        }),
        onSubmit : async(values) => {
            try {
                if(values.password === values.confirmPassword){
                    let res = await AxiosService.put(`${ApiRoutes.RESETPASSWORD.path}`,values)
                    // console.log(res);
                    if(res.status === 200){
                        toast.success(res.data.message)
                        navigate('/')
                    }     
                  }else{
                    toast.error("Passwords doesnt match! Please enter the same passwords")
                  }
                // // localStorage.setItem('forgotPassToken',res.data.forgotPassToken)
                // // const token = localStorage.setItem('forgotPassToken')
                // let getToken = localStorage.getItem('forgotPassToken')
                // const decodedToken = jwtDecode(getToken)
                // const id = decodedToken.id
                // console.log(values,id);
                // // let res = await AxiosService.put(`${ApiRoutes.RESETPASSWORD.path}/${id}`,values, { headers : { 'Authorization' : `Bearer ${getToken}`}})
                // let res = await AxiosService.put(`${ApiRoutes.RESETPASSWORD.path}`,values)
                // if(res.status === 200){                    
                //     console.log("token");
                //     toast.success(res.data.message)
                // }
            } catch (error) {
                toast.error(error.response.data.message || error.message)
                // toast.error( error.message)                                
            }
        }
    })

    return <>
        

<div className='formArea py-5'>
            <Container fluid>
                <div className='rowArea'>
                    <Link to={'/forgotpassword'}><Button variant='secondary' className='mb-3'>Back</Button></Link>    
                    <Row>
                        
                        <Col md xs={12}>
                            <Form className='formData p-4 rounded-4' onSubmit={updatePasswordFormik.handleSubmit}>
                                <h3 className='text-white text-center'>Reset Password</h3> 

                                <Form.Group className="mb-4" >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter registered your email" id='email' name='email' onChange={updatePasswordFormik.handleChange} value={updatePasswordFormik.values.email} onBlur={updatePasswordFormik.handleBlur}/>
                                    {updatePasswordFormik.touched.email && updatePasswordFormik.errors.email ? (<div style={{color:"red"}}>{updatePasswordFormik.errors.email}</div>) : null}
                                </Form.Group>

                                <Form.Group className="mb-4" >
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter New Password" id='password' name='password' onChange={updatePasswordFormik.handleChange} value={updatePasswordFormik.values.password} onBlur={updatePasswordFormik.handleBlur}/>
                                    {updatePasswordFormik.touched.password && updatePasswordFormik.errors.password ? (<div style={{color:"red"}}>{updatePasswordFormik.errors.password}</div>) : null}
                                </Form.Group>

                                <Form.Group className="mb-4" >
                                    <Form.Label>Confirm new Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter Confirm Password" id='confirmPassword' name='confirmPassword' onChange={updatePasswordFormik.handleChange} value={updatePasswordFormik.values.confirmPassword} onBlur={updatePasswordFormik.handleBlur}/>
                                    {updatePasswordFormik.touched.confirmPassword && updatePasswordFormik.errors.confirmPassword ? (<div style={{color:"red"}}>{updatePasswordFormik.errors.confirmPassword}</div>) : null}
                                </Form.Group>

                                <div className="d-grid mb-4">
                                    <Button variant='primary' type='submit'>Update password</Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    </>
}

export default ResetPassword