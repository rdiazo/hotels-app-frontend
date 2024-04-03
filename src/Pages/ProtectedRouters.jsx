import { Navigate, Outlet } from "react-router-dom"

const ProtectedRouters = () => {

    if(localStorage.getItem('token')) {
    return <Outlet/>
    } else {
        return <Navigate to='/login' />
    }
  
}

export default ProtectedRouters