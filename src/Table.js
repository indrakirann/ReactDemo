import React, { Component } from 'react';
import THead from './THead';
import TBody from './TBody';

class Table extends Component {

  constructor(props){
      super(props);
      this.props = props;
  }

  sortDataWithParam = (data , param) => {
    var ret_data = [];
    for (var row in data) {
      ret_data.push(data[row]);
    }
    ret_data.sort(function(a, b) {
      return a[param] - b[param];
    });
    return ret_data;
  }

  render() {
    return (
      <div className="table">
        <table>
          <THead data={this.sortDataWithParam(this.props.dataColumns , 'order')} filterChange={this.props.filterChange} sortColumn={this.props.sortColumn}></THead>
          <TBody data={this.props.dataRows}></TBody>
        </table>
      </div>
    );
  }
}

export default Table;
