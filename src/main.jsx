import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import BlogsDetails from './Pages/BlogsDetails';


import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Layout from './Pages/Layout';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout> ,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/about", element: <About></About> },
      { path: "/blogs", element: <Blogs></Blogs> },
      { path: "/places", element: <BlogsDetails></BlogsDetails> },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
