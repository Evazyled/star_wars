import axios from "axios";

export default class GetPeople {
  static async getAll() {
    try {
      const response = await axios.get("https://swapi.dev/api/people/");

      return response.data;
    } catch (error: any) {
      console.error("not fetch", error.message);
      return false;
    }
  }
  static async getById() {
    try {
      const response = await axios.get("https://swapi.dev/api/people/1");

      return response.data;
    } catch (error: any) {
      console.error("not fetch", error.message);
      return false;
    }
  }
}
