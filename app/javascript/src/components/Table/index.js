import React from 'react';
import { Table } from 'reactstrap';
import { Row } from '../../components/Row';
import { DropDown } from '../../components/DropDown';

export class DashboardTable extends React.Component {
  render() {
    return (
      <div className="container">
        <Table striped>
          <thead>
            <tr>
              <th>
                <DropDown 
                  name="MAGNITUDE" 
                  dispatch={this.props.dispatch}
                  showLoader={this.props.showLoader}
                 />
              </th>
              <th>DEPTH</th>
              <th>LATITUDE</th>
              <th>LONGITUDE</th>
              <th>PLACE</th>
              <th>TIME</th>
             {/* <th>MAGNITUDETYPE</th>
                         <th>NST</th>
                         <th>GAP</th>
                         <th>DMIN</th>
                         <th>RMS</th>
                         <th>NET</th>
                         <th>UPDATED</th>
                         <th>HORIZONTALERROR</th>
                         <th>DEPTHERROR</th>
                         <th>MAGERROR</th>
                         <th>MAGNST</th>
                         <th>STATUS</th>
                         <th>LOCATIONSOURCE</th>
                         <th>MAGSOURCE</th>*/}
            </tr>
          </thead>
          <tbody>
              {this.props.data.map( (row,key) => <Row data={row} key={key}/> ) }
          </tbody>
        </Table>
      </div>
    );
  }
}