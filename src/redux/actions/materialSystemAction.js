import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../helper/setAuthToken";

export const goodsInspectVoucher = formvalues => {
  return async dispatch => {
    try {
    } catch (err) {
      dispatch();
      console.log("Error in userLogin Action", err.message);
    }
  };
};

export const goodsReceiptVoucher = formvalues => {
  return async dispatch => {
    try {
    } catch (err) {
      dispatch();
      console.log("Error in userLogin Action", err.message);
    }
  };
};

export const purchaseOrderAmendment = formvalues => {
  return async dispatch => {
    try {
    } catch (err) {
      dispatch();
      console.log("Error in userLogin Action", err.message);
    }
  };
};
export const purchaseOrder = formvalues => {
  return async dispatch => {
    try {
    } catch (err) {
      dispatch();
      console.log("Error in userLogin Action", err.message);
    }
  };
};
export const purchaseRequest = (formData, history) => {
  return async dispatch => {
    try {
      console.log(formData);
      const { data } = await axios({
        method: "Post",
        url:
          "http://ec2-13-233-141-195.ap-south-1.compute.amazonaws.com:3333/purchaseRequest",
        data: formData
      });
      alert("Submitted Successfully");
      history.push("/purchaseRequest");
    } catch (err) {
      console.log("Error in purchaseRequest", err);
    }
  };
};

export const allPurchaseRequest = formData => {
  return async dispatch => {
    try {
      const { data } = await axios({
        method: "Get",
        url:
          "http://ec2-13-233-141-195.ap-south-1.compute.amazonaws.com:3333/purchaseRequest",
        data: formData
      });
      dispatch({
        type: "SET_ALL_PURCHASE_REQUEST",
        payload: data
      });
    } catch (err) {
      console.log("Error in purchaseRequest", err);
    }
  };
};

export const searchPurchaseRequestById = id => {
  return async dispatch => {
    try {
      const { data } = await axios({
        method: "Get",
        url: `http://ec2-13-233-141-195.ap-south-1.compute.amazonaws.com:3333/purchaseRequest/${id}`
      });
      console.log("recent", data);
      dispatch({
        type: "SET_SINGLE_PURCHASE_REQUEST",
        payload: data
      });
    } catch (err) {
      console.log("Error in purchaseRequest", err);
    }
  };
};

export const editPurchaseRequest = (formData, purchaseRequestId, history) => {
  return async dispatch => {
    try {
      const { data } = await axios({
        method: "Put",
        url: `http://ec2-13-233-141-195.ap-south-1.compute.amazonaws.com:3333/purchaseRequest/${purchaseRequestId}`,
        data: formData
      });
      alert("Updated Successfully");
      history.push("/purchaseRequest");
    } catch (err) {
      console.log("Error in purchaseRequest", err);
    }
  };
};

export const warehouseReceiptVpucher = formvalues => {
  return async dispatch => {
    try {
    } catch (err) {
      dispatch();
      console.log("Error in userLogin Action", err.message);
    }
  };
};
