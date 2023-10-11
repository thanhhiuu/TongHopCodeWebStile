import axios from "axios";
export const getHome = async () => {
  try {
    const res = await axios.get("/api/home");

    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getPublic = () => {};
