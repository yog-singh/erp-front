import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import _ from "lodash";
import GoodsInspectionVoucherForm from "../../forms/Material System/GoodsInspectionVoucherForm";
import '../style/materialSystem.css'



const GoodsInspectionVoucherFormEdit = (props) => {
  const store = useSelector(store => store)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch()
    //Dispatch an action , get the data and edit this form
  }, [])

  const onSubmit = (formValues) => {
    //Pass here form Value and id which u will get from params(props.match.params.id,formValues)
  }
  return (
    <div>
      <h3 style={{ textAlign: "center", margin: "1rem 1rem 0 1rem" }}>
        Goods Inspection Voucher Edit
        </h3>
      <div className="line"></div>
      <GoodsInspectionVoucherForm
        initialValues={_.pick(
          //    this.props.objectName, //chanche the name acc to mapStateToProps return object name
          "ProjectCode/Name",
          "CustomerName",
          "Warehouse",
          "Purchase/SalesOrderNo​",
          "PurchaseDate",
          "PurchaseRequestNo",
          "Date",
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
          "GoodsReceiptVoucherNo"
        )}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default GoodsInspectionVoucherFormEdit

