import axios from "axios";
import { API_URL } from "../utilities/constants";

// Post data to api
async function postResource(path, params, handleResponse) {
  const url = API_URL + path;

  // Only send request if there's a authorize cookie set
  // if (!token) return;

  // headers
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "token",
    },
  };

  await axios
    .post(url, params, headers)
    .then((response) => {
      handleResponse({ resource: response.data });
    })
    .catch((error) => {
      handleResponse({ resource: null, message: error.message });
      console.log("POST Resource Error");
      console.log(error);
    });
}

export default postResource;
