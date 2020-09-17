import React from "react";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import ExcelUpload from "../../components/ExcelUpload";
import "./PurchaseRequestForm.css";

class PurchaseRequestForm extends React.Component {
  state = { excelData: null, excelError: false };
  excelData = data => {
    this.setState({ excelData: data, excelError: false });
  };
  renderFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
      return;
    } else {
      return <FormHelperText>{touched && error}</FormHelperText>;
    }
  };

  renderSelectField = ({
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
  }) => (
    <FormControl
      error={touched && error}
      style={{ minWidth: "30%", margin: "1.2rem" }}
    >
      <InputLabel htmlFor="selectField" variant="outlined">
        {label}
      </InputLabel>
      <Select native {...input} {...custom} id="selectField">
        {children}
      </Select>
      {this.renderFromHelper({ touched, error })}
    </FormControl>
  );
  renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
  }) => (
    <TextField
      color="primary"
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  );
  onSubmit = formValues => {
    if (!this.state.excelData) {
      this.setState({ excelError: true });
    } else {
      this.props.onSubmit({ ...formValues, excelData: this.state.excelData });     
      this.setState({ excelError: false });
    }
  };
  render() {
    return (
      <div className="formcontainer">
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div>
            <Field
              name="ProjectCode"
              component={this.renderTextField}
              label="ProjectCode / Name"
              style={{ width: "90%", margin: "1rem" }}
            />
          </div>
          <div className="">
            <Field
              name="Currency​"
              label="Currency"
              component={this.renderTextField}
              style={{ width: "20%", margin: "1rem" }}
            />
            <Field
              name="WarehouseName"
              label="Warehouse Name"
              component={this.renderTextField}
              style={{ width: "20%", margin: "1rem" }}
            />
            <Field
              component={this.renderSelectField}
              name="PurchaseCategory"
              label="Purchase Category"
            >
              <option value="" />
              <option value={"ProjectSite"}>Project Site</option>
              <option value={"HeadOffice​"}>Head Office​</option>
            </Field>
          </div>
          <div className="">
            <Field
              component={this.renderSelectField}
              name="billToCustomer​"
              label="Bill to Customer (For Project PR)​"
            >
              <option value="" />
              <option value={"Yes"}>Yes</option>
              <option value={"No​"}>No​</option>
            </Field>
            <Field
              component={this.renderSelectField}
              name="DeliveryAt"
              label="Delivery At"
            >
              <option value="" />
              <option value="Customer WH">Customer WH</option>
              <option value={"Own Premises​"}>Own Premises​</option>
              <option value={"Central WH​​"}>Central WH​​</option>
            </Field>
          </div>
          <div>
            <Field
              name="RequiredOn"
              component={this.renderTextField}
              label="Required On"
              style={{ width: "20%", margin: "1rem" }}
            />
            <Field
              component={this.renderSelectField}
              name="PRType"
              label="PR Type"
            >
              <option value="" />
              <option value="Customer WH">Project​</option>
              <option value={"Own Premises​"}>Revenue​​</option>
              <option value={"Central WH​​"}>Machine​</option>
            </Field>
          </div>
          <div className="">
            <Field
              name="Remarks"
              component={this.renderTextField}
              label="Remarks"
              type="text"
              style={{ width: "90%", margin: "1rem" }}
            />
          </div>
          <div className="">
            <Field
              name="TotalPRValue​"
              component={this.renderTextField}
              label="Total PR Value​"
              type="number"
              style={{ width: "20%", margin: "1rem" }}
            />
          </div>
          <div className="excel ">
            <ExcelUpload
              excelData={this.excelData}
              error={this.state.excelError}
            />
            <p className=" Mui-error excelError">
              {this.state.excelError ? "Requires" : ""}
            </p>
          </div>
          <div className="middle">
            <button
              type="submit"
              style={{
                color: "#fff",
                backgroundColor: "#17a2b8",
                borderColor: "#17a2b8",
                border: "1px solid transparent",
                padding: ".375rem .75rem",
                fontSize: "1rem",
                lineHeight: "1.5",
                borderRadius: "0.25rem",
                width: "20%"
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const validate = values => {
  const errors = {};
  const requiredFields = [
    "billToCustomer​",
    "ProjectCode",
    "Currency​",
    "WarehouseName",
    "PurchaseCategory",
    "DeliveryAt",
    "RequiredOn",
    "PRType",
    "Remarks",
    "TotalPRValue​"
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  return errors;
};

export default reduxForm({
  form: "PurchaseRequestForm",
  validate
})(PurchaseRequestForm);
