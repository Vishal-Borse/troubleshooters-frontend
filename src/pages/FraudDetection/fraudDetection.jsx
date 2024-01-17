import { useState } from "react";
import UpiForm from "../../components/forms/upiForm/upiForm";
import SmsForm from "../../components/forms/sms/smsForm";
import AccountNumberForm from "../../components/forms/acccountNumber/accountNumber";
import UrlForm from "../../components/forms/urlForm/urlForm";
import PhoneNumberForm from "../../components/forms/phoneNumber/phoneNumber";
import "./fraudDetection.css";
import logo from "../Home/images/logo.png";
import { Link } from "react-router-dom";
const FraudDetection = () => {
  const [formNumber, setFormNumber] = useState(1);

  const getNavItemClass = (navItem) => {
    return formNumber === navItem ? "active" : "";
  };

  return (
    <>
      <div className='overflow-y-hidden'>
        <div className="nav flex justify-between items-center px-10 py-6">
          <div className="flex items-center gap-3">
            <img className="w-12" src={logo} alt="logo" />
            <h2 className="text text-3xl font-bold flex gap-2">
              <p className="text-indigo-700 text-3xl font-bold">Rajasthan </p>
              Police Hackathon
            </h2>
          </div>
          <div className="text-white bg-indigo-600 px-10 py-2 text-lg font-semibold rounded-lg hover:bg-indigo-500">
            <Link to={"/"} className="">
              Home
            </Link>
          </div>
        </div>
        <div className="flex">
          <div>
            <div className="side-nav h-full flex-column p-8 px-12 pt-24">
              <div
                onClick={() => {
                  console.log(formNumber);
                  setFormNumber(1);
                }}
                className={`mb-10 cursor-pointer min-w-48 text-center ${getNavItemClass(
                  1
                )} bg-indigo-600 px-2 py-3 text-md font-semibold text-white rounded-lg hover:bg-indigo-300`}
              >
                <h2>UPI ID</h2>
              </div>
              <div
                onClick={() => {
                  console.log(formNumber);
                  setFormNumber(2);
                }}
                className={`mb-10 cursor-pointer min-w-48 text-center ${getNavItemClass(
                  2
                )} bg-indigo-600 px-2 py-3 text-md font-semibold text-white rounded-lg hover:bg-indigo-300`}
              >
                <h2>Account Number</h2>
              </div>
              <div
                onClick={() => {
                  console.log(formNumber);
                  setFormNumber(3);
                }}
                className={`mb-10 cursor-pointer min-w-48 text-center ${getNavItemClass(
                  3
                )} bg-indigo-600 px-2 py-3 text-md font-semibold text-white rounded-lg hover:bg-indigo-300`}
              >
                <h2>URL</h2>
              </div>
              <div
                onClick={() => {
                  console.log(formNumber);
                  setFormNumber(4);
                }}
                className={`mb-10 cursor-pointer min-w-48 text-center ${getNavItemClass(
                  4
                )} bg-indigo-600 px-2 py-3 text-md font-semibold text-white rounded-lg hover:bg-indigo-300`}
              >
                <h2>Phone Number</h2>
              </div>
              <div
                onClick={() => {
                  console.log(formNumber);
                  setFormNumber(5);
                }}
                className={`mb-28 cursor-pointer min-w-48 text-center ${getNavItemClass(
                  5
                )} bg-indigo-600 px-2 py-3 text-md font-semibold text-white rounded-lg hover:bg-indigo-300`}
              >
                <h2>SMS Template</h2>
              </div>
            </div>
          </div>
          <div className="fraud-div rounded-2xl m-5 w-3/4 py-14 px-20 mx-32 mt-20 mb-32 border border-indigo-600">
            {formNumber === 1 ? <UpiForm /> : null}
            {formNumber === 2 ? <AccountNumberForm /> : null}
            {formNumber === 3 ? <UrlForm /> : null}
            {formNumber === 4 ? <PhoneNumberForm /> : null}
            {formNumber === 5 ? <SmsForm /> : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default FraudDetection;
