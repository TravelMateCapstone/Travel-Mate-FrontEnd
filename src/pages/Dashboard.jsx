import React from "react";
import { useNavigate } from "react-router-dom";
import Couter from '../components/Shared/Couter';

function Dashboard() {
  const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

  const handleNavigateToSettings = () => {
    navigate("/setting"); // Điều hướng đến trang /settings
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Couter />
      {/* Nút để điều hướng đến trang settings */}
      <button onClick={handleNavigateToSettings}>
        Go to Settings
      </button>
    </div>
  );
}

export default Dashboard;
