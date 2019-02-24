import React from 'react';
import PropTypes from 'prop-types';
import {default as Loader} from 'react-loader';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import { DashboardTable } from '../components/Table';
import { LoadButton } from '../components/Button';
import { Heading } from '../components/Heading';
import { QueryMessages } from '../components/QueryMessages';

import { updateDashboard } from '../actions';

export class Dashboard extends React.Component {

  state = { showLoader: false}

  handleClick = async () => {
    this.enableLoader(true);
    const page = Number(this.props.page) || 0;
    await updateDashboard(this.props.dispatch, page + 1 )
    this.enableLoader(false);
  };
   

  enableLoader = (flag) => {
    this.setState({ showLoader: flag })
  };

  render() {
    return(
        <React.Fragment>
         <Loader loaded={!this.state.showLoader}>
          { this.props.data ? 
            <div>
              <QueryMessages
                count={this.props.count}
                queryTime={this.props.queryTime}
              />
              <DashboardTable 
                data={this.props.data}
                dispatch={this.props.dispatch}  
                showLoader={this.enableLoader}

              />
              { this.props.showButton && <LoadButton onClick={this.handleClick} /> }
            </div>
            : 
             <Heading onClick={this.handleClick}/>
          }
         </Loader>
        </React.Fragment>
    )
  };
}

const mapStateToProps = state => {
  const data = state.earth_quakes || '';
  const page = state.page || '';
  const showButton = !state.search || '';
  const count = state.count || '';
  const queryTime = state.query_time || '';
  return { 
    data: data,
    page: page,
    showButton: showButton,
    count: count,
    queryTime: queryTime,
  }
};
export default connect(mapStateToProps)(Dashboard);