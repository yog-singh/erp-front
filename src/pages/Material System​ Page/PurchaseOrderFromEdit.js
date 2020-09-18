import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import _ from "lodash";
import { connect } from "react-redux";
import PurchaseOrderForm from "../../forms/Material System/PurchaseOrder​Form";
import "../style/materialSystem.css";

const PurchaseOrderFromEdit = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch();
  }, []);
  const onSubmit = (formValues, history) => {
    console.log(formValues);
    dispatch(formValues);
  };
  return (
    <div style={{ paddingTop: "65px" }}>
      <h3
        style={{
          textAlign: "center",
          margin: "1rem 1rem 0 1rem"
        }}
      >
        Edit the Purchase Order
      </h3>
      <div className="line"></div>
      <PurchaseOrderForm
        initialValues={_.pick(
          // this.props.objectName,//chanche the name acc to mapStateToProps return object name
          "BilltoCustomer​",
          "ProjectCodeName",
          "Currency​",
          "WarehouseName",
          "PurchaseCategory",
          "DeliveryAt",
          "RequiredOn",
          "PRType",
          "Remarks",
          "TotalPRValue​"
        )}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default PurchaseOrderFromEdit;
