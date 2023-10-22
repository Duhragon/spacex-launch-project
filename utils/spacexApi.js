const API_URL = "https://api.spacexdata.com/v3/launches?limit=100";

export const fetchLaunches = async (year, launchStatus, landingStatus) => {
  let url = API_URL;

  if (year) {
    url += `&launch_year=${year}`;
  }

  if (launchStatus) {
    url += `&launch_success=${launchStatus === "True"}`;
  }

  if (landingStatus) {
    url += `&land_success=${landingStatus === "True"}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting data:", error);
    return [];
  }
};
