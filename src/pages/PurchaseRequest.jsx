import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {OutTable , ExcelRenderer} from 'react-excel-renderer'
import MaterialSystemDropdown from '../components/MaterialSystemDropdown'

const PurchaseRequest = () => {
    const [rows, setRows] = useState([])
    const [cols, setCols] = useState([]) 
    

    const fileHandler = (e) => {
        let fileObj = e.target.files[0]
        ExcelRenderer(fileObj, (err, res) => {
            if (err) {
                console.log(err)
            }
            else {
                setCols(res.cols)
                setRows(res.rows)
            }
        })
    }
    return (
        <div class="container mt-5">
            <div class="row mt-5">
                <div class="col-md-3">
                    <MaterialSystemDropdown />
                </div>
                <div class="col-md-9">
                    <h1 className="display-4 text-center">PURCHASE ORDER</h1>
                    <form>
                        <div class="form-group form-inline mt-3">
                            <div class="col-sm-3">
                                <label for="projectCode">Project Code</label>
                            </div>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" style={{ width: "100%" }}
                                    id="projectCode"  />
                            </div>
                        </div>
                        <div class="form-group form-inline mt-4">
                            <div class="col-sm-3">
                                <label for="warehouseName">Warehouse Name</label>
                            </div>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" style={{ width: "100%" }} id="warehouseName" />
                            </div>
                        </div>
                        <div class="form-group form-inline mt-4">
                            <div class="col-sm-3">
                                <label for="PurchaseCategory">Purchase Category</label>
                            </div>
                            <div class="col-sm-9">
                                <div class="row">
                                    <div class="col-sm-5 form-inline m-0 ">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="ProjectSite" value="option1" />
                                            <label class="form-check-label" for="ProjectSite">Project Site</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input ml-4" type="checkbox" id="HeadOffice" value="option1" />
                                            <label class="form-check-label" for="HeadOffice">Head Office</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-7  form-inline m-0 p-0">
                                        <div class="col-sm-5">
                                            <label for="Currency">Currency</label>
                                        </div>
                                        <div class='col-sm-7'>
                                            <input type="text" id="Currency" class="form-control" style={{ width: "100%" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group form-inline mt-4">
                            <div class="col-sm-3">
                                <label for="BilltoCustomer">Bill to Customer</label>
                            </div>
                            <div class="col-sm-9">
                                <div class="row">
                                    <div class="col-sm-5 form-inline m-0 ">
                                            <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="Yes" value="option1" />
                                            <label class="form-check-label" for="Yes">Yes</label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input ml-5" type="checkbox" id="No" value="option1" />
                                                <label class="form-check-label" for="No">No</label>
                                            </div>
                                    </div>
                                    <div class="col-sm-7  form-inline m-0 p-0">
                                        <div class="col-sm-5">
                                            <label for="RequiredOn">Required On:</label>
                                        </div>
                                        <div class='col-sm-7'>
                                            <input type="date" id="RequiredOn" class="form-control" style={{ width: "100%" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group form-inline mt-4">
                            <div class="col-sm-3">
                                <label for="">Deliver At:</label>
                            </div>
                            <div class="col-sm-9 form-inline">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="OwnPermises" value="option1" />
                                    <label class="form-check-label" for="OwnPermises">Own Permises</label>
                                </div>
                                <div class="form-check form-check-inline ml-5 ">
                                    <input class="form-check-input" type="checkbox" id="CentralWH" value="option1" />
                                    <label class="form-check-label" for="CentralWH">Central WH</label>
                                </div>
                                <div class="form-check form-check-inline ml-5">
                                    <input class="form-check-input" type="checkbox" id="CustomerWH" value="option1" />
                                    <label class="form-check-label" for="CustomerWH">Customer WH</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group form-inline mt-4">
                            <div class="col-sm-3">
                                <label for="">PR Type</label>
                            </div>
                            <div class="col-sm-9 form-inline">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="Project" value="option1" />
                                    <label class="form-check-label" for="Project">Project</label>
                                </div>
                                <div class="form-check form-check-inline ml-5">
                                    <input class="form-check-input" type="checkbox" id="Revenue" value="option1" />
                                    <label class="form-check-label" for="Revenue">Revenue</label>
                                </div>
                                <div class="form-check form-check-inline ml-5">
                                    <input class="form-check-input" type="checkbox" id="Capital" value="option1" />
                                    <label class="form-check-label" for="Capital">Capital</label>
                                </div>
                                <div class="form-check form-check-inline ml-5">
                                    <input class="form-check-input" type="checkbox" id="Machine" value="option1" />
                                    <label class="form-check-label" for="Machine">Machine</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group form-inline mt-4">
                            <div class="col-sm-3">
                                <label for="Remarks">Remarks</label>
                            </div>
                            <div class="col-sm-9">
                                <textarea class="form-control" style={{ width: "100%" }} id="Remarks" rows="3"></textarea>
                            </div>
                        </div>
                        <div>
                            <h2>Add Materials</h2>
                            <input type="file" onChange={fileHandler} />
                        </div>
                        <div className="mt-2">
                            {
                                rows.length !== 0 && <table class="table border">
                                    <thead>
                                        {rows.map(data =>
                                            <>
                                                <tr ></tr>
                                                {data.map(nestedData =>
                                                    <td>{nestedData}</td>
                                                )}
                                            </>
                                        )}
                                    </thead>
                                </table>
                            }
                        </div>
                        <button type="submit" className="btn btn-info btn-block">Submit</button>
                    </form>
                   
                </div>
            </div>
        </div>
    )
}

export default PurchaseRequest
