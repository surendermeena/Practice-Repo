import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import ErrorPage from './error-page'
import Contact, { loader as contactLoader } from "./routes/contact"
import {
  loader as rootLoader,
  action as rootAction
} from "./routes/root";
import EditContact from "./routes/edit";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    // When Error will occur in React APP it will render this ErrorPage
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [

      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader
      },
      {
        path: "/contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
