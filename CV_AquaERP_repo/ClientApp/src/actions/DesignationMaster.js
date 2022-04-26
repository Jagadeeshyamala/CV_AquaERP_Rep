import {
    GET_DATA, CREATE_DATA, UPDATE_DATA, DELETE_DATA
  } from "./types";
  
  import AquaDataService from "../shared/Aqua.HttpService";
  
  export const GetHrDesignationMaster = () => async (dispatch) => {
    try {
      const response = await AquaDataService.getAll('/HrDesignationMaster/GetHrDesignationMaster');
  
      dispatch({
        type: GET_DATA,
        payload: response.data
      });
    }
    catch (error) {
      console.log(error);
    }
  }
  
  export const CreateHrDesignationMaster = (data) => async (dispatch) => {
    try {
      const response = await AquaDataService.create('/HrDesignationMaster/InsertHrDesignationMaster', data);
      dispatch({
        type: CREATE_DATA,
        payload: response.data,
      });
      //return Promise.resolve(response.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const UpdateHrDesignationMaster = (id, data) => async (dispatch) => {
    try {
      const res = await AquaDataService.update('/HrDesignationMaster/UpdateHrDesignationMaster', id, data);
      dispatch({
        type: UPDATE_DATA,
        payload: data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const DeleteHrDesignationMaster = (id) => async (dispatch) => {
    try {
      await AquaDataService.delete('/HrDesignationMaster/DeleteHrDesignationDetails', id);
      dispatch({
        type: DELETE_DATA,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };