import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import ErrorPage from './error-page'
import Contact from "./routes/contact"
import { loader as rootLoader } from "./routes/root";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    // When Error will occur in React APP it will render this ErrorPage
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [

      {
        path: "contacts/:contactId",
        element: <Contact />
      },
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
