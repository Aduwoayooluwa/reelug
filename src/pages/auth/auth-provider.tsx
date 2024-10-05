import React from "react";
import { useSession } from "@clerk/clerk-react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import CustomLoader from "../../components/custom-loader";
interface AuthProviderProps {
  requireAuth?: boolean;
  redirectIfAuthenticated?: boolean;
}

const AuthProvider: React.FC<AuthProviderProps> = ({
  requireAuth = false,
  redirectIfAuthenticated = false,
}) => {
  const { isSignedIn, isLoaded } = useSession();
  const location = useLocation();

  if (!isLoaded) {
    return <CustomLoader />;
  }

  if (requireAuth && !isSignedIn) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  if (redirectIfAuthenticated && isSignedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default AuthProvider;
