import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

const MaterialSystemDropdown = () => {
    const userData = useSelector(store => store.userRoot)
    return (
        <>
            <h3>Name: {userData.user.name}</h3>
            <h5>Role: {userData.user.role}</h5>
            <div class="dropdown">
                <Link class="btn btn-info dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Material System </Link>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <Link class="dropdown-item " to="/purchaseRequest">Purchase Request</Link>
                    <Link class="dropdown-item" to="#">Purchase Order</Link>
                    <Link class="dropdown-item" to="#">Order Amendment</Link>
                    <Link class="dropdown-item " to="#">Warehouse Issue Voucher</Link>
                    <Link class="dropdown-item" to="#">Deleivery Challan</Link>
                    <Link class="dropdown-item" to="#">Goods Receipt Voucher</Link>
                    <Link class="dropdown-item" to="#">Goods Inspection Voucher</Link>
                    <Link class="dropdown-item" to="#">Warehouse Receipt Voucher</Link>
                    <Link class="dropdown-item" to="#">Warehouse Return Voucher</Link>
                    <Link class="dropdown-item" to="#">Physical Verification</Link>
                </div>
            </div>
        </>
    )
}
export default MaterialSystemDropdown
