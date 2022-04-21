import React, { useEffect, useState } from "react";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input, NumericTextBox } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import './employee.css';
import { StackLayout } from '@progress/kendo-react-layout';
import { DatePicker } from "@progress/kendo-react-dateinputs";
import gender from "../../static_data/gender.json";
import maritalstatus from "../../static_data/maritalstatus.json";
import image from '../../assets/blank-profile-picture.png';
import { GetHrDepartmentMaster } from '../../actions/DepartmentMaster';
import { GetHrDesignationInfo } from '../../actions/EmployeeMaster';
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  debugger;
  return {
    designations: state.designations,
    departmets: state.departmets
  };
};

const mapDispatchToProps  = {GetHrDesignationInfo,GetHrDepartmentMaster}

  class AddBasicInfo extends React.Component {
  debugger;
  constructor(props) {  
    super(props);  
    this.state = {  
      designations: [],  
      departmets:[],  
      employeeDepartment: ""  ,
      btnSave:"Save",
      imgSrc:image
    };  
  }  
  
  // const [selectedFile, setSelectedFile] = useState()
  // const [preview, setPreview] = useState()

//   React.useEffect(() => {
//     if (!selectedFile) {
//       setPreview(image)
//       return
//   }

//   const objectUrl = URL.createObjectURL(selectedFile)
//   setPreview(objectUrl)

//   // free memory when ever this component is unmounted
//   return () => URL.revokeObjectURL(objectUrl)
// }, [selectedFile])

 onSelectFile = (e) => {
  this.setState({imgSrc: URL.createObjectURL(e.target.files[0])})
  if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
  }

  // I've kept this example simple by using the first image instead of multiple
  setSelectedFile(e.target.files[0])
}
componentDidMount() {  
  this.props.GetHrDepartmentMaster();
  this.props.GetHrDesignationInfo();
} 


  // const actionText = props.action == 'Add' ? 'Save & Next' : 'Save & Next';
  // const [Title, setTitle] = useState(props.action + ' Department')
  // const [btnSave, setbtnSave] = useState(actionText);
  // const value = new Date();

  render() {  
debugger;
  let departments = [{ desgCode: null, deptDetails: "Select..." }];
  this.props.departmets.payload && this.props.departmets.payload.map(dpt => {
    departments.push({
      deptCode: dpt.deptCode,
      deptDetails: dpt.deptDetails
    })
   });

   const designations = [{ desgCode: null, desgDetails: "Select..." }];
   this.props.designations.payload && this.props.designations.payload.map(dpt => {
    designations.push({
      desgCode: dpt.desgCode,
       desgDetails: dpt.desgDetails
     })
    });

    const value = new Date();

  return <React.Fragment>
    <Form  render={formRenderProps => <FormElement>

      <fieldset className={"k-form-fieldset"}>
        <StackLayout orientation="vertical" align={{
          vertical: 'top'
        }}>
          <div className="box basic-header">Basic Details Form</div>
          <StackLayout orientation="horizontal" >
            {/* Left Div */}
            <div className="box inner-content">
              <div className="mb-3">
                <Field name={"BiometricId"} onKeyPress={(e) => acceptSixtChar(e)} component={Input} label={"Biometric Id"} />
              </div>
              <div className="mb-3">
                <Field name={"InternalId"} component={Input} label={"Internal Id"} />
              </div>
              <div className="mb-3">
                <DatePicker
              defaultValue={value}
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
                <Field name={"SkillIds"} component={Input} label={"SkillIds"} />
              </div>           
                       
             
            </div>

            {/* Middle div */}
            <div className="box inner-content">
            <div className="mb-3">
                <Field name={"Name"} component={Input} label={"Name"} />
              </div>
              <div className="mb-3">
                <Field name={"FatherOrhusband"} component={Input} label={"Father/Husband"} />
              </div>
              <div className="mb-3">
                <Field name={"IhExperience"} component={Input} label={"IhExperience"} />
              </div>
              <div className="mb-3">
                <Field name={"TotalExperience"} component={Input} label={"TotalExperience"} />
              </div>
              <div className="mb-3">
                <Field name={"PfNo"} component={Input} label={"PfNo"} />
              </div>
              <div className="mb-3">
                <Field name={"EsiNo"} component={Input} label={"EsiNo"} />
              </div>
              <div className="mb-3">
                <Field name={"AadharNo"} component={Input} label={"AadharNo"} />
              </div>
              <div className="mb-3">
                <Field name={"PassportNo"} component={Input} label={"PassportNo"} />
              </div>
              <div className="mb-3">
                <Field name={"PanCard"} component={Input} label={"PanCard"} />
              </div>
              <div className="mb-3">
                <Field name={"BlodGroup"} component={Input} label={"BlodGroup"} />
              </div>
              <div className="mb-3">
                <Field name={"ConfirmationDate"} component={Input} label={"ConfirmationDate"} />
              </div>
              <div className="mb-3">
                <DatePicker
                name={"Doj"}
              defaultValue={value}
              label={"Date of Join"}
              format="dd/MMM/yyyy"
              weekNumber={false}
            />
              </div>
              <div className="mb-3">
                <Field name={"IsInhouse"} component={Input} label={"Is In house"} />
              </div>
            </div>
            {/* Right Div */}
            <div className="box inner-content">
              <div className="mb-4">
              <input type="file" className="upload-Image" label={"Select Imaage"} onChange={this.onSelectFile} />
              <div className={"img-preview example-config"}>
          <h3>Preview selected images</h3>
          <hr></hr>
          {<img height={250} width={300} src={this.state.imgSrc} /> }
        </div>
              </div>
              <div className="mb-3">
                <Field name={"Uanno"} component={Input} label={"Uanno"} />
              </div>
              <div className="mb-3">
                <Field name={"IsActive"} component={Input} label={"Is Active"} />
              </div>
              <div className="mb-3">
                <Field name={"EmploymentUnder"} component={Input} label={"EmploymentUnder"} />
              </div>
              <div className="mb-3">
                <Field name={"Division"} component={Input} label={"Division"} />
              </div>
              <div className="mb-3">
                <Field name={"ContractorId"} component={Input} label={"ContractorId"} />
              </div>
             
              <div className="mb-3">
                <Field name={"Onroll"} component={Input} label={"Onroll"} />
              </div>
              <div className="mb-3">
                <Field name={"NameInTelugu"} component={Input} label={"NameInTelugu"} />
              </div>
            
            </div>
          </StackLayout>
          <div className="box emp-footer">
            <div className="k-form-buttons">
              <button type={"submit"} className="k-button k-button-md k-rounded-md k-button-solid btn-save">
                {this.state.btnSave}
              </button>
            
            </div>
          </div>
        </StackLayout>;


      </fieldset>

    </FormElement>} />
  </React.Fragment>;
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(AddBasicInfo);
