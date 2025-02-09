import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';


const AppLayout = ()=>{
    return <div className='appLayout'>
        <Header/>
        <Outlet/>
    </div>
}

const AppPath = createBrowserRouter([
    {
        path : '/',
        element : <AppLayout/>,
        children : [
            {
                path : '/',
                element : <Body/>
            },
            {
                path : '/Contact',
                element : <Contact/>
            },
            {
                path : '/About',
                element : <About/>
            },
            {
                path : 'restaurant/:resId',
                element : <RestaurantMenu />
            }
        ],
        errorElement : <Error />,
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={AppPath}/>)
