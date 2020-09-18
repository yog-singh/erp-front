import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { allPurchaseRequest } from "../../redux/actions/materialSystemAction";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import UpdateIcon from "@material-ui/icons/Update";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { link } from "react-router-dom";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import "./Table.css";

const Table = props => {
  const dispatch = useDispatch();
  const store = useSelector(store => store);
  const [lists, setLists] = useState([]);
  useEffect(() => {
    dispatch(allPurchaseRequest());
  }, []);

  useEffect(() => {
    if (store.materialSystemRoot.AllPurchaseRequest.length !== 0) {
      setLists(store.materialSystemRoot.AllPurchaseRequest);
    }
  }, [store.materialSystemRoot.AllPurchaseRequest]);
  const userMatch = id => {
    return (
      <>
        <span>
          <Link to={`/purchaserequest/edit/${id}`}>
            <EditIcon color="action" />
          </Link>
        </span>
        <span>
          <DeleteForeverIcon color="secondary" />
        </span>
      </>
    );
  };
  const Status = {
    approved: {
      class: "approved",
      icons: (
        <div className="">
          <h5>Approved</h5>
        </div>
      )
    },
    not_reviewed: {
      class: "neutral",
      icons: (
        <div className="">
          <h5>Not Reviewed</h5>
        </div>
      )
    },
    reject: {
      class: "reject",
      icons: (
        <div className="">
          <h5>Rejected</h5>
        </div>
      )
    }
  };

  const renderList = () => {
    const tableRow = lists.map(list => {
      const { Status } = list;
      return (
        <>
          <tr>
            <td>
              <ListAltIcon color="primary" /> {list.ProjectCodeName}
            </td>
            <td>
              <PermIdentityIcon color="primary" />
              {list.created_by.first_name}
            </td>
            <td>
              <UpdateIcon color="primary" /> {list.created_at}
            </td>
            <td>
              <span>
                <Link to={`/purchaserequest/edit/${list.id}`}>
                  <VisibilityIcon color="primary" />
                </Link>
              </span>
              {list.created_by.id === store.userRoot.user.id
                ? userMatch(list.id)
                : ""}
            </td>
            <td> <div className="">
              <h5>{Status}</h5>
            </div></td>
          </tr>
        </>
      );
    });
    return tableRow;
  };

  return (
    <div className="table-container">
      <h2 className="text-center">Purchase Request</h2>
      <h2 className="text-center">{props.heading}</h2>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>ProjectCode / Name</th>
              <th>Request by</th>
              <th>Date</th>
              <th>Operations</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{renderList()}</tbody>
        </table>
      </div>
      <div className="flexBox">
        <Link to="/purchaserequest/create">
          <button>
            <AddCircleIcon /> Add
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Table;
