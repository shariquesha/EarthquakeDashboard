import React from 'react';
import { Button } from 'reactstrap';

export class LoadButton extends React.Component {
  render() {
    return (
      <div className="container d-flex flex-column">
        <Button 
        color="primary" 
        onClick={this.props.onClick}
        >
        Load More
        </Button>
      </div>
    );
  }
}