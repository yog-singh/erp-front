import TextField from "@material-ui/core/TextField";
import React, { useState, useEffect } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import "../Table.css";

const PurchaseRequestTable = props => {
  const [inputFields, setInputFields] = useState([
    {
      No: "",
      MaterialCode: "",
      MaterialDescription: "",
      HSNSACCode: "",
      UOM: "",
      Quantity: "",
      SuggestedRate: "",
      MaterialTotal: "",
      id: ""
    }
  ]);
  useEffect(() => {
    const { materials } = props;
    let values = [];
    if (materials) {
      for (let i = 0; i < materials.length; i++) {
        values = [
          ...values,
          {
            No: materials[i].SerialNo,
            MaterialCode: materials[i].MaterialCode,
            MaterialDescription: materials[i].MaterialDescription,
            HSNSACCode: materials[i].HSNSACCode,
            UOM: materials[i].UOM,
            Quantity: materials[i].Quantity,
            SuggestedRate: materials[i].SuggestedRate,
            MaterialTotal: materials[i].MaterialTotal,
            id: materials[i].id
          }
        ];
      }
      setInputFields(values);
    }
  }, [props.materials]);
  const handleAddFields = e => {
    e.preventDefault();
    setInputFields([
      ...inputFields,
      {
        No: "",
        MaterialCode: "",
        MaterialDescription: "",
        HSNSACCode: "",
        UOM: "",
        Quantity: "",
        SuggestedRate: "",
        MaterialTotal: "",
        id: ""
      }
    ]);
  };
  const handleRemoveFields = (e, index) => {
    e.preventDefault();
    const values = [...inputFields];
    values.splice(index, 1);
    props.tableData(values);
    setInputFields(values);
  };

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };
  const onChange = () => {
    props.tableData(inputFields);
  };

  return (
    <>
      <div>
        <form className="displayGrid table-responsive" onChange={onChange}>
          <div className="displayFlex">
            <h6 className="width5">
              <span> No. </span>
            </h6>
            <h6 className="width10">
              <span> Material Code </span>
            </h6>
            <h6 className="width45">
              <span> Material Description </span>
            </h6>
            <h6 className="width10">
              <span> HSN / SAC Code </span>
            </h6>
            <h6 className="width5">
              <span> UOM </span>
            </h6>
            <h6 className="width10">
              <span> Quantity </span>
            </h6>
            <h6 className="width10">
              <span> Suggested Rate </span>
            </h6>
            <h6 className="width10">
              <span> Material Total </span>
            </h6>
          </div>
          <div className="field">
            {inputFields.map((inputField, index) => (
              <div className="displayFlex" key={index}>
                <TextField
                  color="primary"
                  variant="outlined"
                  className="width5"
                  name="No"
                  value={inputField.No}
                  onChange={event => handleChangeInput(index, event)}
                />
                <TextField
                  color="primary"
                  variant="outlined"
                  className="width10"
                  name="MaterialCode"
                  value={inputField.MaterialCode}
                  onChange={event => handleChangeInput(index, event)}
                />
                <TextField
                  color="primary"
                  variant="outlined"
                  className="width45"
                  name="MaterialDescription"
                  value={inputField.MaterialDescription}
                  onChange={event => handleChangeInput(index, event)}
                />
                <TextField
                  color="primary"
                  variant="outlined"
                  className="width10"
                  name="HSNSACCode"
                  value={inputField.HSNSACCode}
                  onChange={event => handleChangeInput(index, event)}
                />
                <TextField
                  color="primary"
                  variant="outlined"
                  className="width5"
                  name="UOM"
                  value={inputField.UOM}
                  onChange={event => handleChangeInput(index, event)}
                />
                <TextField
                  color="primary"
                  variant="outlined"
                  className="width10"
                  name="Quantity"
                  value={inputField.Quantity}
                  onChange={event => handleChangeInput(index, event)}
                />
                <TextField
                  color="primary"
                  variant="outlined"
                  className="width10"
                  name="SuggestedRate"
                  value={inputField.SuggestedRate}
                  onChange={event => handleChangeInput(index, event)}
                />
                <TextField
                  color="primary"
                  variant="outlined"
                  className="width10"
                  name="MaterialTotal"
                  value={inputField.MaterialTotal}
                  onChange={event => handleChangeInput(index, event)}
                />
                <RemoveCircleIcon
                  className="width5"
                  onClick={e => handleRemoveFields(e, index)}
                />
              </div>
            ))}
          </div>
          <div className="buttonFlex">
            <button onClick={e => handleAddFields(e)}>
              <AddCircleIcon />
              ADD Row
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PurchaseRequestTable;
