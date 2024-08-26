import React, { useState, useEffect } from 'react'
import { Form,Button,Modal,Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserTimeline from './UserTimelime'
import { toast } from 'react-toastify'
import AxiosService from '../../../utils/AxiosService'
import ApiRoutes from '../../../utils/ApiRoutes'
import { jwtDecode } from "jwt-decode";

function MyProfileBar() {
  const [show, setShow] = useState(false)
  const [selectedFile, setSelectedFile] = useState()
  const [user, setUser] = useState('')
  const [dob, setDob] = useState()
  const [bioText, setBioText] = useState([])
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
 console.log(user)
  const handleChange = (e) => {
    setSelectedFile(URL.createObjectURL(e.target.files[0]));
  }

  // const handleSubmit = async(e) => {
  //   try {
  //     e.preventDefault()
  //     const formData = new FormData(e.target)
  //     formData.append('imageDP', selectedFile)
  //     formData.append('dob',dob)
  //     const formProps = Object.fromEntries(formData)
  //     console.log(formProps);
  //     setInputBio('')
  //     setShow(false)
  //     let LoginToken = localStorage.getItem('token')
  //     let res = await AxiosService.post(`${ApiRoutes.ADDUSERBIO.path}`,formProps,{
  //       headers:{
  //         "Content-Type" : "multipart/form-data",
  //         "Authorization" : ` ${LoginToken}`        
  //       }
  //     })
  //     if(res.status === 200){
  //       toast.success(res.data.message)
  //     }      
  //   } catch (error) {
  //     console.log(error.message);
  //     toast.error(error.response.data.message || error.message)
  //   }    
  // }

  const getUsersData = async() => {
    try {
      let getToken = localStorage.getItem('token')
      const decodedToken = jwtDecode(getToken)
      const id = decodedToken.id
      // ,{ headers : { 'Authorization' : ` ${getToken}`}}
      let res = await AxiosService.get(`${ApiRoutes.GETUSERBIO.path}/${id}`)
      if(res.status === 200){
        setUser(res.data.getData)
      }
    } catch (error) {
        toast.error(error.response.data.message || error.message)
    }
  }

  useEffect(() => {
    getUsersData()
  },[])

  return <>
     <div className="row d-f align-items-center justify-content-around mt-5">
            {/* <div className="col-12 col-md-3">
                <figure className='avatar avatar-profile'>
                    <img className="rounded-circle img-fluid" alt='' />
                </figure>
                <Link to="/myprofile/update" id="edit_profile" className="btn btn-primary btn-block my-5">
                    Edit Profile
                </Link>
            </div> */}
    
            <div className="col-12 col-md-5">
                <h4>Full Name</h4>
                <p>{user.firstName}</p>
    
                <h4>Email Address</h4>
                <p>{user.email}</p>

                <h4>Joined</h4>
                <p>{String(user.createdAt).substring(0, 10)}</p>

                <Link to="/myprofile/update/password" className="btn btn-primary btn-block mt-3">
                    edit password
                </Link>
            </div>
        </div>
  </>
}

export default MyProfileBar