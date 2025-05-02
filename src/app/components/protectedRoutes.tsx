"use client";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "../store/store";
import { useEffect, useState } from "react";
const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state?.auth?.isAuthenticated
  );
  const [isLoading, setIsLoading] = useState(true);

  console.log(isAuthenticated, "isAuthenticated");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && !isAuthenticated) {
      router.push("/login");
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [router, isAuthenticated]);

  if (isLoading) return <>...Loading</>;
  return children;
};

export default ProtectedRoute;
