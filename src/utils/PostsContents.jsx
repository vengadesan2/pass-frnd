import React, {useState, useEffect, Children} from 'react'

export const PostContext = React.createContext({})

function PostContextComponent({children}) {
    const [posts, setPosts] = useState(null)

    // const getUserPostData = async() => {
    //     try {
    //       let getToken = localStorage.getItem('loginToken')
    //       const decodedToken = jwtDecode(getToken)
    //       const id = decodedToken.id
    //       let res = await AxiosService.get(`${ApiRoutes.GETUSERPOST.path}/${id}`,{ headers : { 'Authorization' : `Bearer ${getToken}`}})
    //       // console.log(res);
    //       if(res.status === 200){
    //         toast.success(res.data)
    //         // setPosts(res.data.getuserpost)
    //         setPosts(res.data)
    //       }
    //     } catch (error) {
    //         toast.error(error.response.data.message || error.message)
    //     }
    // }

    useEffect( async() => {
      try {
          let getToken = localStorage.getItem('loginToken')
          const decodedToken = jwtDecode(getToken)
          const id = decodedToken.id
          let res = await AxiosService.get(`${ApiRoutes.GETUSERPOST.path}/${id}`,{ headers : { 'Authorization' : `Bearer ${getToken}`}})
          // console.log(res);
          if(res.status === 200){
            toast.success(res.data)
            // setPosts(res.data.getuserpost)
            setPosts(res.data)
          }
        } catch (error) {
            toast.error(error.response.data.message || error.message)
        }
    },[])
    
    
    return <>
        <PostContext.Provider value={{posts, setPosts}}>
            {children}
        </PostContext.Provider>
    </>
}

export default PostContextComponent