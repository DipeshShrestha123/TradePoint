import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Positions from "./Positions";
import Orders from "./Orders";
import Funds from "./Funds";
import Summary from "./Summary";
import Holdings from "./Holdings";
import { GeneralContextProvider } from "./GeneralContext";
import WatchList from "./WatchList";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
