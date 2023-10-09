import React, { useEffect, useState } from "react";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";
import Loader from "../Components/Loader/Loader";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [users, setUsers] = useState([]);
  const [axiosSecure] = UseAxiosSecure();
  const [isLoadingData, setIsLoadingData] = useState(true);

  useEffect(() => {
    axiosSecure
      .get("/users")
      .then((response) => {
        setUsers(response?.data);
        setIsLoadingData(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoadingData(false);
      });
  }, [axiosSecure, user, isLoadingData]);

  const currentUser = users?.find(
    (userData) => userData?.email === user?.email
  );

  const isAdmin = currentUser?.role === "admin";

  if (loading || isLoadingData) {
    return <Loader />;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
