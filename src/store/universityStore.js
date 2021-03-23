import { makeAutoObservable } from "mobx";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000",
});

class UniversityStore {
  universities = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }
  // functions
  fetchUniversity = async () => {
    try {
      const response = await instance.get("/university");
      console.log("fetchUniversity -> response", response);
      this.universities = response.data;
      this.loading = false;
    } catch (error) {
      console.error("UniversityStore -> fetchUniversity -> error", error);
    }
  };
}

const universityStore = new UniversityStore();
universityStore.fetchUniversity();
export default universityStore;
