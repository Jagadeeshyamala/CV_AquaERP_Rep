import {combineReducers} from 'redux';

import DepartmentMasterReducer from './department-Reducer';
import EmployeeMasterReducer from './employee-Reducer';
const rootReducer =  combineReducers({
    departmets : DepartmentMasterReducer,
    employees : EmployeeMasterReducer

})

export default rootReducer