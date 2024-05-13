import axios from "axios";

const BASE_URL =
  "https://easyhome-lcvx.onrender.com/api/v1/validationRequests/";

const authentication = JSON.parse(localStorage.getItem("auth"));
const token = authentication.token;
export async function getRequestByType(type) {
  const url = `${BASE_URL}?type=${type}`;

  try {
    const response = await axios.get(url, {
     
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data.data;
  } catch (err) {
    console.error("Error fetching data:", err);
    return null;
  }
}
export async function acceptRequest(id) {
  const urlId = `${BASE_URL}${id}/approveRequest`;
  try {
     const response = await fetch(urlId, {
      method:"PATCH",
      
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if(!response.ok) throw new Error()
    
  } catch (err) {
    console.error("Failed Accepting Request", err);
  }
}

export async function declineRequest(id) {
  const urlId = `${BASE_URL}${id}/disapproveRequest`;
  try {
    const response=await fetch(urlId, {
      method:"PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
 if(!response.ok) throw new Error();
  } catch (err) {
    console.error("Failed declining Request", err);
  }
}
