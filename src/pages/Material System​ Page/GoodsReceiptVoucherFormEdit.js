import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import _ from "lodash";
import GoodsReceiptVoucherForm from "../../forms/Material System/GoodsReceiptVoucherForm";

import '../style/materialSystem.css'


const GoodsReceiptVoucherFormEdit = () => {
  const store = useSelector(store => store)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch()
    //dispatch an action and get the form data which u want to edit.
  },[])
  const onSubmit = (formValues) => {
    //dispatch an action
  }
  return (
    <div>
      <h3 style={{ textAlign: "center", margin: "1rem 1rem 0 1rem" }}>
        Goods Receipt Voucher Edit
        </h3>
      <div className="line"></div>
      <GoodsReceiptVoucherForm
        initialValues={_.pick(
          //    this.props.objectName, //chanche the name acc to mapStateToProps return object name
          "ProjectCode/Name",
          "CustomerName",
          "warehouse",
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
          "GoodsReceiptType"
        )}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default GoodsReceiptVoucherFormEdit
