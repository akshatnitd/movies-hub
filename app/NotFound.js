import React from 'react';

const styles = {
	border: {
		background: '#148d74',
		paddingTop: 250,
		paddingBottom: 250,
		fontFamily: 'Roboto, sans-serif',
		textAlign: 'center',
		
	},

	text: {
		color: '#FFFFFF',
		fontSize: 24
	}
};

export default class NotFound extends React.Component {

	constructor(props, context) {
    super(props, context);
  }

  render() {
    return (    
      
	      <div style={styles.border}>
	      	<img src='img/icon.png' />
	      	
	      	<br />
	      	
	      	<div style={styles.text}>
	      		Error 404! Page not found!
	      	</div>
	 
	      </div>
    );
  }
} 
