"use client";

import NewPassword from "@/components/ForgetPassword/NewPassword";
import { useState } from "react";
import OtpInput from "react-otp-input";

const Page = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtpField, setShowOtpField] = useState(false);
  const [showNewPasswordField, setShowNewPasswordField] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email.");
      return;
    }
    setError("");
    setShowOtpField(true);
  };

  const handleClear = () => {
    setOtp("");
    setError("");
    setIsVerified(false);
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (otp === "123456") {
        setIsVerified(true);
        setError("");
        setTimeout(() => {
          handleMessage();
        }, 3000);
      } else {
        throw new Error("Invalid OTP code");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Verification failed");
      setIsVerified(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMessage = () => {
    setTimeout(() => {
      setIsVerified(false);
      setShowNewPasswordField(true);
    }, 3000);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-10 my-10">
      <div className="w-full md:w-[70%] lg:text-5xl md:text-4xl text-3xl font-bold mb-5">
        My Account
      </div>
      <div className="w-full md:w-[55%] lg:w-[35%] flex flex-col justify-center gap-5">
        {!showOtpField ? (
          <>
            {/* Forgotten Password Section - Always Visible */}
            <div className="w-full flex flex-col items-center justify-center gap-3">
              <div className="text-xl font-bold">Forgotten your password?</div>
              <div className="w-full border-b-2"></div>
              <div className="w-full text-[16px] font-normal mt-5">
                Please provide your account email address to receive an email to reset your password.
              </div>
            </div>

            {/* Email Input Section */}
            <div className="w-full flex flex-col items-center justify-center relative">
              <form onSubmit={handleEmailSubmit} className="w-full flex flex-col gap-5">
                <div className="w-full flex flex-col gap-2 relative">
                  <label className="text-[12px] font-bold">EMAIL</label>
                  <span className="text-[20px] text-red-700 absolute top-0 left-14">*</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="border px-2 py-3 w-full"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#191919] hover:bg-[#3b4047] text-lg font-bold rounded-[2px] cursor-pointer text-white"
                >
                  Submit
                </button>
              </form>
            </div>
          </>
        ) : (
          // OTP input section
          <div className="flex flex-col items-center space-y-4 w-full max-w-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Enter Verification Code</h2>
            <form onSubmit={handleVerify} className="w-full flex flex-col items-center">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                inputType="number"
                shouldAutoFocus
                renderSeparator={<span className="mx-1" />}
                renderInput={(props, index) => (
                  <input
                    {...props}
                    type="tel"
                    inputMode="numeric"
                    className={`text-center text-xl font-medium border-2 rounded-lg 
                      focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none 
                      transition-all duration-200 shadow-sm hover:border-blue-300
                      disabled:opacity-50 disabled:cursor-not-allowed
                      border-gray-300
                      w-[30px] h-[30px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] lg:w-[55px] lg:h-[55px]`}
                    aria-label={`OTP digit ${index + 1}`}
                    style={{ width: "40px", height: "40px" }}
                    onPaste={(e) => {
                      e.preventDefault();
                      const pastedData = e.clipboardData.getData("Text").trim();
                      if (/^\d{6}$/.test(pastedData)) {
                        setOtp(pastedData);
                      }
                    }}
                  />
                )}
                containerStyle="flex justify-center gap-2 mb-4"
              />
              <div className="flex gap-4 mt-4">
                <button
                  type="button"
                  onClick={handleClear}
                  className="px-6 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg
                      shadow-md hover:bg-gray-300 transition duration-200
                      focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  Clear
                </button>
                <button
                  type="submit"
                  disabled={otp.length < 6 || isSubmitting}
                  className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg
                      shadow-md hover:bg-blue-700 transition duration-200
                      disabled:opacity-50 disabled:cursor-not-allowed
                      focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Verifying...
                    </span>
                  ) : (
                    "Verify Code"
                  )}
                </button>
              </div>
            </form>
            {error && (
              <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg flex items-center gap-2">
                <span>{error}</span>
              </div>
            )}
            {isVerified && (
              <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg flex items-center gap-2">
                <span>Successfully verified!</span>
              </div>
            )}

            
           
            <p className="text-sm text-gray-500 mt-4 text-center">
              Didn't receive code?{" "}
              <button
                className="text-blue-600 hover:text-blue-800 font-medium"
                onClick={() => setShowOtpField(false)}
              >
                Resend OTP
              </button>
            </p>
            {showNewPasswordField && (<NewPassword />)}
          </div>
          
        )}
      </div>
    </div>
  );
};

export default Page;
