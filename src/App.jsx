import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import DefaultRoute from './Guards/DefaultRoute.jsx'
import UserLayout from './Layout/UserLayout.jsx'
import AdminLayout from './Layout/AdminLayout.jsx'
import UserDashboard from './pages/UserLayout/Dashboard.jsx'
import AdminDashboard from  './pages/AdminLayout/Dashboard.jsx'
import MyBookings from './pages/UserLayout/MyBooking.jsx'
import UserEvent from './pages/UserLayout/Event.jsx'
import AdminEvent from './pages/AdminLayout/Event.jsx'
import Profile from './pages/UserLayout/Profile.jsx'
import Booking from './pages/AdminLayout/Booking.jsx'
import AuthGuard from './Guards/AuthGuard.jsx';
 

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <AuthGuard requiredAuth={false}><Login /></AuthGuard>
    },
     {
      path: "/register",
      element: <AuthGuard requiredAuth={false}><Register /></AuthGuard>
    },
    {
      path:"/",
      element: <DefaultRoute />
    },

    // User Routes
    {
      path:"user",
      element:<AuthGuard requiredAuth={true} allowedRoles={["user"]}><UserLayout /></AuthGuard>,
      children: [
        {path: "dashboard", element: <UserDashboard />},
        {path: "my-bookings", element: <MyBookings />},
        {path: "event", element: <UserEvent />},
        {path: "profile", element: <Profile/> }
      ]
    },

    // admin routes
    {
      path:"admin",
      element: <AuthGuard requiredAuth={true} allowedRoles={["user"]}><AdminLayout /></AuthGuard>,
      children: [
        {path: "dashboard", element: <AdminDashboard/>},
        {path: "bookings", element: <Booking />},
        {path: "event", element: <AdminEvent />},
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App
