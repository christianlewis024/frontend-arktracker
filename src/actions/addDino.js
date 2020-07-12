import { ADD_DINOS_START, ADD_DINOS_SUCCESS, ADD_DINOS_FAILURE } from "./index";
import axiosWithAuth from "../utils/AxiosWithAuth";

export const addDino = (dino) => (dispatch) => {
  dispatch({ type: ADD_DINOS_START });
  axiosWithAuth()
    .post(`/dinos`, dino)
    .then((res) => {
      console.log("working..", res);
      dispatch({ type: ADD_DINOS_SUCCESS, payload: dino });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADD_DINOS_FAILURE });
    });
};
