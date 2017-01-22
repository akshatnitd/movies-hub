import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
require('./main.css');
require('animate.css/animate.min.css');

export default class Main extends React.Component {

   constructor(props) {
      super(props);
      if (window.matchMedia('(display-mode: standalone)').matches)
        mixpanel.track("APP_LAUNCH",{"launch_mode":"homescreen"});
      else
        mixpanel.track("APP_LAUNCH",{"launch_mode":"browser"});
    }

  render() {
    return (
      <div className='main-container'>
        <ReactCSSTransitionGroup
          transitionName="appear"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
            {this.props.children}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}