import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './home/Home.jsx'
import Works from './works/Works.jsx'
import Testimonials from './testimonals/Testimonials.jsx'
import Portfolio from './portfolio/Portfolio.jsx'
import Contact from './contact/Contact.jsx'
import ReactProjects from './home/components/project/AllProjects/reactProjects/ReactProjects.jsx'
import HtmlProjects from './home/components/project/AllProjects/htmlProjects/HtmlProjects.jsx'
import JsProjects from './home/components/project/AllProjects/jsProjects/JsProjects.jsx'
import AngularProjects from './home/components/project/AllProjects/angularProjects/AngularProjects.jsx'
import XdProjects from './home/components/project/AllProjects/xdProjects/XdProjects.jsx'
import PhotoshopProjects from './home/components/project/AllProjects/photoshopProjects/PhotoshopProjects.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>

      {/* pages not yet show */}
      <Route path='' element={<Home />} />
      <Route path='Works' element={<Works />} />
      <Route path='Testimonials' element={<Testimonials />} />
      <Route path='Portfolio' element={<Portfolio />} />
      <Route path='Contact' element={<Contact />} />

      {/* projects Route */}
      <Route path='reactProjects' element={<ReactProjects />} />
      <Route path='htmlProjects' element={<HtmlProjects />} />
      <Route path='jsProjects' element={<JsProjects />} />
      <Route path='angularProjects' element={<AngularProjects />} />
      <Route path='xdprojects' element={<XdProjects />} />
      <Route path='photoshopProjects' element={<PhotoshopProjects />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
