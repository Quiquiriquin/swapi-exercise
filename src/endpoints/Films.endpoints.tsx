import { baseApiCall } from "./BaseApi";

export const GET_FILM = async (url: string) => {
  try {
    return await baseApiCall(`films/${url}`);
  } catch (e) {
    console.log(e);
  }
};
