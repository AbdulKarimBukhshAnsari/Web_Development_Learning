import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './components/Home/home.jsx'
import About from './components/About/about.jsx'
import Contact from './components/Contacts/contacts.jsx'

// const router = createBrowserRouter([
//     {
//         path : '/',
//         element : <Layout/>,
//         children : [
//             {
//                 path : '',
//                 element : <Home/>
//             }, 
//             { path : '/about',
//                 element : <About />
//             },
//             {
//                 path : '/contact',
//                 element : <Contact/>
//             }


//         ]
//     }



// ])

// another way of routing 

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element = {<Layout/>}>
            <Route path='' element = {<Home/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/contact' element = {<Contact/>}/>
        </Route>
    )
)


//Both Ways are correct 

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
