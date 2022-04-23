import React, { useEffect, useState } from "react";
import { Dialog } from "@progress/kendo-react-dialogs";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input, NumericTextBox,TextArea,MaskedTextBox,Checkbox } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Error } from "@progress/kendo-react-labels";
import '../department/department.css';
import {
    DatePicker,
    TimePicker,
    DateTimePicker,
    DateRangePicker,
    DateInput,
  } from "@progress/kendo-react-dateinputs";


const minValueValidator = (value) =>
!!value ? "" : "The field is required.";
const phoneRegex = new RegExp(/^[0-9 ()+-]+$/);
const phoneValidator = (value) =>
  !value
    ? "Phone number is required."
    : phoneRegex.test(value)
    ? ""
    : "Not a valid phone number.";
const acceptSixtChar = (e) => {
  debugger;
  if (e.target.value.length > 5) {
    e.preventDefault();
  }
};

const AddContractor = (props) => {

  const actionText = props.action == 'Add' ? 'Save' : 'Update';
  const [Title, setTitle] = useState(props.action + ' Contractor')
  const [btnSave, setbtnSave] = useState(actionText)

  return <Dialog title={Title} onClose={props.cancelEdit}>
    <Form onSubmit={props.onSubmit} initialValues={props.action == 'Edit' && props.item} render={formRenderProps => <FormElement style={{
      maxWidth: 650, width: 400, height: 300
    }}>
      <fieldset className={"k-form-fieldset"}>
        <div style={{ padding: 10 }} className="mb-3">
          <Field  validator={minValueValidator} name={"name"} component={Input} label={"Contractor Name"} />
        </div>
        <div style={{ padding: 10 }} className="mb-3">
        <Field
                id={"seriesFrom"}
                name={"seriesFrom"}
                label={"Series From"}
                format={"n0"}
                component={NumericTextBox}
                />
        </div>
        <div style={{ padding: 10 }} className="mb-3">
        <Field
                id={"seriesTo"}
                name={"seriesTo"}
                label={"Series To"}
                format={"n0"}
                component={NumericTextBox}
                />
        </div>
        <div style={{ padding: 10 }} className="mb-3">
          <Field  name={"address"} component={TextArea} label={"Address"} />
        </div>
        <div style={{ padding: 10 }} className="mb-3">
          <Field  name={"contact"} component={MaskedTextBox} label={"Contact"} mask={"(999) 000-00-00-00"} hint={"Hint: Your active phone number."} validator={phoneValidator} />
        </div>
        <div style={{ padding: 10 }} className="mb-3">
          <Field  name={"doj"} component={DatePicker} label={"DOJ"} />
        </div>
        <div style={{ padding: 10 }} className="mb-3">
          <Field   name={"isCompany"} component={Checkbox} label={"IsCompany"} />
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

export default AddContractor;