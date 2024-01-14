import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../pages/login/login";
import Dashboard from "../../pages/Dashboard/dashboard";
import Account from "../../pages/Account Details/account";
import NotificationPage from "../../pages/notification-page/notification-page";
import OpenCases from "../../pages/openCases/openCases";
import Home from "../../pages/Home/home";
import CaseModal from "../../components/caseModal/caseModal";
import UpiForm from "../../components/forms/upiForm/upiForm";
import SmsForm from "../../components/forms/sms/smsForm";
import FraudDetection from "../../pages/FraudDetection/fraudDetection";

const Default = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/adminlogin" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/notifications" element={<NotificationPage />} />
      <Route path="/dashboard/account/:id" element={<AccountPage />} />
      <Route path="/dashboard/opencases" element={<OpenCases />} />
      {/* <Route path="/dashboard/logout" element={<Logout />} /> */}
    </Routes>
  );
};
const AccountPage = () => {
  // Access the id parameter from the URL
  const { id } = useParams();

  return <Account id={id} />;
};

export default Default;
