import React, { useEffect, useState } from "react";
import { Dialog } from "@progress/kendo-react-dialogs";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input, NumericTextBox } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Error } from "@progress/kendo-react-labels";
import '../department/department.css';



const minValueValidator = (value) =>
!!value ? "" : "The field is required.";

const acceptSixtChar = (e) => {
  debugger;
  if (e.target.value.length > 5) {
    e.preventDefault();
  }
};

const AddDepartment = (props) => {
  let departments = [{parentId:null,parentName : "Select..."}];
  props.depts.map(dpt => {
  departments.push({
    parentId: dpt.id,
    parentName: dpt.deptDetails
  })
 });

  const actionText = props.action == 'Add' ? 'Save' : 'Update';
  const [Title, setTitle] = useState(props.action + ' Department')
  const [btnSave, setbtnSave] = useState(actionText)

  return <Dialog title={Title} onClose={props.cancelEdit}>
    <Form onSubmit={props.onSubmit} initialValues={props.action == 'Edit' && props.item} render={formRenderProps => <FormElement style={{
      maxWidth: 650, width: 400, height: 300
    }}>
      <fieldset className={"k-form-fieldset"}>
        <div style={{ padding: 10 }} className="mb-3">
          <Field  validator={minValueValidator} name={"deptCode"} onKeyPress={(e) => acceptSixtChar(e)}  component={Input} label={"Department Code"} />
        </div>
        <div style={{ padding: 10 }} className="mb-3">
          <Field  validator={minValueValidator} name={"deptDetails"} component={Input} label={"Department Name"} />
        </div>
        <div style={{ padding: 10 }} className="mb-3">
        <Field data={departments} dataItemKey="parentId" name={"Parent"} component={DropDownList} textField={"parentName"} label={"Parent"} /> 
        
        </div>

      </fieldset>
      <div style={{ paddingLeft: 10 }} className="k-form-buttons">
        <button type={"submit"} className="k-button k-button-md k-rounded-md k-button-solid btn-save">
          {btnSave}
        </button>
        <button type={"submit"} className="k-button k-button-md k-rounded-md k-button-solid btn-cancel" onClick={props.cancelEdit}>
          Cancel
        </button>
      </div>
    </FormElement>} />
  </Dialog>;
};

export default AddDepartment;