import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import PostDetail from './pages/PostDetail.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Authors from './pages/Authors.jsx'
import UserProfie from './pages/UserProfie.jsx'
import CreatePost from './pages/CreatePost.jsx'
import CategoryPosts from './pages/CategoryPosts.jsx'
import Logout from './pages/Logout.jsx'
import EditPost from './pages/EditPost.jsx'
import Dashboard from './pages/Dashboard.jsx'
import AuthorPosts from './pages/AuthorPosts.jsx'
import DeletePost from './pages/DeletePost.jsx'
import TestEnv from './pages/TestEnv.jsx'
import UserProvider from './context/UserContext.jsx'

const router = createBrowserRouter([{
  path:'/',
  element:<UserProvider><App/> </UserProvider>,
  errorElement:<ErrorPage/>,
  children:[
    {index:true,element:<Home/>},
    {path:'posts/:id',element:<PostDetail/>},
    {path:'register',element:<Register/>},
    {path:'login',element:<Login/>},
    {path:'authors',element:<Authors/>},
    {path:'profile/:id',element:<UserProfie/>},
    {path:'create',element:<CreatePost/>},
    {path:'logout',element:<Logout/>},
    {path:'posts/users/:id',element:<AuthorPosts/>},
    {path:'myposts/:id',element:<Dashboard/>},
    {path:'posts/:id/edit',element:<EditPost/>},
    {path:'posts/:id/delete',element:<DeletePost/>},
    {path:'posts/categories/:category',element:<CategoryPosts/>},
    {path:'test',element:<TestEnv/>},
  ]

}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <h1>Hello world</h1> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
