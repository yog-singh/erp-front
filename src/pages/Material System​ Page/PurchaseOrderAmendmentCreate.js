import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import PurchaseOrderAmendmentForm from "../../forms/Material System/PurchaseOrderAmendmentForm";
import '../style/materialSystem.css'
import { purchaseOrderAmendment} from '../../redux/actions/materialSystemAction'


const PurchaseOrderAmendmentCreate = () => {
  const dispatch = useDispatch()
  const onSubmit = (formValues) => {
    console.log(formValues)
    dispatch(purchaseOrderAmendment(formValues))
  }
  return (
    <div>
      <h3 style={{ textAlign: "center", margin: "1rem 1rem 0 1rem" }}>
        Purchase Order Amendment
        </h3>
      <div className="line"></div>
      <PurchaseOrderAmendmentForm onSubmit={onSubmit} />
    </div>
  )
}

export default PurchaseOrderAmendmentCreate


