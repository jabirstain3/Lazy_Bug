import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css'
import HomePage from './components/home/HomePage.jsx';
import RegistrationPage from './components/registration/RegistrationPage.jsx';
import LogInPage from './components/login/LogInPage.jsx';
import Profilepage from './components/profile/Profilepage.jsx';
import AuthContextProvider from './contexts/AuthContextProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/registration",
        element: <RegistrationPage></RegistrationPage>,
      },
      {
        path: "/login",
        element: <LogInPage></LogInPage>,
      },
      {
        path: "/profile",
        element: <Profilepage></Profilepage>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>    
  </React.StrictMode>,
)
