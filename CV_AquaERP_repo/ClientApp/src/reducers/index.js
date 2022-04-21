import {combineReducers} from 'redux';

import DepartmentMasterReducer from './aquaERP-Reducer';
import DesignationMasterReducer from './designation-Reducer';
const rootReducer =  combineReducers({
    departmets : DepartmentMasterReducer,
    designations : DesignationMasterReducer
})

export default rootReducer