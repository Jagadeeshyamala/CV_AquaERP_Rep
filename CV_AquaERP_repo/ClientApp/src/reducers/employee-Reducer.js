import {
    GET_DATA,CREATE_DATA,UPDATE_DATA,DELETE_DATA
} from "../actions/types";

const initialState = {
    designations:[],
    contractors:[]
};

function EmployeeMasterReducer(state = initialState, action) {
    const { type,methodType, payload } = action;
    switch (type) {
        case GET_DATA:   
        if(methodType==="DESIGNATION")
        {         
                return{
                    ...state,
                    designations : payload  
                }
        }
        else if(methodType==="CONTRACTOR"){
            return{
                ...state,
                contractors : payload  
            }
        }
          
        case CREATE_DATA:
            return state;

        case UPDATE_DATA:
            return state.map((designation) => {
                if (designation.id === payload.id) {
                    return {
                        ...state,
                        ...payload,
                    };
                } else {
                    return designation;
                }
            });

        case DELETE_DATA:
            return state.filter(({ id }) => id !== payload.id);
        default:
            return state;
    }
};

export default EmployeeMasterReducer;

