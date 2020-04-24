import React from 'react';
//import { CsvToHtmlTable } from 'react-csv-to-table';

const sampleData = `
Model,mpg,cyl,disp
Datsun 710,22.8,4
Fiat 128,32.4,4
`;

export default class Table extends React.Component {

constructor(props){
    super(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
    }


    getKeys = function(){
        return Object.keys(this.props.data[0]);
        }


    getHeader = function(){
        var keys = this.getKeys();
        return keys.map((key, index)=>{
        return <th key={key}>{key.toUpperCase()}</th>
        })
        }


    getRowsData = function(){
        var items = this.props.data;
        var keys = this.getKeys();
        return items.map((row, index)=>{
        return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
        })
        }

        render() {
            return (
            <div>
            <table>
            <thead>
            <tr>{this.getHeader()}</tr>
            </thead>
            <tbody>
            {this.getRowsData()}
            </tbody>
            </table>
            </div>
            
            );
        }
    }

const RenderRow = (props) =>{
            return props.keys.map((key, index)=>{
            return <td key={props.data[key]}>{props.data[key]}</td>
            })
           }
/*function PricingSheets() {
  return <CsvToHtmlTable
  style={tableStyles}
  data={sampleData}
  csvDelimiter=","
  tableClassName="table table-striped table-hover"
/>}

export default PricingSheets;*/