import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import GoodsReceiptVoucherForm from "../../forms/Material System​/GoodsReceiptVoucherForm";
import '../style/materialSystem.css'
import { goodsReceiptVoucher} from '../../redux/actions/materialSystemAction'


const GoodsReceiptVoucherFormCreate = () => {
  const dispatch = useDispatch()
  const onSubmit = (formValues) => {
    console.log(formValues);
    dispatch(goodsReceiptVoucher(formValues))
  };
  return (
    <div>
      <h3 style={{ textAlign: "center", margin: "1rem 1rem 0 1rem" }}>
        Goods Receipt Voucher
        </h3>
      <div className="line"></div>
      <GoodsReceiptVoucherForm onSubmit={onSubmit} />
    </div>
  )
}

export default GoodsReceiptVoucherFormCreate


