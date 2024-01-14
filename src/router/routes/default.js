import React from "react";
import Login from "../../pages/login/login";
import Dashboard from "../../pages/Dashboard/dashboard";
import Account from "../../pages/Account Details/account";
import NotificationPage from "../../pages/notification-page/notification-page";
import OpenCases from "../../pages/openCases/openCases";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/home";


const Default = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/adminlogin" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/notifications" element={<NotificationPage />} />
      <Route path="/dashboard/account/:id" element={<Account />} />
      <Route path="/dashboard/userpage/" element={<UserPage />} />
      <Route path="/dashboard/opencases" element={<OpenCases />} />
    </Routes>
  );
};

export default Default;


