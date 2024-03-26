import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import HomePage from './Components/HomePage/HomePage';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import ReadPage from './Components/ReadPage/ReadPage';
import Details from './Components/Details/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/books',
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/pageRead',
        element: <ReadPage></ReadPage>
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ()=> fetch('booksData.json')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
