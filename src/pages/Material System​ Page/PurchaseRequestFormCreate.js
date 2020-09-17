import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import {useHistory} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import '../style/materialSystem.css'
import PurchaseRequestForm from "../../forms/Material System​/PurchaseRequestForm";
import { purchaseRequest, allPurchaseRequest } from '../../redux/actions/materialSystemAction'

const PurchaseRequestFormCreate = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const onSubmit = (formValues) => {
    let form = {
      purchase_request_no: uuidv4(),
      project_code: formValues.ProjectCode,
      warehouse_name: formValues.WarehouseName,
      purchase_category: formValues.PurchaseCategory,
      bill_to_customer: formValues.billToCustomer === "Yes" ? true : false,
      delivery_at: formValues.DeliveryAt,
      required_on : new Date().toISOString(),
      pr_type: formValues.PRType,
      remarks: formValues.Remarks,
      status: "not_reviewed",
      materials: formValues.excelData
    }
    dispatch(purchaseRequest(form,history))
  };

  return (
    <div className="">
      <h3 style={{ textAlign: "center", margin: "1rem 1rem 0 1rem" }}>
        Purchase Request
        </h3>
      <div className="line"></div>
      < PurchaseRequestForm onSubmit={onSubmit} />
    </div>
  )
}

export default PurchaseRequestFormCreate

