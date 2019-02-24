import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { search } from '../../actions';

export class DropDown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  handleClick = async (e) => {
    this.props.showLoader(true);
    await search(this.props.dispatch, e.currentTarget.textContent)
    this.props.showLoader(false);
  }

  render() {     
    switch(this.props.name){
      case 'MAGNITUDE':
        {
          return(
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              {this.props.name}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Select magnitude range</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={this.handleClick} >0</DropdownItem>
              <DropdownItem onClick={this.handleClick} >1</DropdownItem>
              <DropdownItem onClick={this.handleClick} >2</DropdownItem>
              <DropdownItem onClick={this.handleClick} >3</DropdownItem>
              <DropdownItem onClick={this.handleClick} >4</DropdownItem>
              <DropdownItem onClick={this.handleClick} >5</DropdownItem>
              <DropdownItem onClick={this.handleClick} >6</DropdownItem>
              <DropdownItem onClick={this.handleClick} >7</DropdownItem>
              <DropdownItem onClick={this.handleClick} >8</DropdownItem>
            </DropdownMenu>
          </Dropdown>)
        }
        break;
      case y:
        {
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              {this.props.name}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem>Some Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Foo Action</DropdownItem>
              <DropdownItem>Bar Action</DropdownItem>
              <DropdownItem>Quo Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        }
        break;
      default:
        // code block
    }
  }
}