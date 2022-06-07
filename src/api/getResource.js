import axios from "axios";
import { API_URL } from "../utilities/constants"

// Get data from api
async function getResource(path, handleResponse) {
  const url = API_URL + path;

  // headers
  const headers = { "Content-Type": "application/json" };

  const config = { headers };

  await axios
    .get(url, config)
    .then((response) => {
      handleResponse({ resource: response.data });
    })
    .catch((error) => {
      handleResponse({ resource: null, message: error.message });
      console.log("GET Data Error");
      console.log(error);
    });
}

export default getResource;