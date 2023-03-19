
 

 import {createBrowserRouter,Navigate,Outlet,RouterProvider} from 'react-router-dom'
 import Leftbar from './component/leftbar/Leftbar'
 import Home from './component/Home'
 
 import Login from './component/login/Login'
 import Navbar from './component/navbar/Navbar'
 import Register from './component/Register/Register'
 import Rightbar from './component/rightbar/Rightbar'
 import Profile from './component/Profile/Profile'
 import Search from './component/Search'
import FirebaseLog from './component/firebase/FirebaseLog'

const App = () => {

     
   
 
   const Layout=()=>{

    return(
      
      <div>
        <Navbar/>
      <div style={{display:'flex'}}>
        <Leftbar/>
        <div style={{width:'60%'}}>
          <Outlet/>
        </div>
        <Rightbar/>
      </div>
      </div>
      
     
    );
   };

   
   const ProtectRoute=({children})=>{
    const auth={type: false}
     if(auth.type){
       return <Navigate to='/login'/>;
     }

    
    return children
};


    const router= createBrowserRouter([
      
       {
        path:'/',
        element:(<ProtectRoute>
          <Layout/>
        </ProtectRoute>),
        children:[
          {
            path:'/',
            element:<Home/>
          },
          {
            path:'/profile',
            element:<Profile/>
          }
        ]
       },
      {
        path:"/login",
        element:<Login  />
    },{
      path:'/register',
      element:<Register/>

    },
    {
      path:'/searchApi',
      element:<Search/>    },
      {
        path:"/firebase",
        element:<FirebaseLog/>
      }
    
    ])
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App