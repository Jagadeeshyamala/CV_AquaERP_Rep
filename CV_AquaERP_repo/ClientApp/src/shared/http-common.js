import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:35700/api",
  headers: {
    "Content-type": "application/json"
  }
});