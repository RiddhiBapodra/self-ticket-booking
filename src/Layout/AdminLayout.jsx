import React from 'react'
import { Outlet } from 'react-router-dom'
import  Sidebar  from '../pages/AdminLayout/Sidebar.jsx'

const AdminLayout = () => {
  return (
      <>
          <div className="flex">
              <div className="w-1/4">
                  <Sidebar />
              </div>
              <div className="w-full">
                  <Outlet />
              </div>
          </div>
      </>
  )
}

export default AdminLayout