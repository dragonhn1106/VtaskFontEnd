import axios from "axios";
import config from "./apiConstant";

const apiService = axios.create({
  baseURL: config.BASE_API,
  config: {
    crossDomain: true,
    headers: {
      "Content-Type": "application/json"
    }
  }
});

apiService.interceptors.response.use(
  function(res) {
    return res;
  },
  function(error) {
    if (error.response.status === 403) {
      apiService
        .post("login", {
          email: "ducpminh668@gmail.com",
          password: "12345678"
        })
        .then(response => {
          localStorage.setItem("token", response.data.accessToken);
          localStorage.setItem("refreshToken", response.data.refreshToken);
          localStorage.setItem("group-active", response.data.group_active);
          apiService.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${response.data.accessToken}`;
          apiService.defaults.headers.common["group-active"] =
            response.data.group_active;
        });
      return error.response;
    }

    return Promise.reject(error);
  }
);

export { apiService };
