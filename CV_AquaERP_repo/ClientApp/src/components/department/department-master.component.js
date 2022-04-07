import React, { Component } from 'react';
import { GetHrDepartmentMaster, DeleteHrDepartmentMaster, CreateHrDepartmentMaster, UpdateHrDepartmentMaster } from '../../actions/DepartmentMaster'
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import "@progress/kendo-theme-default/dist/all.css"
import AddDepartment from './add-department-master.component';
import { formatDate } from '@telerik/kendo-intl';

import { connect } from "react-redux";
import './department.css';

const mapStateToProps = (state) => {
    return {
        departmets: state.departmets
    };
};
class KendoGridDateCell extends React.Component {
    render() {
        const value = this.props.dataItem[this.props.field];
        return (
            <td>
                {formatDate(new Date(value), "dd/MM/yyyy")}
            </td>
        );
    }
}
const EditCommandCell = (props) => {
    return (
        <td>
            <button style={{ margin: 10 }} className="k-button k-button-md k-rounded-md k-button-solid btn-edit" onClick={() => props.enterEdit(props.dataItem)}>
                <span className="k-icon k-i-edit"></span> Edit
            </button>
            <button style={{ margin: 10 }} className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary" onClick={() => props.enterDelete(props.dataItem)}>
                <span className="k-icon k-i-delete"></span>Delete
            </button>
        </td>
    );
};
class DepartmentMasterList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            updateStatus: false,
            setOpenForm: false,
            action: "",
            editItem: {
                Id: "",
                DeptCode: "",
                DeptDetails: "",
                ParentId: "",
                ParentName: ""
            },
            depts: [],

        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.bindData();
    }
    componentWillUnmount() {
        debugger;
        this.bindData();
    }

    componentDidUpdate() {
        if (this.state.updateStatus) {
            debugger;
            this.bindData();
        }
    }

    bindData() {
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
        debugger
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
                    this.setState({
                        updateStatus: true
                    });
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    };
    handleSubmit = (item) => {
debugger;
        if (!item.id) {

            var input = {
                DeptCode: item.deptCode,
                DeptDetails: item.deptDetails,
                ParentId: !!item.Parent ? item.Parent.parentId : null
            }
            this.props.CreateHrDepartmentMaster(input).then((data) => {
                alert("Department has been added successfully.");
                this.setState({
                    setOpenForm: false,
                    updateStatus: true
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
                ParentId: !!item.Parent ? item.Parent.parentId : null
            }
            this.props.UpdateHrDepartmentMaster(item.id, input).then((data) => {
                alert("Department has been updated successfully.");
                this.setState({
                    setOpenForm: false,
                    updateStatus: true
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
         let deptData =!!departmets && departmets.map(d => ({
            id: d.id,
            deptCode:d.deptCode,
            deptDetails: d.deptDetails,
            createdDate:d.createdDate,
            Parent:{
                parentId:d.id,
                parentName:  d.parentName
            }
          }));
        return <React.Fragment>
            <div id="adddepartment" className="profile-page main-content">
                <div className="card-container">
                    <div className="card-component">
                        <button style={{ marginBottom: 15, left: '89%' }} className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-info" onClick={this.handleCreate}>
                            <span className="k-icon k-i-plus"></span> Create Department
                        </button>

                        <Grid style={{
                            height: "400px"
                        }} data={deptData} pageable={true} total={departmets.length}
                            sortable={true}>
                            <div style={{ display: 'none' }} >

                                <Column field="id" title="ID" filterable={false} />
                            </div>
                            <Column field="deptCode" title="Dept Code" width="250px" />
                            <Column field="deptDetails" title="Dept Details" width="350px" />
                            <Column field="Parent.parentName" title="Parent Name" width="250px" />
                            <Column field="createdDate"
                                title="Created Date"
                                width="250px" filter="date"
                                cell={KendoGridDateCell} />
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



