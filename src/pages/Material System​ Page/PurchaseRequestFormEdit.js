import React, {useEffect, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux'
import {editPurchaseRequest,searchPurchaseRequestById} from '../../redux/actions/materialSystemAction'
import _ from "lodash";
import '../style/materialSystem.css'
import PurchaseOrderForm from "../../forms/Material System​/PurchaseRequestForm";


const PurchaseRequestFormEdit = (props) => {
  const [purchaseRequest, setPurchaseRequest] = useState({})
  const dispatch = useDispatch()
  const store = useSelector(store=>store.materialSystemRoot)

  useEffect(() => {
    dispatch(searchPurchaseRequestById(props.match.params.purchaseRequestId))
  }, [props.match.params.purchaseRequestId])

  useEffect(() => {
    if (store.SinglePurchaseRequest) {
      setPurchaseRequest(store.SinglePurchaseRequest)
    }
  }, [store.SinglePurchaseRequest])



  const onSubmit = (formValues) => {
    let form = {
     purchase_request_no: uuidv4(),
      id: props.match.params.purchaseRequestId,
      project_code: formValues.ProjectCode,
      warehouse_name: formValues.WarehouseName,
      purchase_category: formValues.PurchaseCategory,
      bill_to_customer: formValues.BilltoCustomer === "Yes" ? true : false,
      delivery_at: formValues.DeliveryAt,
      required_on: new Date().toISOString(),
      pr_type: formValues.PRType,
      remarks: formValues.Remarks,
      status: "clear",
      materials: formValues.excelData
    }
    dispatch(editPurchaseRequest(form))
  }
  return (
    <div className="">
      {console.log("dgww",purchaseRequest)}
      <h3 style={{ textAlign: "center", margin: "1rem 1rem 0 1rem" }}>
        Purchase Request Edit
        </h3>
      <div className="line"></div>
      <PurchaseOrderForm onSubmit={onSubmit}
        initialValues={purchaseRequest}
        // initialValues={_.pick(
        //   "BilltoCustomer​",
        //   "ProjectCode/Name",
        //   "Currency​",
        //   "WarehouseName",
        //   "PurchaseCategory",
        //   "DeliveryAt",
        //   "RequiredOn",
        //   "PRType",
        //   "Remarks",
        //   "TotalPRValue​")}
      />
    </div>
  )
}

export default PurchaseRequestFormEdit
