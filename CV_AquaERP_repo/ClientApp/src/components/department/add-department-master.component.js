import React, { useEffect, useState } from "react";
import { Dialog } from "@progress/kendo-react-dialogs";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input, NumericTextBox } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Error } from "@progress/kendo-react-labels";


const minValueValidator = (value) =>
  value >= 0 ? "" : "The value must be 0 or higher";

const NonNegativeNumericInput = (fieldRenderProps) => {
  const { validationMessage, visited, ...others } = fieldRenderProps;
  return (
    <div>
      <NumericTextBox {...others} />
      {visited && validationMessage && <Error>{validationMessage}</Error>}
    </div>
  );
};


const AddDepartment =  (props) => {
    let departments =[];
     departments = props.depts.map(dpt => ({
      parentId: dpt.id,
      parentName: dpt.deptDetails
  }));
    const actionText=props.action =='Add' ? 'Save' : 'Update';
    const [Depts, setDepts] = useState([])
    const [Title, setTitle] = useState(props.action + ' Department')
    const [btnSave, setbtnSave] = useState(actionText)

  return <Dialog title={Title} onClose={props.cancelEdit}>
        <Form onSubmit={props.onSubmit}  initialValues={props.action=='Edit' && props.item}  render={formRenderProps => <FormElement style={{
      maxWidth: 650,width:400,height:300
    }}>
              <fieldset className={"k-form-fieldset"}>
                <div style={{padding:10}} className="mb-3">              
                  <Field name={"deptCode"} component={Input} label={"Department Code"} />
                </div>
                <div style={{padding:10}} className="mb-3">
                  <Field name={"deptDetails"} component={Input} label={"Department Name"} />
                </div>
                <div style={{padding:10}} className="mb-3">
                  <Field name={"parentId"} component={DropDownList} data={departments} textField={"parentName"} label={"Parent"} />
                </div>          
              
              </fieldset>
              <div style={{paddingLeft:10}}  className="k-form-buttons">
                <button type={"submit"} className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary" disabled={!formRenderProps.allowSubmit}>
                  {btnSave}
                </button>
                <button type={"submit"} className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" onClick={props.cancelEdit}>
                  Cancel
                </button>
              </div>
            </FormElement>} />
      </Dialog>;
};

export default AddDepartment;