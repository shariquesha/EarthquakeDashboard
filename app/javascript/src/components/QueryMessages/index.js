import React from 'react';
import { Alert } from 'reactstrap';

export const QueryMessages = (props) => {
  return (
    <div className="container d-flex flex-row justify-content-center bd-highlight mb-3">
      <Alert color="info">
        Database Query Time: <h3>{props.queryTime || 0}</h3> msecs
      </Alert>
      <Alert color="light">
        Total record found: <h1>{props.count || 0}</h1>
      </Alert>
    </div>
  );
};