import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import HomePage from "../Components/HomePage/HomePage";
import ListedBooks from "../Components/ListedBooks/ListedBooks";
import ReadPage from "../Components/ReadPage/ReadPage";
import Details from "../Components/Details/Details";
import ListedBooksCard from "../Components/ListedBooksCard/ListedBooksCard";
import WishList from "../Components/WishList/WishList";



export const router = createBrowserRouter([
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
          element: <ListedBooks></ListedBooks>,
          loader: ()=> fetch('booksData.json'),
          children: [
            {
                index: true,
                element: <ListedBooksCard></ListedBooksCard>
            },
            {
                path: 'wishlist',
                element: <WishList></WishList>
            },
            {
                path: 'details',
                element: <Details></Details>
            }
          ]
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
  