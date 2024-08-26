
const ApiRoutes = {
    LOGIN :  {
         path : '/',
         authenticate : false
    },
    REGISTER : {
        path : '/register',
        authenticate : false
    },
    FORGOTPASSWORD : {
        path : '/forgotPassword',
        authenticate : false
    },
    RESETPASSWORD : {
        path : '/resetPassword',
        authenticate : false
    },
    HOME : {
        path : '/home',
        authenticate : false
    },
    SEARCHDATA : {
        path : '/home/searchdata',
        authenticate : true
    },
    ADDPOST : {
        path : '/home/addpost',
        authenticate : true
    },
    GETUSERPOST :{
        path : '/home/getuserposts',
        authenticate : true
    },
    GETPOST : {
        path : '/home/getposts',
        authenticate : true
    },
    UPDATEPOST : {
        path : '/home/updatepost',
        authenticate : true
    },
    DELETEUSERPOST : {
        path : '/home/deleteuserpost',
        authenticate : true
    },
    COMMENTUSERPOST : {
        path : '/home/commentuserpost',
        authenticate : true
    },
    GETCOMMENTUSERPOST : {
        path : '/home/getcommentuserpost',
        authenticate : true
    },
    ADDUSERBIO : {
        path : '/home/adduserdatas',
        authenticate : true
    },
    GETUSERBIO : {
        path : '/home/getuserdatas',
        authenticate : true
    },
    GETUSERS : {
        path : '/home/getusers',
        authenticate :true
    },
    GETUSERSBDAY : {
        path : '/home/getUsersBday',
        authenticate :true
    },
    ADDFRIEND : {
        path : '/home/addfriend',
        authenticate :true
    },
    LOGOUT : {
        path : '/home/logout',
        authenticate : true
   },
}


export default ApiRoutes