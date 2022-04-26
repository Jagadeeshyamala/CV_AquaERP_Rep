import React, { Component } from 'react';
import { GetHrDesignationMaster, DeleteHrDesignationMaster, CreateHrDesignationMaster, UpdateHrDesignationMaster } from '../../actions/DesignationMaster'
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import "@progress/kendo-theme-default/dist/all.css"
import AddDesigantion from './add-designation-master.component';

import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        departmets: state.departmets
    };
};

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
class DesignationMasterList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            setOpenForm: false,
            action: "",
            editItem: {
                Id: "",
                DesgCode: "",
                DesgDetails: "",
                QualificationReq: "",
                ExperienceReq:"",
                DesgInTelugu:""
            },
            depts: [],
            departmets:[]

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
    bindData(){
        debugger
        this.props.GetHrDesignationMaster();
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
        debugger;
        this.setState({
            setOpenForm: true,
            action: "Edit",
            editItem: item,
            depts: []
        });
    };
    enterDelete = (item) => {
        if (!window.confirm('Do you want to Delete Designation ' + item.desgDetails))
            return;
        else {
            this.props.DeleteHrDesignationMaster(item.id)
                .then(() => {
                    this.props.GetHrDesignationMaster();
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    };
    handleSubmit = (item) => {
        if (!item.id) {

            var input = {
                DesgCode: item.desgCode,
                DesgDetails: item.desgDetails,
                QualificationReq: item.qualificationReq,
                ExperienceReq: item.experienceReq,
                DesgInTelugu: item.desgInTelugu
            }
            this.props.CreateHrDesignationMaster(input).then((data) => {
                alert("Designation has been added successfully.");
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
                DesgCode: item.desgCode,
                DesgDetails: item.desgDetails,
                QualificationReq: item.qualificationReq,
                ExperienceReq: item.experienceReq,
                DesgInTelugu: item.desgInTelugu
            }
            this.props.UpdateHrDesignationMaster(item.id, input).then((data) => {
                alert("Designation has been updated successfully.");
                this.setState({
                    setOpenForm: false
                });
            })
                .catch((e) => {
                    console.log(e);
                });


        }
        this.bindData();
    }

    MyEditCommandCell = (props) => (
        <EditCommandCell {...props} enterDelete={this.enterDelete} enterEdit={this.enterEdit} />
    )

    render() {

        const { departmets } = this.props;
        return <React.Fragment>
            <div id="adddesignation" className="profile-page main-content">
                <div className="card-container">
                    <div className="card-component">
                        
                        <button style={{ marginBottom: 15, left: '89%' }} className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-info" onClick={this.handleCreate}>
                            <span className="k-icon k-i-plus"></span> Create Designation
                        </button>
                        <Grid style={{
                            height: "400px"
                        }} data={departmets}pageable={true} total={departmets.length}
                            sortable={true}>
                            <div style={{ display: 'none' }} >

                                <Column field="id" title="ID" filterable={false} />
                            </div>
                            <Column field="desgCode" title="Desg. Code" />
                            <Column field="desgDetails" title="Desg. Details" width="250px" />
                            <Column field="qualificationReq" title="QualificationReq"/>
                            <Column field="experienceReq" title="ExperienceReq" />
                            <Column field="desgInTelugu" title="DesgInTelugu" />
                            <Column cell={this.MyEditCommandCell} />
                        </Grid>
                        {this.state.setOpenForm && (
                            <AddDesigantion
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

export default connect(mapStateToProps, { GetHrDesignationMaster, DeleteHrDesignationMaster, CreateHrDesignationMaster, UpdateHrDesignationMaster })(DesignationMasterList)



