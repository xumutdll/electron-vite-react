import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Panel: React.FC = () => {
  return (
    <div className="grid grid-rows-[auto_1fr] px-3 select-none">
      <div className="mt-1 mb-2 flex">
        <NavLink
          end
          to="/"
          className="w-3/12 text-center py-2 rounded-md shadow-btnBar bg-customWhite"
        >
          Yeni Dosya
        </NavLink>

        <NavLink
          end
          to="/panel"
          className={({ isActive }) =>
            `w-3/12 text-center py-2 rounded-md shadow-btnBar ml-auto ${
              isActive ? "bg-tertiary" : "bg-secondary"
            }`
          }
        >
          Filtrele
        </NavLink>

        <NavLink
          to="/panel/sort"
          className={({ isActive }) =>
            `w-3/12 text-center py-2 rounded-md shadow-btnBar ${
              isActive ? "bg-tertiary" : "bg-secondary"
            }`
          }
        >
          Sırala
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Panel;