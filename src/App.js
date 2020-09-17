import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { userLoginHelper, userLogout } from "./redux/actions/userAction";
import setAuthToken from "./redux/helper/setAuthToken";
import store from "./redux/store";


import PurchaseRequestForm from "./forms/Material System​/PurchaseRequestForm";
//All Pages
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import PurchaseRequest from "./pages/PurchaseRequest";
import PurchaseOrderFormCreate from "./pages/Material System​ Page/PurchaseOrderFormCreate";
import PurchaseOrderEdit from "./pages/Material System​ Page/PurchaseOrderFromEdit";
import PurchaseRequestFormCreate from "./pages/Material System​ Page/PurchaseRequestFormCreate";
import PurchaseRequestFormEdit from "./pages/Material System​ Page/PurchaseRequestFormEdit";
import PurchaseOrderFormEdit from "./pages/Material System​ Page/PurchaseOrderAmendmentEdit";
import PurchaseOrderAmendmentCreate from "./pages/Material System​ Page/PurchaseOrderAmendmentCreate";
import GoodsReceiptVoucherFormCreate from "./pages/Material System​ Page/GoodsReceiptVoucherFormCreate";
import GoodsReceiptVoucherFormEdit from "./pages/Material System​ Page/GoodsReceiptVoucherFormEdit";
import GoodsInspectionVoucherFormEdit from "./pages/Material System​ Page/GoodsInspectionVoucherFormEdit";
import GoodsInspectionVoucherFormCreate from "./pages/Material System​ Page/GoodsInspectionVoucherFormCreate";
import WarehouseReceiptVoucherformCreate from "./pages/Material System​ Page/WarehouseReceiptVoucherformCreate";
import WarehouseReceiptVoucherformEdit from "./pages/Material System​ Page/WarehouseReceiptVoucherformEdit";
import CurrentForm from "./forms/Material System​/WarehouseReceiptVoucherform";
import Navbar from './components/fixedComponents/navbar'
import Table from './components/materialSystemDisplay/Table'

if (window.localStorage.userJwtToken) {

  setAuthToken(localStorage.userJwtToken);
  const decoded = jwt_decode(localStorage.userJwtToken);
  store.dispatch(userLoginHelper(decoded.user));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(userLogout());
    console.log("logging out")
    window.location.href = "/";
  }
}

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/dashboard" component={Table} />
          <Route exact path="/purchaseRequest" component={PurchaseRequest} />
          <Route
            exact
            path="/purchaserequestform"
            component={PurchaseRequestForm}
          />
          <Route
            exact
            path="/purchaseorder/create"
            component={PurchaseOrderFormCreate}
          />
          <Route
            exact
            path="/purchaserequest/create"
            component={PurchaseRequestFormCreate}
          />
          <Route
            exact
            path="/purchaseorderamendment/create"
            component={PurchaseOrderAmendmentCreate}
          />
          <Route
            exact
            path="/goodsreceiptvoucherform/create"
            component={GoodsReceiptVoucherFormCreate}
          />
          <Route
            exact
            path="/goodsinspectionvoucherform/create"
            component={GoodsInspectionVoucherFormCreate}
          />
          <Route
            exact
            path="/warehousereceiptvoucherform/create"
            component={WarehouseReceiptVoucherformCreate}
          />

          <Route exact path="/current" component={CurrentForm} />
          {/* use /:Id for fetch the data */}
          <Route
            exact
            path="/warehousereceiptvoucherform/edit"
            component={WarehouseReceiptVoucherformEdit}
          />
          <Route
            exact
            path="/goodsinspectionvoucherform/edit"
            component={GoodsInspectionVoucherFormEdit}
          />
          <Route
            exact
            path="/purchaseorder/edit"
            component={PurchaseOrderEdit}
          />
          <Route
            exact
            path="/goodsreceiptvoucherform/edit"
            component={GoodsReceiptVoucherFormEdit}
          />
          <Route
            exact
            path="/purchaseorderamendment/edit"
            component={PurchaseOrderFormEdit}
          />
          <Route
            exact
            path="/purchaserequest/edit/:purchaseRequestId"
            component={PurchaseRequestFormEdit}
          />
          {/* /purchaseorder/edit is temporary route */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
