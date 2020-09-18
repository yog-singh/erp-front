import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "../style/materialSystem.css";
import PurchaseRequestForm from "../../forms/Material System/PurchaseRequestForm";
import {
  purchaseRequest,
  allPurchaseRequest
} from "../../redux/actions/materialSystemAction";

const PurchaseRequestFormCreate = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = formValues => {
    dispatch(purchaseRequest(formValues, history));
  };

  return (
    <div style={{ paddingTop: "80px" }}>
      <h3 style={{ textAlign: "center", margin: "1rem 1rem 0 1rem" }}>
        Purchase Request
      </h3>
      <div className="line"></div>
      <PurchaseRequestForm onSubmit={onSubmit} />
    </div>
  );
};

export default PurchaseRequestFormCreate;
