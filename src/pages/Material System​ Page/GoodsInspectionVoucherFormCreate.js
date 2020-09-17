import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import GoodsInspectionVoucherForm from "../../forms/Material System​/GoodsInspectionVoucherForm";
import '../style/materialSystem.css'
import {goodsInspectVoucher} from '../../redux/actions/materialSystemAction'


const GoodsInspectionVoucherFormCreate = () => {
 const dispatch = useDispatch()
  const onSubmit = (formValues) => {
    dispatch(goodsInspectVoucher(formValues))
  }
  return (
    <div>
      <h3 style={{ textAlign: "center", margin: "1rem 1rem 0 1rem" }}>
        Goods Inspection Voucher
        </h3>
      <div className="line"></div>
      <GoodsInspectionVoucherForm onSubmit={onSubmit} />
    </div>
  )
}

export default GoodsInspectionVoucherFormCreate

