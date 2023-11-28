import { baseApiCall } from "./BaseApi";

export const GET_RESIDENT = async (url: string) => {
  try {
    return await baseApiCall(`people/${url}`);
  } catch (e) {
    console.log(e);
  }
};
