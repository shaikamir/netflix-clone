import React from 'react'

import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Browser from './Browser'
import Signin from './Signin'

const Body = () => {

    const routerBrowser = createBrowserRouter([
        {
            'path': '/',
            element: <Signin/>
        },
        {
            path: '/browser',
            element: <Browser/>
        }
    ])

  return (
    <div>
        <RouterProvider router={routerBrowser}></RouterProvider>
    </div>
  )
}

export default Body