import React, { Component } from 'react';

class THead extends Component {

    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            filters : {}
        }
    }
    
    generateFilterInput = (column) => {

        switch (column.filter) {
            case 'text' :
                return(
                    <td key={column.order} ><input data-order={column.order} data-name={column.name} data-type="text" onChange={this.handleChange} /></td>
                );
            case 'numeric' :
                return(
                    <td key={column.order} ><input data-order={column.order} data-name={column.name} data-type="numeric" onChange={this.handleChange} /></td>
                );
            default :
            return(
               <td key={column.order}></td>
            );
        }

    }

    handleChange = (event)=>{
        this.props.filterChange(event);
    }

    handleSortClick = (event) => {
        this.props.sortColumn(event);
    }

    render() {
        return (
        <thead>
            <tr>
            {this.props.data && this.props.data.map( column =>  <td key={column.order} data-name={column.name} onClick={this.handleSortClick}>{column.UiName}</td>)}
            </tr>
            <tr>
            {this.props.data && this.props.data.map( column =>   this.generateFilterInput(column))}
            </tr>
        </thead>
        );
    }
}

export default THead;
