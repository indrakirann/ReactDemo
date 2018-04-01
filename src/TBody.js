import React, { Component } from 'react';

class TBody extends Component {

   
    constructor(props){
        super(props);
        this.props = props;
    }

    generateRowOfJobList = (data) =>{
        var jobData = data.job;
        var counts = data.counts;
        var jobMembers =data.jobmembers;
        var jobOwnerId;
        var jobMemberIds = [];
        for(let member in jobMembers){
            if(parseInt(data.jobmembers[member].jobowner) === 1){
                jobOwnerId = member;
            }
            jobMemberIds.push(member);
        }
        return(
            <tr key={jobData.jobId}>
                <td>link</td>
                <td>{jobMembers[jobOwnerId].fName}</td>
                <td>{jobData.name}</td>
                <td>{jobData.joblocation}</td>
                <td>{jobData.jobcode}</td>
                <td>{jobData.clientName}</td>
                <td>{jobData.jobStatus}</td>
                <td>{jobData.applicants}</td>
                <td>{jobData.date_entered}</td>  
                <td>edit</td>
            </tr>
        );

    }
    
  render() {
    return (
    <tbody>
           {this.props.data && this.props.data.map( row =>   this.generateRowOfJobList(row) )}
    </tbody>
    );
  }
}

export default TBody;
