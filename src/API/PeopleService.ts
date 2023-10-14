import axios from "axios";

export default class People {
  static async getAll() {
    try {
      const response = await axios.get("https://swapi.dev/api/people");

      return response.data;
    } catch (error: any) {
      console.error("not fetch", error.message);
      return false;
    }
  }
  static async getById(id: string) {
    try {
      const response = await axios.get("https://swapi.dev/api/people/" + id);

      return response.data;
    } catch (error: any) {
      console.error("not fetch", error.message);
      return false;
    }
  }
}
