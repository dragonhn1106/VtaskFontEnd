import axios from "axios";
import config from "./apiConstant";

export const apiFileService = axios.create({
  baseURL: config.BASE_API,
  config: {
    crossDomain: true,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
});
