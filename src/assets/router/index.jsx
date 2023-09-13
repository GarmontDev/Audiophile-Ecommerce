import { createBrowserRouter } from "react-router-dom";
import Layout from '../layout/layout'
import Headphones from '../../pages/Headphones'
import Earphones from '../../pages/Earphones'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children:   [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/headphones',
                element: <Layout/>,
                children: [
                    {
                        index: true,
                        element: <Headphones/>
                    }
                ]
            },
            {
                path: '/earphones',
                element: <Layout/>,
                children: [
                    {
                        index: true,
                        element: <Earphones/>
                    }
                ]
            }
        ]
    }
])