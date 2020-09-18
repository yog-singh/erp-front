import React from "react";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Table from "../../Tables/MaterialSystem/PurchaseRequestTable/PurchaseRequestTable";
import "./PurchaseRequestForm.css";
class PurchaseRequestForm extends React.Component {
  state = {
    tableData: null,
    tableError: false,
    tableErrorKind: "",
    isSubmit: false,
    both: false
  };
  excelData = data => {
    this.setState({ excelData: data, excelError: false });
  };
  tableData = data => {
    if (data.error) {
      this.setState({ tableErrorKind: data.errorKind, tableError: true });
    } else {
      this.setState({ tableData: data, tableErrorKind: "", tableError: false });
    }
  };
  handleSubmit = formValues => {
    console.log(formValues);
    this.onSubmit(formValues);
  };
  onSubmit = formValues => {
    if (!this.state.tableData) {
      this.setState({ tableError: true });
    } else if (this.state.tableData) {
      console.log({ ...formValues, tableData: this.state.tableData });
      this.props.onSubmit({ ...formValues, tableData: this.state.tableData });
      this.setState({ tableError: false });
    }
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
  render() {
    return (
      <div className="formcontainer">
        <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
          <div>
            <Field
              name="ProjectCodeName"
              component={this.renderTextField}
              label="ProjectCode / Name"
              style={{ width: "90%", margin: "1rem" }}
            />
          </div>
          <div >
            <Field
              name="Currency"
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
              name="BilltoCustomer"
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
          <div>
            <Field
              name="TotalPRValue"
              component={this.renderTextField}
              label="Total PR Value​"
              style={{ width: "20%", margin: "1rem" }}
            />
          </div>
          <div className="">
            <Table
              tableData={this.tableData}
              materials={this.props.materials}
            />
            <div className="middle">
              <p className=" Mui-error excelError">
                {this.state.tableError ? `${this.state.tableErrorKind}` : ""}
              </p>
            </div>
          </div>
          <div className="middle">
            <p className=" Mui-error excelError">
              {this.state.both
                ? "You cannot send both table and excel data"
                : ""}
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
    "TotalPRValue",
    "BilltoCustomer",
    "ProjectCodeName",
    "Currency",
    "WarehouseName",
    "PurchaseCategory",
    "DeliveryAt",
    "RequiredOn",
    "PRType",
    "Remarks"
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
  validate,
  enableReinitialize: true
})(PurchaseRequestForm);
