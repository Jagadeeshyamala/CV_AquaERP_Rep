import{
    GET_HRDEPARTMENT_MASTER
} from "./types";

import AquaDataService from "../shared/Aqua.Service";

export const GetHrDepartmentMaster = () => async (dispatch) => {
    try{
        const response=await AquaDataService.getAll();
        alert(response.data);
        dispatch({
            type : GET_HRDEPARTMENT_MASTER,
            payload : response.data
        });
    }
    catch (error)
    {
        console.log(error);
    }
}