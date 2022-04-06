import {combineReducers} from 'redux';

import departmets from './DepartmentMaster-Reducer';
import DesignationMasterReducer from './DesignationMaster-Reducer';
export default combineReducers({
    departmets,DesignationMasterReducer
})