import {
  FETCH_DINOSBYUSER_START,
  FETCH_DINOSBYUSER_SUCCESS,
  FETCH_DINOSBYUSER_FAILURE,
} from "./index";
import axiosWithAuth from "../utils/AxiosWithAuth";

const getDinosByUser = () => (dispatch) => {
  dispatch({ type: FETCH_DINOSBYUSER_START });

  return axiosWithAuth()
    .get(`/api/dinos/${localStorage.getItem("user_id")}/user`)
    .then((res) => {
      console.log("getting users dinos");
      dispatch({ type: FETCH_DINOSBYUSER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_DINOSBYUSER_FAILURE, payload: err });
    });
};
export default getDinosByUser;
