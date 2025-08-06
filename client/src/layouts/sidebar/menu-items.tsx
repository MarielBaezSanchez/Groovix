import { BookCheck, ChartCandlestick, Home, List, LogOut, UsersRound } from "lucide-react";
import type { UserType } from "../../interfaces";
import { useLocation } from "react-router-dom";

function MenuItems({user} : {user: UserType}) {
  const iconSize = 20;
  const location = useLocation ();
  const currentPath = location.pathname;

  const userMenu =[
    {
      name: "Inicio",
      path: "/",
      icon: <Home 
        size={iconSize}
      />,
      isActive : currentPath === "/",
    },
    {
      name:"Reservas",
      path:"/reservas",
      icon: <List 
      size={iconSize}
      />,    
      isActive : currentPath === "/reservas",
    },
    {
      name:"Reportes",
      path:"/reportes",
      icon: <ChartCandlestick 
      size={iconSize}
      />,    
      isActive : currentPath === "/reportes",
    },
    {
      name:"Cerrar Sesión",
      path:"/cerrar-sesion",
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
      isActive : false,
    },
    {
      name: "Eventos",
      path: "/admin/eventos",
      icon: <List 
      size={iconSize}
      />,
      isActive : currentPath === "/admin/eventos",
    },
    {
      name:"Reservas",
      path:"/admin/reservas",
      icon: <BookCheck
      size={iconSize}
      />,    
    },
    {
      name:"Usuarios",
      path:"/admin/usuarios",
      icon: <UsersRound size={iconSize}
      />,    
    },
    {
      name:"Reportes",
      path:"/admin/reportes",
      icon: <ChartCandlestick 
      size={iconSize}
      />,    
    },
    {
      name:"Cerrar Sesión",
      path:"/cerrar-sesion",
      icon: <LogOut 
      size={iconSize}
      />,    
    },
  ];
  const menuToRender = user.isAdmin ?  adminMenu : userMenu;
  
  return (
    <div className="bg-gray-200 h-full p-5">
      <div className="flex flex-col gap-1 mt-5">
        <h1 className="text-2xl font-bold text-info">GROOVIX</h1>
        <b className="text-primary font-bold pl-2">Groovix</b>
        <span className="text-sm text-gray-600">{user.name}</span>
      </div>
      <div className="flex flex-col gap-10 mt-20">
        {menuToRender.map((item:any) => (
          <div className="flex gap-5 text-sm items-center">
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuItems
