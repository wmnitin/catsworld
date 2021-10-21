import { axios } from "./interceptors";

export const getCatsApi = () => {
  return axios.get(
    "https://api.thecatapi.com/v1/images?limit=100&include_favourite=1&include_vote=1"
  );
};

export const getFavCatsApi: any = () => {
  return axios.get("https://api.thecatapi.com/v1/favourites");
};

export const getVoteCatsApi = () => {
  return axios.get("https://api.thecatapi.com/v1/votes");
};

export const uploadCatsApi = (formData: FormData) => {
  const axiosConfig = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  return axios.post(
    "https://api.thecatapi.com/v1/images/upload",
    formData,
    axiosConfig
  );
};
export const catFavApi: any = (image_id: string, sub_id?: string) => {
  return axios.post("https://api.thecatapi.com/v1/favourites", {
    image_id,
    sub_id,
  });
};
export const deleteFavApi: any = (favourite_id: number) => {
  return axios.delete(
    "https://api.thecatapi.com/v1/favourites/" + favourite_id
  );
};

export const catVoteApi: any = (
  image_id: string,
  value: number,
  sub_id?: string
) => {
  return axios.post("https://api.thecatapi.com/v1/votes", {
    image_id,
    sub_id,
    value,
  });
};
