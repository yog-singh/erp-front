import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  editPurchaseRequest,
  searchPurchaseRequestById
} from "../../redux/actions/materialSystemAction";
import _ from "lodash";
import "../style/materialSystem.css";
import PurchaseRequestForm from "../../forms/Material System/PurchaseRequestForm";

const PurchaseRequestFormEdit = props => {
  const [purchaseRequest, setPurchaseRequest] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();
  const store = useSelector(store => store.materialSystemRoot);

  useEffect(() => {
    dispatch(searchPurchaseRequestById(props.match.params.purchaseRequestId));
  }, [props.match.params.purchaseRequestId]);

  useEffect(() => {
    if (store.SinglePurchaseRequest) {
      setPurchaseRequest(store.SinglePurchaseRequest);
    }
  }, [store.SinglePurchaseRequest]);

  const onSubmit = (formValues,history) => {
    console.log(history);
    dispatch(
      editPurchaseRequest(formValues, props.match.params.purchaseRequestId,history)
    );
  };
  return (
    <div className="">
      <h3 style={{ textAlign: "center", margin: "1rem 1rem 0 1rem" }}>
        Purchase Request Edit
      </h3>
      <div className="line"></div>
      <PurchaseRequestForm
        onSubmit={onSubmit}
        initialValues={_.pick(
          purchaseRequest,
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
        )}
        materials={purchaseRequest.materials}
        isEdit={true}
      />
    </div>
  );
};

export default PurchaseRequestFormEdit;
