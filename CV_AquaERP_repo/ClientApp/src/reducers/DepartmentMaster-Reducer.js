import{
    GET_HRDEPARTMENT_MASTER
} from "../actions/types";

const initialState = [];

function DepartmentMasterReducer(departmets = initialState,action){
    const {type,payload} = action;
    switch(type){
        case GET_HRDEPARTMENT_MASTER :
                return payload;
            default:
                return departmets;
    }
};

export default DepartmentMasterReducer;

