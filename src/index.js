import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './webPages/loginPage';
import ContactPage from './webPages/contactPage';
import HomePage from "./webPages/homePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "login",
    element: <LoginPage/>,
  },
  {
    path: "contact",
    element: <ContactPage/>,
  },
  {
    path: "app",
    element: <App/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
