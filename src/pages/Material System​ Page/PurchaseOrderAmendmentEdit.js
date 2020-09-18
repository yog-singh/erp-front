import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import _ from "lodash";
import PurchaseOrderAmendmentForm from "../../forms/Material System/PurchaseOrderAmendmentForm";
import '../style/materialSystem.css'


const PurchaseOrderAmendmentEdit = () => {
  const store = useSelector(store => store)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch()
    //dispatch an action, and get the data so that u can edit the form
  }, [])
  const onSubmit = (formValues) => {
    console.log(formValues)
    // this.props.patchPurchaseOrderForm(this.props.match.params.id, formValues);
  };
  return (
    <div>
      <h3 style={{ textAlign: "center", margin: "1rem 1rem 0 1rem" }}>
        Purchase Order Amendment Edit
        </h3>
      <div className="line"></div>
      <PurchaseOrderAmendmentForm
        initialValues={_.pick(
          //    this.props.objectName, //chanche the name acc to mapStateToProps return object name
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
        )}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default PurchaseOrderAmendmentEdit

