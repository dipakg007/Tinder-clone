import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinderclonebackend007.herokuapp.com",
});

export default instance;
