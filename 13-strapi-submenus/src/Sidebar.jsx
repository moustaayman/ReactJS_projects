import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button className="toggle-btn">
          <FaBars />
        </button>
      </div>
    </nav>
  );
};
export default Sidebar;
