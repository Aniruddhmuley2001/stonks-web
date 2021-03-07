import axios from "axios";
const PROD_URL = ""; // Set here whatever public URL for server
const DEV_URL = "http://localhost:8080";
const BASEURL = PROD_URL || DEV_URL;

axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${getAuthKey()}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export function getAuthKey() {
  return localStorage.getItem("AUTH_KEY");
}

export function SetAuthKey(AUTH_KEY) {
  localStorage.setItem("AUTH_KEY", AUTH_KEY);
}

export async function verifyAuthKey(AUTH_KEY) {
  const url = BASEURL + "/verifyToken";
  try {
    const { data } = await axios.get(url);
    return { data, error: false };
  } catch {
    return { data: null, error: true };
  }
}
export function removeAuthKey(AUTH_KEY) {
  localStorage.removeItem("AUTH_KEY");
}

export async function SendUserDetails(req) {
  const url = BASEURL + "/signIn";
  console.log(url);
  try {
    const { data } = await axios.post(url, req);
    console.log(data);
    return { data, error: false };
  } catch {
    return { data: null, error: true };
  }
}

//axios.post(URL, data, config).then(...)
