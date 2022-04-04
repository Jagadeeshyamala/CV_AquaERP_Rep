import React, { Component } from 'react';
import { GetHrDepartmentMaster, DeleteHrDepartmentMaster, CreateHrDepartmentMaster, UpdateHrDepartmentMaster } from '../../actions/DepartmentMaster'
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import "@progress/kendo-theme-default/dist/all.css"
import AddDepartment from './add-department-master.component';

import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        departmets: state.departmets
    };
};

const EditCommandCell = (props) => {
    return (
        <td>
            <button style={{ margin: 10 }} className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary" onClick={() => props.enterEdit(props.dataItem)}>
                Edit
            </button>
            <button style={{ margin: 10 }} className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary" onClick={() => props.enterDelete(props.dataItem)}>
                Delete
            </button>
        </td>
    );
};
class DepartmentMasterList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            setOpenForm: false,
            action: "",
            editItem: {
                Id: "",
                DeptCode: "",
                DeptDetails: "",
                ParentId: "",
            },
            depts: []

        };
    }

    componentDidMount() {
        this.props.GetHrDepartmentMaster();
    }

    handleCreate = () => {
        this.setState({ setOpenForm: true, action: "Add" });
    };

    handleCancelEdit = () => {
        this.setState({
            setOpenForm: false,
        });
    };
    enterEdit = (item) => {
        this.setState({
            setOpenForm: true,
            action: "Edit",
            editItem: item,
            depts: []
        });
    };
    enterDelete = (item) => {
        if (!window.confirm('Do you want to Delete Department ' + item.deptDetails))
            return;
        else {
            this.props.DeleteHrDepartmentMaster(item.id)
                .then(() => {
                    this.props.GetHrDepartmentMaster();
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    };
    handleSubmit = (item) => {

        if (!item.id) {

            var input = {
                DeptCode: item.deptCode,
                DeptDetails: item.deptDetails,
                ParentId: item.parentId.parentId
            }
            this.props.CreateHrDepartmentMaster(input).then((data) => {
                alert("Department has been added successfully.");
                this.setState({
                    setOpenForm: false
                });
            })
                .catch((e) => {
                    console.log(e);
                });


        }
        else {
            var input = {
                Id: item.id,
                DeptCode: item.deptCode,
                DeptDetails: item.deptDetails,
                ParentId: item.parentId.parentId
            }
            this.props.UpdateHrDepartmentMaster(item.id, input).then((data) => {
                alert("Department has been updated successfully.");
                this.setState({
                    setOpenForm: false
                });
            })
                .catch((e) => {
                    console.log(e);
                });


        }
    }

    MyEditCommandCell = (props) => (
        <EditCommandCell {...props} enterDelete={this.enterDelete} enterEdit={this.enterEdit} />
    )

    render() {

        const { departmets } = this.props;
        return <React.Fragment>
            <div id="adddepartment" className="profile-page main-content">
                <div className="card-container">
                    <div className="card-component">
                        <button style={{ marginBottom: 15 }} className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-info" onClick={this.handleCreate}>
                            Create Department
                        </button>

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
                            <Column cell={this.MyEditCommandCell} />
                        </Grid>
                        {this.state.setOpenForm && (
                            <AddDepartment
                                cancelEdit={this.handleCancelEdit}
                                onSubmit={this.handleSubmit}
                                item={this.state.editItem}
                                action={this.state.action}
                                depts={departmets}
                            />
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>;
    };
}

export default connect(mapStateToProps, { GetHrDepartmentMaster, DeleteHrDepartmentMaster, CreateHrDepartmentMaster, UpdateHrDepartmentMaster })(DepartmentMasterList)



