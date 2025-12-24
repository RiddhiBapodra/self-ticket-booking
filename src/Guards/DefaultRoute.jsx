// import { Navigate } from "react-router-dom";

// const DefaultRoute = () => {
//     const authData = localStorage.getItem("authData");

//     const role = authData?.role

//     if(!authData)
//     {
//         return <Navigate to="/login" replace />;
//     }
//     if(role === "admin")
//     {
//         return <Navigate to="admin/dashboard" replace />;
//     }
//     if(role == "user")
//     {
//         return <Navigate to="admin/dashboard" replace />;
//     }

// }
// export default DefaultRoute;/
import { Navigate } from "react-router-dom";

const DefaultRoute = () => {
  const authData = localStorage.getItem("authData");

  if (!authData) {
    return <Navigate to="/login" replace />;
  }

  // ✅ parse stored string to object
  const parsedAuthData = JSON.parse(authData);
  const role = parsedAuthData.role;

  if (role === "admin") {
    return <Navigate to="/admin/dashboard" replace />;
  }

  if (role === "user") {
    return <Navigate to="/user/dashboard" replace />;
  }

  // ✅ fallback safety
  return <Navigate to="/login" replace />;
};

export default DefaultRoute;
