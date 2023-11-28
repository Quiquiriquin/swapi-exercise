import { baseApiCall } from "./BaseApi";

export const GET_PLANETS = async (url: string) => {
  try {
    return await baseApiCall(url);
  } catch (e) {
    console.log(e);
  }
};
