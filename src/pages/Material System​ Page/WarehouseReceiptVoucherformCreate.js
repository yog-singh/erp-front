import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import '../style/materialSystem.css'
import WarehouseReceiptVoucherform from "../../forms/Material System/WarehouseReceiptVoucherform";
import {warehouseReceiptVpucher } from '../../redux/actions/materialSystemAction'


const WarehouseReceiptVoucherformCreate = () => {
  const dispatch = useDispatch()

  
  const onSubmit = (formValues) => {
    console.log(formValues);
    dispatch(warehouseReceiptVpucher(formValues))
  };
  return (
    <div className="">
      <h3 style={{ textAlign: "center", margin: "1rem 1rem 0 1rem" }}>
        Warehouse Receipt Voucher form
        </h3>
      <div className="line"></div>
      <WarehouseReceiptVoucherform onSubmit={onSubmit} />
    </div>
  )
}

export default WarehouseReceiptVoucherformCreate
