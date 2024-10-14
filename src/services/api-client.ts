import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8fdb1c23388546f2ad4e130361e7bbb2",
  },
});
