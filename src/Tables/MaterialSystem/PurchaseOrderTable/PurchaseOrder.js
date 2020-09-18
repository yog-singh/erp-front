import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import "../Table.css";

const PurchaseOrderTable = props => {
  const [numCol, setNumCol] = useState([1]);
  const Add = e => {
    e.preventDefault();
    setNumCol([...numCol, numCol.length + 1]);
  };
  const onChange = formValues => {
    console.log(formValues);
  };
  return (
    <>
      <div className="">
        <form
          className="displayGrid"
          onChange={props.handleSubmit(onChange)}
        >

        </form>
      </div>
    </>
  );
};
const renderTextField = ({
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    color="primary"
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
    variant="outlined"
  />
);
export default reduxForm({
  form: "PurchaseOrderTable"
})(PurchaseOrderTable);

/* <div className="displayFlex" key={numCol}>
<Field
    name={`No${numCol}`}
    component={renderTextField}
    className="width5 margin0"
/>
    <Field
        name={`MaterialCode${numCol}`}
        component={renderTextField}
        className="width10 margin0"
    />
    <Field
        name={`MaterialDescription${numCol}`}
        component={renderTextField}
        className="width45 margin0"
    />
    <Field
        name={`HSNSACCode${numCol}`}
        component={renderTextField}
        className="width10 margin0"
    />
    <Field
        name={`UOM${numCol}`}
        component={renderTextField}
        className="width5 margin0"
    />
    <Field
        name={`Quantity${numCol}`}
        component={renderTextField}
        className="width10 margin0"
    />
    <Field
        name={`suggestedRate${numCol}`}
        component={renderTextField}
        className="width10 margin0"
    />
    <Field
        name={`MaterialTotal${numCol}`}
        component={renderTextField}
        className="width10 margin0"
    />
              </div >*/