import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Home from 'material-ui/svg-icons/action/home';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router';

export default class DrawerNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false,age: ''};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
      	<AppBar
      			title="Movies Hub"
        		style = {{backgroundColor: '#e52d27' }}
            titleStyle= {{fontSize: 20}}
        		iconClassNameRight="muidocs-icon-navigation-expand-more"
            iconStyleRight={{fontSize: 12, color: '#FFFFFF', marginTop: 25, paddingRight: 5}}
        		onLeftIconButtonTouchTap={this.handleToggle}

  	  	  />

        <Drawer
          docked={false}
          autoWidth={true}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >

          <div>
            <img src={require('./img/nav_drawer.png')}  width='260' height='150'/>
          </div>
  
          <Link to="/"  style={{textDecoration: 'none'}}>
            <MenuItem  leftIcon={<Home />}>Home</MenuItem>
          </Link>
        </Drawer>
      </div>
    );
  };

  
} ;