import {
    GET_DATA, CREATE_DATA, UPDATE_DATA, DELETE_DATA
  } from "./types";
  
  import AquaDataService from "../shared/Aqua.HttpService";
  
  export const GetHrEmployeeInfo = () => async (dispatch) => {
    try {
      const response = await AquaDataService.getAll('/HrDepartmentMaster/GetHrDepartmentMaster');
  
      dispatch({
        type: GET_DATA,
        methodType:'DEPARTMENT',
        payload: response.data
      });
    }
    catch (error) {
      console.log(error);
    }
  }
  export const GetHrDesignationInfo = () => async (dispatch) => {
    debugger;
    try {
      const response = await AquaDataService.getAll('/HREmployeeMaster/GetHrDesignationMaster');
      debugger;
      dispatch({
        type: GET_DATA,
        payload: response.data
      });
       return Promise.resolve(response.data);
    }
    catch (error) {
      console.log(error);
    }
  }
  
  export const CreateHrEmployeeInfo = (data) => async (dispatch) => {
    try {
      const response = await AquaDataService.create('/HrDepartmentMaster/InsertHrDepartmentMaster', data);
      dispatch({
        type: CREATE_DATA,
        payload: response.data,
      });
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const UpdateHrEmployeeInfo = (id, data) => async (dispatch) => {
    try {
      const res = await AquaDataService.update('/HrDepartmentMaster/UpdateHrDepartmentMaster', id, data);
      dispatch({
        type: UPDATE_DATA,
        payload: data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const DeleteHrEmployeeInfo = (id) => async (dispatch) => {
    try {
      await AquaDataService.delete('/HrDepartmentMaster/DeleteHrContractorDetails', id);
      dispatch({
        type: DELETE_DATA,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };