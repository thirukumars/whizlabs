const environmentList = ["http://localhost:3001/"];

export const env = 0; // Place your environment number here

export const hostConfig = {
  CURRENT_URL: environmentList[env],
  WEB_URL: process.env.url,
  API_URL: `${environmentList[env]}v1/`,
};
