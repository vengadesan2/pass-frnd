import React, { useState } from 'react'
import SuggestFriends from '../others/SuggestFriends'
import MyFriends from '../others/MyFriends'


function FriendsBar() {

  const [users, setUsers] = useState([])
  const [myFriends, setMyFriends] = useState([])

  return <>
    <div className='p-4'>
      <MyFriends myFriends = {myFriends} setMyFriends ={setMyFriends}/>
      <hr />
      <SuggestFriends users = {users} setUsers ={setUsers}/> 
    </div>
  </>
}

export default FriendsBar