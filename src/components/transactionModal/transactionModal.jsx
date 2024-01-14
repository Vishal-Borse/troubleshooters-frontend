


import { useState, useEffect } from "react";
import "./transactionModal.css";
import { IoCloseOutline } from "react-icons/io5";
import { BsUpload } from "react-icons/bs";

const TransactionModal = ({ closeCallback, transactionDetails }) => {
  const [receiverDetails, setReceiverDetails] = useState(null);

  const fetchReceiverDetails = async (accountNumber) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/users/${accountNumber}`);
      const data = await response.json();
      setReceiverDetails(data);
    } catch (error) {
      console.error("Error fetching receiver details:", error);
    }
  };

  useEffect(() => {
    if (transactionDetails) {
      fetchReceiverDetails(transactionDetails.receiver_account_number);
    }
  }, [transactionDetails]);

  const handleReceiverDetailsClick = () => {
    setReceiverDetails(!receiverDetails);
  };

  return (
    <div className="main-container">
      <div className="card flex-column items-start">
        {/* Display transaction details */}
        <div className="flex items-center border-solid border rounded px-5 py-2 my-2">
          <div className="text-lg font-bold bg-indigo-600 text-white rounded-full p-3">
            <BsUpload />
          </div>
          <div className="ml-5">
            <h2 className="font-bold text-md">{transactionDetails.date}</h2>
            <h2 className="text-gray-500">Amount Credited: {transactionDetails.amount}</h2>
          </div>
          <div className="ml-24 flex gap-3">
            <p className={`px-3 py-1 rounded-lg text-md ${
              transactionDetails.fraud ? "bg-red-500 text-white" : "bg-green-500 text-white"
            }`}>
              {transactionDetails.fraud ? "Fraud" : "Not Fraud"}
            </p>
            <div onClick={closeCallback}>
              <IoCloseOutline className="text-indigo-600 text-2xl mr-3" />
            </div>
          </div>
        </div>

        {/* Display receiver details */}
        <div className="flex justify-between mt-5">
          <button
            onClick={handleReceiverDetailsClick}
            className="px-5 py-2 bg-indigo-600 rounded-lg text-white text-md"
          >
            View Receiver Details
          </button>
        </div>

        {receiverDetails ? (
          <div>
            <div className="mt-3 border border-indigo-600 rounded-md p-3 flex">
              <div>
                <h1 className="">
                  <strong>Account Number : </strong>{receiverDetails.account_number}
                </h1>
                <h1 className="">
                  <strong>IFSC Number : </strong>{receiverDetails.ifsc_code}
                </h1>
                <h1 className="">
                  <strong>Branch Name : </strong>{receiverDetails.branch_name}
                </h1>
                <h1 className="">
                  <strong>Date of Birth : </strong>{receiverDetails.dob}
                </h1>
                <h1 className="">
                  {" "}
                  <strong>Gender : </strong>{receiverDetails.gender}
                </h1>
                <h1 className="">
                  {" "}
                  <strong>Mobile Number : </strong>{receiverDetails.mobileno}
                </h1>
                <h1 className="">
                  {" "}
                  <strong>Email : </strong>{receiverDetails.emailid}
                </h1>
                <h1 className="">
                  {" "}
                  <strong>Aadhaar Number : </strong>{receiverDetails.addharno}
                </h1>
                <h1 className="">
                  {" "}
                  <strong>Pancard : </strong>{receiverDetails.pancard_number}
                </h1>
              </div>
              <div className='ml-8 flex mt-3'>
                <img
                  className="profile"
                  src={receiverDetails.customer_photo || "url_to_default_image"}
                  alt={receiverDetails?.name || "Receiver User"}
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
