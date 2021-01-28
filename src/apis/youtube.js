import axios from "axios";
const KEY = "AIzaSyClqhBbsPugwao8Q211BfCs4evjsspUX7w";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
