import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import HomePage from './views/HomePage'
import RecipiesPage from './views/RecipiesPage'
import FavouritesPage from './views/FavouritesPage'
import AboutPage from './views/AboutPage'
import ContactPage from './views/ContactPage'

const router = createBrowserRouter([
  {
    path: "/exam/",
    element: <Layout/>,
    children:[
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: "recipies",
        element: <RecipiesPage/>
      },
      {
        path: "favourites",
        element: <FavouritesPage/>
      },
      {
        path: "about",
        element: <AboutPage/>
      },
      {
        path: "contact",
        element: <ContactPage/>
      }
    ],
  },
])
function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
