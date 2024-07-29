import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import BlogsDetails from './Pages/BlogsDetails';
import BestPlaces from './Pages/BestPlaces';
import OurServices from './Pages/OurServices';
import Location from './Pages/Location';
import Contact from './Pages/Contact';

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Layout from './Pages/Layout';
import ErrorPage from './ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout> ,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {path: "/", element:<Home></Home>},
      {path: "/blogs", element:<Blogs></Blogs>},
      {path: "/places", element:<BestPlaces></BestPlaces>},
      {path: "/about", element:<About></About>},
      {path: "/services", element:<OurServices></OurServices>},
      {path: "/location", element:<Location></Location>},
      {path: "/contact", element:<Contact></Contact>},
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
