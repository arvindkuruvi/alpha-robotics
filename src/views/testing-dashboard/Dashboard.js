import React from "react";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import StatsCard from "./StatsCard";
import PositionsCard from "./PositionsCard";
import { useState } from "react";

const tabs = [
  {
    title: "Open Orders",
    dummyLabel: "No current active/open orders placed by Cryptohopper",
    largeText: "",
  },
  {
    title: "Summary Open positions",
    dummyLabel: "",
    largeText: "Total current positions",
  },
  {
    title: "Latest 5 Sells",
    dummyLabel: "No sell trades made yet",
    largeText: "",
  },
];

const sideTabs = [
  {
    title: "Activity",
    dummyLabel: "No current activities",
  },
  {
    title: "Stats",
    dummyLabel: "No stats yet",
  },
];

const Dashboard = () => {
  return (
    <div className="gradient-bg mx-auto h-screen">
      <DashboardHeader />

      <div className="flex flex-col md:flex-row">
        <div className=" w-full md:w-1/3 bg-transparent p-4">
          {sideTabs.map((tab, index) => createTab(tab, index))}
        </div>

        <div className="order-last md:order-first w-full md:w-2/3 bg-transparent p-4">
          {tabs.map((tab, index) => createTab(tab, index))}
        </div>
      </div>
    </div>
  );
};

const createTab = (tab, index) => {
  return (
    <div
      index={index}
      className="text-left w-full my-5 py-2 px-5 mx-auto bg-alphaWhite rounded-lg"
    >
      <span className="text-lg font-semibold"> {tab.title}</span>
      <div className="my-3 text-right">
        <span className="text-alphaBlack text-2xl font-semibold ">
          {tab.largeText}
        </span>
      </div>
      <div className="my-3">
        <span className="text-alphaGray">{tab.dummyLabel}</span>
      </div>
    </div>
  );
};

export default Dashboard;
