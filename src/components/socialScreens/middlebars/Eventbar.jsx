
import React,{ useEffect,useState } from 'react'
import {Button,Card,Row,Col} from 'react-bootstrap'
import AxiosService from '../../../utils/AxiosService';
import ApiRoutes from '../../../utils/ApiRoutes';
import { jwtDecode } from "jwt-decode";
import { toast } from 'react-toastify';

function EventBar() {
  const [users, setUsers] = useState([])

  const getUsers = async() => {
    try {
      let getToken = localStorage.getItem('token')
      const decodedToken = jwtDecode(getToken)
      const id = decodedToken.id
      let res = await AxiosService.get(`${ApiRoutes.GETUSERSBDAY.path}/${id}`,{ headers : { 'Authorization' : ` ${getToken}`}})   
      let result = res.data.getusers
      let updatedNewFriends = result.filter((e)=>e._id !== id)    //filter users
      const todayBday = updatedNewFriends.filter((e) => {       //filter todaysBirthdayUsers
        const date1 = new Date(e.dob)
        let userBdayDate = date1.getDate() + "/" + (date1.getMonth()+1) + "/" + date1.getFullYear()
        const date2 = new Date() 
        let todayDate = date2.getDate() + "/" + (date2.getMonth()+1) + "/" + date2.getFullYear()
        if(userBdayDate === todayDate){
          return e._id
        }
      })
      if(res.status === 200){
        setUsers(todayBday)
      }
    } catch (error) {
        toast.error(error.response.data.message || error.message)
    }
  }

  useEffect(()=> {
    getUsers()
  },[])

  return <>
    <div className='mt-4'>
      <h5>Today</h5>
      <div>
        <Row md={1} lg={2} className="g-5 m-0">
          {  
            !users.length == "" ?
              users.map((e,i) => {
                return <div key={e._id} className='mt-3'>
                  <Col >
                    <Card style={{ width: '18rem' }} >
                      <Card.Img variant="top" src={e.imageDP} />
                      <Card.Body>
                        <Card.Title>{e.firstName} {e.lastName}</Card.Title>
                        {/* <Button variant="primary" onClick={()=>handleAddFriend(e._id)}>Add Friend</Button> */}
                      </Card.Body>
                    </Card>
                  </Col>
                </div>
              }) 
              : 
              <div >
                <Card style={{ width: '18rem' }} >
                  <Card.Body>
                    <Card.Text>No Birthdays</Card.Text>                  
                  </Card.Body>
                </Card>
              </div>
          }
        </Row>
      </div>
    </div>
  </>
}

export default EventBar
