import React from 'react';
import {grey900} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TabsControlled from './Tab';
import DrawerNav from './Drawer';

const muiTheme = getMuiTheme({
  palette: {
    textColor: grey900,
  },
  fontFamily: 'Roboto, sans-serif',

  menuItem: {
    hoverColor: 'rgba(27, 188, 155, 0.1)',
  },
  dialog: {
    bodyColor: 'rgba(0,0,0,1)',
  },
  tabs: {
    textColor: '#FFFFFF'
  }
});

const ThemeColors = {
		colorPrimary: '#1BBC9B',
		colorSecondary: '#F72459',
		primaryDark: '#148D74',
		textColorPrimary: '#212121',
		textColorSecondary: '#757575',
}

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
    mixpanel.track("VIEW_HOME_SCREEN");
  }

  componentDidMount =() => {
    resetUI();
  }


  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }    

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <DrawerNav />
          <TabsControlled />  
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Home;