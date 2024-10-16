import React from "react";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import StatsCard from "./StatsCard";
import PositionsCard from "./PositionsCard";
import { useState } from "react";
import { MdAccessAlarm } from "react-icons/md";
import { BiTargetLock } from "react-icons/bi";
import { TfiStatsUp } from "react-icons/tfi";

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
    title: "Stats",
    dummyLabel: "No stats yet",
    smallWidget: true,
  },
];

const Dashboard = () => {
  return (
    <div className="gradient-bg mx-auto h-full">
      <DashboardHeader />

      <div className="mx-6">
        <div className="flex flex-col md:flex-row">
          <div className=" w-full md:w-1/4 bg-transparent p-4">
            {/* <BiTargetLock className="text-6xl font-bold" /> */}
            {/* <MdAccessAlarm />
          <TfiStatsUp /> */}
            <div className="text-left w-full my-5 mx-auto bg-alphaWhite rounded-lg">
              <div className="py-2 px-4">
                <span className="text-lg font-semibold"> Activity</span>

                <div className="my-2 flex flex-col">
                  <div className="my-2 flex flex-row justify-start items-center px-1">
                    <div className="mr-8">
                      <span className="">
                        <MdAccessAlarm className="text-6xl text-alphaGray font-bold" />
                      </span>
                    </div>
                    <div className=" flex flex-col items-start">
                      <span className="text-alphaGray mb-1">No Activity</span>
                      <span className="text-2xl mb-1">Bot is Active</span>
                      <span className="text-alphaGray mb-1">
                        16/10/2024 09:00:00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="border-alphaGray " />
              <div className="py-2 px-4">
                <div className="my-2 flex flex-col">
                  <div className="my-2 flex flex-row justify-start items-center px-1">
                    <div className="mr-8">
                      <span className="">
                        <BiTargetLock className="text-6xl text-alphaGreen font-bold" />
                      </span>
                    </div>
                    <div className=" flex flex-col items-start">
                      <span className="text-alphaGray mb-1">
                        Last activity:
                      </span>
                      <span className="text-2xl mb-1">Searching targets</span>
                      <span className="text-alphaGray mb-1">
                        29/08/2024 09:55:10
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {sideTabs.map((tab, index) => createTab(tab, index))}
          </div>

          <div className="order-last md:order-first w-full md:w-4/5 bg-transparent p-4">
            {tabs.map((tab, index) => createTab(tab, index))}
          </div>
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
