import { Dispatch } from "redux";
import { GET_CATS } from "../../redux/actionTypes";
import { getCatsApi, getFavCatsApi, getVoteCatsApi } from "../../services/api";

export const getCats: any = () => {
  return async (dispatch: Dispatch) => {
    let catApiData: any;
    let catFavApiData: any;
    let catVoteApiData: any;
    try {
      catApiData = await getCatsApi();
      catFavApiData = await getFavCatsApi();
      catVoteApiData = await getVoteCatsApi();

      let finalData = catApiData.data;
      // somehow get all cats api is not giving votes & favorties status, so hitting them all & merging data

      catApiData.data.map((catApi: any, i1: number) => {
        catFavApiData.data.map((favApi: any, i2: number) => {
          if (favApi.image_id === catApi.id) {
            finalData[i1].fav = true;
            finalData[i1].favourite_id = favApi.id;
          }
        });
        catVoteApiData.data.map((voteApi: any, i3: number) => {
          if (voteApi.image_id === catApi.id) {
            finalData[i1].vote = voteApi.value;
          }
        });
      });
      dispatch({
        type: GET_CATS,
        payload: finalData,
      });
    } catch (err) {
      console.log("Error occured", err);
    }
  };
};

export const updateCatStore = (
  keyname: string,
  value: boolean | string | number,
  id: string
) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: "UPDATE_ME",
      payload: {
        keyname,
        value,
        id,
      },
    });
  };
};
