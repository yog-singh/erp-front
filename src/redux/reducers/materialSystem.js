import {
    SET_GOODS_INSPECTION_VOUCHER, SET_GOODS_RECEIPT_VOUCHER,
SET_PURCHASE_ORDER_AMENDMENT, SET_PURCHASE_ORDER, SET_PURCHASE_REQUEST,
    WAREHOUSE_RECEIPT_VOUCHER
} from '../actions/actionTypes'


const initialState = {
    GoodsInspectionVoucher: {},
    GoodsReceiptVoucher: {},
    PurchaseOrderAmendment: {},
    PurchaseOrder: {},
    PurchseRequest: {},
    WarehouseReceiptVoucher: {},
    SinglePurchaseRequest: {},
    AllPurchaseRequest: []
}


const materialSystemReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GOODS_INSPECTION_VOUCHER: {
            return {
                ...state,
                GoodsInspectionVoucher: action.payload
            }
        }
        case SET_GOODS_RECEIPT_VOUCHER: {
            return {
                ...state,
                GoodsReceiptVoucher: action.payload
            }
        }
        case SET_PURCHASE_ORDER_AMENDMENT: {
            return {
                ...state,
                PurchaseOrderAmendment: action.payload
            }
        }
        case SET_PURCHASE_ORDER: {
            return {
                ...state,
                PurchaseOrder: action.payload
            }
        }
        case SET_PURCHASE_REQUEST: {
            return {
                ...state,
                PurchseRequest: action.payload
            }
        } 
        case WAREHOUSE_RECEIPT_VOUCHER: {
            return {
                ...state,
                WarehouseReceiptVoucher: action.payload
            }
        } 
        case "SET_SINGLE_PURCHASE_REQUEST": {
            return {
                ...state,
                SinglePurchaseRequest: action.payload
            }
        } 
        case "SET_ALL_PURCHASE_REQUEST": {
            return {
                ...state,
                AllPurchaseRequest: action.payload
            }
        } 
            
        default:
            return state
            
    }
}


export default materialSystemReducer