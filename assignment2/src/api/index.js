import axios from "axios";

const api = (() =>
  axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      "Content-Type": "application/json",
      'Access-control-Allow-Origin': 'http://localhost:3000'
    }
  }))()

export {
  api,
}
