import { Navigate } from 'react-router-dom'
import { HomePage } from './pages/home/HomePage'
import { Layout } from './components/layout/Layout'

const routesList = [
    { element: <HomePage />, path: '/' },
]

const publicRoutes = []

routesList.map(item => {
    publicRoutes.push({
        path: item.path,
        element: <Layout>
            {item.element}
        </Layout>
    })
})

const defaultRoutes = [
    {
        path: "*",
        element: <Navigate to="/" replace />,
    },
]

const authRoutes = []

const InDevelopingRoutes = []

export const routes = publicRoutes.concat(defaultRoutes, authRoutes, InDevelopingRoutes)