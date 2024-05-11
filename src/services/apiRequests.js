const BASE_URL =
  "https://easyhome-lcvx.onrender.com/api/v1/validationRequests/";
const ADMIN_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MzlmZmYwNGVjMTRjNWY0MDFhZTQxNyIsImN1cnJlbnRSb2xlIjoiQWRtaW4iLCJpYXQiOjE3MTUwNzk3ODksImV4cCI6MTcyMjg1NTc4OX0.XlQkG-WLNeCNahQWpnlwpYHTUUs5n4lLtF24qVSirek";

export async function getRequestByType(type) {
  const url = `${BASE_URL}?type=${type}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${ADMIN_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error :${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (err) {
    console.error("Error fetching data:", err);
    return null;
  }
}
export async function acceptRequest(id) {
  const urlId = `${BASE_URL}${id}/approveRequest`;
  try {
    const response = await fetch(urlId, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${ADMIN_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) throw new Error(`HTTP error :${response.status}`);
  } catch (err) {
    console.error("Failed Accepting Request", err);
  }
}
export async function declineRequest(id){
  const urlId = `${BASE_URL}${id}/disapproveRequest`;
  try {
    const response = await fetch(urlId, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${ADMIN_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) throw new Error(`HTTP error :${response.status}`);
  } catch (err) {
    console.error("Failed declining Request", err);
  }
}
