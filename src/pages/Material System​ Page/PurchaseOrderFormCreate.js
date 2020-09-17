import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import '../style/materialSystem.css'
import PurchaseOrderForm from '../../forms/Material System​/PurchaseOrder​Form'
import { purchaseOrder} from '../../redux/actions/materialSystemAction'

const PurchaseOrderFormCreate = () => {
    const dispatch = useDispatch()
    const onSubmit = (formValues) => {
        console.log(formValues)
        dispatch(purchaseOrder(formValues))
    }
    return (
        <div>
            <h3 style={{ textAlign: "center", margin: "1rem 1rem 0 1 rem" }}>Purchase Order</h3>
            <div className="line"></div>
            <PurchaseOrderForm onSubmit={onSubmit}/>
        </div>
    )
}

export default PurchaseOrderFormCreate
