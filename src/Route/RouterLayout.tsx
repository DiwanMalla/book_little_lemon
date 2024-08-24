import { Outlet } from "react-router";
import Nav from "../components/Nav";
import { useState } from "react";

const RouterLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <div>
        <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      {!menuOpen && (
        <div>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default RouterLayout;
