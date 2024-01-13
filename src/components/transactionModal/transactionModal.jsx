import { useState } from "react";
import "./transactionModal.css";
import { IoCloseOutline } from "react-icons/io5";
import { BsUpload } from "react-icons/bs";
// import { IoCloseOutline } from "react-icons/io5";
const TransactionModal = ({ closeCallback }) => {
  const [isReceiverDetails, setReceiverDetails] = useState(false);

  const handleReceiverDetailsClick = () => {
    setReceiverDetails(!isReceiverDetails);
  };
  return (
    <div className="main-container">
      <div className="card flex-column items-start">
        <div className="flex items-center border-solid border rounded px-5 py-2 my-2">
          <div className="text-lg font-bold bg-indigo-600 text-white rounded-full p-3">
            <BsUpload />
          </div>
          <div className="ml-5">
            <h2 className="font-bold text-md">13 January 2023</h2>
            <h2 className="text-gray-500">Amount Credited : 6000</h2>
          </div>
          <div className="ml-24 flex gap-3">
            <p className="px-3 py-1 bg-indigo-600 rounded-lg text-white text-md">
              Not Fraud
            </p>
            <div>
              <div onClick={closeCallback}>
                <IoCloseOutline className="text-indigo-600 text-2xl mr-3" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <button
            onClick={handleReceiverDetailsClick}
            className="px-5 py-2 bg-indigo-600 rounded-lg text-white text-md"
          >
            View Receiver Details
          </button>
        </div>

        {isReceiverDetails ? (
          <div>
            <div className="mt-3 border border-indigo-600 rounded-md p-3 flex">
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
              <div className='ml-8 flex mt-3'>
              <img
                className="profile"
                src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Your Company"
              />
            </div>
            </div>
            
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TransactionModal;
