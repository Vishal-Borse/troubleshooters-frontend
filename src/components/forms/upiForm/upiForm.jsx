import { useState } from "react";
import './upiForm.css';
import Upi from "../images/UPI.jpeg"
const UpiForm = () => {
  const [upiId, setUpiId] = useState("");

  const checkUpi = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/upi/is_spam", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        upi_id: upiId,
      }),
    });

    const json = await response.json();
    console.log(json);
    if (json.success) {
      document.getElementById("verifiedMsg").innerText =  `This UPI is verified and secure`;
    } else {
      document.getElementById("verifiedMsg").innerText = `This UPI is not secure or does not exist`;
    }
  };

  const onChange = (e) => {
    setUpiId(e.target.value);
  };

  return (
    <>
      <div className="h-60 flex items-center gap-12 justify-center min-w-96 mx-auto my-auto mb-32">
      <div>
          <img className="upi-img mt-32" src={Upi} alt="phone" />
        </div>
        <div className='mt-32'>
        <form>
          <div>
            <h1 className="text-3xl text-indigo-600 font-bold mb-8">
              Check UPI ID
            </h1>
            {/* <hr className='w-32 h-1 rounded-lg bg-black'/> */}
          </div>
          <div className="flex-column">
            <h2 className="text-lg font-semibold mb-2">UPI ID</h2>
            <input
              className="px-5 py-2 border rounded-lg border-indigo-600 w-80"
              placeholder="Enter UPI ID"
              name="username"
              value={upiId}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <button
              className="mt-8 bg-indigo-600 px-5 w-80 text-white rounded-lg py-2"
              onClick={checkUpi}
              type="submit"
            >
              Check
            </button>
          </div>
          <div>
            <p
              className="text-center italic text-gray-500 mt-5"
              id="verifiedMsg"
            >
              
            </p>
          </div>
        </form>
        </div>
      </div>
    </>
  );
};
export default UpiForm;