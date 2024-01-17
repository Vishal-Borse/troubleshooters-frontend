import { useState } from "react";
import Sms from "../images/sms.jpg";
import "./smsForm.css";
const SmsForm = () => {
  const [sms, setSms] = useState("");

  const checkSms = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/sms_template/is_spam", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sms_template: sms,
      }),
    });

    const json = await response.json();
    console.log(json);
    if (json.success) {
      document.getElementById("verifiedMsg").innerText = `This sms is safe`;
    } else {
      document.getElementById("verifiedMsg").innerText = `This sms is not safe`;
    }
  };

  const onChange = (e) => {
    setSms(e.target.value);
  };
  return (
    <>
      <div className="h-60 flex items-center gap-12 justify-center min-w-96 mx-auto my-auto mb-32">
        <div>
          <img className="sms-img mt-32" src={Sms} alt="phone" />
        </div>
        <div className='mt-32'>
          <form>
            <div>
              <h1 className="text-3xl text-indigo-600 font-bold mb-8">
                Check SMS
              </h1>
              {/* <hr className='w-32 h-1 rounded-lg bg-black'/> */}
            </div>
            <div className="flex-column">
              <h2 className="text-lg font-semibold mb-2">SMS Template</h2>
              <textarea
                className="px-5 py-2 border rounded-lg border-indigo-600 w-80"
                placeholder="Enter SMS"
                value={sms}
                onChange={onChange}
                required
              />
            </div>
            <div>
              <button
                className="mt-8 bg-indigo-600 px-5 w-80 text-white rounded-lg py-2"
                onClick={checkSms}
                type="submit"
              >
                Check
              </button>
            </div>
            <div>
              <p
                className=" text-center italic text-gray-500 mt-5"
                id="verifiedMsg"
              ></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SmsForm;
