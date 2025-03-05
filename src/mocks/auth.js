import axios from "axios";

class AuthApi {
  async register(data) {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_HOST}/auth/register`,
        data
      );
      // console.log("Register Api Response", res)

      if (res.data.status === "SUCCESS") {
        return res.data;
      }
    } catch (error) {
      console.log(error);
      return error.response.data;
    }
  }

  async login(data) {
    console.log("Mocks Data :", data);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_HOST}/auth/login`,
        data
      );
      console.log("Login Api Response", res);

      if (res?.data?.status === "SUCCESS") {
        localStorage.setItem("acess Token", res?.data?.data?.token);
        localStorage.setItem("userId", res?.data?.data?.id);
        return res;
      }

      // console.log("Acess Token",res?.data?.data?.token)
      // console.log("Acess ID",res?.data?.data?.id)
    } catch (error) {
      console.log(error);
      return error.response.data;
    }
  }
}

export const authApi = new AuthApi();
