import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import { getCurrentUser } from "../api-services/users-service";
import { message } from "antd";
import type { UsersStoreType } from "../store/users-store";
import usersGlobalStore from "../store/users-store";
import Spinner from "../components/spinner";

function PrivateLayout({ children }: { children: React.ReactNode }) {
  const [showContent, setShowContent] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { setCurrentUser, currentUser }: UsersStoreType =
    usersGlobalStore() as UsersStoreType;

  const getData = async () => {
    try {
      setLoading(true);
      const user = await getCurrentUser();
      setCurrentUser(user);
    } catch (error: any) {
      if (error.response?.status === 401) {
        Cookies.remove("token");
        navigate("/login");
      } else {
        message.error(error.response?.data?.message || error.message);
      }
    } finally {
      setLoading(false);
      setShowContent(true);
    }
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/login");
    } else {
      getData();
    }
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    showContent &&
    currentUser && (
      <div className="flex lg:flex-row flex-col gap-5 h-screen">
        <Sidebar />
        <div className="flex-1 px-5 lg:mt-10 pb-10 overflow-y-scroll">
          {children}
        </div>
      </div>
    )
  );
}

export default PrivateLayout;
