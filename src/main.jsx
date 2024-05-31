import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import Profile from './components/Profile/Profile.jsx';
import AllArt_craftItems from './components/AllArt&craftItems/AllArt_craftItems.jsx';
import AddCraftItem from './components/AddCraftItem/AddCraftItem.jsx';
import MyArtCraftList from './components/MyArtCraftList/MyArtCraftList.jsx';
import UpdateItem from './components/Update/UpdateItem.jsx';
import Details from './components/Details/Details.jsx';
import CartoonDrawing from './components/Subcategory/CartoonDrawing.jsx';
import CharcoalSketching from './components/Subcategory/CharcoalSketching.jsx';
import LandscapePainting from './components/Subcategory/LandscapePainting.jsx';
import OilPainting from './components/Subcategory/OilPainting.jsx';
import PortraitDrawing from './components/Subcategory/PortraitDrawing.jsx';
import WatercolurPainting from './components/Subcategory/WatercolurPainting.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
      },
      {
        path: '/allArt&craftItems',
        element: <AllArt_craftItems></AllArt_craftItems>,
        loader: () => fetch(`https://assignment-10-server-side-gules.vercel.app/userAddItems`),
      },
      {
        path: '/addCraftItem',
        element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>,
      },
      {
        path: '/myArt&craftList',
        element: <PrivateRoute><MyArtCraftList></MyArtCraftList></PrivateRoute>,
        loader: () => fetch(`https://assignment-10-server-side-gules.vercel.app/userAddItems`),
      },
      {
        path: 'update/:id',
        element: <UpdateItem></UpdateItem>,
        loader: ({ params }) => fetch(`https://assignment-10-server-side-gules.vercel.app/userAddItems/${params.id}`)
      },
      {
        path: 'details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-10-server-side-gules.vercel.app/userAddItems/${params.id}`)
      },
       {
        path: 'craftDetails/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-10-server-site-beta.vercel.app/craftItems/${params.id}`),
      },
      {
        path:'/cartoonDrawing',
        element: <CartoonDrawing></CartoonDrawing>,
      },
      {
        path:'/charcoalSketching',
        element: <CharcoalSketching></CharcoalSketching>,
      },
      {
        path:'/landscapePainting',
        element: <LandscapePainting></LandscapePainting>,
      },
      {
        path:'/oilPainting',
        element: <OilPainting></OilPainting>,
      },
      {
        path:'/portraitDrawing',
        element: <PortraitDrawing></PortraitDrawing>,
      },
      {
        path:'/watercolurPainting',
        element: <WatercolurPainting></WatercolurPainting>,
      },
      {
        path: 'subCategoryItemDetails/:id',
        element: <Details></Details>,
        loader: ({ params }) => fetch(`https://assignment-10-server-side-gules.vercel.app/allSubcategoryItems/${params.id}`),
      },



    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </>,
)