import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import _ from "lodash";
import '../style/materialSystem.css'
import WarehouseReceiptVoucherform from "../../forms/Material System/WarehouseReceiptVoucherform";



const WarehouseReceiptVoucherformEdit = () => {
  const store = useSelector(store => store)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch()
    
  },[])
  const onSubmit = (formValues) => {
    dispatch()
  }
  return (
    <div className="">
      <h3 style={{ textAlign: "center", margin: "1rem 1rem 0 1rem" }}>
        Warehouse Receipt Voucher Edit
        </h3>
      <div className="line"></div>
      <WarehouseReceiptVoucherform
        onSubmit={onSubmit}
        initialValues={_.pick(
          // this.props.objectName,chanche the name acc to mapStateToProps return object name
          "ProjectCode/Name",
          "CustomerName",
          "Warehouse",
          "StoredAt​",
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
          "GoodsReceiptVoucherNo",
          "GoodsInspectionVoucherNo​",
          "GoodsStockType"
        )}
      />
    </div>
  )
}

export default WarehouseReceiptVoucherformEdit

