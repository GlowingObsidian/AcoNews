import axios from "axios";

export default axios.create({
  baseURL: "https://gnews.io/api/v4/",
  params: {
    apikey: process.env.GNEWS_API_KEY,
  },
});
