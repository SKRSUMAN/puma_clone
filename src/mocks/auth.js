import axios from "axios";

class AuthApi {
  async register(data) {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_HOST}/auth/register`,
        data
      );
      console.log("Register Api Response", res);
      return res;
    } catch (error) {
      console.log(error);
      return error.response;
    }
  }

  async login(data) {
    // console.log("Mocks Data :", data);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_HOST}/auth/login`,
        data
      );
      console.log("Login Api Response", res);
      if (typeof window !== "undefined") {
        localStorage.setItem("access Token", res?.data?.data?.token);
        localStorage.setItem("userId", res?.data?.data?.id);
      }
      return res;
      // console.log("Acess Token",res?.data?.data?.token)
      // console.log("Acess ID",res?.data?.data?.id)
    } catch (error) {
      return error.response;
    }
  }

  async forgetPassword(data) {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_HOST}/auth/reset-password-otp`,
        data
      );
      // console.log("Forget Password Api Response", res);
      return res;
    } catch (error) {
      console.log(error);
      return error.response;
    }
  }

  async resetPassword(data) {
    // console.log("Mocks data", data);
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_HOST}/auth/reset-password`,
        data
      );
      // console.log("Reset Password Api Response", res);
      return res;
    } catch (error) {
      console.log(error);
      return error.response;
    }
  }

  async logout(data) {
    // console.log("Logout Mocks data", data);
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("access Token") : null;
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_HOST}/auth/logout`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("Logout Api Response", res);
      return res;
    } catch (error) {
      console.log(error);
      return error.response;
    }
  }
}

export const authApi = new AuthApi();
