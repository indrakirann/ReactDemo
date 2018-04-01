import React, { Component } from 'react';
import JobList from './JobList';
import {JobsData} from './JobsData';

class Jobs extends Component {

    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            JobColumnsData : {},
            JobsArray : [],
            JobListArray : [],
            data : null
        }
    }

    componentDidMount() {
        //get('http://localhost/nmsapp/applicantz/app/control.php' , 'getAllUserJobsDemo' , {});
        const data = JobsData
        let dataVal = data['dataVal'];
        var JobList = [];
        let JobColumnsData = this.generateColumnData();
        let filter_result = Array(JobColumnsData.length).fill(true);
        for (var jobId in dataVal) {
            var data_row = dataVal[jobId]; 
            data_row['filter'] = filter_result;
            JobList.push(data_row);
        }

        this.setState(
            {
                JobColumnsData : JobColumnsData,                
                data : data,
                JobsArray : JobList,
                JobListArray : JobList
            }
        )
     }

     generateColumnData = () => {
         var data = {};
         data['link'] = {name : 'links',  filter : null , sort : 0 , order : 0 , UiName : '' }
         data['owner'] = {name : 'owner', filter : 'text' , sort : 1 ,order : 1 ,  UiName : 'Owner' }
         data['jobTitle'] = {name : 'jobTitle', filter : 'text' , sort : 1 , order :2 , UiName : 'Job Title' }
         data['location'] = {name : 'location', filter : 'text' , sort : 1 , order : 3 , UiName : 'Location' }
         data['jobCode'] = {name : 'jobCode', filter : 'text' , sort : 1 , order : 4 , UiName : 'Job Code' }
         data['client'] = {name : 'client',  filter : 'text' , sort : 1 , order :5 , UiName : 'Client' }
         data['status'] = {name : 'status',filter : 'dropDown' , sort : 1 , order : 6 , UiName : 'Status' }
         data['applicantsCount'] = {name : 'applicantsCount',filter : 'numeric' , sort : -1 , order : 7 , UiName : 'Applicants' }
         data['dateCreated'] = {name : 'dateCreated',filter : null , sort : -1 , order : 8 , UiName : 'Created' }
         data['edit'] = {name : 'edit',filter : null , sort : 0 , order : 9 , UiName : ' ' }
        return data;
     }

     filterChange = (e) => {
         var value = e.target.value;
         var filter_name = e.target.getAttribute('data-name');
         var filter_type = e.target.getAttribute('data-type');
         var filter_order = e.target.getAttribute('data-order');
        //  for (var jobId in dataVal) {
        //     JobList.push(dataVal[jobId]);
        // }
        this.filterData(filter_name , filter_type , filter_order , value , this.state.JobsArray );
     }



     filterData = (filter_name , filter_type ,filter_order , value , data) => {
        value = value.toLowerCase();
         switch (filter_name) {
             case 'jobTitle' :
             var data_filter_applied = data.filter(job => {
                job['filter'][filter_order] = job['job']['name'].toLowerCase().indexOf(value) !== -1 ;   
                return  !job['filter'].includes(false);
             });
             break;
             case 'location' :
             var data_filter_applied = data.filter(job => {
                job['filter'][filter_order] = job['job']['joblocation'].toLowerCase().indexOf(value) !== -1 ;   
                return  !job['filter'].includes(false);
             });
             break;
             case 'jobCode' :
             var data_filter_applied = data.filter(job => {
                job['filter'][filter_order] = job['job']['jobcode'].toLowerCase().indexOf(value) !== -1 ;   
                return  !job['filter'].includes(false);
             });
             
             break;
             case 'client' :
             var data_filter_applied = data.filter(job => {
                job['filter'][filter_order] = job['job']['clientName'].toLowerCase().indexOf(value) !== -1 ;   
                return  !job['filter'].includes(false);
             });
             break;
             case 'applicantsCount' :
             var data_filter_applied = data.filter(job => {
                job['filter'][filter_order] = job['job']['applicants'].toLowerCase().indexOf(value) !== -1 ;   
                return  !job['filter'].includes(false);
             });
             break;
             case 'dateCreated' :
             var data_filter_applied = data.filter(job => {
                job['filter'][filter_order] = job['job']['date_entered'].toLowerCase().indexOf(value) !== -1 ;   
                return  !job['filter'].includes(false);
             });
             break;
         }
         this.setState({
            JobListArray : data_filter_applied
         })
     }

     sortColum = (e) => {

        var data_filter_applied = this.state.JobListArray;
        var columnData = this.state.JobColumnsData;
        var filter_name = e.target.getAttribute('data-name');

        console.log(filter_name);
        switch (filter_name) {
            case 'jobTitle' :
            data_filter_applied.sort( function( a , b){
                    if( a['job']['name'].toLowerCase() < b['job']['name'].toLowerCase()) return columnData[filter_name]['sort'] === 1 ? -1 : 1 ;
                    if( a['job']['name'].toLowerCase() > b['job']['name'].toLowerCase()) return columnData[filter_name]['sort'] === 1 ? 1 : -1 ;
                    return 0;
            });
            columnData[filter_name]['sort'] = columnData[filter_name]['sort'] === 1 ? -1 : 1 ;
            break;
            case 'location' :
            data_filter_applied.sort( function( a , b){
                    if( a['job']['joblocation'].toLowerCase() < b['job']['joblocation'].toLowerCase()) return columnData[filter_name]['sort'] === 1 ? -1 : 1 ;
                    if( a['job']['joblocation'].toLowerCase() > b['job']['joblocation'].toLowerCase()) return columnData[filter_name]['sort'] === 1 ? 1 : -1 ;
                    return 0;
            });
            columnData[filter_name]['sort'] = columnData[filter_name]['sort'] === 1 ? -1 : 1 ;
            break;
            case 'jobCode' :
            data_filter_applied.sort( function( a , b){
                    if( a['job']['jobcode'].toLowerCase() < b['job']['jobcode'].toLowerCase()) return columnData[filter_name]['sort'] === 1 ? -1 : 1 ;
                    if( a['job']['jobcode'].toLowerCase() > b['job']['jobcode'].toLowerCase()) return columnData[filter_name]['sort'] === 1 ? 1 : -1 ;
                    return 0;
            });
            columnData[filter_name]['sort'] = columnData[filter_name]['sort'] === 1 ? -1 : 1 ;
            break;
            case 'client' :
            data_filter_applied.sort( function( a , b){
                    if( a['job']['clientName'].toLowerCase() < b['job']['clientName'].toLowerCase()) return columnData[filter_name]['sort'] === 1 ? -1 : 1 ;
                    if( a['job']['clientName'].toLowerCase() > b['job']['clientName'].toLowerCase()) return columnData[filter_name]['sort'] === 1 ? 1 : -1 ;
                    return 0;
            });
            columnData[filter_name]['sort'] = columnData[filter_name]['sort'] === 1 ? -1 : 1 ;
            break;
            case 'applicantsCount' :
            data_filter_applied.sort( function( a , b){
                    if( parseInt(a['job']['applicants'] , 10) < parseInt(b['job']['applicants'], 10)) return columnData[filter_name]['sort'] === 1 ? -1 : 1 ;
                    if( parseInt(a['job']['applicants'] , 10) > parseInt(b['job']['applicants'], 10) ) return columnData[filter_name]['sort'] === 1 ? 1 : -1 ;
                    return 0;
            });
            columnData[filter_name]['sort'] = columnData[filter_name]['sort'] === 1 ? -1 : 1 ;
            break;
            case 'dateCreated' :
            data_filter_applied.sort( function( a , b){
                    if( a['job']['date_entered'].toLowerCase() < b['job']['date_entered'].toLowerCase()) return columnData[filter_name]['sort'] === 1 ? -1 : 1 ;
                    if( a['job']['date_entered'].toLowerCase() > b['job']['date_entered'].toLowerCase()) return columnData[filter_name]['sort'] === 1 ? 1 : -1 ;
                    return 0;
            });
            columnData[filter_name]['sort'] = columnData[filter_name]['sort'] === 1 ? -1 : 1 ;
            break;
           
        }
        this.setState({
            JobListArray : data_filter_applied
         })
     }

    
  render() {
    return (
    <div className="Container">
        <div className="Header">
            Header
        </div>
        <div>
            <div className="Jobs-info">
                Total Jobs 
            </div>
            <div className="createJobIcon">
                CreateJOb
            </div>    
        </div>
        <div>
            <JobList className="JobsList" sortColumn={this.sortColum} filterChange={this.filterChange} JobList = {this.state.JobListArray} JobCloumns = {this.state.JobColumnsData}>
             
            </JobList>    
        </div>
    </div>
    );
  }
}

export default Jobs;
