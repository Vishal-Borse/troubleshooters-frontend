import "./caseModal.css";
import { useState } from "react";

import { IoCloseOutline } from "react-icons/io5";
const CaseModal = ({ closeCallback }) => {
  const [isReceiverDetails, setReceiverDetails] = useState(false);
  const [isSenderDetails, setSenderDetails] = useState(false);

  const handleReceiverDetailsClick = () => {
    setReceiverDetails(!isReceiverDetails);
  };
  const handleSenderDetailsClick = () => {
    setSenderDetails(!isSenderDetails);
  };
  return (
    <div className="main-container">
      <div className="card ">
        <div className="w-full flex items-center border-solid border rounded-lg px-5 py-2 my-3 ">
          <div className="ml-2 w-full">
            <div className="flex mt-2 items-center">
              <h2 className="font-bold text-xl mb-2 "> 3594HD3294JDJ243</h2>
              <p className="ml-3 mb-1 text-white px-6 text-center text-sm pb-1 font-semibold bg-red-600 rounded-full">
                Open
              </p>
            </div>
            <p>
              <strong>Victim Name : </strong>Vikas Kumar
            </p>
            <p>
              <strong>Customer ID : </strong>DH76HNDH349239
            </p>
            <p>
              <strong>Transaction ID : </strong>DH76HNDH349239
            </p>
            <p>
              <strong>Customer ID : </strong>DH76HNDH349239
            </p>
            <h2 className="mt-2 text-sm font-semibold text-gray-600">
              12 March 2023
            </h2>
          </div>
          <div className="flex items-center justify-center pb-28 ">
            <div onClick={closeCallback}>
              <IoCloseOutline className="text-indigo-600 text-2xl mr-3" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center px-10">
          <button
            onClick={handleReceiverDetailsClick}
            className="px-5 py-2 m-2 bg-indigo-600 rounded-lg text-white text-md"
          >
            View Receiver Details
          </button>
          <button
            onClick={handleSenderDetailsClick}
            className="px-5 py-2 m-2  bg-indigo-600 rounded-lg text-white text-md"
          >
            View Sender Details
          </button>
        </div>
        {/* receiver details div */}
        <div className="flex justify-between gap-10">
          {isReceiverDetails ? (
            <div className="mt-3 border border-indigo-600 rounded-md p-3 flex-column justify-between">
              <div>
                <h2 className="ml-3 text-indigo-600 font-semibold text-lg">
                  Receiver Details
                </h2>
                <hr />
              </div>
              <div className="ml-8 mt-5 mb-3">
                <img
                  className="profile-img"
                  src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Your Company"
                />
              </div>
              <div>
                <h1 className="">
                  <strong>Account Number : </strong>12458693254
                </h1>
                <h1 className="">
                  <strong>IFSC Number : </strong>JIDH0000002
                </h1>
                <h1 className="">
                  <strong>Branch Name : </strong>Nashik Road
                </h1>
                <h1 className="">
                  <strong>Date of Birth : </strong>04/12/2002
                </h1>
                <h1 className="">
                  {" "}
                  <strong>Gender : </strong>Male
                </h1>
                <h1 className="">
                  {" "}
                  <strong>Mobile Number : </strong>9526598741
                </h1>
                <h1 className="">
                  {" "}
                  <strong>Email : </strong>abcz@kdf.com
                </h1>
                <h1 className="">
                  {" "}
                  <strong>Aadhaar Number : </strong>45874563281564
                </h1>
                <h1 className="">
                  {" "}
                  <strong>Pancard : </strong>FSGJ44474JD
                </h1>
              </div>
            </div>
          ) : null}
          {isSenderDetails ? (
            <div className="mt-3 border border-indigo-600 rounded-md p-3 flex-column justify-between">
              <div>
                <h2 className="ml-3 text-indigo-600 font-semibold text-lg">
                  Sender Details
                </h2>
                <hr />
              </div>
              <div className="ml-8 mt-5 mb-3">
                <img
                  className="profile-img"
                  src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Your Company"
                />
              </div>
              <div>
                <h1 className="">
                  <strong>Account Number : </strong>12458693254
                </h1>
                <h1 className="">
                  <strong>IFSC Number : </strong>JIDH0000002
                </h1>
                <h1 className="">
                  <strong>Branch Name : </strong>Nashik Road
                </h1>
                <h1 className="">
                  <strong>Date of Birth : </strong>04/12/2002
                </h1>
                <h1 className="">
                  {" "}
                  <strong>Gender : </strong>Male
                </h1>
                <h1 className="">
                  {" "}
                  <strong>Mobile Number : </strong>9526598741
                </h1>
                <h1 className="">
                  {" "}
                  <strong>Email : </strong>abcz@kdf.com
                </h1>
                <h1 className="">
                  {" "}
                  <strong>Aadhaar Number : </strong>45874563281564
                </h1>
                <h1 className="">
                  {" "}
                  <strong>Pancard : </strong>FSGJ44474JD
                </h1>
              </div>
            </div>
          ) : null}
        </div>
        <div>
          <button className="px-5 py-2 m-2 bg-indigo-400 rounded-lg text-white text-md">Close Case</button>
        </div>
      </div>
    </div>
  );
};

export default CaseModal;
