import { validateArray } from "../utils/helpers";
import axios from "./axios/axios";

const BASE_URL_WORKERS = "/workers/";
const authentication = JSON.parse(localStorage.getItem("auth"));
const token = authentication.token;
export async function getDataBarAreaCharts(route, timeType) {
  const url = `/dashboard/${route}/${timeType}`;

  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    console.log(`HTTP error! Status: ${error.status}`);
    return null;
  }
}

export async function getWorkers() {
  try {
    const response = await axios.get(BASE_URL_WORKERS, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MzdkMTc4N2IyNzZlNjYwMjY5YjcxMSIsImN1cnJlbnRSb2xlIjoiVXNlciIsImlhdCI6MTcxNDkzNDM4OCwiZXhwIjoxNzIyNzEwMzg4fQ.71mUxPXlvF2nZZsI458g6ThNmDhZjn7zpAXUNM7LITQ`,
        "Content-Type": "application/json",
      },
    });

    return validateArray(response.data.workers);
  } catch (error) {
    console.error("Error fetching data:", error);
    console.error("HTTP error! Status:", error);
    return null;
  }
}
