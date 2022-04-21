import {
    GET_DATA,CREATE_DATA,UPDATE_DATA,DELETE_DATA
} from "../actions/types";

const initialState = {  payload: [],  isLoading: false,  error: {}};

function DesignationMasterReducer(state = initialState, action) {
    debugger;
    const { type, payload } = action;

    switch (type) {
        case GET_DATA:
            return{
                 ...state,
                 payload: payload,        
                 isLoading: false   
            };
        case CREATE_DATA:
            return [...state, payload];

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

export default DesignationMasterReducer;

