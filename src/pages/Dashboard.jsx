import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Couter from '../components/Shared/Couter';

function Dashboard() {
  const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

  // Hàm điều hướng đến trang settings
  const handleNavigateToSettings = () => {
    navigate("/setting");
  };

  // Gọi API và log kết quả
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://travelmateapp.azurewebsites.net/WeatherForecast"); // Đổi URL API theo nhu cầu của bạn
        console.log("API Response:", response.data);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchData();
  }, []); // useEffect chỉ chạy một lần khi component mount

  return (
    <div>
      <h1>Dashboard</h1>
      <Couter />
      <button className="btn btn-danger mb-2" onClick={handleNavigateToSettings}>
        Go to Settings
      </button>
    </div>
  );
}

export default Dashboard;
