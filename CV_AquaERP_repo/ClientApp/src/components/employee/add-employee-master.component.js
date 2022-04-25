import * as React from "react";
import * as ReactDOM from "react-dom";
import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Checkbox, Input, NumericTextBox } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { connect } from "react-redux";
import DocTableRows from './document-TableRows';
import ReferenceTableRows from "./reference-TableRows";
import FamilyTableRows from "./family-TableRows";
import ExperienceTableRows from './experience-TableRows';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import './employee.css';
import { StackLayout } from '@progress/kendo-react-layout';
import { DatePicker } from "@progress/kendo-react-dateinputs";
import gender from "../../static_data/gender.json";
import division from "../../static_data/division.json";
import employeement from "../../static_data/employeement.json";
import maritalstatus from "../../static_data/maritalstatus.json";
import bloodgroup from "../../static_data/bloodgroup.json";
import image from '../../assets/blank-profile-picture.png';
import { GetHrDepartmentMaster } from '../../actions/DepartmentMaster';
import { GetHrDesignationInfo,GetHrContractorDetails } from '../../actions/EmployeeMaster';


const mapStateToProps = (state) => {
  return {
    departmets: state.departmets,
    employees: state.employees,
  };
};

const mapDispatchToProps  = {GetHrDesignationInfo,GetHrDepartmentMaster,GetHrContractorDetails}
class AddEmployeeMaster extends React.Component {
  constructor(props) {  
    super(props);  
    this.state = {  
      selected: 0,
      designations: [],  
      departmets:[],  
      employeeDepartment: ""  ,
      btnSave:"Save",
      imgSrc:image,
      dob:'',
      rowsRefrenceData:[{name :'',mobileNo:''}],
      rowsFamilyData:[{name :'',relationShip:'',age:'',ocupation:'',address:'',isLive:false,type:'',nominee:''}],
      rowsExperienceData:[{companyName :'',fromDate:'',toDate:'',salary:'',designation:'',workExperience:'',reasonForLeaving:''}],
      rowsDocumentData:[{documentName :'',filePath:''}],
    };  
  }  


    handleSelect = (e) => {
        this.setState({
            selected: e.selected,
        })
        debugger;
        if (e.selected === 0) {
            // this.props.history.push(`/addBasicInfo`);
        }
        else if (e.selected === 1) {
         
        }
        else if (e.selected === 2) {

        }
        else if (e.selected === 3) {

        }
    };

     addRefrenceTableRows = ()=> {  
       debugger;
      const rowsInput=this.state.rowsRefrenceData;
      rowsInput.push({
        name :'',mobileNo:''
      })
      this.setState({rowsRefrenceData,rowsInput})
    
  }
 deleteRefrenceTableRows = (index)=>{
      const rows =this.state.rowsRefrenceData;
      rows.splice(index, 1);
      this.setState({rowsRefrenceData:rows})
 }

 handleRefrenceChange = (index, evnt)=>{
  
  const { name, value } = evnt.target;
  const rowsInput = this.state.rowsRefrenceData;
  rowsInput[index][name] = value;
  this.setState({rowsRefrenceData:rowsInput})

}

addFamilyTableRows = ()=> {  
  debugger;
 const rowsInput=this.state.rowsFamilyData;
 rowsInput.push({
  name :'',relationShip:'',age:'',ocupation:'',address:'',isLive:false,type:'',nominee:''   
 })
 this.setState({rowsFamilyData,rowsInput})

}
deleteFamilyTableRows = (index)=>{
 const rows =this.state.rowsFamilyData;
 rows.splice(index, 1);
 this.setState({rowsFamilyData:rows})
}

handleFamilyChange = (index, evnt)=>{

const { name, value } = evnt.target;
const rowsInput = this.state.rowsFamilyData;
rowsInput[index][name] = value;
this.setState({rowsFamilyData:rowsInput})

}
//Experience
addExperienceTableRows = ()=> {  
  debugger;
 const rowsInput=this.state.rowsExperienceData;
 rowsInput.push({
  companyName :'',fromDate:'',toDate:'',salary:'',designation:'',workExperience:'',reasonForLeaving:'' 
 })
 this.setState({rowsExperienceData,rowsInput})

}
deleteExperienceTableRows = (index)=>{
 const rows =this.state.rowsExperienceData;
 rows.splice(index, 1);
 this.setState({rowsExperienceData:rows})
}

handleExperienceChange = (index, evnt)=>{

const { name, value } = evnt.target;
const rowsInput = this.state.rowsExperienceData;
rowsInput[index][name] = value;
this.setState({rowsExperienceData:rowsInput})

}

//Document
addDocumentTableRows = ()=> {  
  debugger;
 const rowsInput=this.state.rowsDocumentData;
 rowsInput.push({
  documentName :'',filePath:''
 })
 this.setState({rowsDocumentData,rowsInput})

}
deleteDocumentTableRows = (index)=>{
 const rows =this.state.rowsDocumentData;
 rows.splice(index, 1);
 this.setState({rowsDocumentData:rows})
}

handleDocumentChange = (index, evnt)=>{

const { name, value } = evnt.target;
const rowsInput = this.state.rowsDocumentData;
rowsInput[index][name] = value;
this.setState({rowsDocumentData:rowsInput})

}


    onSelectFile = (e) => {
      debugger;
      var imag=e.target.files[0];
      this.setState({imgSrc: URL.createObjectURL(e.target.files[0])})
    }
    componentDidMount() {  
      this.props.GetHrDepartmentMaster();
      this.props.GetHrDesignationInfo();
      this.props.GetHrContractorDetails();
    } 
    changeDob = (event) => {
      this.setState({dob:event.value})
     };
    onSubmit = (e) => {
      debugger;
      let formData = new FormData(); 
      
      formData.append('BiometricId', e.biometricId);
      formData.append('InternalId', e.biometricId);
      formData.append('Name', e.biometricId);
      formData.append('FatherOrhusband', e.biometricId);
      var date=this.state.dob;
      var image=this.state.imgSrc;

    }



  render() {
    
  let departments = [{ deptCode: null, deptDetails: "Select..." }];
  this.props.departmets && this.props.departmets.map(dpt => {
    if (!!dpt.deptCode) {
      departments.push({
        deptCode: dpt.deptCode,
        deptDetails: dpt.deptDetails
      })
    }
  });

 const designations = [{ desgCode: null, desgDetails: "Select..." }];
 this.props.employees.designations && this.props.employees.designations.map(dpt => {
  designations.push({
    desgCode: dpt.desgCode,
    desgDetails: dpt.desgDetails
  })
 });

    const contractors = [{ contractorID: null, contractorName: "Select..." }];
    this.props.employees.contractors && this.props.employees.contractors.map(cnt => {
      contractors.push({
        contractorID: cnt.contractorID,
        contractorName: cnt.contractorName
      })
    });


    const value = new Date();
    return <React.Fragment>
      <div id="adddepartment" className="profile-page main-content">
        <div className="card-container">
          <div className="card-component">
            <Form onSubmit={(e) => this.onSubmit(e)} render={formRenderProps => <FormElement>
              <TabStrip selected={this.state.selected} onSelect={this.handleSelect}>

                <TabStripTab title="Basic" >
                  <div>
                    <fieldset className={"k-form-fieldset"}>
                      <StackLayout orientation="vertical" align={{
                        vertical: 'top'
                      }}>
                        {/* <div className="box basic-header">Basic Details Form</div> */}
                        <StackLayout orientation="horizontal" >
                          {/* Left Div */}
                          <div className="box inner-content">
                            <div className="mb-3">
                              <Field name={"BiometricId"} component={Input} label={"Biometric Id"} />
                            </div>
                            <div className="mb-3">
                              <Field name={"InternalId"} component={Input} label={"Internal Id"} />
                            </div>
                            <div className="mb-3" style={{ paddingTop: '5px' }}>
                              <DatePicker
                                defaultValue={value}
                                label={"Date Of Birth"}
                                name={"Dob"}
                                onChange={this.changeDob}
                                format="dd/MMM/yyyy"
                                weekNumber={false}
                              />
                            </div>
                            <div className="mb-3">
                              <Field name={"PresentAddress"} component={Input} label={"Present Address"} />
                            </div>
                            <div className="mb-3">
                              <Field name={"PermanentAddress"} component={Input} label={"Permanent Address"} />
                            </div>
                            <div className="mb-3">
                              <Field name={"GenderName"} component={DropDownList} data={gender} textField={"GenderName"} label={"Gender"}
                              />
                            </div>
                            <div className="mb-3">
                              <Field name={"ContactNo"} component={Input} label={"Contact Number"} />
                            </div>
                            <div className="mb-3">
                              <Field name={"AltContactNo"} component={Input} label={"Alternet Contact No"} />
                            </div>
                            <div className="mb-3 is-inhous">
                              <Field name={"Messbill"} component={Checkbox} label={"Messbill"} />
                            </div>
                          </div>
 {/* Middle div */}
 <div className="box inner-content">
 <div className="mb-3">
                              <Field name={"MaritalStatusName"} component={DropDownList} data={maritalstatus} textField={"MaritalStatusName"} label={"Marital Status"}
                              />
                            </div>
                            <div className="mb-3">
                              <Field name={"NoDependents"} component={Input} label={"No. Dependents"} />
                            </div>
                            <div className="mb-3">

                              <Field name={"deptCode"} dataItemKey="deptCode" component={DropDownList} data={departments} textField={"deptDetails"} label={"Department"}
                              />
                            </div>
                            <div className="mb-3">
                              <Field name={"desgCode"} dataItemKey="desgCode" component={DropDownList} data={designations} textField={"desgDetails"} label={"Designation"}
                              />
                            </div>
                            <div className="mb-3">
                              <Field name={"Name"} component={Input} label={"Name"} />
                            </div>
                            <div className="mb-3">
                              <Field name={"FatherOrhusband"} component={Input} label={"Father/Husband"} />
                            </div>
                            <div className="mb-3">
                              <Field name={"IhExperience"} component={Input} label={"Ih Experience"} />
                            </div>
                            <div className="mb-3">
                              <Field name={"TotalExperience"} component={Input} label={"Total Experience"} />
                            </div>
                            <div className="mb-3 is-inhous">
                              <Field name={"IsInhouse"} component={Checkbox} label={"Is In house"} />
                            </div>
                          </div>
                          {/* Middle div */}
                          <div className="box inner-content">
                          <div className="mb-3">
                              <Field name={"PfNo"} component={Input} label={"PF No."} />
                            </div>
                            <div className="mb-3">
                              <Field name={"EsiNo"} component={Input} label={"ESI No."} />
                            </div>
                            <div className="mb-3">
                              <Field name={"AadharNo"} component={Input} label={"Aadhar No."} />
                            </div>
                            <div className="mb-3">
                              <Field name={"PassportNo"} component={Input} label={"Passport No."} />
                            </div>
                            <div className="mb-3">
                              <Field name={"PanCard"} component={Input} label={"PAN Card"} />
                            </div>
                            <div className="mb-3">
                              <Field name={"BlodGroup"} component={DropDownList} data={bloodgroup} textField={"BloodGroupName"} label={"Blod Group"}
                              />
                            </div>
                            <div className="mb-3">
                              <DatePicker
                                name={"ConfirmationDate"}
                                component={Input}
                                defaultValue={value}
                                label={"Confirmation Date"}
                                format="dd/MMM/yyyy"
                                weekNumber={false}
                              />
                            </div>
                            <div className="mb-3">
                              <DatePicker
                                component={Input}
                                name={"Doj"}
                                defaultValue={value}
                                label={"Date of Join"}
                                format="dd/MMM/yyyy"
                                weekNumber={false}
                              />
                            </div>
                            <div className="mb-3 is-inhous">
                              <Field name={"Onroll"} component={Checkbox} label={"Onroll"} />
                            </div>
                          </div>
                          {/* Right Div */}
                          <div className="box inner-content">
                            <div className="mb-3">
                              <div className="choose_file">
    <button type="button" style={{'width': '125px'}}>Choose Image</button>
    <input type="file" className="upload-Image" label={"Select Imaage"} onChange={this.onSelectFile} />

</div>
                              <div className={"img-preview example-config"}>
                        
                                {<img height={150} width={100 + '%'} src={this.state.imgSrc} />}
                              </div>
                              
                            </div>
                            <div className="mb-3">
                              <Field name={"Uanno"} component={Input} label={"UAN No."} />
                            </div>

                            <div className="mb-3">
                              <Field name={"EmploymentUnder"} component={DropDownList} data={employeement} textField={"EmployeementName"} label={"Employment Under"}
                              />
                            </div>
                            <div className="mb-3">
                              <Field name={"Division"} component={DropDownList} data={division} textField={"DivisionName"} label={"Division"}
                              />
                            </div>
                            <div className="mb-3">
                              <Field name={"ContractorId"} dataItemKey="ContractorID" component={DropDownList} data={contractors} textField={"contractorName"} label={"Contractor"}
                              />
                            </div>
                            <div className="mb-3">
                              <Field name={"NameInTelugu"} component={Input} label={"Name in Telugu"} />
                            </div>

                           
                           
                          </div>
                        </StackLayout>

                      </StackLayout>;


                    </fieldset>

                  </div>
                </TabStripTab>
                <TabStripTab title="Personal">
                  <div>
                    <fieldset className={"k-form-fieldset"}>
                      <StackLayout orientation="vertical" align={{
                        vertical: 'top'
                      }}>
                      
                        <StackLayout orientation="horizontal" >
                          {/* Left Div */}
                          <div className="box inner-content">
                            <div className="mb-3">
                              <Field name={"ReligionCasteSubCaste"} component={Input} label={"Religion Caste Sub Caste"} />
                            </div>
                            <div className="mb-3">
                              <Field name={"EductionalQualification"} component={Input} label={"Eductional Qualification"} />
                            </div>
                            <div className="mb-3">
                              <Field name={"Height"} component={Input} label={"Height"} />
                            </div>
                          

                          </div>
                          <div className="box inner-content">
                          
                            <div className="mb-3">
                              <Field name={"Weight"} component={Input} label={"Weight"} />
                            </div>
                            <div className="mb-3">
                              <Field name={"HealthProblems"} component={Input} label={"Health Problems"} />
                            </div>
                            <div className="mb-3">
                              <Field name={"IdentityRemarks"} component={Input} label={"Identity Remarks"} />
                            </div>

                          </div>
                        </StackLayout>

                      </StackLayout>;


                    </fieldset>
                  </div>
                </TabStripTab>
                <TabStripTab title="Refrence">
                <div>
               
                <fieldset className={"k-form-fieldset"}>
                      <StackLayout orientation="vertical" align={{
                        vertical: 'top'
                      }}>
                      
                        <StackLayout orientation="horizontal" >
                          {/* Left Div */}
                          <div className="box inner-content">
                          <table className="table" style={{'width':60 + '%'}}>
                   <thead>
                     <tr>
                         <th>Name</th>
                         <th>Mobile No.</th>                    
                         <th><button className="btn btn-outline-success" onClick={this.addRefrenceTableRows} >+Add</button></th>
                     </tr>

                   </thead>
                  <tbody>

                  <ReferenceTableRows rowsData={this.state.rowsRefrenceData} deleteTableRows={this.deleteRefrenceTableRows} handleChange={this.handleRefrenceChange} />

                  </tbody> 
               </table>


                          </div>
                          
                        </StackLayout>

                      </StackLayout>;


                    </fieldset>
          
      
             
           </div>
                </TabStripTab>
                <TabStripTab title="Family">
                  <div>
                      
                <fieldset className={"k-form-fieldset"}>
                      <StackLayout orientation="vertical" align={{
                        vertical: 'top'
                      }}>
                      
                        <StackLayout orientation="horizontal" >
                          {/* Left Div */}
                          <div className="box inner-content">
                          <table className="table" style={{'width':80 + '%'}}>
                   <thead>
                     <tr>
                         <th>Name</th>
                         <th>Relation Ship</th>    
                         <th>Age</th>   
                         <th>Occupation</th>   
                         <th>Address</th>   
                         <th>IsLive</th>                   
                         <th>Type</th>   
                         <th>Nominee</th>   
                      
                         <th><button className="btn btn-outline-success" onClick={this.addFamilyTableRows} >+Add</button></th>
                     </tr>

                   </thead>
                  <tbody>

                  <FamilyTableRows rowsData={this.state.rowsFamilyData} deleteTableRows={this.deleteFamilyTableRows} handleChange={this.handleFamilyChange} />

                  </tbody> 
               </table>


                          </div>
                          
                        </StackLayout>

                      </StackLayout>;


                    </fieldset>
                  </div>
                </TabStripTab>
                <TabStripTab title="Experience">
                  <div>
                         
                <fieldset className={"k-form-fieldset"}>
                      <StackLayout orientation="vertical" align={{
                        vertical: 'top'
                      }}>
                      
                        <StackLayout orientation="horizontal" >
                          {/* Left Div */}
                          <div className="box inner-content">
                          <table className="table" style={{'width':80 + '%'}}>
                   <thead>
                     <tr>
                         <th>CompanyName</th>
                         <th>FromDate</th>    
                         <th>ToDate</th>   
                         <th>Salary</th>   
                         <th>Designation</th>   
                         <th>WorkExperience</th>                   
                         <th>ReasonForLeaving</th>   
                        
                      
                         <th><button className="btn btn-outline-success" onClick={this.addExperienceTableRows} >+Add</button></th>
                     </tr>

                   </thead>
                  <tbody>

                  <ExperienceTableRows rowsData={this.state.rowsExperienceData} deleteTableRows={this.deleteExperienceTableRows} handleChange={this.handleExperienceChange} />

                  </tbody> 
               </table>


                          </div>
                          
                        </StackLayout>

                      </StackLayout>;


                    </fieldset>
                  </div>
                </TabStripTab>
                <TabStripTab title="Document" disabled={false}>
                  <div>
                  <fieldset className={"k-form-fieldset"}>
                      <StackLayout orientation="vertical" align={{
                        vertical: 'top'
                      }}>
                      
                        <StackLayout orientation="horizontal" >
                          {/* Left Div */}
                          <div className="box inner-content">
                  <table className="table"  style={{'width':60 + '%'}}>
                    <thead>
                      <tr>
                          <th>Document Name</th>
                          <th>Choose File</th>
                          <th><button className="btn btn-outline-success" onClick={this.addDocumentTableRows} >+Add</button></th>
                      </tr>

                    </thead>
                   <tbody>

                   <DocTableRows rowsData={this.state.rowsDocumentData} deleteTableRows={this.deleteDocumentTableRows} handleChange={this.handleDocumentChange} />

                   </tbody> 
                </table>

                </div>
                          
                          </StackLayout>
  
                        </StackLayout>;
  
  
                      </fieldset>
       
                  </div>
                </TabStripTab>
              </TabStrip>
              <div className="box emp-footer">
                <div className="k-form-buttons">
                  <button type={"submit"} className="k-button k-button-md k-rounded-md k-button-solid btn-save">
                    {this.state.btnSave}
                  </button>

                </div>
              </div>
            </FormElement>} />
          </div>
        </div>
      </div>
    </React.Fragment>;

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddEmployeeMaster);