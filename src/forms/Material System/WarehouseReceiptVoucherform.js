import React from "react";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import ExcelUpload from "../../components/ExcelUpload";
import "./PurchaseOrderAmendmentForm.css";

class WarehouseReceiptVoucherform extends React.Component {
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
              style={{ width: "45%", margin: "1rem" }}
            />
            <Field
              name="Warehouse"
              component={this.renderTextField}
              label="Warehouse"
              style={{ width: "43%", margin: "1rem" }}
            />
          </div>
          <div className="">
            <Field
              name="GoodsReceiptVoucherNo"
              component={this.renderTextField}
              label="Goods Receipt Voucher No"
              style={{ width: "60%", margin: "1rem" }}
            />
          </div>
          <div>
            <Field
              name="GoodsInspectionVoucherNo​"
              component={this.renderTextField}
              label="Goods Inspection Voucher No​"
              style={{ width: "44%", margin: "1rem" }}
            />
            <Field
              name="GoodsStockType"
              component={this.renderTextField}
              label="Goods Stock Type"
              style={{ width: "44%", margin: "1rem" }}
            />
          </div>
          <div>
            <Field
              name="VendorCode/Name"
              component={this.renderTextField}
              label="Vendor Code / Name"
              style={{ width: "90%", margin: "1rem" }}
            />
          </div>
          <div>
            <Field
              name="CustomerCode/Name"
              component={this.renderTextField}
              label="CustomerCode/Name"
              style={{ width: "90%", margin: "1rem" }}
            />
          </div>
          <div>
            <Field
              name="WarehouseCode/Name​"
              component={this.renderTextField}
              label="Warehouse Code / Name​"
              style={{ width: "90%", margin: "1rem" }}
            />
          </div>
          <div>
            <Field
              name="DeliveryChallanNo​"
              component={this.renderTextField}
              label="Delivery Challan No​"
              style={{ width: "25%", margin: "1rem" }}
            />
            <Field
              name="DeliveryDate​"
              component={this.renderTextField}
              label="Delivery Date"
              style={{ width: "17%", margin: "1rem" }}
            />
            <Field
              name="LR/RR/Consignment No​"
              component={this.renderTextField}
              label="LR / RR / Consignment No​​"
              style={{ width: "25%", margin: "1rem" }}
            />
            <Field
              name="LRDate​"
              component={this.renderTextField}
              label="LR Date​"
              style={{ width: "16%", margin: "1rem" }}
            />
          </div>
          <div>
            <Field
              name="DateofReceipt​"
              component={this.renderTextField}
              label="Date of Receipt​"
              style={{ width: "28%", margin: "1rem" }}
            />
            <Field
              name="Batch/IdentificationNo​"
              component={this.renderTextField}
              label="Batch / Identification No​"
              style={{ width: "28%", margin: "1rem" }}
            />
            <Field
              name="StoredAt​"
              component={this.renderTextField}
              label="Stored At​"
              style={{ width: "28%", margin: "1rem" }}
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
    "Warehouse",
    "StoredAt​",
    "VendorCode/Name",
    "CustomerCode/Name",
    "WarehouseCode/Name​",
    "DeliveryChallanNo​",
    "DeliveryDate​",
    "LR/RR/Consignment No​",
    "LRDate​",
    "DateofReceipt​",
    "Batch/IdentificationNo​",
    "Unloaded At​",
    "GoodsReceiptVoucherNo",
    "GoodsInspectionVoucherNo​",
    "GoodsStockType"
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  return errors;
};

export default reduxForm({
  form: "GoodsReceiptVoucherForm",
  validate
})(WarehouseReceiptVoucherform);
