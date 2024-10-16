import React from "react";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import StatsCard from "./StatsCard";
import PositionsCard from "./PositionsCard";
import { useState } from "react";

const Dashboard = () => {
  return (
    <div className="gradient-bg mx-auto">
      <DashboardHeader />

      {/* <div className="flex flex-col md:flex-row">
        <div className="order-2 w-full md:w-1/4 bg-alphaLightGray p-4">
          <h2 className="text-white">25% Width Element</h2>
          <p className="text-white">This is the second element.</p>
        </div>

        <div className="order-1 w-full md:w-3/4 bg-alphaGray p-4">
          <h2 className="text-white">75% Width Element</h2>
          <p className="text-white">This is the first element.</p>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
