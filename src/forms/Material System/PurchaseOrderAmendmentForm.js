import React from "react";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import ExcelUpload from "../../components/ExcelUpload";
import "./PurchaseOrderAmendmentForm.css";

class PurchaseOrderAmendmentForm extends React.Component {
  state = { excelData: null, excelError: false, excelTouch: false };
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
      style={{ minWidth: "20%", margin: "1.2rem" }}
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
      console.log({ ...formValues, excelData: this.state.excelData });
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
              name="ProjectCode/Name"
              component={this.renderTextField}
              label="ProjectCode / Name"
              style={{ width: "90%", margin: "1rem" }}
            />
          </div>
          <div>
            <Field
              name="CustomerName"
              component={this.renderTextField}
              label="Customer Name"
              style={{ width: "44%", margin: "1rem" }}
            />
            <Field
              name="PurchaseOrderNo"
              component={this.renderTextField}
              label="Purchase Order No"
              style={{ width: "44%", margin: "1rem" }}
            />
          </div>
          <div className="">
            <Field
              name="Date"
              component={this.renderTextField}
              label="Date"
              style={{ width: "25%", margin: "1rem" }}
            />
            <Field
              name="LastAmendmentNo"
              component={this.renderTextField}
              label="Last Amendment No"
              style={{ width: "20%", margin: "1rem" }}
            />
            <Field
              name="LastDate"
              component={this.renderTextField}
              label="Last Date"
              style={{ width: "25%", margin: "1rem" }}
            />
          </div>
          <div className="">
            <Field
              name="OurRefNo/Date"
              component={this.renderTextField}
              label="OurRef. No / Date"
              style={{ width: "44%", margin: "1rem" }}
            />
            <Field
              name="YourRefNo/Date"
              component={this.renderTextField}
              label="Your Ref. No / Date"
              style={{ width: "44%", margin: "1rem" }}
            />
          </div>
          <div className="">
            <Field
              name="VendorCode/Name"
              component={this.renderTextField}
              label="Vendor Code / Name"
              style={{ width: "90%", margin: "1rem" }}
            />
          </div>
          <div className="">
            <Field
              name="Warehouse"
              component={this.renderTextField}
              label="Warehouse"
              style={{ width: "44%", margin: "1rem" }}
            />
            <Field
              name="DeliveryAt"
              component={this.renderTextField}
              label="Delivery At"
              style={{ width: "44%", margin: "1rem" }}
            />
          </div>
          <div className="">
            <Field
              name="DeliveryPeriodFrom"
              component={this.renderTextField}
              label="Delivery Period From"
              style={{ width: "33%", margin: "1rem" }}
              className="dateTransparent"
            />
            <Field
              name="DeliveryPeriodTo"
              component={this.renderTextField}
              label="Delivery Period To"
              style={{ width: "33%", margin: "1rem" }}
            />
            <Field
              component={this.renderSelectField}
              name="Inspection"
              label="Inspection"
            >
              <option value="" />
              <option value={"Yes"}>Yes</option>
              <option value={"No"}>No​</option>
            </Field>
          </div>
          <div className="">
            <Field
              name="PaymentTerms"
              component={this.renderTextField}
              label="Payment Terms"
              style={{ width: "16%", margin: "1rem" }}
            />
            <Field
              name="Percente(%)"
              component={this.renderTextField}
              label="Percente(%)"
              style={{ width: "25%", margin: "1rem" }}
            />
            <Field
              name="Days"
              component={this.renderTextField}
              label="Days"
              style={{ width: "16%", margin: "1rem" }}
            />
            <Field
              name="Currency"
              component={this.renderTextField}
              label="Currency"
              style={{ width: "28%", margin: "1rem" }}
            />
          </div>
          <div className="">
            <Field
              name="LDClause"
              component={this.renderTextField}
              label="LD Clause"
              style={{ width: "44%", margin: "1rem" }}
            />
            <Field
              name="PriceVariationClause"
              component={this.renderTextField}
              label="Price Variation Clause"
              style={{ width: "44%", margin: "1rem" }}
            />
          </div>
          <div className="">
            <Field
              name="RevisedPurchaseOrderValueInclAmendment"
              component={this.renderTextField}
              label="Revised Purchase Order Value Incl. Amendment"
              style={{ width: "44%", margin: "1rem" }}
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
    "ProjectCode/Name",
    "CustomerName",
    "PurchaseOrderNo",
    "RevisedPurchaseOrderValueInclAmendment",
    "Date",
    "LastAmendmentNo",
    "LastDate",
    "OurRefNo/Date",
    "YourRefNo/Date",
    "VendorCode/Name",
    "VendorGSTNo",
    "FNCGSTNo",
    "Warehouse",
    "DeliveryAt",
    "DeliveryPeriodFrom",
    "DeliveryPeriodTo",
    "Inspection",
    "PaymentTerms",
    "Percente(%)",
    "Days",
    "Currency",
    "LDClause",
    "PriceVariationClause",
    "PurchaseOrderValue"
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  return errors;
};

export default reduxForm({
  form: "PurchaseOrderAmendmentForm",
  validate
})(PurchaseOrderAmendmentForm);
