import React, { useEffect, useState } from "react";
import { Dialog } from "@progress/kendo-react-dialogs";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input, NumericTextBox } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Error } from "@progress/kendo-react-labels";


const minValueValidator = (value) =>
!!value ? "" : "The field is required.";

const NonNegativeNumericInput = (fieldRenderProps) => {
  const { validationMessage, visited, ...others } = fieldRenderProps;
  return (
    <div>
      <NumericTextBox {...others} />
      {visited && validationMessage && <Error>{validationMessage}</Error>}
    </div>
  );
};
const acceptSixtChar = (e) => {
  debugger;
  if (e.target.value.length > 5) {
    e.preventDefault();
  }
};

const AddDesignation = (props) => {
  debugger
  //   const nightsValidator = (value) =>
  // value ? "" : "Number of Nights is required.";
  const actionText = props.action == 'Add' ? 'Save' : 'Update';
  const [Depts, setDepts] = useState([])
  const [Title, setTitle] = useState(props.action + ' Designation')
  const [btnSave, setbtnSave] = useState(actionText)

  return <Dialog title={Title} onClose={props.cancelEdit}>
    <Form onSubmit={props.onSubmit} initialValues={props.action == 'Edit' && props.item} render={formRenderProps => <FormElement style={{
      maxWidth: 650, width: 500, height: 400
    }}>
      <fieldset className={"k-form-fieldset"}>
        <div style={{ padding: 10 }} className="mb-3">
          <Field  validator={minValueValidator} name={"desgCode"} onKeyPress={(e) => acceptSixtChar(e)}  component={Input} label={"Designation Code"} />
        </div>
        <div style={{ padding: 10 }} className="mb-3">
          <Field  validator={minValueValidator} name={"desgDetails"} component={Input} label={"Designation Name"} />
        </div>
        <div style={{ padding: 10 }} className="mb-3">
          <Field  name={"qualificationReq"} component={Input} label={"Qualification Req"} />
        </div>
        <div style={{ padding: 10 }} className="mb-3">
        <div style={{ padding: 10 }} className="mb-3">
          <Field  name={"desgInTelugu"} component={Input} label={"Designation in Telugu"} />
        </div>
        <Field
                id={"experienceReq"}
                name={"experienceReq"}
                label={"Experience Req"}
                format={"n0"}
                component={NumericTextBox}
              />
       </div>

      </fieldset>
      <div style={{ paddingLeft: 10 }} className="k-form-buttons">
        <button type={"submit"} className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary">
          {btnSave}
        </button>
        <button type={"submit"} className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" onClick={props.cancelEdit}>
          Cancel
        </button>
      </div>
    </FormElement>} />
  </Dialog>;
};

export default AddDesignation;