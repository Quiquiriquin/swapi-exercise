const baseApi = `https://swapi.dev/api`;

export const baseApiCall = (url: string = "") =>
  new Promise(async (resolve, reject) => {
    try {
      const rawResponse = await fetch(`${baseApi}/${url}`);
      const response = await rawResponse.json();
      resolve(response);
    } catch (e) {
      reject(e);
    }
  });
