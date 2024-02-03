import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  return (
    <Fragment>
      {loading === false && (
        <Route
          {...rest}
          render={(props) => {
            if (isAuthenticated === false) {
              return <Redirect to="/login" />;
            }

            if (isAdmin === true && user.role !== "admin") {
              return <Redirect to="/login" />;
            }

            return <Component {...props} />;
          }}
        />
      )}
    </Fragment>
  );
};

export default ProtectedRoute;
// import { useNavigate, Outlet } from "react-router-dom";

// const ProtectedRoute = () => {
//   const { loading, isAuthenticated } = useSelector((state) => state.user);

//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
// };
// export default ProtectedRoute;

// export const ProtectedRoute = ({ children }) => {
//   const { isAuthenticated } = useSelector((state) => state.user);

//   if (isAuthenticated) {
//     return children;
//   }

//   return <Navigate to="/login" />;
// };
// export default ProtectedRoute;
