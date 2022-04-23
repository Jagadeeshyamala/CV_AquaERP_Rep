import React, { useEffect, useState } from "react";
import { Dialog } from "@progress/kendo-react-dialogs";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input, NumericTextBox } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Error } from "@progress/kendo-react-labels";
import './employee.css';
import { StackLayout } from '@progress/kendo-react-layout';


const minValueValidator = (value) =>
!!value ? "" : "The field is required.";

const acceptSixtChar = (e) => {
  debugger;
  if (e.target.value.length > 5) {
    e.preventDefault();
  }
};

const AddPersonalInfo = (props) => {
  let departments = [{parentId:null,parentName : "Select..."}];


  const actionText = props.action == 'Add' ? 'Save' : 'Update';
  const [Title, setTitle] = useState(props.action + ' Department')
  const [btnSave, setbtnSave] = useState(actionText)

  return <React.Fragment>
    <Form onSubmit={props.onSubmit} initialValues={props.action == 'Edit' && props.item} render={formRenderProps => <FormElement>

<fieldset className={"k-form-fieldset"}>
  <StackLayout orientation="vertical" align={{
    vertical: 'top'
  }}>
    <div className="box basic-header">Personal Details Form</div>
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
    <div className="box emp-footer">
      <div className="k-form-buttons">
        <button type={"submit"} className="k-button k-button-md k-rounded-md k-button-solid btn-save">
          {btnSave}
        </button>
      
      </div>
    </div>
  </StackLayout>;


</fieldset>

</FormElement>} />
    </React.Fragment>;
};

export default AddPersonalInfo;