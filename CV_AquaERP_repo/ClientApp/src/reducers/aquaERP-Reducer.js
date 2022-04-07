import {
    GET_DATA,CREATE_DATA,UPDATE_DATA,DELETE_DATA
} from "../actions/types";

const initialState = [];

function DepartmentMasterReducer(departmets = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_DATA:
            return payload;
        case CREATE_DATA:
            return [...departmets, payload];

        case UPDATE_DATA:
            return departmets.map((departmet) => {
                if (departmet.id === payload.id) {
                    return {
                        ...departmet,
                        ...payload,
                    };
                } else {
                    return departmet;
                }
            });

        case DELETE_DATA:
            return departmets.filter(({ id }) => id !== payload.id);
        default:
            return departmets;
    }
};

export default DepartmentMasterReducer;

