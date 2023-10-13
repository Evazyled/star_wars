import axios from "axios";

export const getApi = async () => {
  try {
    const response = await axios.get("https://swapi.dev/api");
    console.log(response.data);

    return response.data;
  } catch (error: any) {
    console.error("not fetch", error.message);
    return false;
  }
};
