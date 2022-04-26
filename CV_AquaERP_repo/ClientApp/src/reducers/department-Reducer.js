import {
    GET_DATA,CREATE_DATA,UPDATE_DATA,DELETE_DATA
} from "../actions/types";

const initialState = [];

function DepartmentMasterReducer(state = initialState, action) {
    const { type,methodType, payload } = action;
  
  
    switch (type) {
        case GET_DATA:  
        if(methodType==="DEPARTMENT")
        {        
                return payload; 
        }   
       
        case CREATE_DATA:
            return [...state, payload];

        case UPDATE_DATA:
            return state.map((departmet) => {
                if (departmet.id === payload.id) {
                    return {
                        ...state,
                        ...payload,
                    };
                } else {
                    return departmet;
                }
            });

        case DELETE_DATA:
            return departmets.filter(({ id }) => id !== payload.id);
        default:
            return state;
        }
};

export default DepartmentMasterReducer;
