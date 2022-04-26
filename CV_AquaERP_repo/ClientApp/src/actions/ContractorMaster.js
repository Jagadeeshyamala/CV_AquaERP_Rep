import {
    GET_DATA, CREATE_DATA, UPDATE_DATA, DELETE_DATA
  } from "./types";
  
  import AquaDataService from "../shared/Aqua.HttpService";
  
  export const GetHrContractorDetail = () => async (dispatch) => {
    try {
      const response = await AquaDataService.getAll('/HrContractorDetail/GetHrContractorDetail');
  
      dispatch({
        type: GET_DATA,
        payload: response.data
      });
    }
    catch (error) {
      console.log(error);
    }
  }
  
  export const CreateHrContractorDetail = (data) => async (dispatch) => {
    try {
      const response = await AquaDataService.create('/HrContractorDetail/InsertHrContractorDetail', data);
      dispatch({
        type: CREATE_DATA,
        payload: response.data,
      });
      //return Promise.resolve(response.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const UpdateHrContractorDetail = (id, data) => async (dispatch) => {
    try {
      const res = await AquaDataService.update('/HrContractorDetail/UpdateHrContractorDetail', id, data);
      dispatch({
        type: UPDATE_DATA,
        payload: data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const DeleteHrContractorDetail = (id) => async (dispatch) => {
    try {
      await AquaDataService.delete('/HrContractorDetail/DeleteHrContractorDetail', id);
      dispatch({
        type: DELETE_DATA,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };