import React, { Component } from 'react';
import { GetHrContractorDetail, DeleteHrContractorDetail, CreateHrContractorDetail, UpdateHrContractorDetail } from '../../actions/ContractorMaster'
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import "@progress/kendo-theme-default/dist/all.css"
import AddContractor from './add-contractor-master.component';
import { formatDate } from '@telerik/kendo-intl';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import { connect } from "react-redux";
import '../department/department.css';

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
        <td style={{ textAlign: 'center' }}>
            <button style={{ margin: 3 }} className="k-button k-button-md k-rounded-md k-button-solid btn-edit" onClick={() => props.enterEdit(props.dataItem)}>
                <span className="k-icon k-i-edit"></span>
            </button>
            <button style={{ margin: 3 }} className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary" onClick={() => props.enterDelete(props.dataItem)}>
                <span className="k-icon k-i-delete"></span>
            </button>
        </td>
    );
};
class ContractorMasterList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            updateStatus: false,
            setOpenForm: false,
            action: "",
            editItem: {
                Id: "",
                Name: "",
                SeriesFrom: 0,
                SeriesTo: 0,
                Address: "",
                Contact: "",
                Doj: "",
                IsCompany: false
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
            
            this.bindData();
        }
    }

    bindData() {
        this.props.GetHrContractorDetail();
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
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-ui'>
                        <div className='alert-header'>Confirm to delete <button className='btn-close' onClick={onClose}>X</button></div>
                        <div className='alert-body'>
                            <div>Do you want to Delete Department {item.deptDetails} ?</div>
                        
                        </div>
                        <div className='alert-footer'>
                         
                            <button className='btn-yes'
                                onClick={() => {
                                    this.props.DeleteHrContractorDetail(item.id)
                                        .then(() => {
                                            this.setState({
                                                updateStatus: true
                                            });
                                        })
                                        .catch((e) => {
                                            console.log(e);
                                        });
                                    onClose();
                                }}
                            >
                                Yes
                            </button>
                            <button className='btn-no' onClick={onClose}>No</button>
                          </div>
                    </div>
                );
            }
        });
    };
    handleSubmit = (item) => {
        var existDeptCode=this.props.departmets.filter(a=>a.deptCode.toUpperCase()==item.deptCode.toUpperCase() && a.isDeleted ==false);
        var existDeptDetails=this.props.departmets.filter(a=>a.deptDetails.toUpperCase()==item.deptDetails.toUpperCase() && a.isDeleted ==false);

             if (!item.id) {
                if(existDeptCode.length > 0)
                {
                    confirmAlert({
                        customUI: ({ onClose }) => {
                            return (
                                <div className='custom-ui'>
                                    <div className='alert-action-body'>
                                        <div>Department code has allready exist.Please try again.</div>
                                    </div>
                                    <div className='alert-footer'>
                                        <button className='btn-cancel' onClick={onClose}>Ok</button>
                                      </div>
                                </div>
                            );
                        }
                    });
                    this.setState({
                        setOpenForm: false,
                        updateStatus: false
                    });
                }
                else if(existDeptDetails.length > 0)
                {
                    confirmAlert({
                        customUI: ({ onClose }) => {
                            return (
                                <div className='custom-ui'>
                                    <div className='alert-action-body'>
                                        <div>Department details has allready exist.Please try again.</div>
                                    </div>
                                    <div className='alert-footer'>
                                        <button className='btn-cancel' onClick={onClose}>Ok</button>
                                      </div>
                                </div>
                            );
                        }
                    });
                    this.setState({
                        setOpenForm: false,
                        updateStatus: false
                    });
                }
              
                else{
                var input = {
                    DeptCode: item.deptCode,
                    DeptDetails: item.deptDetails,
                    ParentId: !!item.Parent ? item.Parent.parentId : null
                }
                this.props.CreateHrContractorDetail(input).then((data) => {
                    confirmAlert({
                        customUI: ({ onClose }) => {
                            return (
                                <div className='custom-ui'>
                                    <div className='alert-action-body'>
                                        <div>Department has been added successfully.</div>
                                    </div>
                                    <div className='alert-footer'>
                                        <button className='btn-no' onClick={onClose}>Ok</button>
                                      </div>
                                </div>
                            );
                        }
                    });
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
            else {
                 if(item.deptDetails.toUpperCase()==item.Parent.parentName)
                {
                    confirmAlert({
                        customUI: ({ onClose }) => {
                            return (
                                <div className='custom-ui'>
                                    <div className='alert-action-body'>
                                        <div>Department details and Parent name should not be same.Please try again.</div>
                                    </div>
                                    <div className='alert-footer'>
                                        <button className='btn-cancel' onClick={onClose}>Ok</button>
                                      </div>
                                </div>
                            );
                        }
                    });
                    this.setState({
                        setOpenForm: false,
                        updateStatus: false
                    });
                }
                else
                {
                    var input = {
                        Id: item.id,
                        DeptCode: item.deptCode,
                        DeptDetails: item.deptDetails,
                        ParentId: !!item.Parent ? item.Parent.parentId : null
                    }
                    this.props.UpdateHrContractorDetail(item.id, input).then((data) => {
                        confirmAlert({
                            customUI: ({ onClose }) => {
                                return (
                                    <div className='custom-ui'>
                                        <div className='alert-action-body'>
                                            <div>Department has been updated successfully.</div>
                                        </div>
                                        <div className='alert-footer'>
                                            <button className='btn-cancel' onClick={onClose}>Ok</button>
                                          </div>
                                    </div>
                                );
                            }
                        });
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
       

    }

    MyEditCommandCell = (props) => (
        <EditCommandCell {...props} enterDelete={this.enterDelete} enterEdit={this.enterEdit} />
    )

    render() {
        const { departmets } = this.props;
        let deptData = !!departmets && departmets.map(d => ({
            id: d.id,
            name: d.name,
            seriesFrom: d.seriesFrom,
            seriesTo: d.seriesTo,
            address: d.address,
            contact: d.contact,
            doj: d.doj,
            isCompany: d.isCompany
        }));
        return <React.Fragment>
            <div id="adddepartment" className="profile-page main-content">
                <div className="card-container">
                    <div className="card-component">
                        <button style={{ marginBottom: 15, left: '87%' }} className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-info" onClick={this.handleCreate}>
                            <span className="k-icon k-i-plus"></span> Create Contractor
                        </button>

                        <Grid style={{
                            height: "400px"
                        }} data={deptData} pageable={true} total={departmets.length}
                            sortable={true}>
                            <div style={{ display: 'none' }} >

                                <Column field="id" title="ID" filterable={false} />
                            </div>
                            <Column field="name" title="Name" />
                            <Column field="seriesFrom" title="SeriesFrom" />
                            <Column field="seriesTo" title="SeriesTo" />
                            <Column field="address" title="Address" />
                            <Column field="contact" title="Contact" />
                            <Column field="doj"
                                title="Doj"
                                width="250px" filter="date"
                                cell={KendoGridDateCell} />
                                <Column field="isCompany" title="IsCompany" />
                            <Column cell={this.MyEditCommandCell} />
                        </Grid>
                        {this.state.setOpenForm && (
                            <AddContractor
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

export default connect(mapStateToProps, { GetHrContractorDetail, DeleteHrContractorDetail, CreateHrContractorDetail, UpdateHrContractorDetail })(ContractorMasterList)
