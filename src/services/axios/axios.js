import axios from "axios";
const BASE_URL = "https://easyhome-lcvx.onrender.com/api/v1";

export default axios.create({
  baseURL: BASE_URL,
});
