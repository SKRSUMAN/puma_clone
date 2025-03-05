"use client";

import NewPassword from "@/components/ForgetPassword/NewPassword";
import { useToast } from "@/context/toaster";
import { authApi } from "@/mocks/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import OtpInput from "react-otp-input";

const Page = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const [password, setPassword] = useState("");

  const router = useRouter();

  const toastContext = useToast();

  if (!toastContext) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  const { setAlert } = toastContext;

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    // const data = {'email':email}

    try {
      const res = await authApi.forgetPassword({ email: email });
      console.log("Forgot Password Page Response", res);

      if (res?.data?.status === "SUCCESS") {
        setAlert({
          open: true,
          message: "Otp Send successful! Redirecting...",
          severity: "success",
        });
        setShowOtpField(true);
      } else {
        setAlert({
          open: true,
          message: res?.data.status || "Otp send Failed!",
          severity: "error",
        });
      }
    } catch (error) {
      console.log(error);
      setAlert({
        open: true,
        message: "Something went wrong. Please try again later.",
        severity: "error",
      });
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();

    const data = { code: otp, newPassword: password };

    try {
      const res = await authApi.resetPassword(data);
      console.log("Reset Password page Response", res);
      if (res?.data?.status === "SUCCESS") {
        router.push("/login");
        setAlert({
          open: true,
          message: "Password Change successful! Redirecting...",
          severity: "success",
        });
      } else {
        setAlert({
          open: true,
          message: res?.data?.message || "Otp send Failed!",
          severity: "error",
        });
      }
    } catch (error) {
      console.log(error);
      setAlert({
        open: true,
        message: "Something went wrong. Please try again later.",
        severity: "error",
      });
    }
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
                Please provide your account email address to receive an email to
                reset your password.
              </div>
            </div>

            {/* Email Input Section */}
            <div className="w-full flex flex-col items-center justify-center relative">
              <form
                onSubmit={handleEmailSubmit}
                className="w-full flex flex-col gap-5">
                <div className="w-full flex flex-col gap-2 relative">
                  <label className="text-[12px] font-bold">EMAIL</label>
                  <span className="text-[20px] text-red-700 absolute top-0 left-14">
                    *
                  </span>
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
                  className="w-full py-3 bg-[#191919] hover:bg-[#3b4047] text-lg font-bold rounded-[2px] cursor-pointer text-white">
                  Submit
                </button>
              </form>
            </div>
          </>
        ) : (
          // OTP input section
          <div className="flex flex-col items-start w-full max-w-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Enter Verification Code
            </h2>
            <form
              onSubmit={handleVerify}
              className="w-full flex flex-col items-start">
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
                containerStyle="flex items-center gap-2 mb-2"
              />

              <div className="flex mt-2 "></div>
              <NewPassword setPassword={setPassword} />

              <div className="w-full flex flex-col items-center">
                <div>
                  <p className="text-sm text-gray-500 mt-4 text-center">
                    Didn't receive code?{" "}
                    <button
                      className="text-blue-600 hover:text-blue-800 font-medium"
                      onClick={() => setShowOtpField(false)}>
                      Resend OTP
                    </button>
                  </p>
                </div>

                <div className="mt-5">
                  <button
                    className="text-white text-lg font-bold py-3 bg-[#127a12] rounded-[2px] px-6 cursor-pointer hover:bg-[#68ba68]"
                    type="submit">
                    Change Password
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
