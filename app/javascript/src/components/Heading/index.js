import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

export const Heading = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple dashboard for displaying earthqauke data for last month.</p>
        <hr className="my-2" />
        <ul>
          <li>This dashboard is fetching information from a database which contains around 8K values
           taken from earthquake.usgs.gov.</li>
          <li>It displays 25 records at once, you can scroll down and display as many value as want.</li>
          <li>You can search values accordin to latitude, lognitude, location etc.</li>
          <li>This dashboard also displays time taken to fetch the records from database.</li>
        </ul>
        <p className="lead">
          <Button 
          color="primary"
          onClick={props.onClick}
          >Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};
