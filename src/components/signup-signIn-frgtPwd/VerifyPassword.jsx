import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { Button } from 'react-bootstrap';
import AxiosService from '../../utils/AxiosService';
import ErrorScreen from '../ErrorScreen';
// import ApiRoutes from '../../utils/ApiRoutes';

function VerifyPassword() {

    const [validUrl, setValidUrl] = useState(true);
    const params = useParams();
  //  console.log(params);
    const verifyEmailUrl = async () => {
        try {
            let res = await AxiosService.get(`/forgotPassword/${params.id}/verify/${params.token}`)
            setValidUrl(true);
            if(res.status === 200){
                toast.success(res.data.message)
                // toast.success("url verified")
            }
        } catch (error) {
            console.error(error);
            setValidUrl(false)
            toast.error(error.response.data.message || error.message)
            
        }
    }

    useEffect(() => {
        verifyEmailUrl();
    }, []);

  return (
    <>
      {validUrl ? (
        <div className='d-flex justify-content-center flex-column align-items-center verifyEmailBg' style={{width: "100vw",height: "100vh", backgroundImage :<h1>reset</h1> }}>
          <h1>Click the below button to reset Your password</h1>
          <Link to="/resetpassword">
            <Button variant='success' type='button' className='verifyPassBtn p-3'>Reset password</Button>
          </Link>
        </div>
      ) : (
        <ErrorScreen/>
      )}
    </>
  )
}

export default VerifyPassword