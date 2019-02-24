import React from 'react';

export class Row extends React.Component {
  render() {
    return (
          <tr>
          <td>{this.props.data.mag|| 'NA'}</td>
          <td>{this.props.data.depth|| 'NA'}</td>
          <td>{this.props.data.latitude|| 'NA'}</td>
          <td>{this.props.data.longitude|| 'NA'}</td>
          <td>{this.props.data.place|| 'NA'}</td>
          <td>{this.props.data.time|| 'NA'}</td>
         { /*<td>{this.props.data.magType|| 'NA'}</td>
                   <td>{this.props.data.nst|| 'NA'}</td>
                   <td>{this.props.data.gap|| 'NA'}</td>
                   <td>{this.props.data.dmin|| 'NA'}</td>
                   <td>{this.props.data.rms|| 'NA'}</td>
                   <td>{this.props.data.net|| 'NA'}</td>
                   <td>{this.props.data.updated|| 'NA'}</td>
                   <td>{this.props.data.locationSource|| 'NA'}</td>
                   <td>{this.props.data.magSource|| 'NA'}</td>
                   <td>{this.props.data.horizontalError|| 'NA'}</td>
                   <td>{this.props.data.depthError|| 'NA'}</td>
                   <td>{this.props.data.magError|| 'NA'}</td>
                   <td>{this.props.data.magNst|| 'NA'}</td>
                   <td>{this.props.data.status|| 'NA'}</td>*/}
          </tr>
    );
  }
}
