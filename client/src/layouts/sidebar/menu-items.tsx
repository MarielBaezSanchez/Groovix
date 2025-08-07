import { BookCheck, ChartCandlestick, Home, List, LogOut, User, UsersRound } from "lucide-react";
import type { UserType } from "../../interfaces";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { message } from "antd";
import type { UsersStoreType } from "../../store/users-store";
import usersGlobalStore from "../../store/users-store";

function MenuItems() {
  const iconSize = 20;
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const {currentUser} : UsersStoreType = usersGlobalStore() as UsersStoreType;

  const userMenu = [
    {
      name: "Inicio",
      path: "/",
      icon: <Home
        size={iconSize}
      />,
      isActive: currentPath === "/",
    },
    {
      name: "Perfil",
      path: "/profile",
      icon: <User
        size={iconSize}
      />,
      isActive: currentPath === "/profile",
    },
    {
      name: "Reservas",
      path: "/bookings",
      icon: <List
        size={iconSize}
      />,
      isActive: currentPath === "/bookings",
    },
    {
      name: "Reportes",
      path: "/reports",
      icon: <ChartCandlestick
        size={iconSize}
      />,
      isActive: currentPath === "/reports",
    },
    {
      name: "Cerrar Sesión",
      path: "/logout",
      icon: <LogOut
        size={iconSize}
      />,

    },

  ];

  const adminMenu = [
    {
      name: "Inicio",
      path: "/",
      icon: <Home
        size={iconSize}
      />,
      isActive: currentPath === "/",
    },
    {
      name: "Eventos",
      path: "/admin/events",
      icon: <List
        size={iconSize}
      />,
      isActive: currentPath.includes("/admin/events",)
    },
    {
      name: "Reservas",
      path: "/admin/bookings",
      icon: <BookCheck
        size={iconSize}
      />,
      isActive: currentPath.includes("/admin/bookings",)
    },
    {
      name: "Usuarios",
      path: "/admin/users",
      icon: <UsersRound size={iconSize}
      />,
      isActive: currentPath.includes("/admin/users",)
    },
    {
      name: "Reportes",
      path: "/admin/reports",
      icon: <ChartCandlestick
        size={iconSize}
      />,
      isActive: currentPath.includes("/admin/reports",)
    },
    {
      name: "Cerrar Sesión",
      path: "/logout",
      icon: <LogOut
        size={iconSize}
      />,
    },
  ];

  const menuToRender = currentUser?.isAdmin ? adminMenu : userMenu;

  const onLogout = () => {
    Cookies.remove("token");
    navigate("/login");
    message.success("Sesión cerrada correctamente");
  }

  return (
    <div className="lg:bg-gray-200 h-full p-5 w-full">
      <div className="flex flex-col gap-1 mt-5">
        <h1 className="text-2xl font-bold text-info text-center">GROOVIX</h1>
        <b className="text-primary font-bold pl-2 text-center">EVENTS</b>
        <span className="text-sm text-gray-600">{currentUser?.name}</span>
      </div>
      <div className="flex flex-col gap-10 mt-20">
        {menuToRender.map((item: any) => (
          <div className={`px-5 py-3 rounded flex gap-5 text-sm items-center cursor-pointer
          ${item.isActive ? 'bg-info text-white' : 'text-gray-700 hover:bg-gray-300'}`}
            key={item.name}
            onClick={() => {
              if (item.path === "/logout") {
                onLogout();
              } else {
                navigate(item.path);
              }
            }}>
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuItems
