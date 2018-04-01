import React, { Component } from 'react';
import './JobList.css';
import Table from './Table';



class JobList extends Component {

    constructor(props){
        super(props);
        this.props = props;
    }

  render() {
    return (
      <div className="JobList">
        <Table dataColumns={this.props.JobCloumns} dataRows={this.props.JobList} filterChange={this.props.filterChange} sortColumn={this.props.sortColumn}></Table>
       {/* {this.props.JobList &&
        this.props.JobList.map( job => <div key={job['job']['jobId']}>{job['job']['jobId']} </div>)
       } */}
      </div>
    );
  }
}

export default JobList;
