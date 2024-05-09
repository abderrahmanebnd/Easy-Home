const BASE_URL_BAR_AREA_CHARTS =
  "https://easyhome-lcvx.onrender.com/api/v1/dashboard/";
//easyhome-lcvx.onrender.com/api/v1/dashboard/applications/monthly
const BASE_URL_WORKERS = "https://easyhome-lcvx.onrender.com/api/v1/workers/";
export async function getDataBarAreaCharts(route, timeType) {
  const url = `${BASE_URL_BAR_AREA_CHARTS}${route}/${timeType}`;

  try {
    const response = await fetch(url,{
      method: "GET",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MzdkMTc4N2IyNzZlNjYwMjY5YjcxMSIsImN1cnJlbnRSb2xlIjoiVXNlciIsImlhdCI6MTcxNDkzNDM4OCwiZXhwIjoxNzIyNzEwMzg4fQ.71mUxPXlvF2nZZsI458g6ThNmDhZjn7zpAXUNM7LITQ`,
        "Content-Type": "application/json",
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export async function getWorkers() {
  try {
    const response = await fetch(BASE_URL_WORKERS, {
      method: "GET",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MzdkMTc4N2IyNzZlNjYwMjY5YjcxMSIsImN1cnJlbnRSb2xlIjoiVXNlciIsImlhdCI6MTcxNDkzNDM4OCwiZXhwIjoxNzIyNzEwMzg4fQ.71mUxPXlvF2nZZsI458g6ThNmDhZjn7zpAXUNM7LITQ`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.workers;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
