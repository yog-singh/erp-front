import React from "react";
import { ExcelRenderer, OutTable } from "react-excel-renderer";
import { Input, InputLabel } from "@material-ui/core";

class Excel extends React.Component {
  state = { cols: "", rows: "" };
  fileHandler = event => {
    let fileObj = event.target.files[0];
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        console.log(resp.rows);
        this.props.excelData(resp.rows);
        this.setState({
          cols: resp.cols,
          rows: resp.rows
        });
      }
    });
    ExcelRenderer(fileObj);
  };
  render() {
    return (
      <>
        <div>
          <InputLabel htmlFor="myfile">Select a file:</InputLabel>
          <Input
            className={this.props.error ? "excelError" : ""}
            onChange={e => this.fileHandler(e)}
            type="file"
            id="myfile"
            name="myfile"
          ></Input>
        </div>
        {this.state.rows || this.state.columns ? (
          <OutTable
            data={this.state.rows}
            columns={this.state.cols}
            tableClassName="ExcelTable2007"
            tableHeaderRowClass="heading"
          />
        ) : (
          ""
        )}
      </>
    );
  }
}
export default Excel;
