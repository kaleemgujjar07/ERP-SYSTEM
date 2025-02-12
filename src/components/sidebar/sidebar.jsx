import { useState } from "react";
import { FaBars, FaHome, FaUser, FaCog } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`bg-gray-900 text-white h-screen p-5 ${isOpen ? "w-64" : "w-16"} transition-all duration-300`}> 
        <button
          className="text-white mb-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars size={24} />
        </button>
        <ul className="space-y-4">
          <li className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-800 rounded">
            <FaHome size={20} />
            {isOpen && <span>Dashboard</span>}
          </li>
          <li className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-800 rounded">
            <FaUser size={20} />
            {isOpen && <span>Users</span>}
          </li>
          <li className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-800 rounded">
            <FaCog size={20} />
            {isOpen && <span>Settings</span>}
          </li>
        </ul>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-xl font-bold">ERP Dashboard</h1>
      </div>
    </div>
  );
};

export default Sidebar;
