import React,{Component} from 'react';
import {GetHrDepartmentMaster} from '../actions/DepartmentMaster';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import "@progress/kendo-theme-default/dist/all.css"
import { Popup } from "@progress/kendo-react-popup";

import AddDesignation from "../pages/adddesignation";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return{
        departmets :state.departmets
    };
};

class DepartmentMasterList extends Component{
    constructor(props){
        super(props);
      
    }

    componentDidMount()
    {
        debugger;
        this.props.GetHrDepartmentMaster();
    }

    render()
    {
       
        const{departmets}=this.props;
        return <React.Fragment>
        <div id="adddepartment" className="profile-page main-content">
            <div className="card-container">
                <div className="card-component">
                {/* <button className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-info" onClick={handleCreate}>
            Create Department
          </button> */}
                    <Grid style={{
                        height: "400px"
                    }} data={departmets}>
                        <div style={{ display: 'none' }} >
  
                            <Column field="id" title="ID" filterable={false} />
                        </div>
                        <Column field="deptCode" title="Dept Code" width="250px" />
                        <Column field="deptDetails" title="Dept Details" width="350px" />
                        {/* <Column field="parentId" title="Parent ID" width="250px" /> */}
                        <Column field="parentName" title="Parent Name" width="250px" />
                        <Column field="createdDate" 
                        title="Created Date" 
                        width="250px" filter="date"
                          format="{0:MM-dd-yyyy}" />
                        {/* <Column cell={MyEditCommandCell} /> */}
                    </Grid>
                    {/* {openForm && <AddDesignation cancelEdit={handleCancelEdit} onSubmit={handleSubmit} item={editItem} />} */}
                </div>
            </div>
        </div>
            </React.Fragment>;
  };
    }

export default connect(mapStateToProps,{GetHrDepartmentMaster})(DepartmentMasterList)



